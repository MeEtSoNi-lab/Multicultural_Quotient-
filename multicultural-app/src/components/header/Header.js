import React,{useContext} from 'react'
import './Header.css'
import { multiStepContext } from '../../StepContext';

function Header() {
  const { calculatedScore } = useContext(multiStepContext);

  return (
    <>
      



   {calculatedScore > 120 ?  <div>
       <div className='home-blue-container'>
        <div className='home-blue-content'>
          <div className='home-blue-content-info'>
          <h4>Your Multicultural Quotient is:</h4>
          <h1>MQ Blue</h1>
          <p>Beginning Your Cultural Journey</p>
          </div>
        </div>
        <div className='home-blue-image'>
            <img  src="/images/Blue-header.png" alt="" />
        </div>
      </div>
    </div>
    :
    calculatedScore >= 50  && calculatedScore <= 125 ?
    <div>
       <div className='home-red-container'>
        <div className='home-red-content'>
          <div className='home-red-content-info'>
          <h4>Your Multicultural Quotient is:</h4>
          <h1>MQ Red</h1>
          <p>Beginning Your Cultural Journey</p>
          </div>
        </div>
        <div className='home-red-image'>
            <img  src="/images/Red-header.png" alt="" />
        </div>
      </div>
    </div>:
     calculatedScore < 50 && calculatedScore >0 ?  
     <div>
       <div className='home-red-container'>
        <div className='home-red-content'>
          <div className='home-red-content-info'>
          <h4>Your Multicultural Quotient is:</h4>
          <h1>MQ Red</h1>
          <p>Beginning Your Cultural Journey</p>
          </div>
        </div>
        <div className='home-red-image'>
            <img  src="/images/Red-header.png" alt="" />
        </div>
      </div>
    </div>
    : !calculatedScore && <div>
    <div className='home-first-container'>
     <div className='home-content'>
       <h1> "What's Your Multicultural Quotient?"</h1>
     </div>
   </div>
 </div>
  }

    </>
  )
}

export default Header;
