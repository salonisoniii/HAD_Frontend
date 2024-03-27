import React from 'react';
import './doctor.css';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { useState } from 'react';



function Navbar({ Toggle }) {
  
    const [showDropdown, setShowDropdown] = useState(false); // State to manage dropdown visibility
  
    // Function to toggle dropdown visibility
    const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
    }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent"> 
        <div className="container-fluid">
          {/* Move the toggle button to the sidebar */}
          <i className="bi bi-justify-left fs-4 sidebar-toggle" onClick={Toggle}></i>
          <div className='m-3'>
            <Link to = '/calendar'>
                <i className='bi bi-bootstrap-fill me-3 fs-4'></i>
                <span className='brand-name fs-4'>HIS</span>
            </Link>
          </div>
          
          {/* <div> */}
          {/* <div style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src="/images/profile-picture.jpg" // Replace this with the path to your profile picture
        alt="Profile"
        className="profile-image"
        onClick={toggleDropdown} // Call toggleDropdown function when profile picture is clicked
      />
      <Dropdown show={showDropdown} onClose={() => setShowDropdown(false)}>
        <Dropdown.Toggle variant="transparent" id="dropdown-basic">
          {/* You can put the name or username here */}
          {/* User Name */}
        {/* </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="/profile">Profile</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
    </div> 
           */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="" role="button"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  <img src='/images/product_100.png' alt = 'profile image' className='profile-image' />
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/doctor">Profile</Link></li>
                  <li><Link className="dropdown-item" to="/doctor">Setting</Link></li>
                  <li><Link className="dropdown-item" to="/doctor">Logout</Link></li>
                </ul>
              </li>
            </ul>
          </div>
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;
