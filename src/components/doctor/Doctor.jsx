import React, { useEffect, useState } from "react";
import Sidebar from "./DocSidebar/Sidebar";
import "./doctor.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import Calendar from 'react-calendar';
import ReactCalendar from "./Cal";
import Patients from "./Patients";
import Navbar1 from "./Navbar1";
import axios from "axios";
import { toast } from "react-toastify";
import DocOPPatientList from "./docPatientList/docOPPatientList";

// import Test from './Test'

export default function Doctor() {
  const [isOpen, setIsOpen] = useState(true);
  const toggleProfile = () => {
    console.log("profile clicked");
    setIsOpen(!isOpen);
  };
  console.log("isOpen", isOpen);

  const [toggle, setToggle] = useState(true);

  const Toggle = () => {
    setToggle(!toggle);
  };

  const [IpCount, setIpCount] = useState(0);
  const [OpCount, setOpCount] = useState(0);
  const [emer,setEmer] = useState([]);
  const [data,setData] = useState({});


  const fetchdoc = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token");

      const headers = {
        Authorization: token,
        "ngrok-skip-browser-warning": "true",
      };

      const response = await axios.get(
        `${process.env.REACT_APP_SECRET_KEY}/doc/home?userId=` +
          userId,
        {
          headers: headers,
        }
      );
      console.log("data of the user",response.data);

      // Check if response status is successful before setting state
      if (response.status === 200) {
        if(response.data){
        setOpCount(response.data.opPatient);
        setIpCount(response.data.ipPatient);
        setEmer(response.data.emergencies);
        setData(response.data.detail);
        }
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

  const username = localStorage.getItem('username');
  return (
    <div>
      <Sidebar />
        <div className="row">
         
          {/* {toggle && <div className="col-4 col-md-2"></div>} */}
          <div className="col" style={{marginLeft:'230px'}}>
            {/* <Navbar1 Toggle={Toggle} /> */}

            <div class="container">
              <div class="row">
              <div class="col-md my-.5">
                  <div class="">
                    <div>
                      <h3 class="fs-2" style={{display:'flex',justifyContent:'center',marginTop:'20px'}}>Hello {data.firstName}</h3>
                      {/* <p class="fs-5">{data.firstName}</p> */}
                    </div>
                  </div>
                </div>
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
            <div class="container">
            <DocOPPatientList emer={emer} />
            </div>

           
          </div>
        </div>
      </div>
  );
}
