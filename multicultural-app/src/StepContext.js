import React,{use, useState} from 'react'
import App from './App'
export const multiStepContext = React.createContext();
function StepContext() {
    const [calculatedScore,setcalculatedScore]=useState(null);
  const [showSurvey, setShowSurvey] = useState(false);

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
  const [selectedcountryDataScore,setselectedcountryDataScore]=useState('');

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
    const [selectedyearsofrecidence,setselectedyearsofrecidence]=useState([]);
    const [selectednumbercountries,setselectednumbercountries]=useState([]);
    const [selectedtraveledcountries,setselectedtraveledcountries]=useState([]);
    const [selectedlanguageconverse,setselectedlanguageconverse]=useState([]);
    const [selectedculturalfood,setselectedculturalfood]=useState([]);
    const [selectedcontentengagement,setselectedcontentengagement]=useState([]);

    



  //methodes to set values of section one form 
  const handlebornData = (e) => {
    const [generation, score] = e.target.value.split("|");
    setselectedbornDataValue(generation);
    setselectedbornDataScore(score);
  console.log("Selected Generation:", generation);
  console.log("Associated Score:", score);
  };

  const handlecountryData = (e) => {
    setselectedcountryData(e.target.value);
  };


  const handlecountryResidence = (e) => {
    setselectedcountryResidence(e.target.value);
  };



  //methodes to set the values for second section form

  const handleyearsofrecidence=(e)=>{
    setselectedyearsofrecidence(e.target.value);
  }

  const handlenumbercountries=(e)=>{
      setselectednumbercountries(e.target.value);
  }

  const handletraveledcountries=(e)=>{
      setselectedtraveledcountries(e.target.value);
  }

  const handlelanguageconverse=(e)=>{
    setselectedlanguageconverse(e.target.value);
  }

  const handleculturalfood =(e)=>{
    setselectedculturalfood(e.target.value);
  }

  const handlecontentengagement =(e)=>{
    setselectedcontentengagement(e.target.value);
  }


  return (
    <div>
        <multiStepContext.Provider 
        value={{calculatedScore,setcalculatedScore,showSurvey, setShowSurvey,
          bornData, setBornData,handlebornData,selectedbornData,selectedbornDataValue,selectedbornDataScore,
          countryData, setcountryData,handlecountryData,selectedcountryData,
          countryResidence,setcountryResidence,handlecountryResidence,selectedcountryResidence,
        }}>
            <App/>
        </multiStepContext.Provider>
    </div>
  )
}

export default StepContext
