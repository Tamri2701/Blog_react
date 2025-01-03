import React, { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import { GrHelp } from "react-icons/gr";
import { BiLogOut } from "react-icons/bi";
import { RiImageAddLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import profile from "../../Assets/images/profile.png";

export const User = () => {

  const [profileOpen, setProfileOpen] = useState(false);
  const user = true;
  const close = () => {
    setProfileOpen(false);
  };

  return (
    <>
      <div className='profile'>
        {user ? (
          <>
            <button className='img' onClick={() => setProfileOpen(!profileOpen)}>
              <img src={profile} alt='' />
            </button>
            {profileOpen && (
              <div className='openProfile boxItems' onClick={close}>
                <Link to='/account'>
                  <div className='image'>
                    <div className='img'>
                      <img src={profile} alt='' />
                    </div>
                    <div className='text'>
                      <h3>Blogger's Corner</h3>

                    </div>
                  </div>
                </Link>
                <Link to='/create'>
                  <button className='box'>
                    <RiImageAddLine className='icon' />
                    <h4>Create Post</h4>
                  </button>
                </Link>
                <Link to='/account'>
                  <button className='box'>
                    <IoSettingsOutline className='icon' />
                    <h4>My Account</h4>
                  </button>
                </Link>

                <button className='box'>
                  <AiOutlineHeart className='icon' />
                  <h4>Favorites</h4>
                </button>
                <Link to='/contact'>
                  <button className='box'>
                    <GrHelp className='icon' />
                    <h4>Help</h4>
                  </button>
                </Link>
                <Link to='/logout'>
                  <button className='box'>
                    <BiLogOut className='icon' />
                    <h4>Log Out</h4>
                  </button>
                </Link>
              </div>
            )}
          </>
        ) : (
          <button>My Account</button>
        )}
      </div>
    </>
  );
};
export default User;
