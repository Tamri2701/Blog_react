import React, { useState, useRef, useEffect } from "react";
import "./details.css";
import "../../components/header/header.css";
import { FaHeart, FaBell, FaPlus } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Header from "./Header";
import { comments1, blog } from "./Data";

const Details = () => {
  const { id } = useParams();
  const [blogs, setBlogs] = useState(null);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(comments1); // Initialize with your hardcoded comments
  const [showCommentInput, setShowCommentInput] = useState(false);

  const commentInputRef = useRef(null);

  const formatDate = (dateString) => {
    const [day, month, year] = dateString.split('/'); // Split the date into parts
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(`${month} ${day} ${year}`).toLocaleDateString(undefined, options);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment) {
      const newComment = {
        text: comment,
        timestamp: new Date().toLocaleString(),
        blogger: "You", // Set the blogger name to "You" for user comments
      };

      setComments((prevComments) => [...prevComments, newComment]);
      setComment("");
      commentInputRef.current.value = "";
    }
  };

  const handleAddCommentClick = () => {
    setShowCommentInput(true);
    if (commentInputRef.current) {
      commentInputRef.current.focus();
    }
  };

  useEffect(() => {
    const selectedBlog = blog.find((blog) => blog.id === parseInt(id));
    if (selectedBlog) {
      setBlogs(selectedBlog);
    }
  }, [id]);

  return (
    <>
      {blogs ? (
        <section className="singlePage">
          <div className="container">
            <div className="left">
              <img src={blogs.cover} alt="" />
            </div>

            <div className="buttons">
              <button className="button">
                <FaHeart />
              </button>
              <button className="button">
                <FaBell />
              </button>
            </div>
            <h1 style={{ textAlign: "center", textTransform: "uppercase" }}>
              {blogs.title}
            </h1>
            <h3>-{blogs.author}</h3>
            <h2 style={{ color: "blue" }}>#{blogs.category}</h2>
            <p>{blogs.desc}</p>
            <p>Last edited on: {blogs.date}</p>

            <div className="comments-container">
              <h3>Comments:</h3>
              <ul>
                {comments.map((comment, index) => (
                  <li key={index}>
                    <strong>
                      {formatDate(comment.timestamp)}, {comment.blogger}:
                    </strong>{" "}
                    {comment.text}
                  </li>
                ))}
              </ul>
              {showCommentInput && (
                <form onSubmit={handleCommentSubmit}>
                  <input
                    type="text"
                    placeholder="Add a comment"
                    ref={commentInputRef}
                    onChange={(e) => setComment(e.target.value)}
                  />
                  <button type="submit">Submit</button>
                </form>
              )}
            </div>

            <button
              className="add-comment-button"
              onClick={handleAddCommentClick}
            >
              <FaPlus /> Add Comment
            </button>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default Details;