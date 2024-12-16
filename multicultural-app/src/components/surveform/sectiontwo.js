import React, { useState, useEffect } from 'react';
import API_BASE_URL from '../../apiconfig';
import "./sectiontwo.css"

function Sectiontwo() {
    const [yearsofrecidence,setyearsofrecidence]=useState([]);
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
    
    
        YearsofrecidenceData();
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

    </div>
  </div>
  )
}

export default Sectiontwo
