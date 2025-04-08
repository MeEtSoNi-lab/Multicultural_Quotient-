import React from 'react'
import { useNavigate } from 'react-router-dom'
import bookBackground from '../assets/images/Books.png';

function MQ_Blue() {
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
        <h1>Congratulations on Reaching This Level!</h1>
        <p>
        Think of MQ Blue as being like a skilled cultural diplomat. You're like a master chef who can create beautiful fusion cuisines while respecting traditional recipes. You not only navigate different cultures with ease but help others do the same.        </p>
        <h3>What Being at Blue Means:</h3>
        <ul>
          <li>You're a natural bridge-builder between cultures</li>
          <li>You lead by example in multicultural environments</li>
          <li>You inspire others in their cultural learning journey</li>
        </ul>
        <h3>Why This Stage is Transformative:  </h3>
        <p>
        You're not just participating in cultural exchange – you're actively shaping how different cultures interact and work together.
        </p>
        <h3>Leadership Opportunities:</h3>
        <ul>
          <li>Develop cultural intelligence programs</li>
          <li>Mentor cross-cultural teams</li>
          <li>Lead global initiatives</li>
          <li>Write about cultural intelligence</li>
          <li>Speak at cultural diversity events</li>
          <li>Create innovative cultural training methods</li>
        </ul>
        <h3>Continuing Your Journey:</h3>
        <p>Even at Blue, there's always room to grow:</p>
        <ul>
          <li>Research emerging cultural trends</li>
          <li>Explore new cultural frontiers</li>
          <li>Develop innovative approaches to cultural challenges</li>
          <li>Create platforms for cultural exchange</li>
        </ul>
      </div>
      <div className="MQ-Image-container">
        <img src="/images/MQ_Blue.png" alt="MQ Red Journey" />
      </div>
    </div>

    <div className="common-container">
      <section className="section">
          <div className='tip-success-box'>
            
        <h3>Tips for Success</h3>
        <div className='secondImagebox'>
    <div className='seconImagebox-image'>
            <img src="/images/MQ-BLUE-MEN.png" alt="" />
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

export default MQ_Blue
