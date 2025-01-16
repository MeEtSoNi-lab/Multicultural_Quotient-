import React, { useState, useContext } from 'react';
import './results.css';
import Survey from '../surveform/survey';
import { multiStepContext } from '../../StepContext';
import { Doughnut } from 'react-chartjs-2';  // Import Doughnut chart from react-chartjs-2
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js';
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

function Results() {
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
        <h1> calculated score 
            {calculatedScore}</h1>
         {calculatedScore && (
        <div id='score' className='home-score-container'>
          <div className='donut-chart-container'>
            <Doughnut data={chartData} options={chartOptions} />
            <div className='score-text'>
              <h1>{calculatedScore}</h1>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Results
