import React, { useState } from 'react';
import Navbar2 from '../Navbar2';
import '../StaffList/StaffList.css';
import { Link } from 'react-router-dom';
import Sidebar2 from '../Sidebar2';

function StaffList() {
  const [toggle, setToggle] = useState(true);

  const Toggle = () => {
    setToggle(!toggle);
  };

  const [menu,setMenu] = useState("category");
  return (
    <div>
      <div className='container-fluid bg-secondary min-vh-100' >
        <div className='row'>
          {toggle && (
            <div className='col-4 col-md-2 bg-white vh-100 position-fixed'>
              <Sidebar2 Toggle={Toggle} />
            </div>
          )}
          {toggle && <div className='col-4 col-md-2'></div>}
          <div className='col'>
            <Navbar2 Toggle={Toggle}  />

    
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item1" onClick={() => {setMenu("doctors")}}><Link style={{textDecoration : 'none'}} to ='/avail_doctors'>Doctors</Link>{menu==="doctors"?<hr/>:<></>}
                {/* <Link className="nav-link active" aria-current="page" to="/doctors">
                  Doctor
                </Link> */}
              </li>
              <li className="nav-item1" onClick={() => {setMenu("nurses")}}><Link style={{textDecoration : 'none'}} to ='/avail_nurses'>Nurses</Link>{menu==="nurses"?<hr/>:<></>}
              </li>
              <li className="nav-item1" onClick={() => {setMenu("receptionist")}}><Link style={{textDecoration : 'none'}} to ='/avail_receptionist'>Receptionist</Link>{menu==="receptionist"?<hr/>:<></>}
              </li>
              <li className="nav-item1" onClick={() => {setMenu("pharmacist")}}><Link style={{textDecoration : 'none'}} to ='/avail_pharmacist'>Pharmacist</Link>{menu==="pharmacist"?<hr/>:<></>}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Wrap the `<h1>` elements within separate `Route` components */}
      
    </div>
    </div>
    </div>
    </div>
  );
}

export default StaffList;
