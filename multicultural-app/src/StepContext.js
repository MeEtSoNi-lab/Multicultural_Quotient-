import React,{use, useState} from 'react'
import App from './App'
export const multiStepContext = React.createContext();
function StepContext() {
    const [calculatedScore,setcalculatedScore]=useState(null);
  const [showSurvey, setShowSurvey] = useState(false);
  const[currentScore,setcurrentScore]=useState(0);
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
    const[selectedyearsofrecidenceScore,setselectedyearsofrecidenceScore] = useState('');
    const[selectednumbercountriesScore,setselectednumbercountriesScore]=useState('');
    const[selectedtraveledcountriesScore,setselectedtraveledcountriesScore]=useState('');
    const[selectedlanguageconverseScore,setselectedlanguageconverseScore]=useState('');
    const[selectedculturalfoodScore,setselectedculturalfoodScore]=useState('');
    const[selectedcontentengagementScore,setselectedcontentengagementScore]=useState('');
    const [previousCountryScore, setPreviousCountryScore] = useState(0);


  //methode to set current score

    const updatecurrentScore=(newscore)=>{
      setcurrentScore((prevscore)=>prevscore+parseInt(newscore));
      console.log(currentScore)
    }


  //methodes to set values of section one form 
  const handlebornData = (e) => {
    const [generation, score] = e.target.value.split("|");
    setselectedbornDataValue(generation);
    setselectedbornDataScore(score);
    updatecurrentScore(score);
  };

  const handlecountryData = (e) => {
   
    const selectedData=JSON.parse(e.target.value);
    console.log(selectedData)
    const { name, Individualism: origIndividualism, Indulgence: origIndulgence, PowerDistance: origPowerDistance, UncertaintyAvoidance: origUncertaintyAvoidance } = selectedData;
    
      // Declare variables to modify values
      let Individualism, Indulgence, PowerDistance, UncertaintyAvoidance;

      // Apply logic to Individualism
      Individualism = parseInt(origIndividualism) > 70 ? 10 : 0;
      Indulgence = parseInt(origIndulgence) < 40 ? -10 :0;
      PowerDistance = parseInt(origPowerDistance) <40 ? 10 : 0;
      UncertaintyAvoidance = parseInt (origUncertaintyAvoidance) > 48 ? 10 : 0;
      const AllRest=5;

      const countryScore= Individualism + Indulgence + PowerDistance + UncertaintyAvoidance + AllRest;
  
      setselectedcountryDataScore(countryScore);
      setselectedcountryDataValue(name);
      updatecurrentScore(countryScore);
      
  };



  const handlecountryResidence = (e) => {
    const selectedData=JSON.parse(e.target.value);
    console.log(selectedData)
    const { name, Individualism: origIndividualism, Indulgence: origIndulgence, PowerDistance: origPowerDistance, UncertaintyAvoidance: origUncertaintyAvoidance } = selectedData;
    
      // Declare variables to modify values
      let Individualism, Indulgence, PowerDistance, UncertaintyAvoidance;

      // Apply logic to Individualism
      Individualism = parseInt(origIndividualism) > 70 ? 10 : 0;
      Indulgence = parseInt(origIndulgence) < 40 ? -10 :0;
      PowerDistance = parseInt(origPowerDistance) <40 ? 10 : 0;
      UncertaintyAvoidance = parseInt (origUncertaintyAvoidance) > 48 ? 10 : 0;
      const AllRest=5;
      const countryResidenceScore= Individualism + Indulgence + PowerDistance + UncertaintyAvoidance + AllRest;

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


  return (
    <div>
        <multiStepContext.Provider 
        value={{
          currentScore,
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
        }}>
            <App/>
        </multiStepContext.Provider>
    </div>
  )
}

export default StepContext
