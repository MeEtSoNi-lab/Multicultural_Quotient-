import React from 'react';
import './MQ.css';
import { useNavigate } from 'react-router-dom';
import bookBackground from '../assets/images/Books.png';
function MQ_Red() {
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
        <h1>Welcome to Your Cultural Adventure!</h1>
        <p>
          Think of MQ Red as the starting line of an exciting journey. You're like someone who's just discovered a passion
          for cooking – you're learning the basics, getting familiar with the ingredients, and building your confidence.
          And that's exactly where everyone begins!
        </p>
        <h3>What Being at Red Means:</h3>
        <ul>
          <li>You're taking your first steps into understanding different cultures</li>
          <li>You're developing awareness of cultural differences</li>
          <li>You're building basic cross-cultural communication skills</li>
        </ul>
        <h3>Why This Stage is Important:</h3>
        <p>
          You're laying the foundation for all future cultural learning. Just like learning to walk before you run, these
          first steps are crucial for your development.
        </p>
        <h3>Fun Ways to Grow:</h3>
        <ul>
          <li>Start a "Culture Journal" to document new learnings</li>
          <li>Follow social media accounts from different cultures</li>
          <li>Try restaurants featuring cuisines you've never experienced</li>
          <li>Watch movies from different countries with subtitles</li>
          <li>Join cultural celebration events in your community</li>
          <li>Make a friend from a different cultural background</li>
        </ul>
        <h3>Next Steps:</h3>
        <p>Remember, everyone starts somewhere! Focus on:</p>
        <ul>
          <li>Being curious and open to new experiences</li>
          <li>Asking questions when you're unsure</li>
          <li>Celebrating small wins in cultural understanding</li>
        </ul>
      </div>
      <div className="MQ-Image-container">
        <img src="/images/MQ_Red.png" alt="MQ Red Journey" />
      </div>
    </div>


    <div className="common-container">
    

  

  <section className="section">
   
    <div className='tip-success-box'>
        <h3>Tips for Success</h3>

        <div className='secondImagebox'>
        <div className='seconImagebox-image'>
                <img src="/images/MQ-RED-MEN.png" alt="" />
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
  );
}

export default MQ_Red;
