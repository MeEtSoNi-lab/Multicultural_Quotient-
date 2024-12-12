import React from 'react'
import './home.css'

function home() {
  return (
   <>
   
        {/* <div className='home-first-container'>
            <div className='home-content'>
                <h1>What's Your Multicultural Quotient ?</h1>
            </div>
            <div className='home-take-quiz'>
                <button>TAKE THE QUIZ</button>
            </div>
        </div> */}

        <div className='home-first-container'>
            <div className='home-first-container-overlay'>
            <div className='home-content'>
                    <h1>What's Your Multicultural Quotient ?</h1>
                    <button>TAKE THE QUIZ</button>

                </div>
            </div>
        </div>

      

        <div className='home-second-container'>
            <h2>"We are living in a multicultural era."</h2>
            <p>-  Joycelyn Espiritu David</p>
        </div>
    

        <div className='home-third-container'>
            <div className='home-third-info'>
                <h3>Driving Business Growth in a Borderless Era</h3>
                <p>The Multicultural Mindset Quotient gives leaders the awareness and confidence they need to embrace professional and business growth in a multicultural era. Thousands of business leaders are seeking cultural fluency in which to better lead, build and nuture their own perspective in a rapidly changing and interconnected global business landscape. By knowing your own Multicultural Mindset Quotient, we hope to empower future generations of leaders for a more inclusive and connected society. </p>
            </div>
            <div className='home-third-get-started-info'>
                <h3>Ready to Get Started?</h3>
                <p>There is no cost to take the quiz and your results are completely confidential. </p>
                <p><a href="">TAKE THE QUIZ NOW</a></p>
            </div>
        </div>
   </>
  )
}

export default home
