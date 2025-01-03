import React, { useEffect } from 'react';

const Logout = () => {
  useEffect(() => {
    alert('You have been logged out.');
    setTimeout(() => {
      window.location.href = '/';
    }, 0);
  }, []);

};

export default Logout;

