import React,{useState} from 'react'
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
