import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header id="header">
      <div className="header">
        <div className="header_in">
          <div className="trigger_logo">
            {/* <div className="trigger" onClick={() => navigationToggle(true)}>
              <span />
            </div> */}
            <div className="logo">
              <Link to="/">
                <a href="/">
                  <img src="/img/logo.png" alt="" />
                </a>
              </Link>
            </div>
          </div>
          <div className="nav" style={{ opacity: 1 }}>
            <ul>
              <li>
                <Link to="/#home">
                  <a href="/" className="creative_link">Home</a>
                </Link>
              </li>
              <li>
                <Link to="/#about">
                  <a href="/" className="creative_link">About</a>
                </Link>
              </li>
              <li>
                <Link to="/#collection">
                  <a href="/" className="creative_link">Gallery</a>
                </Link>
              </li>
              {/* <li>
                <Link to="/#news">
                  <a className="creative_link">Blog</a>
                </Link>
              </li> */}
              <li>
                <Link to="/#contact">
                  <a href="/" className="creative_link">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="wallet">
            <a href="/" className="metaportal_fn_button wallet_opener">
              <span>Workshops</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
