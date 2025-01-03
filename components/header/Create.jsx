import React, { useState } from 'react';
import './create.css';
import blog from "../../Assets/images/blog.png"
import Header from "./Header"
export const Create = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleCreatePost = () => {
    window.alert('Post created successfully!');
    setTimeout(() => {
      window.location.href = '/home';
    },);
  };

  return (
    <>
      <Header />
      <h1 style={{ textAlign: "center" }}>Happy Blogging!</h1>
      <section className="newPost">
        <div className="container boxItems">
          <div className="img">
            <img
              src={blog}
              alt="image"
              className="image-preview"
            />
          </div>
          <form>
            <div className="inputfile flexCenter">
              <input type="file" accept="image/*" alt="img" />
            </div>
            <input type="text" placeholder="Title" />
            <input type="text" placeholder="Blog Category" />

            <textarea
              name=""
              id=""
              placeholder="//Start Writing Your Blog..."
              cols="30"
              rows="10"
            ></textarea>

            <button className="button1" onClick={handleCreatePost}>
              Create Post
            </button>
          </form>
        </div>
      </section>
    </>
  );
};


export default Create