import React, { useState } from 'react';
import './log.css';
import backgroundImage from '../../Assets/images/bg.jpg';
import log from '../../Assets/images/log.png';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    mobile: '',
  });

  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [generatedOTP, setGeneratedOTP] = useState('');
  const [enteredOTP, setEnteredOTP] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [mobileError, setMobileError] = useState('');

  const isMobileValid = (mobile) => {
    return /^\d{10}$/.test(mobile);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Check for mobile number validation here
    if (name === 'mobile' && !isMobileValid(value)) {
      setMobileError('Mobile number must be 10 digits');
    } else {
      setMobileError('');
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleGenerateOTP = () => {
    if (formData.username && formData.mobile && isMobileValid(formData.mobile)) {
      const generatedOTP = Math.floor(100000 + Math.random() * 900000);
      setOtp(generatedOTP);
      setGeneratedOTP(generatedOTP.toString());
      setOtpSent(true);
    } else {
      console.log('Please enter both username and a valid mobile number.');
    }
  };

  const handleLogin = () => {
    if (enteredOTP === generatedOTP) {
      setLoggedIn(true);
      setTimeout(() => {
        window.location.href = '/home';
      }, 0);
    } else {
      window.alert('Invalid OTP! Please try again.');
    }
  };

  return (
    <section className="login" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="container">
        <div className="text">
          <h3>Login</h3>
        </div>
      </div>

      <form>
        <span>Username<span className="redast">*</span></span>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <span>Mobile Number<span className="redast">*</span></span>
        <input
          type="text"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          required
        />
        {mobileError && <p className="error">{mobileError}</p>}

        {!otpSent ? (
          <button className="button1" onClick={handleGenerateOTP}>
            Generate OTP
          </button>
        ) : (
          <>
            <p>Your OTP: {otp}</p>
            <span>Enter OTP<span className="redast">*</span></span>
            <input
              type="text"
              name="otp"
              value={enteredOTP}
              onChange={(e) => setEnteredOTP(e.target.value)}
              required
            />
            <button className="button1" onClick={handleLogin}>
              Log in
            </button>
          </>
        )}
        <br></br>
        {enteredOTP !== '' && enteredOTP !== generatedOTP && (
          <p className="error">Invalid OTP. Please try again.</p>
        )}
        <img src={log} alt="Login" />
        <p>
          Not a member? <u><a href="/register">Register</a></u> now.
        </p>
      </form>
    </section>
  );
};

export default Login;

