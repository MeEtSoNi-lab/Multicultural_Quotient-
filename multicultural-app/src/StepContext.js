import React,{use, useState} from 'react'
import App from './App'
import { useNavigate } from 'react-router-dom';
export const multiStepContext = React.createContext();
function StepContext() {


  const [calculatedScore,setcalculatedScore]=useState(null);
  const [showSurvey, setShowSurvey] = useState(false);
  const[currentScore,setcurrentScore]=useState(0);
  const [finalScore,setfinalScore]=useState(0);

  
  //sectionone survey states
  const [bornData, setBornData] = useState([]);
  const [countryData, setcountryData] = useState([]);
  const [countryResidence,setcountryResidence] =useState([]);

  const [selectedbornData,setselectedbornData] =useState('');
  const [selectedcountryData,setselectedcountryData] =useState('');
  const [selectedcountryResidence,setselectedcountryResidence] =useState('');

  const [selectedbornDataValue,setselectedbornDataValue]=useState('');
  const [selectedbornDataScore,setselectedbornDataScore]=useState('');

  const [selectedcountryDataValue,setselectedcountryDataValue]=useState('');
  const [selectedcountryDataScore,setselectedcountryDataScore]=useState(0);

  const [selectedcountryResidenceValue,setselectedcountryResidenceValue ] =useState('');
  const [selectedcountryResidenceScore,setselectedcountryResidenceScore ] =useState('');

  
  // section two survey states

    // states for fetching the API
    const [yearsofrecidence,setyearsofrecidence]=useState([]);
    const [numbercountries,setnumbercountries]=useState([]);
    const [traveledcountries,settraveledcountries]=useState([]);
    const [languageconverse,setlanguageconverse]=useState([]);
    const [culturalfood,setculturalfood]=useState([]);
    const [contentengagement,setcontentengagement]=useState([]);

    // display and selected data from dropdown
    const [selectedyearsofrecidence,setselectedyearsofrecidence]=useState('');
    const [selectednumbercountries,setselectednumbercountries]=useState('');
    const [selectedtraveledcountries,setselectedtraveledcountries]=useState('');
    const [selectedlanguageconverse,setselectedlanguageconverse]=useState('');
    const [selectedculturalfood,setselectedculturalfood]=useState('');
    const [selectedcontentengagement,setselectedcontentengagement]=useState('');

    // states to store the score 
    const[selectedyearsofrecidenceScore,setselectedyearsofrecidenceScore] = useState(0);
    const[selectednumbercountriesScore,setselectednumbercountriesScore]=useState(0);
    const[selectedtraveledcountriesScore,setselectedtraveledcountriesScore]=useState(0);
    const[selectedlanguageconverseScore,setselectedlanguageconverseScore]=useState(0);
    const[selectedculturalfoodScore,setselectedculturalfoodScore]=useState(0);
    const[selectedcontentengagementScore,setselectedcontentengagementScore]=useState(0);
    const [previousCountryScore, setPreviousCountryScore] = useState(0);

  // section three survey states 

    // states for fetching the API
    const [multiculturalismbenefits, setmulticulturalismbenefits] = useState([]);
    const [disagreestatements,setdisagreestatements]=useState([]);
    const [negativestatementscale,setnegativestatementscale]=useState([]);
    const [interactionculturalgroups,setinteractionculturalgroups]=useState([]);

    // display and selected data from dropdown
    const [selectedmulticulturalismbenefits,setselectedmulticulturalismbenefits]=useState('')
    const [selecteddisagreestatements,setselecteddisagreestatements]=useState('')
    const [selectednegativestatementscale,setselectednegativestatementscale]=useState('')
    const [selectedinteractionculturalgroups,setselectedinteractionculturalgroups]=useState('')

    // states to store the score
    const [selectedmulticulturalismbenefitsScore,setselectedmulticulturalismbenefitsScore]=useState('')
    const [selecteddisagreestatementsScore,setselecteddisagreestatementsScore]=useState('')
    const [selectednegativestatementscaleScore,setselectednegativestatementscaleScore]=useState('')
    const [selectedinteractionculturalgroupsScore,setselectedinteractionculturalgroupsScore]=useState('')




  //methode to set current score

    const updatecurrentScore=(newscore)=>{
      setcurrentScore((prevscore)=>prevscore+parseInt(newscore));
      console.log(currentScore)
    }

  // method to calculate final score

  const calculationofScore=()=>{
    const safeParse = (value) => parseInt(value) || 0;
    const finalcalculatedScore=    safeParse(selectedbornDataScore) +
    safeParse(selectedcountryDataScore) +
    safeParse(selectedcountryResidenceScore) +
    safeParse(selectedyearsofrecidenceScore) +
    safeParse(selectednumbercountriesScore) +
    safeParse(selectedtraveledcountriesScore) +
    safeParse(selectedlanguageconverseScore) +
    safeParse(selectedculturalfoodScore) +
    safeParse(selectedcontentengagementScore) +
    safeParse(previousCountryScore) +
    safeParse(selectedmulticulturalismbenefitsScore) +
    safeParse(selecteddisagreestatementsScore) +
    safeParse(selectednegativestatementscaleScore) +
    safeParse(selectedinteractionculturalgroupsScore);
  console.log("Final score is :", parseInt(selectedbornDataScore) +parseInt(selectedcountryDataScore) )

    setcalculatedScore(finalcalculatedScore);

    // Navigate to the home route and scroll to the score section
   
    // Scroll to the score section after navigation
    setTimeout(() => {
      const scoreSection = document.getElementById('score');
      if (scoreSection) {
        scoreSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Slight delay to allow for page load
}

  //methodes to set values of section one form 
  const handlebornData = (e) => {
    const [generation, score] = e.target.value.split("|");
    setselectedbornDataValue(generation);
    setselectedbornDataScore(score);
    updatecurrentScore(score);
  };

  // this calculateCountryScore methode is used by handlecountryData method and handleResidence method 
  const calculateCountryScore = (data)=>{
    const {Individualism,Indulgence,PowerDistance,UncertaintyAvoidance} =data;
    let score=0;
    score += parseInt(Individualism) > 70 ? 10 : 0
    score += parseInt(Indulgence) < 40 ? -10 : 0
    score += parseInt(PowerDistance) < 40 ? 10 : 0
    score += parseInt(UncertaintyAvoidance) > 48 ? 10 : 0
    score += 5 // All rest

    return score;
  }

  const handlecountryData = (e) => {
   
    const selectedData=JSON.parse(e.target.value);
    console.log(selectedData)
    const { name, Individualism: origIndividualism, Indulgence: origIndulgence, PowerDistance: origPowerDistance, UncertaintyAvoidance: origUncertaintyAvoidance } = selectedData;

      const countryScore= calculateCountryScore(selectedData);
  
      setselectedcountryDataScore(countryScore);
      setselectedcountryDataValue(name);
      updatecurrentScore(countryScore);
      
  };


  const handlecountryResidence = (e) => {
      const selectedData=JSON.parse(e.target.value);
      console.log(selectedData)
      const { name, Individualism: origIndividualism, Indulgence: origIndulgence, PowerDistance: origPowerDistance, UncertaintyAvoidance: origUncertaintyAvoidance } = selectedData;
      const countryResidenceScore =calculateCountryScore(selectedData)
      setselectedcountryResidenceScore(countryResidenceScore);
      setselectedcountryResidenceValue(name);
      updatecurrentScore(countryResidenceScore);

  };



  //methodes to set the values for second section form

  const handleyearsofrecidence=(e)=>{
    console.log(e.target.value.split("|"))
    const [years, score] = e.target.value.split("|");
    setselectedyearsofrecidence(years);
    setselectedyearsofrecidenceScore(score);
    console.log("selected years is :" , years)
    console.log("Accsiated score is  is :" , score)

  }

  const handlenumbercountries=(e)=>{
    const [numbercountries,score]=e.target.value.split("|");
    setselectednumbercountries(numbercountries);
    setselectednumbercountriesScore(score)
    console.log("Selected number of countries :" , numbercountries);
    console.log("Selected numbercountriesscore is :" , score);

  }

  const handletraveledcountries=(e)=>{
    const [traveledcountries, score]=e.target.value.split("|");
      setselectedtraveledcountries(traveledcountries);
      setselectedtraveledcountriesScore(score)
      console.log("Selected travelled country is :" , traveledcountries)
      console.log("Associated score with traveledcountries is:" , score)

  }

  const handlelanguageconverse=(e)=>{
    const[languageconverse,score]=e.target.value.split('|');
    setselectedlanguageconverse(languageconverse);
    setselectedlanguageconverseScore(score);  
    console.log("Selected language converse is:" , languageconverse);
    console.log("Associated score with language converse is :" , score);
  }

  const handleculturalfood =(e)=>{
    const[culturalfood,score]=e.target.value.split('|');
    setselectedculturalfood(culturalfood);
    setselectedculturalfoodScore(score);
    console.log('Selected cultural food is :' , culturalfood);
    console.log("Associated score with language converse is :",score)
  }

  const handlecontentengagement =(e)=>{
    const[contentengagement,score]=e.target.value.split('|');
    setselectedcontentengagement(contentengagement);
    setselectedcontentengagementScore(score);
    console.log("Selected contentengagement is :",contentengagement)
    console.log("Associated contentengagement score is :", score)
  }

// methodes to set values for section three form
  const handlemulticulturalismbenefits =(e)=>{
    const [multiculturalismbenefits,score]=e.target.value.split('|')
    setselectedmulticulturalismbenefits(multiculturalismbenefits)
    setselectedmulticulturalismbenefitsScore(score)
    console.log("Selected multiculturalismbenefits is :",multiculturalismbenefits)
    console.log("Associated multiculturalismbenefits score is : ", score)
  }

  const handledisagreestatements=(e)=>{
    const [disagreestatements,score]=e.target.value.split('|')
    setselecteddisagreestatements(disagreestatements)
    setselecteddisagreestatementsScore(score)
    console.log("Selected disagreestatements is :",disagreestatements)
    console.log("Associated disagreestatements score is : ", score)
  }
  
  const handlenegativestatementscale=(e)=>{
    const [negativestatementscale,score]=e.target.value.split('|')
    setselectednegativestatementscale(negativestatementscale)
    setselectednegativestatementscaleScore(score)
    console.log("Selected negativestatementscale is :",negativestatementscale)
    console.log("Associated negativestatementscale score is : ", score)
  }

  const handleinteractionculturalgroups=(e)=>{
    const [interactionculturalgroups,score]=e.target.value.split('|')
    setselectedinteractionculturalgroups(interactionculturalgroups)
    setselectedinteractionculturalgroupsScore(score)
    console.log("Selected interactionculturalgroups is :",interactionculturalgroups)
    console.log("Associated interactionculturalgroups score is : ", score)
  }

  return (
    <div>
        <multiStepContext.Provider 
        value={{
          currentScore,calculationofScore,finalScore,
          // states of first section
          calculatedScore,setcalculatedScore,showSurvey, setShowSurvey,
          bornData, setBornData,handlebornData,selectedbornData,selectedbornDataValue,selectedbornDataScore,
          countryData, setcountryData,handlecountryData,selectedcountryData,selectedcountryDataValue,selectedcountryDataScore,
          countryResidence,setcountryResidence,handlecountryResidence,selectedcountryResidence,selectedcountryResidenceValue,selectedcountryResidenceScore,
          // states of second section
          yearsofrecidence,setyearsofrecidence,selectedyearsofrecidence,setselectedyearsofrecidence,handleyearsofrecidence,
          numbercountries,setnumbercountries,selectednumbercountries,setselectednumbercountries,handlenumbercountries,
          traveledcountries,settraveledcountries,selectedtraveledcountries,setselectedtraveledcountries,handletraveledcountries,
          languageconverse,setlanguageconverse,selectedlanguageconverse,setselectedlanguageconverse,handlelanguageconverse,
          culturalfood,setculturalfood,selectedculturalfood,setselectedculturalfood,handleculturalfood,
          contentengagement,setcontentengagement,selectedcontentengagement,setselectedcontentengagement,handlecontentengagement,

          //states for third section
          multiculturalismbenefits, setmulticulturalismbenefits,selectedmulticulturalismbenefits,selectedmulticulturalismbenefitsScore,handlemulticulturalismbenefits,
          disagreestatements,setdisagreestatements,selecteddisagreestatements,selecteddisagreestatementsScore,handledisagreestatements,
          negativestatementscale,setnegativestatementscale,selectednegativestatementscale,selectednegativestatementscaleScore,handlenegativestatementscale,
          interactionculturalgroups,setinteractionculturalgroups,selectedinteractionculturalgroups,selectedinteractionculturalgroupsScore,handleinteractionculturalgroups

        }}>
            <App/>
        </multiStepContext.Provider>
    </div>
  )
}

export default StepContext
