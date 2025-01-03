import React from 'react';
import './trending.css';
import Header from "./Header"
import { paragraph } from './Data'
import { FaCommentAlt, FaThumbsUp, FaShareAlt, FaFileDownload } from 'react-icons/fa';

const Trending = () => {
  return (
    <>
      <Header />
      <div className="trending-container">
        <h1 className="blog-heading">Mini Blogs</h1>

        {paragraph.map((paragraph) => (
          <div className="horizontal-tile" key={paragraph.id}>
            <div className="image-container">
              <img src={paragraph.image} alt="" className="image" />
            </div>
            <div className="text-container">
              <h2 style={{ textAlign: "center" }}>{paragraph.heading}</h2>
              <p className="paragraph-container">
                {paragraph.content}
              </p>
              <br></br>
              <pre style={{ fontSize: "20px", textAlign: "center" }}><FaThumbsUp />          <FaShareAlt />         <FaCommentAlt />        <FaFileDownload /></pre>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Trending;
