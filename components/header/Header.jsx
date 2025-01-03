import React, { useEffect } from "react";
import "./header.css";
import { User } from "./User";
import { Link } from "react-router-dom";
import { nav } from "./Data";
import logo from "../../Assets/images/logo.png"

const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (header) {
        header.classList.toggle("active", window.scrollY > 100);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="header">
        <div className="scontainer flex">
          <div className="logo">
            <img src={logo} alt="logo" width="100px" />
          </div>
          <div>
            <h1 className="title">INKWELL INSIGHTS</h1>
            <nav>
              <ul>
                {nav.map((link) => (
                  <li key={link.id}>
                    <Link to={link.url}>{link.text}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="account flexCenter">
            <User />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;



