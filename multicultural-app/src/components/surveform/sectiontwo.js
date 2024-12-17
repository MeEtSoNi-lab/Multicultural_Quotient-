import React, { useState, useEffect } from 'react';
import API_BASE_URL from '../../apiconfig';
import "./sectiontwo.css"

function Sectiontwo() {
    const [yearsofrecidence,setyearsofrecidence]=useState([]);
    const [numbercountries,setnumbercountries]=useState([]);
    const [traveledcountries,settraveledcountries]=useState([]);
    const [languageconverse,setlanguageconverse]=useState([]);
    const [culturalfood,setculturalfood]=useState([]);
    const [contentengagement,setcontentengagement]=useState([]);
  const [selectedValue, setSelectedValue] = useState('');
    
  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };
    useEffect(() => {
        const YearsofrecidenceData = async () => {
          try {
            const response = await fetch(`${API_BASE_URL}/yearsofrecidence`);
            if (!response.ok) {
              throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setyearsofrecidence(data);
            console.log(data);
          } catch (error) {
            console.log(error);
          }
        };

        const NumberofcountrieslivingData=async()=>{
            try{
                const response=await fetch(`${API_BASE_URL}/numbercountries`)
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                  }
                  const data = await response.json();
                  setnumbercountries(data);
                  console.log(data);
            }catch (error) {
                console.log(error);
              }
        }

        const travelledcountriesData=async()=>{
            try{
                const response=await fetch(`${API_BASE_URL}/traveledcountries`)
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                  }
                  const data = await response.json();
                  settraveledcountries(data);
                  console.log(data);
            }catch (error) {
                console.log(error);
              }
        }

        const languageconverseData=async()=>{
            try{
                const response=await fetch(`${API_BASE_URL}/languageconverse`)
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                  }
                  const data = await response.json();
                  setlanguageconverse(data);
                  console.log(data);
            }catch (error) {
                console.log(error);
              }
        }


        const culturalfoodData=async()=>{
            try{
                const response=await fetch(`${API_BASE_URL}/culturalfood`)
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                  }
                  const data = await response.json();
                  setculturalfood(data);
                  console.log(data);
            }catch (error) {
                console.log(error);
              }
        }


        const contentengagementData=async()=>{
            try{
                const response=await fetch(`${API_BASE_URL}/contentengagement`)
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                  }
                  const data = await response.json();
                  setcontentengagement(data);
                  console.log(data);
            }catch (error) {
                console.log(error);
              }
        }
    
    
        YearsofrecidenceData();
        NumberofcountrieslivingData();
        travelledcountriesData();
        languageconverseData();
        culturalfoodData();
        contentengagementData();
      }, []);
  return (
    <div className='section-form'>
    <div className='section-two-form'>
          <h3>What is your birth year ?</h3>
          <div className="select-wrapper">
          <select className='styled-select' value={selectedValue} onChange={handleSelectChange}>
          {yearsofrecidence.length > 0 ? (
              yearsofrecidence.map((item, index) => (
              <option key={index} value={item._id}> {/* Assuming _id is unique */}
                  {item.years} {/* Assuming 'generation' is the label to display */}
              </option>
              ))
          ) : (
              <option>No data available</option>
          )}
          </select>
          </div>



          <h3>How many countries have you lived in?</h3>
          <div className="select-wrapper">
          <select className='styled-select' value={selectedValue} onChange={handleSelectChange}>
          {numbercountries.length > 0 ? (
              numbercountries.map((item, index) => (
              <option key={index} value={item._id}> {/* Assuming _id is unique */}
                  {item.numbercountries} {/* Assuming 'generation' is the label to display */}
              </option>
              ))
          ) : (
              <option>No data available</option>
          )}
          </select>
          </div>


          <h3>Approximately many countries have you traveled to (for work or personal)?</h3>
          <div className="select-wrapper">
          <select className='styled-select' value={selectedValue} onChange={handleSelectChange}>
          {traveledcountries.length > 0 ? (
              traveledcountries.map((item, index) => (
              <option key={index} value={item.score}> {/* Assuming _id is unique */}
                  {item.traveledcountries} {/* Assuming 'generation' is the label to display */}
              </option>
              ))
          ) : (
              <option>No data available</option>
          )}
          </select>
          </div>


          <h3>How many languages can you read, speak or converse in?</h3>
          <div className="select-wrapper">
          <select className='styled-select' value={selectedValue} onChange={handleSelectChange}>
          {languageconverse.length > 0 ? (
              languageconverse.map((item, index) => (
              <option key={index} value={item.score}> {/* Assuming _id is unique */}
                  {item.languagecnverse} {/* Assuming 'generation' is the label to display */}
              </option>
              ))
          ) : (
              <option>No data available</option>
          )}
          </select>
          </div>



          <h3> Food is a great way to celebrate and learn about cultures not your own.  How often do you cook or eat food from another culture than your own?</h3>
          <div className="select-wrapper">
          <select className='styled-select' value={selectedValue} onChange={handleSelectChange}>
          {culturalfood.length > 0 ? (
              culturalfood.map((item, index) => (
              <option key={index} value={item.score}> {/* Assuming _id is unique */}
                  {item.culturalfood} {/* Assuming 'generation' is the label to display */}
              </option>
              ))
          ) : (
              <option>No data available</option>
          )}
          </select>
          </div>


          <h3> Do engage with content (such as music, movies, television shows, social media content) that are created from outside your own country of residence or birth?</h3>
          <div className="select-wrapper">
          <select className='styled-select' value={selectedValue} onChange={handleSelectChange}>
          {contentengagement.length > 0 ? (
              contentengagement.map((item, index) => (
              <option key={index} value={item.score}> {/* Assuming _id is unique */}
                  {item.contentengagement} {/* Assuming 'generation' is the label to display */}
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

export default Sectiontwo
