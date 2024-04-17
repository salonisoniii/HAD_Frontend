import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import "./doctor.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import Calendar from 'react-calendar';
import ReactCalendar from "./Cal";
import Patients from "./Patients";
import Navbar1 from "./Navbar1";
import DataGridDemo2 from "./docPatientList/docInPatientList";
import axios from "axios";
import { toast } from "react-toastify";

// import Test from './Test'

export default function Doctor() {
  const [isOpen, setIsOpen] = useState(true);
  const toggleProfile = () => {
    console.log("profile clicked");
    setIsOpen(!isOpen);
  };
  console.log("isOpen", isOpen);

  // const patients = [
  //   {
  //     id: 1,
  //     name: "John Doe",
  //     profilePhoto: process.env.PUBLIC_URL + "images/product_100.png",
  //   },
  //   {
  //     id: 2,
  //     name: "Jane Smith",
  //     profilePhoto: process.env.PUBLIC_URL + "images/product_100.png",
  //   },
  //   // Add more patient objects as needed
  // ];

  const [toggle, setToggle] = useState(true);

  const Toggle = () => {
    setToggle(!toggle);
  };

  const [IpCount, setIpCount] = useState(0);
  const [OpCount, setOpCount] = useState(0);

  const fetchdoc = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token");

      const headers = {
        Authorization: token,
        "ngrok-skip-browser-warning": "true",
      };

      const response = await axios.get(
        "https://present-neat-mako.ngrok-free.app/his/doc/home?userId=" +
          userId,
        {
          headers: headers,
        }
      );

      // Check if response status is successful before setting state
      if (response.status === 200) {
        setOpCount(response.data.opPatient);
        setIpCount(response.data.ipPatient);
      } else {
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      console.log("Hello123")
      console.log("Error here", error);
      toast.error("Error from Doctor. Please try again.");
    }
  };

  useEffect(() => {
    fetchdoc();
  }, []);

  return (
    <div>
      <div
        className="container-fluid  min-vh-100"
        style={{ backgroundColor: "#ECE3F0" }}
      >
        <div className="row">
          {toggle && (
            <div className="col-4 col-md-2 bg-white vh-100 position-fixed">
              <Sidebar Toggle={Toggle} />
            </div>
          )}
          {toggle && <div className="col-4 col-md-2"></div>}
          <div className="col">
            <Navbar1 Toggle={Toggle} />

            <div class="container">
              <div class="row">
                <div class="col-md my-.5">
                  <div class="p-1 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                    <div>
                      <h3 class="fs-2">{IpCount}</h3>
                      <p class="fs-5">In Patient</p>
                    </div>
                    <i class="bi bi-person-circle p-3 fs-1"></i>
                  </div>
                </div>
                <div class="col-md my-.5">
                  <div class="p-1 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                    <div>
                      <h3 class="fs-2">{OpCount}</h3>
                      <p class="fs-5">Out Patient</p>
                    </div>
                    <i class="bi bi-person-circle p-3 fs-1"></i>
                  </div>
                </div>
              </div>
            </div>
            <DataGridDemo2 />

            {/* {isOpen && (
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
            </div> */}
            {/* <div
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
            </div> */}
          </div>
        </div>
      </div>

      {/* <div className="calendar-container" style={{position: 'absolute',top: '0',right: '0',marginTop: '20px',marginRight: '0px'}}>
        <ReactCalendar/> 
        
        
        </div> */}
    </div>
  );
}
