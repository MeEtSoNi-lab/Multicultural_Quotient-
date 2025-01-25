import React, { useState, useContext } from 'react';
import './survey.css';
import Sectionone from './sectionone';
import Sectiontwo from './sectiontwo';
import Sectionthree from './sectionthree';
import Sectionfour from './sectionfour';
import { multiStepContext } from '../../StepContext';
import { useNavigate } from 'react-router-dom';

function Survey() {
  const [currentStep, setCurrentStep] = useState(1); // Step starts at 1 (Section 1)
  const { currentScore,calculatedScore, setcalculatedScore, ShowSurvey, setShowSurvey,calculationofScore } = useContext(multiStepContext);
  const navigate = useNavigate();

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1); // Move to the next step
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1); // Go back to the previous step
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  };

  // Progress bar calculation (percentage based on currentStep)
  const progressPercentage = (currentStep / 4) * 100;

  const submitscore = () => {
    
    calculationofScore()
    navigate('/results');
    window.scrollTo({ top: 0, behavior: 'smooth' })
  
  };

  return (
    <div className="survey-form-box">
      {/* Step indicator */}
      <div className="step-indicator">
        <span className={currentStep === 1 ? 'active' : ''}>PROFILE</span>
        <span className={currentStep === 2 ? 'active' : ''}>KNOWLEDGE</span>
        <span className={currentStep === 3 ? 'active' : ''}>IMMERSION</span>
        <span className={currentStep === 4 ? 'active' : ''}>DEMOGRAPHIC</span>

      </div>

      {/* Progress bar */}
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      {/* Render sections based on the current step */}
      {currentStep === 1 && <Sectionone />}
      {currentStep === 2 && <Sectiontwo />}
      {currentStep === 3 && <Sectionthree />}
      {currentStep === 4 && <Sectionfour />}


      {/* Navigation buttons */}
      <div className="survey-navigation">
        {currentStep > 1 && (
          <button onClick={prevStep}>Back</button> // Show "Back" button if not on the first step
        )}
        {currentStep < 3 && (
          <button onClick={nextStep}>Next</button> // Show "Next" button if not on the last step
        )}
        {currentStep === 3 && (
          <button onClick={nextStep}>Next</button> // Show "Submit" on last step
        )}
        {currentStep === 4 && (
          <button onClick={() => submitscore()}>Calculate score</button> // Show "Submit" on last step
        )}
      </div>

      
    </div>
  );
}

export default Survey;
