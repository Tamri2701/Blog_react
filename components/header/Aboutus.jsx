import React from 'react';
import './about.css';
import Header from "./Header"
import bhumi from "../../Assets/images/bhumi2.JPG"
import princy from "../../Assets/images/princy.jpg"
import tania from "../../Assets/images/tania.jpg"

const Aboutus = () => {
  return (<>
    <Header />
    <div className="container3">
      <h1>ABOUT US</h1>
      <p> Welcome to Inkwell Insights! We are passionate about sharing valuable information and insights with our readers. <br></br>Our mission is to provide high-quality content on a variety of topics that interest you. Whether you're looking for advice, tutorials, reviews, or simply entertaining stories, you'll find it here.<br></br><br></br> Our dedicated writers work tirelessly to bring you the best articles and stories, and we are committed to delivering content that educates, entertains, and inspires. Thank you for being a part of our community. Feel free to explore our blog, and don't hesitate to reach out if you have any questions or suggestions</p>
      <br></br>
      <h2>Creators of Inkwell Insights:</h2>
      <div className="card-container">
        <Card imageSrc={princy} name="Princy Anthony" />
        <Card imageSrc={bhumi} name="Bhumi Mulani" />
        <Card imageSrc={tania} name="Tania Kumari" />
      </div>
    </div>
  </>
  );
};

const Card = ({ imageSrc, name }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={name} />
      <p>{name}</p>
    </div>)
};

export default Aboutus;
