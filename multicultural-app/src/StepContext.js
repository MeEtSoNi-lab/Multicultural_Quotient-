import React,{useState} from 'react'
import App from './App'
export const multiStepContext = React.createContext();
function StepContext() {
    const [calculatedScore,setcalculatedScore]=useState(null);
  const [showSurvey, setShowSurvey] = useState(false);

  return (
    <div>
        <multiStepContext.Provider value={{calculatedScore,setcalculatedScore,showSurvey, setShowSurvey}}>
            <App/>
        </multiStepContext.Provider>
    </div>
  )
}

export default StepContext
