import React, { useState, useEffect,useContext } from 'react';
import API_BASE_URL from '../../apiconfig';
import "./section.css"
import { multiStepContext } from '../../StepContext';

function Sectiontwo() {
    const {yearsofrecidence,setyearsofrecidence,selectedyearsofrecidence,handleyearsofrecidence,
        numbercountries,setnumbercountries,selectednumbercountries,handlenumbercountries,
        traveledcountries,settraveledcountries,selectedtraveledcountries,handletraveledcountries,
        languageconverse,setlanguageconverse,selectedlanguageconverse,handlelanguageconverse,
        culturalfood,setculturalfood,selectedculturalfood,handleculturalfood,
        contentengagement,setcontentengagement,selectedcontentengagement,handlecontentengagement
        }=useContext(multiStepContext);

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
    <div className='section-form'>
          <h3>How many years have you lived in your country of residence?</h3>
          <div className="select-wrapper">
          <select className='styled-select'   onChange={handleyearsofrecidence}>
                <option value="" disabled selected>
                  {selectedyearsofrecidence ? selectedyearsofrecidence : 'Select'}
              </option>
            {yearsofrecidence.length > 0 ? (
                yearsofrecidence.map((item, index) => (
                <option key={index} value={`${item.years}|${item.score}`}> {/* Assuming _id is unique */}
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
          <select className='styled-select'  onChange={handlenumbercountries}>
            <option value="" disabled selected>
                {selectednumbercountries ? selectednumbercountries : "Select"}
            </option>
            {numbercountries.length > 0 ? (
                numbercountries.map((item, index) => (
                <option key={index} value={`${item.numbercountries}|${item.score}`}> {/* Assuming _id is unique */}
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
          <select className='styled-select'  onChange={handletraveledcountries}>
            <option value="">
                {selectedtraveledcountries ? selectedtraveledcountries : "Select"}
            </option>
            {traveledcountries.length > 0 ? (
                traveledcountries.map((item, index) => (
                <option key={index} value={`${item.traveledcountries}|${item.score}`}> {/* Assuming _id is unique */}
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
          <select className='styled-select'  onChange={handlelanguageconverse}>
            <option value="">
                {selectedlanguageconverse ? selectedlanguageconverse : "Select"}
            </option>
            {languageconverse.length > 0 ? (
                languageconverse.map((item, index) => (
                <option key={index} value={`${item.languageconverse}|${item.score}`}> {/* Assuming _id is unique */}
                    {item.languageconverse} {/* Assuming 'generation' is the label to display */}
                </option>
                ))
            ) : (
                <option>No data available</option>
            )}
          </select>
          </div>



          <h3> Food is a great way to celebrate and learn about cultures not your own.  How often do you cook or eat food from another culture than your own?</h3>
          <div className="select-wrapper">
          <select className='styled-select'  onChange={handleculturalfood}>
            <option value="">
                {selectedculturalfood ? selectedculturalfood : "Select"}
            </option>
            {culturalfood.length > 0 ? (
                culturalfood.map((item, index) => (
                <option key={index} value={`${item.culturalfood}|${item.score}`}> {/* Assuming _id is unique */}
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
          <select className='styled-select'  onChange={handlecontentengagement}>
          <option value="">
            {selectedcontentengagement ? selectedcontentengagement : "Select"}
          </option>
          {contentengagement.length > 0 ? (
              contentengagement.map((item, index) => (
              <option key={index} value={`${item.contentengagement}|${item.score}`}> {/* Assuming _id is unique */}
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
