import { useState } from 'react';
import './App.css';
import Home from './components/home/home';
import Footer from './components/footer/footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Results from './components/results/results';
import Header from './components/header/Header';
import { multiStepContext } from './StepContext';
import React from 'react';
import emailjs from "emailjs-com";

function App() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const enabaleForm = () => {
    setIsFormVisible(true);
  };

  const [formData, setformData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const submitData = (e) => {
    e.preventDefault(); // Prevent page reload
  
    emailjs
      .send(
        "service_4af2rwn", // Replace with your EmailJS Service ID
        "meet_soni", // Replace with your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "QCOxsV2vFpIuaiirS" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
          setformData({ name: "", email: "", message: "" }); // Clear form
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Failed to send message. Try again.");
        }
      );
  };

  const disableForm = () => {
    setIsFormVisible(false);
  };

  return (
    <Router>
      <Header/>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="message-box">
                {isFormVisible && (
                  <div className="message-form">
                    <div className="message-form-heading">
                      <h1>JOYCELYN DAVID</h1>
                    </div>

                    <div className="message-form-info">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Name"
                        onChange={(e) =>
                          setformData({ ...formData, name: e.target.value })
                        }
                      />

                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Email"
                        onChange={(e) =>
                          setformData({ ...formData, email: e.target.value })
                        }
                      />

                      <label htmlFor="message">How can we help?</label>
                      <textarea
                        id="message"
                        placeholder="Type your message here"
                        onChange={(e) =>
                          setformData({ ...formData, message: e.target.value })
                        }
                      ></textarea>

                      <div className="message-form-info-button">
                        <button onClick={submitData}>Submit</button>
                      </div>

                      <div className="message-form-info-policy">
                        <label>This site is protected by reCAPTCHA and the Google</label>
                        <label>
                          <span>Privacy Policy</span> and <span>Terms of Service</span> apply.
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                <div className="message-icon">
                  {isFormVisible ? (
                    <i className="fa-solid fa-xmark" onClick={disableForm}></i>
                  ) : (
                    <i className="fa-solid fa-message" onClick={enabaleForm}></i>
                  )}
                </div>
              </div>
              <Home />
              
            </>
          }
        />

      <Route path='/results' element={<Results/>} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
