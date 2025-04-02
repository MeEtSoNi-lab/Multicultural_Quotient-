import React, { useContext } from 'react';
import './Header.css';
import { multiStepContext } from '../../StepContext';

function Header() {
  const { calculatedScore } = useContext(multiStepContext);

  return (
    <>
      {calculatedScore > 120 ? (
        <div className="home-blue-container">
          <div className="home-blue-content">
            <div className="home-blue-content-info">
              <h4>Your Multicultural Quotient is:</h4>
              <h1>MQ Blue</h1>
              <p>Beginning Your Cultural Journey</p>
            </div>
          </div>
          <div className="home-blue-image">
            <img src="/images/Blue-header.png" alt="MQ Blue" />
          </div>
        </div>
      ) : calculatedScore >= 50 && calculatedScore <= 120 ? (
        <div className="home-yellow-container">
          <div className="home-yellow-content">
            <div className="home-yellow-content-info">
              <h4>Your Multicultural Quotient is:</h4>
              <h1>MQ Yellow</h1>
              <p>Expanding Your Cultural Horizons</p>
            </div>
          </div>
          <div className="home-yellow-image">
            <img src="/images/Yellow-header.png" alt="MQ Yellow" />
          </div>
        </div>
      ) : calculatedScore > 0 && calculatedScore < 50 ? (
        <div className="home-red-container">
          <div className="home-red-content">
            <div className="home-red-content-info">
              <h4>Your Multicultural Quotient is:</h4>
              <h1>MQ Red</h1>
              <p>Beginning Your Cultural Journey</p>
            </div>
          </div>
          <div className="home-red-image">
            <img src="/images/Red-header.png" alt="MQ Red" />
          </div>
        </div>
      ) : (
        <div className="home-main-container">
        <div className="home-main-content">
          <div className="home-main-content-info">
          
            <h1>What's your Multicultural Quotient ?</h1>
           
          </div>
        </div>
        <div className="home-main-image">
          <img src="/images/multicultural.png" alt="MQ" />
        </div>
      </div>
      )}
    </>
  );
}

export default Header;
