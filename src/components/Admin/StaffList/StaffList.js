import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar2 from '../Navbar2';
import '../StaffList/StaffList.css';
import { Link } from 'react-router-dom';
import Sidebar2 from '../AdminSidebar/Sidebar2';
import axios from 'axios';

function StaffList() {
  const [toggle, setToggle] = useState(true);
  const [staffData, setStaffData] = useState([]);
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  const Toggle = () => {
    setToggle(!toggle);
  };

  

  const headers = {
    userId: userId,
    Authorization: token,
    "ngrok-skip-browser-warning": "true",
    // "Content-Type": "multipart/form-data",
  };
  // const fetchData = async () =>{ 
  //   try{
  //     const response = await axios.get(
  //       `${process.env.REACT_APP_SECRET_KEY}/admin/viewUsers?userId=${userId}`,
  //       {
  //       headers: headers
  //     }
  //   )

  //     setStaffData(response.data);
  //   }catch(error){
  //     console.log('Error Fetching Data:',error);
  //   }
  //   }
  // useEffect(()=>{
  //   // fetchData();
  //   },[]
  // )

  const [menu, setMenu] = useState("role");
  const navigate = useNavigate();
  const isLoggedIn=localStorage.getItem('isLoggedIn');
  useEffect(()=>{
   
    if(isLoggedIn===null)
    {
    navigate('/login');
    }
  },[])
  return (
    <>
      <Sidebar2 />
        <div className='row'>
          
          {toggle && <div className='col-4 col-md-2'></div>}
          <div className='col'>
            {/* <Navbar2 Toggle={Toggle} /> */}


            <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
              <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item1" onClick={() => { setMenu("DOCTOR") }}><Link style={{ textDecoration: 'none' }} to='/avail_doctors'>Doctors</Link>{menu === "DOCTOR" ? <hr /> : <></>}
                      {/* <Link className="nav-link active" aria-current="page" to="/doctors">
                  Doctor
                </Link> */}
                    </li>
                    <li className="nav-item1" onClick={() => { setMenu("NURSE") }}><Link style={{ textDecoration: 'none' }} to='/avail_nurses'>Nurses</Link>{menu === "NURSE" ? <hr /> : <></>}
                    </li>
                    <li className="nav-item1" onClick={() => { setMenu("RECEPTIONIST") }}><Link style={{ textDecoration: 'none' }} to='/avail_receptionist'>Receptionist</Link>{menu === "RECEPTIONIST" ? <hr /> : <></>}
                    </li>
                    <li className="nav-item1" onClick={() => { setMenu("PHARMACIST") }}><Link style={{ textDecoration: 'none' }} to='/avail_pharmacist'>Pharmacist</Link>{menu === "PHARMACIST" ? <hr /> : <></>}
                    </li>
                  </ul>
                </div>
              </div>
              
            </nav>
            {/* Wrap the `<h1>` elements within separate `Route` components */}
            
          </div>
        </div>
    </>
  );
}

export default StaffList;
