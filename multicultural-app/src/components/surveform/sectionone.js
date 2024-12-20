import React, { useState, useEffect, useContext } from 'react';
import API_BASE_URL from '../../apiconfig';
import './sectionone.css'
import { multiStepContext } from '../../StepContext';
function SectionOne() {
 const { bornData, setBornData,handlebornData,selectedbornData,selectedbornDataValue,selectedbornDataScore,
         countryData, setcountryData,handlecountryData,selectedcountryData,
         countryResidence,setcountryResidence,handlecountryResidence, selectedcountryResidence} =useContext(multiStepContext);
 const [selectedValue, setSelectedValue] = useState('');


  useEffect(() => {
    const fetchBornData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/borndata`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setBornData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchCountryData = async () => {
        try {
          const response = await fetch(`${API_BASE_URL}/countries`);
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const data = await response.json();
          setcountryData(data);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      };

    fetchBornData();
    fetchCountryData();
  }, []);

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div className='section-form'>
      <div className='section-one-form'>
            <h3>What is your birth year ?</h3>
            <div className="select-wrapper">
            <select className='styled-select' value={selectedbornData[0]} onChange={handlebornData}>
                <option value="" disabled selected>
                  Select
              </option>
            {bornData.length > 0 ? (
                bornData.map((item, index) => (
                <option key={index} value={`${item.generation}|${item.score}`}> {/* Assuming _id is unique */}
                    {item.generation} {/* Assuming 'generation' is the label to display */}
                </option>
                ))
            ) : (
                <option>No data available</option>
            )}
            </select>
            </div>

            <h3>What is your country of birth ?</h3>

            <div className="select-wrapper">
            <select className='styled-select' value={selectedcountryData} onChange={handlecountryData}>
            <option value="" disabled selected>
               Select
           </option>
            {countryData.length > 0 ? (
                countryData.map((item, index) => (
                <option key={index} value={item.name}> {/* Assuming _id is unique */}
                    {item.name} {/* Assuming 'generation' is the label to display */}
                </option>
                ))
            ) : (
                <option>No data available</option>
            )}
            </select>
            </div>



            <h3>What is your current country of recidence ?</h3>

            <div className="select-wrapper">
            <select className='styled-select' value={selectedcountryResidence} onChange={handlecountryResidence}>
            <option value="" disabled selected>
               Select
           </option>
            {countryData.length > 0 ? (
                countryData.map((item, index) => (
                <option key={index} value={item.name}> {/* Assuming _id is unique */}
                    {item.name} {/* Assuming 'generation' is the label to display */}
                </option>
                ))
            ) : (
                <option>No data available</option>
            )}
            </select>
            </div>
      </div>
    </div>
  );
}

export default SectionOne;
