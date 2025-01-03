import React from "react"
import image from "../../Assets/images/input.png"
import "./account.css"
import Header from "./Header"

const handleUpdateInfo = () => {
  window.alert('Information Updated Successfully');
  setTimeout(() => {
    window.location.href = '/home';
  },);
};

const Account = () => {
  return (
    <>
      <Header />
      <section className='accountInfo'>
        <div className='container boxItems'>
          <h1 style={{ textAlign: "center" }}> Update Account Information</h1>
          <div className='content'>
            <div className='left'>
              <div className='img flexCenter'>
                <input type='file' accept='image/*' src={image} alt='img' />
                <img src={image} alt='image' class='image-preview' />
              </div>
            </div>
            <div className='right'>
              <label htmlFor=''>Username</label>
              <input type='text' />
              <label htmlFor=''>Email</label>
              <input type='email' />
              <label htmlFor=''>Mobile Number</label>
              <input type='text' />
              <button className='button1' onClick={handleUpdateInfo}>Update</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Account