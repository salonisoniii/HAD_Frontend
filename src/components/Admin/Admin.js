import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Sidebar2 from './Sidebar2';
import Home1 from './Dashboard/Home1';
import { useState } from 'react';
import AddDoctor from './adddoctor/AddDoctor';
import AddStaff from './AddStaff/AddStaff';
import AddNurse from './AddNurse/AddNurse';
import AddPharmacist from './AddPharmacist/AddPharmacist';
import AddReceptionist from './AddReceptionist/AddReceptionist';
import StaffList from './StaffList/StaffList';
import Category from './Pages/Category';
import Deactivate from './Deactivate/Deactivate';
import ModifySchedule from './ModifySchedule/ModifySchedule';
import Navbar2 from './Navbar2';

import React from 'react'

export default function Admin() {
    const [toggle, setToggle] = useState(true);

    const Toggle = () => {
      setToggle(!toggle);
    };
  return (
    <div>
      <div className='container-fluid bg-secondary min-vh-100'>
        <div className='row'>
          {toggle && (
            <div className='col-4 col-md-2 bg-white vh-100 position-fixed'>
              <Sidebar2 Toggle={Toggle} />
            </div>
          )}
          
          {toggle && <div className='col-4 col-md-2'></div>}
          <div className='col'>
          
          <Home1 Toggle={Toggle}/>
          
          </div>
    </div>
    </div>
    </div>
  )
}
