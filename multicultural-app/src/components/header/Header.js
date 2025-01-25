import React,{useContext} from 'react'
import './Header.css'
import { multiStepContext } from '../../StepContext';

function Header() {
  const { calculatedScore } = useContext(multiStepContext);

  return (
    <div>
       <div className='home-first-container'>
        <div className='home-content'>
          <h1>{calculatedScore ? "Your Multicultural Quotient  is:" : "What's Your Multicultural Quotient?"}</h1>
        </div>
      </div>
    </div>
  )
}

export default Header
