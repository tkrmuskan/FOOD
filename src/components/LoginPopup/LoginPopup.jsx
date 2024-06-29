import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({ showLogin, setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");

  const handleClose = () => {
    setShowLogin(false);
  }

  return (
    <div className={`login-popup ${showLogin ? 'show' : ''}`}>
      <form className='login-popup-container'>
        <div className='login-popup-title'>
          <h2>{currState}</h2>
          <img onClick={handleClose} src={assets.cross_icon} alt="Close" />
        </div>
        <div className='login-popup-inputs'>
          {currState === "Sign Up" && <input type='text' placeholder='Your name' required />}
          <input type='email' placeholder='Your email' required />
          <input type='password' placeholder='Password' required />
        </div>
        <button>{currState === "Sign Up" ? "Create account" : "Login"}</button>
        <div className='login-popup-condition'>
          <input type='checkbox' required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login"
          ? <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
          : <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
        }
      </form>
    </div>
  );
}

export default LoginPopup;
