import React from "react";
import image from "../../Assets/images/input.png";
import "./profile.css";
import Header from "./Header";
import travel from "../../Assets/images/travel.jpg";
import lifestyle from "../../Assets/images/lifestyle.png"
import fitness from "../../Assets/images/fitness.jpg"

const Profile = ({ }) => {
  return (
    <>
      <Header />
      <section className='accountInfo'>
        <div className='container boxItems'>
          <h1 style={{ textAlign: "center" }}>My Profile</h1>
          <hr></hr>
          <div className='content'>
            <div className='left'>
              <div className='img flexCenter'>
                <img src={image} alt='image' className='image-preview' />
              </div>
            </div>

            <div className="profile-container">
              <h1><b>blogger_123</b></h1>
              <hr></hr>

              <pre className="grey-text">     3                  98</pre>
              <pre className="grey-text1">   Blogs               Subscribers</pre>

              <div className="button-container">
                <button className='button'>Edit Profile</button>
                <button className='button'>Share Profile</button>
              </div>

              <br></br>
              <h2>My Blogs</h2>
              <div className="card-container">
                <Card imageSrc={travel} name="Travel around the World" />
                <Card imageSrc={fitness} name="Importnace of Fitness" />
                <Card imageSrc={lifestyle} name=" 7 Tips for Healthy Lifestyle" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const Card = ({ imageSrc, name }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={name} />
      <p>{name}</p>
    </div>
  )
};

export default Profile;

