import React, { useState, useEffect } from 'react';
import API_BASE_URL from '../../apiconfig';
import './sectionone.css'
function SectionOne() {
  const [bornData, setBornData] = useState([]);
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

    fetchBornData();
  }, []);

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div className='section-form'>
      <div className='section-one-form'>
            <h3>What is your birth year</h3>
            <div className="select-wrapper">
            <select className='styled-select' value={selectedValue} onChange={handleSelectChange}>
            {bornData.length > 0 ? (
                bornData.map((item, index) => (
                <option key={index} value={item._id}> {/* Assuming _id is unique */}
                    {item.generation} {/* Assuming 'generation' is the label to display */}
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
