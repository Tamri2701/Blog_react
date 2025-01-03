import React, { useState } from 'react';
import './log.css';
import gtd from '../../Assets/images/bg2.jpg';
function Register() {

  const backgroundStyle = {
    backgroundImage: `url(${gtd})`,
    width: "100vw",
    height: "100vh",
    backgroundSize: 'cover',
    backgroundPostion: "center",
  };

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    username: '',
    phoneNumber: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      email: '',
      password: '',
      confirmPassword: '',
      phoneNumber: '',
    };

    if (!formData.email || !formData.email.match(/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/)) {
      newErrors.email = 'Please enter a valid email address';
      valid = false;
    }

    if (!formData.password || formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
      valid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      valid = false;
    }

    if (!formData.phoneNumber || !formData.phoneNumber.match(/^\d{10}$/)) {
      newErrors.phoneNumber = 'Phone Number must be a 10-digit integer';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted successfully:', formData);
      window.location.href = '/';
    }
  };

  return (
    <section className='login'>
      <div style={backgroundStyle}>
        <h2 style={{ textAlign: "center", fontSize: 30 }}>Sign Up</h2>
        <form className="form1" onSubmit={handleSubmit}>

          <div>
            <label>Email: <span className="redast">*</span></label>
            <input className='input1'
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div>
            <label>Password: <span className="redast">*</span></label>
            <input className='input1'
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <div>
            <label>Confirm Password: <span className="redast">*</span></label>
            <input className='input1'
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
          </div>
          <div>
            <label>Username: <span className="redast">*</span></label>
            <input className='input1'
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            {errors.username && <p className="error">{errors.username}</p>}
          </div>
          <div>
            <label>Phone Number: <span className="redast">*</span></label>
            <input className='input1'
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
            {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
          </div>
          <div>
          </div>
          <button className="button1" onClick={handleSubmit}>Sign Up</button><br></br>

          <p>
            Already a member? <u><a href='/'>Login</a></u> now
          </p>
        </form>
      </div>
    </section>

  );
}

export default Register;

