import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "./doctor.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import Calendar from 'react-calendar';
import ReactCalendar from "./Cal";
import Patients from "./Patients";
import Navbar1 from "./Navbar1";
// import Test from './Test'

export default function Doctor() {
  const [isOpen, setIsOpen] = useState(true);
  const toggleProfile = () => {
    console.log("profile clicked");
    setIsOpen(!isOpen);
  };
  console.log("isOpen", isOpen);
  const patients = [
    {
      id: 1,
      name: "John Doe",
      profilePhoto: process.env.PUBLIC_URL + "images/product_100.png",
    },
    {
      id: 2,
      name: "Jane Smith",
      profilePhoto: process.env.PUBLIC_URL + "images/product_100.png",
    },
    // Add more patient objects as needed
  ];

  const [toggle, setToggle] = useState(true);

  const Toggle = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <div className="container-fluid  min-vh-100" >
        <div className="row">
          {toggle && (
            <div className="col-4 col-md-2 bg-white vh-100 position-fixed">
              <Sidebar Toggle={Toggle} />
            </div>
          )}
          {toggle && <div className="col-4 col-md-2"></div>}
          <div className="col">
            <Navbar1 Toggle={Toggle}  />

            {isOpen && (
              <div
                className="dropdown-menu"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100vw",
                  height: "100vh",
                  background: "rgba(0, 0, 0, 0.5)",
                  zIndex: 9999,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      width: "200px",
                      background: "#fff",
                      padding: "20px",
                      borderRadius: "5px",
                    }}
                  >
                    <p>This is a dropdown content</p>
                    <p>It opens on clicking the profile picture</p>
                  </div>
                </div>
              </div>
            )}
            <div>
              <Patients patients={patients} />
            </div>
            <div
              className="calendar-container"
              style={{
                position: "absolute",
                top: "0",
                right: "0",
                marginTop: "20px",
                marginRight: "15px",
              }}
            >
              <ReactCalendar />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="calendar-container" style={{position: 'absolute',top: '0',right: '0',marginTop: '20px',marginRight: '0px'}}>
        <ReactCalendar/> 
        
        
        </div> */}
    </div>
  );
}
