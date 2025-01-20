import React, { useState, useContext } from 'react';
import './home.css';
import Survey from '../surveform/survey';
import { multiStepContext } from '../../StepContext';
import { Doughnut } from 'react-chartjs-2';  // Import Doughnut chart from react-chartjs-2
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js';

// Register chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

function Home() {
  const { calculatedScore,finalScore} = useContext(multiStepContext);

 
  // Data for the Donut chart
  const chartData = {
    labels: ['Score', 'Remaining'],
    datasets: [
      {
        data: [calculatedScore, 140 - calculatedScore],  // Data for the donut chart (calculated score and remaining score)
        backgroundColor: ['#e63946', '#e0e0e0'],  // Green for score, light grey for remaining
        borderColor: ['#e63946', '#e0e0e0'],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  
 
  return (
    <>
      {/* <div className='home-first-container'>
        <div className='home-content'>
          <h1>What's Your Multicultural Quotient ?</h1>
          
        </div>
      </div> */}

      {/* <div className='home-second-container'>
        <h2>"We are living in a multicultural era."</h2>
        <p>- Joycelyn Espiritu David</p>
      </div>

      <div className='home-third-container'>
        <div className='home-third-info'>
          <h3>Driving Business Growth in a Borderless Era</h3>
          <p>
            The Multicultural Mindset Quotient gives leaders the awareness and
            confidence they need to embrace professional and business growth in
            a multicultural era. Thousands of business leaders are seeking cultural
            fluency in which to better lead, build and nurture their own perspective
            in a rapidly changing and interconnected global business landscape. By
            knowing your own Multicultural Mindset Quotient, we hope to empower
            future generations of leaders for a more inclusive and connected society.
          </p>
        </div>
        <div className='home-third-get-started-info'>
          <h3>Ready to Get Started?</h3>
          <p>There is no cost to take the quiz and your results are completely confidential.</p>
          <p><a href="#">TAKE THE QUIZ NOW</a></p>
        </div>
      </div>

      <div className='home-fourth-container'>
        <div className='home-fourth-container-photo'>
          <img src="/images/Joycelyn.jpg" alt="" />
        </div>
        <div className='home-fourth-container-info'>
          <h2>Joycelyn David</h2>
          <p>Working with a creative team and brands that have a positive impact on the lives of Canadians are the best parts of Joycelyn’s role as AVC’s Owner and CEO. A daughter of immigrant parents from the Philippines, Joycelyn understands the hopes and struggles of newcomers and is proud to engage with and help bring multicultural communities together. She thrives on working with clients, exploring ways for them to grow their businesses, expand their reach, and surpass their goals. With a marketing background that spans almost 20 years at global organizations like Western Union and KPMG, Joycelyn’s the ultimate big-picture thinker who brings a uniquely positive, anything’s-possible approach to every new strategic ask. She combines this with a wealth of marketing knowledge and a firm grounding in financials, making her a true force to be reckoned with. She’s also a huge Star Wars fan (we’re talking e-v-e-r-y episode). Adventurer (ask her about her white water rafting or pole jumping exploits). Musician (she can teach you how to play piano). Lover of family gatherings (near and far). Fan of simple foods (plain rice and a fried egg, anyone?). And collector of throw pillows (we’ve got nothing for this one).</p>
        </div>
      </div> */}

      
        <div className='survey-popup'>
            <Survey />
        </div>
      
        
      {/* {calculatedScore && (
        <div id='score' className='home-score-container'>
          <div className='donut-chart-container'>
            <Doughnut data={chartData} options={chartOptions} />
            <div className='score-text'>
              <h1>{calculatedScore}</h1>
            </div>
          </div>
        </div>
      )} */}
    </>
  );
}

export default Home;
