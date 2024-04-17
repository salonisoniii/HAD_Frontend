import React from "react";
import { Link } from "react-router-dom";
import "./home.css"; // Import your CSS file for styling
// import { Component } from 'react';

export default function Home() {
  return (
    <>
      {/* <nav className="navbar">
      <Link to="/" className="navbar-brand">Hospital Information System</Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to='/Do'>What we do</Link>
        </li>
        <li className="nav-item">
          <Link to="/Serve" className="nav-link">What we serve</Link>
        </li>
        <li className="nav-item">
          <Link to="/WeAre" className="nav-link">Who we are</Link>
        </li>
        <li className="nav-item">
          <Link to="/OServices" className="nav-link">Our services</Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">Login</Link>
        </li>
      </ul>
//     </nav> */}
      {/* <nav
        class="navbar bg-body-tertiary"
        style={{ height: "60px", width: "100%" }}
      >
        <div class="container-fluid">
          <Link to="/" className="navbar-brand">
            Hospital Information System
          </Link>
          <form class="d-flex" role="search">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </form>
        </div>
      </nav>
      <div className="background-image"></div>
      <footer className="footer">
        <div className="team-members">
          <p>
            Team Members- Jay Panchal, Brijesh Prajapati, Darshit Jakhaniya,
            Aditi Singh, Saloni Maheshwari
          </p>
        </div>
        <div className="copyright" style={{ marginLeft: "20px" }}>
          <p>&copy; 2024 Hospital Information System</p>
        </div>
      </footer> */}
      <nav class="navbar bg-body-tertiary" style={{ height: "60px", width: "100%" }}>
  <div class="container-fluid">
    <Link to="/" className="navbar-brand">
      Hospital Information System
    </Link>
    <form class="d-flex" role="search">
      {/* <Link to="/login" className="nav-link">
        Login
      </Link> */}
      <Link to="/login" className="nav-link">
        Login
      </Link>
    </form>
  </div>
</nav>
<div className="background-image" style={{backgroundImage:`url(${process.env.PUBLIC_URL}/images/14.jpg)`}}></div> {/* This will be the background image */}
<footer className="footer">
  <div className="team-members">
    <p>
      Team Members- Jay Panchal, Brijesh Prajapati, Darshit Jakhaniya,
      Aditi Singh, Saloni Maheshwari
    </p>
  </div>
  <div className="copyright" style={{ marginLeft: "20px" }}>
    <p>&copy; 2024 Hospital Information System</p>
  </div>
</footer>

    </>
  );
}
