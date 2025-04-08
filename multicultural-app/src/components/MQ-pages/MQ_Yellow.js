import React from 'react'
import { useNavigate } from 'react-router-dom';
import bookBackground from '../assets/images/Books.png';

import './MQ.css'
function MQ_Yellow() {
  const navigate=useNavigate();
  const buyNow = () => {
    window.location.href = 'https://www.amazon.com/Multicultural-Mindset-Driving-Business-Borderless/dp/B0F2DR5B8D';
  };

  return (
    <>
    <div className='MQ-MAIN'>
    <div className='heading'>
   
   </div>
   <div className="MQ-Main-container">
      
      <div className="MQ-content-container">
        <h1>You're Making Great Progress!</h1>
        <p>
        Think of MQ Yellow as being like an adventurous traveler – you've got your bearings, you're comfortable exploring, and you're ready to dive deeper. You're like someone who's learned enough cooking basics to start experimenting with fusion recipes!
        </p>
        <h3>What Being at Yellow Means:</h3>
        <ul>
          <li>You navigate cultural differences with growing confidence</li>
          <li>You're developing a toolkit of cross-cultural skills</li>
          <li>You're actively building meaningful connections across cultures</li>
        </ul>
        <h3>Why This Stage is Exciting: </h3>
        <p>
        You're at a dynamic point where theory meets practice. You're not just learning about cultural differences – you're actively engaging with them.
        </p>
        <h3>Enriching Activities to Try:</h3>
        <ul>
          <li>Join international professional networks</li>
          <li>Volunteer for multicultural projects at work</li>
          <li>Start a cultural exchange lunch group</li>
          <li>Take language classes</li>
          <li>Organize cultural appreciation events</li>
          <li>Mentor others beginning their cultural journey</li>
          <li>Participate in cultural exchange programs</li>
        </ul>
        <h3>Growth Opportunities:</h3>
        <ul>
          <li>Lead small cross-cultural team projects</li>
          <li>Write about your cultural learning experiences</li>
          <li>Create cultural bridges in your community</li>
          <li>Develop cultural training materials for beginners</li>
        </ul>
      </div>
      <div className="MQ-Image-container">
        <img src="/images/MQ_Yellow.png" alt="MQ Red Journey" />
      </div>
    </div>

    <div className="common-container">
  

        <section className="section">

         <div className='tip-success-box'>

         <h3>Tips for Success</h3>
          
          <div className='secondImagebox'>
          <div className='seconImagebox-image'>
                  <img src="/images/MQ-YELLOW-MEN.png" alt="" />
          </div>
                <div className='seconImagebox-image-content'>
                <ul className="custom-list">
            <li>Stay curious and open-minded</li>
            <li>Embrace learning opportunities</li>
            <li>Connect with others on similar journeys</li>
            <li>Document your experiences</li>
            <li>Share your learnings with others</li>
            <li>Be patient with your progress</li>
          </ul>
                </div>
                
          </div>
          </div>
          
          <div className='conclusion-image'>
          <img src="/images/Multicultural-ALL-IN-ONE.png" alt="" />
          </div>
          <h3 className="highlight">Remember</h3>
          <p className="highlight-text">
            Building a Multicultural Mindset is a journey, not a destination. Every interaction is an opportunity to learn and grow, regardless of your current MQ level.
          </p>
         
        </section>
        <div className="buy-now-section" style={{ backgroundImage: `url(${bookBackground})` }}>
    <div className='buy-now-image'>

    </div>
  <div className="buy-now-content">
    <h2>GET YOUR COPY NOW</h2>
    <button className="button" onClick={buyNow}>BUY NOW</button>
  </div>
  </div>

    </div>
    </div>
   
    </>
  )
}

export default MQ_Yellow
