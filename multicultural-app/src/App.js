import { useState } from 'react';
import './App.css';
import Home from './components/home/home';
import Footer from './components/footer/footer';

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

  const submitData = () => {
    console.log(formData.name, formData.email, formData.message);

    const data = {
      Name: formData.name,
      Email: formData.email,
      Message: formData.message,
    };

 
  };

  const disableForm = () => {
    setIsFormVisible(false);
  };

  return (
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
                onChange={(e) => setformData({ ...formData, name: e.target.value })}
              />

              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                onChange={(e) => setformData({ ...formData, email: e.target.value })}
              />

              <label htmlFor="message">How can we help?</label>
              <textarea
                id="message"
                placeholder="Type your message here"
                onChange={(e) => setformData({ ...formData, message: e.target.value })}
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
      <Footer />
    </>
  );
}

export default App;
