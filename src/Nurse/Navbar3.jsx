import React from "react";
import "./nurse.css";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { useState } from "react";
import "../Nurse/style3.css";

function Navbar3({ Toggle, handleSignOut }) {
  // const [showDropdown, setShowDropdown] = useState(false); // State to manage dropdown visibility

  // Function to toggle dropdown visibility
  // const toggleDropdown = () => {
  //   setShowDropdown(!showDropdown);
  // }

  const [isOpen, setIsOpen] = useState(true);
  const toggleProfile = () => {
    console.log("profile clicked");
    setIsOpen(!isOpen);
  };
  console.log("isOpen", isOpen);
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-transparent"
        style={{ marginTop: "-20px" }}
      >
        <div className="container-fluid">
          {/* Move the toggle button to the sidebar */}
          <i
            className="bi bi-justify-left fs-4 sidebar-toggle"
            onClick={Toggle}
          ></i>
          <div className="m-3">
            <Link to="/nurse">
              <i className="bi bi-bootstrap-fill me-3 fs-4"></i>
              <span className="brand-name fs-4">HIS</span>
            </Link>
          </div>

          {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="" role="button"
                  data-bs-toggle="dropdown" aria-expanded="false">
                    <img
                    src={process.env.PUBLIC_URL + "images/product_100.png"}
                    alt="profile image"
                    className="profile-image"
                    onClick={toggleProfile}
                  />
                  </Link>
                <div className="dropdown" style={{ position: "relative" }}>
                  
                  <div style={{width:'500px', height:'50px', backgroundColor:'blue'}}></div> */}
          {/* {isOpen && (
                            <div className="dropdown-menu" style={{ position: 'absolute', top: '100%', right: '0', width: '200px', background: '#fff', zIndex: 1000 }}>
                                <div style={{ height: '100vh', width: '200px' }}> */}
          {/* Add your content here */}
          {/* <p>This is a dropdown content</p>
                                    <p>It opens on clicking the profile picture</p>
                                </div>
                            </div>
                        )}   */}
          {/* </Link> */}
          {/* <Link
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  > */}
          {/* <img
                      src={process.env.PUBLIC_URL + "images/product_100.png"}
                      alt="profile image"
                      className="profile-image"
                    /> */}
          {/* </Link> */}
          {/* <ul className="dropdown-menu ">
                    <img
                      src={process.env.PUBLIC_URL + "images/product_100.png"}
                      alt="profile image"
                      className="profile-image"
                      style={{
                        width: "70px",
                        height: "70px",
                        padding: "10px",
                        marginLeft: "70px",
                      }}
                    />
                    <li className="dropdown-item">
                      <table>
                        <tbody>
                          <tr>
                            <td>John Doe</td>
                          </tr>
                          <tr>
                            <td>john.doe@example.com</td>
                          </tr>
                          <tr>
                            <td>9126543458</td>
                          </tr>
                        </tbody>
                      </table>
                    </li> */}
          {/* <li><Link className="dropdown-item" to="/profile">John Doe</Link></li>
                   <li><Link className="dropdown-item" to="/profile">john.doe@example.com</Link></li>
                    <li><Link className="dropdown-item" to="/profile">9126543458</Link></li> */}
          {/* <li>
                      <Link className="dropdown-item" to="/change-password">
                        Change Password
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/settings">
                        Settings
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/edit-profile">
                        Edit Profile
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li className="text-center">
                      {" "} */}
          {/* Center the Sign Out button */}
          {/* <Link
                        className="btn btn-link btn-danger"
                        to="/"
                        style={{ textDecoration: "none", color: "black" }}
                        onClick={handleSignOut}
                      >
                        Sign Out
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={process.env.PUBLIC_URL + "images/product_100.png"}
                    alt="profile image"
                    className="profile-image"
                  />
                </Link>
                <ul className="dropdown-menu " style={{marginLeft:'-75px'}}>
                  <img
                    src={process.env.PUBLIC_URL + "images/product_100.png"}
                    alt="profile image"
                    className="profile-image"
                    style={{
                      width: "70px",
                      height: "70px",
                      padding: "10px",
                      marginLeft: "70px",
                    }}
                  />
                  
                  <li><Link className="dropdown-item" to="/profile">John Doe</Link></li>
                  <li><Link className="dropdown-item" to="/profile">john.doe@example.com</Link></li>
                  <li><Link className="dropdown-item" to="/profile">9126543458</Link></li>
                  <li>
                    <Link className="dropdown-item" to="/change-password">
                      Change Password
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/settings">
                      Settings
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/edit-profile">
                      Edit Profile
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li className="text-center">
                    {" "}
                    {/* Center the Sign Out button */}
                    <Link
                      className="btn btn-link btn-danger"
                      to="/"
                      style={{ textDecoration: "none", color: "black" }}
                      onClick={handleSignOut}
                    >
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar3;
