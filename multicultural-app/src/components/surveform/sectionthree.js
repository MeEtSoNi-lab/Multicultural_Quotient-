import React from 'react' 
import { useEffect,useState,useContext } from 'react';
import API_BASE_URL from '../../apiconfig';
import { multiStepContext } from '../../StepContext';

function Sectionthree() {
  const{multiculturalismbenefits, setmulticulturalismbenefits,selectedmulticulturalismbenefits,handlemulticulturalismbenefits,
    disagreestatements,setdisagreestatements,selecteddisagreestatements,handledisagreestatements,
    negativestatementscale,setnegativestatementscale,selectednegativestatementscale,handlenegativestatementscale,
    interactionculturalgroups,setinteractionculturalgroups,selectedinteractionculturalgroups,handleinteractionculturalgroups
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

 
  return (
    <div className='section-form'>
    <div className='section-one-form'>
          <h3> Multiculturalism can sometimes mean valuing and coexistence of people from diverse ethnic and cultural backgrounds. 
                To what extent do you believe that multiculturalism benefits… 
          </h3>
          <div className="select-wrapper">
          <select className='styled-select'  onChange={handlemulticulturalismbenefits}>
              <option value='' disabled selected>
                  {selectedmulticulturalismbenefits ? selectedmulticulturalismbenefits : "Select"}
              </option>
            {multiculturalismbenefits.length > 0 ? (
                multiculturalismbenefits.map((item, index) => (
                <option key={index} value={`${item.multiculturalismbenefits}|${item.score}`}> {/* Assuming _id is unique */}
                    {item.multiculturalismbenefits} {/* Assuming 'generation' is the label to display */}
                </option>
                ))
            ) : (
                <option>No data available</option>
          )}
          </select>
          </div>


          <h3> To what extent do you agree or disagree with the following statements?</h3>
          <p>I celebrate holiday traditions relating to my ethnic/cultural background</p>
          <p>I participate in traditions relating to cultures other than my own</p>
          <p>I think holidays from cultures other than my own should be celebrated freely</p>
          <p>I have experienced the traditions and/or attended multicultural festivals and events where I live </p>
          <p>I feel comfortable expressing my cultural identity while also feeling I am a part of society</p>
          <div className="select-wrapper">
          <select className='styled-select'  onChange={handledisagreestatements}>
              <option value='' disabled selected>
                {selecteddisagreestatements ? selecteddisagreestatements : 'Select'}
              </option>
            {disagreestatements.length > 0 ? (
                disagreestatements.map((item, index) => (
                <option key={index} value={`${item.disagreestatements}|${item.score}`}> {/* Assuming _id is unique */}
                    {item.disagreestatements} {/* Assuming 'generation' is the label to display */}
                </option>
                ))
            ) : (
                <option>No data available</option>
            )}
          </select>
          </div>



          <h3> Multiculturalism keeps different ethnic groups too segregated in society </h3>
          <p>For this last negative statement only use this scale:</p>
          <div className="select-wrapper">
          <select className='styled-select'  onChange={handlenegativestatementscale}>
            <option value='' disabled selected>
                {selectednegativestatementscale ? selectednegativestatementscale : 'Select'}
              </option>
            {negativestatementscale.length > 0 ? (
                negativestatementscale.map((item, index) => (
                <option key={index} value={`${item.negativestatementscale}|${item.score}`}> {/* Assuming _id is unique */}
                    {item.negativestatementscale} {/* Assuming 'generation' is the label to display */}
                </option>
                ))
            ) : (
                <option>No data available</option>
            )}
          </select>
          </div>
          


          <h3> Which of the following best describes your interactions with people from other ethnic/cultural groups?</h3>
          <p>I have close relationships with people from various cultures/ethnicities</p>
          <p>I work/interact with people from other cultures/ethnicities regularly, but mostly in passing or casual settings</p>
          <p>I have limited interactions with people from cultures/ethnicities different than my own</p>
          <p>I rarely, if ever, interact with people from other cultures/ethnicities </p>
          <div className="select-wrapper">
          <select className='styled-select'  onChange={handleinteractionculturalgroups}>
            <option value='' disabled selected>
                  {selectedinteractionculturalgroups ? selectedinteractionculturalgroups : 'Select'}
                </option>
            {interactionculturalgroups.length > 0 ? (
                interactionculturalgroups.map((item, index) => (
                <option key={index} value={`${item.interactionculturalgroups}|${item.score}`}> {/* Assuming _id is unique */}
                    {item.interactionculturalgroups} {/* Assuming 'generation' is the label to display */}
                </option>
                ))
            ) : (
                <option>No data available</option>
            )}
          </select>
          </div>


    </div>
  </div>
  )
}

export default Sectionthree
