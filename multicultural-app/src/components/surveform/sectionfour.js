import { useEffect,useState,useContext } from 'react';
import './section.css'
import API_BASE_URL from '../../apiconfig';
import { multiStepContext } from '../../StepContext';
function Sectionfour() {

    const{
        asians,setasians,
        multicultural,setmulticultural,
        black,setblack,
        latino,setlatino,
        middleeastern,setmiddleeastern,
        white,setwhite,
        checkedItems, setCheckedItems,
        checkboxScore, setcheckboxScore,handleCheckboxChange,
      }=useContext(multiStepContext);
     
      
    
      useEffect(() => {
        
    
          const asianData = async () => {
            try {
              const response = await fetch(`${API_BASE_URL}/asians`);
              if (!response.ok) {
                throw new Error('Failed to fetch data');
              }
              const data = await response.json();
              setasians(data);
              console.log(data);
            } catch (error) {
              console.log(error);
            }
          };
    
          const multiculturalData = async () => {
            try {
              const response = await fetch(`${API_BASE_URL}/multicultural`);
              if (!response.ok) {
                throw new Error('Failed to fetch data');
              }
              const data = await response.json();
              setmulticultural(data);
              console.log(data);
            } catch (error) {
              console.log(error);
            }
          };
    
          const blackData = async () => {
            try {
              const response = await fetch(`${API_BASE_URL}/blacks`);
              if (!response.ok) {
                throw new Error('Failed to fetch data');
              }
              const data = await response.json();
              setblack(data);
              console.log(data);
            } catch (error) {
              console.log(error);
            }
          };
          
          const latinoData = async () => {
            try {
              const response = await fetch(`${API_BASE_URL}/latinos`);
              if (!response.ok) {
                throw new Error('Failed to fetch data');
              }
              const data = await response.json();
              setlatino(data);
              console.log(data);
            } catch (error) {
              console.log(error);
            }
          };
    
          const middleeasternData = async () => {
            try {
              const response = await fetch(`${API_BASE_URL}/middleeasterns`);
              if (!response.ok) {
                throw new Error('Failed to fetch data');
              }
              const data = await response.json();
              setmiddleeastern(data);
              console.log(data);
            } catch (error) {
              console.log(error);
            }
          };
    
          const whiteData = async () => {
            try {
              const response = await fetch(`${API_BASE_URL}/whites`);
              if (!response.ok) {
                throw new Error('Failed to fetch data');
              }
              const data = await response.json();
              setwhite(data);
              console.log(data);
            } catch (error) {
              console.log(error);
            }
          };
    
        
        asianData();
        multiculturalData();
        blackData();
        latinoData();
        middleeasternData();
        whiteData();
      }, []);
  return (
    <>
        <div className='section-form'>
        <h3>Below is a list of different racial, ethnic and cultural origins. With which racial, ethnic and/or cultural group(s) do you identify? (Select all that apply) </h3>
          <p>Note that although this list is not exhaustive, we have included a wide variety of identities to be as inclusive as possible. We have provided options to enter other identities under “another” below if you do not see your identity listed. </p>

         
          <div className='check-box-container'>
          <h4>MULTI-CULTURAL</h4> 
          <div >
            {multicultural.map((option, index) => (
              <div key={index} style={{ marginBottom: "10px" }}>
                <label>
                  <input
                    type="checkbox"
                    checked={!!checkedItems[`multicultural-${index}`]}
                    onChange={() => handleCheckboxChange("multicultural", index)}
                  />
                  {option.MULTICULTURAL}
                </label>
              </div>
            ))}
          </div>


          <h4>ASIAN</h4>
          <div>
            {asians.map((option, index) => (
              <div key={index} style={{ marginBottom: "10px" }}>
                <label>
                  <input
                    type="checkbox"
                    checked={!!checkedItems[`asians-${index}`]}
                    onChange={() => handleCheckboxChange("asians", index)}
                  />
                  {option.ASIAN}
                </label>
              </div>
            ))}
          </div>


          <h4>BLACK</h4>
          <div>
            {black.map((option, index) => (
              <div key={index} style={{ marginBottom: "10px" }}>
                <label>
                  <input
                    type="checkbox"
                    checked={!!checkedItems[`black-${index}`]}
                     onChange={() => handleCheckboxChange("black", index)}
                  />
                  {option.black}
                </label>
              </div>
            ))}
          </div>
          

          <h4>Latino</h4>
          <div>
            {latino.map((option, index) => (
              <div key={index} style={{ marginBottom: "10px" }}>
                <label>
                  <input
                    type="checkbox"
                    checked={!!checkedItems[`latino-${index}`]}
                onChange={() => handleCheckboxChange("latino", index)}
                  />
                  {option.latino}
                </label>
              </div>
            ))}
          </div>


          <h4>Middleeastern</h4>
          <div>
            {middleeastern.map((option, index) => (
              <div key={index} style={{ marginBottom: "10px" }}>
                <label>
                  <input
                    type="checkbox"
                    checked={!!checkedItems[`middleeastern-${index}`]}
                    onChange={() => handleCheckboxChange("middleeastern", index)}
                  />
                  {option.middleeastern}
                </label>
              </div>
            ))}
          </div>


          <h4>White</h4>
          <div>
            {white.map((option, index) => (
              <div key={index} style={{ marginBottom: "10px" }}>
                <label>
                  <input
                    type="checkbox"
                    checked={!!checkedItems[`white-${index}`]}
                    onChange={() => handleCheckboxChange("white", index)}
                  />
                  {option.white}
                </label>
              </div>
            ))}
          </div>
          </div>
        </div>
    </>
  )
}

export default Sectionfour
