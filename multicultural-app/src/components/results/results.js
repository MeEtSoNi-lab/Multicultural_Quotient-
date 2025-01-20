import React, { useState, useContext } from 'react';
import './results.css';
import Survey from '../surveform/survey';
import { multiStepContext } from '../../StepContext';
import { Doughnut } from 'react-chartjs-2'; // Import Doughnut chart from react-chartjs-2
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

function Results() {
  const { calculatedScore } = useContext(multiStepContext);

  // Function to determine chart colors based on calculatedScore
  const getChartColors = () => {
    if (calculatedScore > 125) {
      return ['#2ecc71', '#e0e0e0']; // Green for "MQ Green"
    } else if (calculatedScore > 50) {
      return ['#f1c40f', '#e0e0e0']; // Yellow for "MQ Yellow"
    } else {
      return ['#e74c3c', '#e0e0e0']; // Red for "MQ Red"
    }
  };

  // Data for the Donut chart
  const chartData = {
    labels: ['Score', 'Remaining'],
    datasets: [
      {
        data: [calculatedScore, 140 - calculatedScore], // Data for the donut chart (calculated score and remaining score)
        backgroundColor: getChartColors(), // Dynamically set chart colors
        borderColor: getChartColors(),
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
      <h1>Calculated Score: {calculatedScore}</h1>
      {calculatedScore && (
        <div id="score" className="home-score-container">
          <div className="donut-chart-container">
            <Doughnut data={chartData} options={chartOptions} />
            <div className="score-text">
              <h1>
                {calculatedScore > 125
                  ? 'MQ Green'
                  : calculatedScore > 50
                  ? 'MQ Yellow'
                  : 'MQ Red'}
              </h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Results;
