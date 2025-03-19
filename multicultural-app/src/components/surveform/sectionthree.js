import React from 'react' 
import { useEffect,useState,useContext } from 'react';
import API_BASE_URL from '../../apiconfig';
import { multiStepContext } from '../../StepContext';
import './section.css'
function Sectionthree() {
  const{multiculturalismbenefits, setmulticulturalismbenefits,selectedmulticulturalismbenefits,handlemulticulturalismbenefits,
    disagreestatements,setdisagreestatements,selecteddisagreestatements,handledisagreestatements,selectedADSOne,selectedADSTwo,selectedADSThree,selectedADSFour,selectedADSFive,selectedADSOneScore,selectedADSTwoScore,selectedADSThreeScore,selectedADSFourScore,selectedADSFiveScore,handleADSOne,handleADSTwo,handleADSThree,handleADSFour,handleADSFive,
    negativestatementscale,setnegativestatementscale,selectednegativestatementscale,handlenegativestatementscale,
    interactionculturalgroups,setinteractionculturalgroups,selectedinteractionculturalgroups,handleinteractionculturalgroups,selectedCGIOne,selectedCGITwo,selectedCGIThree,selectedCGIFour,selectedCGIOneScore,selectedCGITwoScore,selectedCGIThreeScore,selectedCGIFourScore,handleCGIOne,handleCGITwo,handleCGIThree,handleCGIFour,
  }=useContext(multiStepContext);
 
  

  useEffect(() => {
    const multiculturalismbenefitsData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/multiculturalismbenefits`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setmulticulturalismbenefits(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    const disagreestatementsData = async () => {
        try {
          const response = await fetch(`${API_BASE_URL}/disagreestatements`);
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const data = await response.json();
          setdisagreestatements(data);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      };
  
    
      const negativestatementscaleData = async () => {
        try {
          const response = await fetch(`${API_BASE_URL}/negativestatementscale`);
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const data = await response.json();
          setnegativestatementscale(data);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      };

      const interactionculturalgroupsData = async () => {
        try {
          const response = await fetch(`${API_BASE_URL}/interactionculturalgroups`);
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const data = await response.json();
          setinteractionculturalgroups(data);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      };

    

     

    multiculturalismbenefitsData();
    disagreestatementsData();
    negativestatementscaleData();
    interactionculturalgroupsData();
   
  }, []);
  // Method to handle checkbox changes
 

  // Handle checkbox change

 
  return (
    <div className='section-form'>
    <div className='section-form'>
      <div className='third-form-h3'>
         <h3> To what extent do you agree or disagree with the following statements?</h3>
      </div>
         
      <div className='third-form-radio-button'>
        
      <h3> Multiculturalism can sometimes mean valuing and coexistence of people from diverse ethnic and cultural backgrounds. 
                To what extent do you believe that multiculturalism benefits… 
          </h3>

          <div className="radio-wrapper">
                {multiculturalismbenefits.length > 0 ? (
                  multiculturalismbenefits.map((item, index) => (
                    <div key={index} className="radio-item">
                      <input
                        type="radio"
                        id={`radio-${index}`}
                        name="disagree-statements-0" // Group name to ensure only one can be selected at a time
                        value={`${item.multiculturalismbenefits}|${item.score}`}
                        // checked={selectedADSOne === `${item.disagreestatements}|${item.score}`}
                       
                        onChange={handlemulticulturalismbenefits} // Trigger the onChange function when selected
                      />
                      <label htmlFor={`radio-${index}`}>
                        {item.multiculturalismbenefits}
                      </label>
                    </div>
                  ))
                ) : (
                  <p>No data available</p>
                )}
            </div>
          


          <h3>I celebrate holiday traditions relating to my ethnic/cultural background</h3>
            <div className="radio-wrapper">
                {disagreestatements.length > 0 ? (
                  disagreestatements.map((item, index) => (
                    <div key={index} className="radio-item">
                      <input
                        type="radio"
                        id={`radio-${index}`}
                        name="disagree-statements-1" // Group name to ensure only one can be selected at a time
                        value={`${item.disagreestatements}|${item.score}`}
                        // checked={selectedADSOne === `${item.disagreestatements}|${item.score}`}
                       
                        onChange={handleADSOne} // Trigger the onChange function when selected
                      />
                      <label htmlFor={`radio-${index}`}>
                        {item.disagreestatements}
                      </label>
                    </div>
                  ))
                ) : (
                  <p>No data available</p>
                )}
            </div>
          <h3>I participate in traditions relating to cultures other than my own</h3>
            <div className="radio-wrapper">
                {disagreestatements.length > 0 ? (
                  disagreestatements.map((item, index) => (
                    <div key={index} className="radio-item">
                      <input
                        type="radio"
                        id={`radio-${index}`}
                        name="disagree-statements-2" // Group name to ensure only one can be selected at a time
                        value={`${item.disagreestatements}|${item.score}`}
                        onChange={handleADSTwo} // Trigger the onChange function when selected
                      />
                      <label htmlFor={`radio-${index}`}>
                        {item.disagreestatements}
                      </label>
                    </div>
                  ))
                ) : (
                  <p>No data available</p>
                )}
            </div>
          <h3>I think holidays from cultures other than my own should be celebrated freely</h3>
            <div className="radio-wrapper">
                {disagreestatements.length > 0 ? (
                  disagreestatements.map((item, index) => (
                    <div key={index} className="radio-item">
                      <input
                        type="radio"
                        id={`radio-${index}`}
                        name="disagree-statements-3" // Group name to ensure only one can be selected at a time
                        value={`${item.disagreestatements}|${item.score}`}
                        onChange={handleADSThree} // Trigger the onChange function when selected
                      />
                      <label htmlFor={`radio-${index}`}>
                        {item.disagreestatements}
                      </label>
                    </div>
                  ))
                ) : (
                  <p>No data available</p>
                )}
            </div>
          <h3>I have experienced the traditions and/or attended multicultural festivals and events where I live </h3>
            <div className="radio-wrapper">
                {disagreestatements.length > 0 ? (
                  disagreestatements.map((item, index) => (
                    <div key={index} className="radio-item">
                      <input
                        type="radio"
                        id={`radio-${index}`}
                        name="disagree-statements-4" // Group name to ensure only one can be selected at a time
                        value={`${item.disagreestatements}|${item.score}`}
                        onChange={handleADSFour} // Trigger the onChange function when selected
                      />
                      <label htmlFor={`radio-${index}`}>
                        {item.disagreestatements}
                      </label>
                    </div>
                  ))
                ) : (
                  <p>No data available</p>
                )}
            </div>
          <h3>I feel comfortable expressing my cultural identity while also feeling I am a part of society</h3>
            <div className="radio-wrapper">
                {disagreestatements.length > 0 ? (
                  disagreestatements.map((item, index) => (
                    <div key={index} className="radio-item">
                      <input
                        type="radio"
                        id={`radio-${index}`}
                        name="disagree-statements-5" // Group name to ensure only one can be selected at a time
                        value={`${item.disagreestatements}|${item.score}`}
                        onChange={handleADSFive} // Trigger the onChange function when selected
                      />
                      <label htmlFor={`radio-${index}`}>
                        {item.disagreestatements}
                      </label>
                    </div>
                  ))
                ) : (
                  <p>No data available</p>
                )}
            </div>



          <h3> Multiculturalism keeps different ethnic groups too segregated in society </h3>
          <div className="radio-wrapper">
                {negativestatementscale.length > 0 ? (
                  negativestatementscale.map((item, index) => (
                    <div key={index} className="radio-item">
                      <input
                        type="radio"
                        id={`radio-interaction-${index}`}
                        name="interaction-cultural-groups-zero" // Group name to ensure only one can be selected
                        value={`${item.interactionculturalgroups}|${item.score}`}
                        onChange={handlenegativestatementscale} // Trigger the onChange function
                      />
                      <label htmlFor={`radio-interaction-${index}`}>
                        {item.negativestatementscale}
                      </label>
                    </div>
                  ))
                ) : (
                  <p>No data available</p>
                )}
            </div>
       
          


          <h3> Which of the following best describes your interactions with people from other ethnic/cultural groups?</h3>
            <div className="radio-wrapper">
                {interactionculturalgroups.length > 0 ? (
                  interactionculturalgroups.map((item, index) => (
                    <div key={index} className="radio-item">
                      <input
                        type="radio"
                        id={`radio-interaction-${index}`}
                        name="interaction-cultural-groups-1" // Group name to ensure only one can be selected
                        value={`${item.interactionculturalgroups}|${item.score}`}
                        onChange={handleCGIOne} // Trigger the onChange function
                      />
                      <label htmlFor={`radio-interaction-${index}`}>
                        {item.interactionculturalgroups}
                      </label>
                    </div>
                  ))
                ) : (
                  <p>No data available</p>
                )}
            </div>
      </div>

          {/* <h3>I work/interact with people from other cultures/ethnicities regularly, but mostly in passing or casual settings</h3>
            <div className="radio-wrapper">
                {interactionculturalgroups.length > 0 ? (
                  interactionculturalgroups.map((item, index) => (
                    <div key={index} className="radio-item">
                      <input
                        type="radio"
                        id={`radio-interaction-${index}`}
                        name="interaction-cultural-groups-2" // Group name to ensure only one can be selected
                        value={`${item.interactionculturalgroups}|${item.score}`}
                        onChange={handleCGITwo} // Trigger the onChange function
                      />
                      <label htmlFor={`radio-interaction-${index}`}>
                        {item.interactionculturalgroups}
                      </label>
                    </div>
                  ))
                ) : (
                  <p>No data available</p>
                )}
            </div>
          <h3>I have limited interactions with people from cultures/ethnicities different than my own</h3>
            <div className="radio-wrapper">
                {interactionculturalgroups.length > 0 ? (
                  interactionculturalgroups.map((item, index) => (
                    <div key={index} className="radio-item">
                      <input
                        type="radio"
                        id={`radio-interaction-${index}`}
                        name="interaction-cultural-groups-3" // Group name to ensure only one can be selected
                        value={`${item.interactionculturalgroups}|${item.score}`}
                        onChange={handleCGIThree} // Trigger the onChange function
                      />
                      <label htmlFor={`radio-interaction-${index}`}>
                        {item.interactionculturalgroups}
                      </label>
                    </div>
                  ))
                ) : (
                  <p>No data available</p>
                )}
            </div> */}
          {/* <h3>I rarely, if ever, interact with people from other cultures/ethnicities </h3>
          <div className="radio-wrapper">
              {interactionculturalgroups.length > 0 ? (
                interactionculturalgroups.map((item, index) => (
                  <div key={index} className="radio-item">
                    <input
                      type="radio"
                      id={`radio-interaction-${index}`}
                      name="interaction-cultural-groups-4" // Group name to ensure only one can be selected
                      value={`${item.interactionculturalgroups}|${item.score}`}
                      onChange={handleCGIFour} // Trigger the onChange function
                    />
                    <label htmlFor={`radio-interaction-${index}`}>
                      {item.interactionculturalgroups}
                    </label>
                  </div>
                ))
              ) : (
                <p>No data available</p>
              )}
          </div> */}

        
    </div>
  </div>
  )
}

export default Sectionthree
