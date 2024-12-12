import logo from './logo.svg';
import './App.css';
import Home from './components/home/home';
import Footer from './components/footer/footer';

function App() {
  return (
    
    <>
    <div className='message-box'>
      <div className='message-form'>
        <h1>Message</h1>
      </div>

      <div className='message-icon'>
          <i  class="fa-solid fa-message"></i>
          <i class="fa-solid fa-xmark"></i>
      </div>
    </div>
      <Home/>
      <Footer/>
    </>
  );
}

export default App;
