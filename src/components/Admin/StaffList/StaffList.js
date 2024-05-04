import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import '../StaffList/StaffList.css';
import { Link } from 'react-router-dom';
import Sidebar2 from '../AdminSidebar/Sidebar2';
import Category from '../Pages/Category';
import axios from 'axios';


function StaffList() {
  const [toggle, setToggle] = useState(true);
  const [staffData, setStaffData] = useState([]);

  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  const [selectedRole, setSelectedRole] = useState(null);
  const Toggle = () => {
    setToggle(!toggle);
  };



  const headers = {
    Authorization: token,
    "ngrok-skip-browser-warning": "true",
    // "Content-Type": "multipart/form-data",
  };
 


  const [menu, setMenu] = useState("role");
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  useEffect(() => {

    if (isLoggedIn === null) {
      navigate('/login');
    }
  }, [])
  const handleRoleClick = (role) => {
    setSelectedRole(role);
    // Navigate to the Category route with selected role
  };
  return (
    <>
      <Sidebar2 />
      <div className='row'>

        {toggle && <div className='col-4 col-md-2'></div>}
        {/* <div className='col'> */}
          {/* <Navbar2 Toggle={Toggle} /> */}


          <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
            <div className="container-fluid">
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item1" onClick={() => { handleRoleClick("DOCTOR"); setMenu("DOCTOR") }}><Link style={{ textDecoration: 'none' }} to='/stafflist'>Doctors</Link>{menu === "DOCTOR" ? <hr /> : <></>}
                    {/* <Link className="nav-link active" aria-current="page" to="/doctors">
                  Doctor
                </Link> */}
                  </li>
                  <li className="nav-item1" onClick={() => { handleRoleClick("NURSE"); setMenu("NURSE") }}><Link style={{ textDecoration: 'none' }} to='/stafflist'>Nurses</Link>{menu === "NURSE" ? <hr /> : <></>}
                  </li>
                  <li className="nav-item1" onClick={() => { handleRoleClick("RECEPTIONIST"); setMenu("RECEPTIONIST") }}><Link style={{ textDecoration: 'none' }} to='/stafflist'>Receptionist</Link>{menu === "RECEPTIONIST" ? <hr /> : <></>}
                  </li>
                  <li className="nav-item1" onClick={() => { handleRoleClick("PHARMACIST"); setMenu("PHARMACIST") }}><Link style={{ textDecoration: 'none' }} to='/stafflist'>Pharmacist</Link>{menu === "PHARMACIST" ? <hr /> : <></>}
                  </li>
                </ul>
               
              </div>
            </div>

          </nav>
          {/* Wrap the `<h1>` elements within separate `Route` components */}
          
          
          {selectedRole && <Category role={selectedRole} />}
            
        </div>
    </>
  );
}

export default StaffList;
