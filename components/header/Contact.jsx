import React, { useState } from 'react';
import Header from './Header';
import './Contact.css';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowMessage(true);
    alert('Thanks for the Feedback');
  };

  return (
    <>
      <Header />
      <div className="backgroundStyle">
        <div className="containerStyle">
          <div className="contact-us">
            <h1>Contact Us</h1>
            <p>If you have any questions or feedback, please feel free to get in touch with us.</p>
            <div className="contact-info">
              <form onSubmit={handleSubmit}>
                <div>
                  <input type="text" placeholder="Name" />
                  <input type="text" placeholder="Email" />
                  <textarea id="message" name="message" placeholder="Message" cols="30" rows="5" />
                  <button type="submit" className="b1">
                    Submit
                  </button>
                </div>
                <br></br>
                <pre><FaEnvelope />  <a href='inkwell_insights@gmail.com'><u>inkwell_insights@gmail.com</u></a>   <FaPhone />   +91 9876543210  </pre>
              </form>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
