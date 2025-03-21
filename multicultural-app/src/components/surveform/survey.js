import React, { useState, useContext } from 'react';
import './survey.css';
import Sectionone from './sectionone';
import Sectiontwo from './sectiontwo';
import Sectionthree from './sectionthree';
import Sectionfour from './sectionfour';
import { multiStepContext } from '../../StepContext';
import { useNavigate } from 'react-router-dom';

function Survey() {
  const [currentStep, setCurrentStep] = useState(1);
  const { calculationofScore } = useContext(multiStepContext);
  const navigate = useNavigate();

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const submitscore = () => {
    calculationofScore();
    navigate('/results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="survey-form-box">
      {/* Step Indicator */}
      <div className="step-indicator">
        {['PROFILE', 'KNOWLEDGE', 'IMMERSION', 'DEMOGRAPHIC'].map((_, index) => (
          <React.Fragment key={index}>
            <div
              className={`step-circle ${currentStep > index ? 'completed' : ''} ${
                currentStep === index + 1 ? 'active' : ''
              }`}
            ></div>
            {index < 3 && <div className="step-line"></div>}
          </React.Fragment>
        ))}
      </div>

      {/* Step Labels */}
      <div className="step-labels">
        <span>PROFILE</span>
        <span>KNOWLEDGE</span>
        <span>IMMERSION</span>
        <span>DEMOGRAPHIC</span>
      </div>

      {/* Render sections based on the current step */}
      {currentStep === 1 && <Sectionone />}
      {currentStep === 2 && <Sectiontwo />}
      {currentStep === 3 && <Sectionthree />}
      {currentStep === 4 && <Sectionfour />}

      {/* Navigation buttons */}
      <div className="survey-navigation">
        {currentStep > 1 && <button onClick={prevStep}>Back</button>}
        {currentStep < 4 && <button onClick={nextStep}>Next</button>}
        {currentStep === 4 && <button onClick={submitscore}>Calculate Score</button>}
      </div>
    </div>
  );
}

export default Survey;
