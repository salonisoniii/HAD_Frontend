
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login/Login';
import { ToastContainer } from 'react-toastify';
import ForgotPassword from './components/ForgotPasword';
import Receptionist from './components/Receptionist';
import Doctor from './components/doctor/Doctor';
import Navbar1 from './components/doctor/Navbar1';
// import Sidebar from './components/doctor/Sidebar';
import profile from './components/doctor/profilePhoto'
// import Navbar from './components/Navbar';
import calendar from './components/doctor/Cal';
import Cal1 from './components/doctor/Cal1';
import PInfo from './components/doctor/PInfo';
import AddDiagnosis from './components/doctor/AddDiagnosis';
import { useState } from 'react';


import Admin from './components/Admin/Admin';
import Navbar2 from '../src/components/Admin/Navbar2';
import AddDoctor from './components/Admin/adddoctor/AddDoctor';
import AddStaff from './components/Admin/AddStaff/AddStaff';
import AddNurse from './components/Admin/AddNurse/AddNurse';
import AddPharmacist from './components/Admin/AddPharmacist/AddPharmacist';
import AddReceptionist from './components/Admin/AddReceptionist/AddReceptionist';
import StaffList from './components/Admin/StaffList/StaffList';
import Category from './components/Admin/Pages/Category';
import ModifySchedule from './components/Admin/ModifySchedule/ModifySchedule';
import Deactivate from './components/Admin/Deactivate/Deactivate';


function App() {
  const [toggle, setToggle] = useState(true);

  const Toggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="App">
      <ToastContainer></ToastContainer>
      
      <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/forgotPassword' element={<ForgotPassword/>}></Route>
          <Route path='/receptionist' element={<Receptionist/>}></Route>
          <Route path='/Navbar1' element={<Navbar1/>}></Route>
          <Route path='/Navbar2' element={<Navbar2/>}></Route>
          <Route path='/doctor' element={<Doctor/>}></Route>
        <Route path='/profile' element={<profile/>}></Route>
        <Route path='/calendar' element={<calendar/>}></Route>
        <Route path='/cal1' element={<Cal1/>}></Route>
       <Route path='/PInfo' element={<PInfo/>}></Route>
       <Route path='/AddDiag' element={<AddDiagnosis/>}></Route>
      
      
      
       <Route path='/Admin' element={<Admin/>}></Route>
       {/* <Route path='/' element={<Home Toggle={Toggle} />} /> */}
              <Route path='/add-staff' element={<AddStaff/>} />
              <Route path='/add-doctor' element={<AddDoctor/>} /> 
              <Route path='/add-nurse' element={<AddNurse />} /> 
              <Route path='/add-pharmacist' element={<AddPharmacist />} />
              <Route path='/add-receptionist' element={<AddReceptionist />} />
              <Route path='/stafflist' element={<StaffList Toggle={Toggle}/>} />

              <Route path='/avail_doctors' element={<Category category='doctors' Toggle = {Toggle}/>} />
              
              <Route path='/avail_nurses' element={<Category category='nurses' Toggle={Toggle}/>} />
              <Route path='/avail_receptionist' element={<Category category='receptionist' Toggle={Toggle}/>} />
              <Route path='/avail_pharmacist' element={<Category category='pharmacist'Toggle={Toggle}/>} />
              <Route path='/deactivate' element={<Deactivate/>} />
              <Route path='/ms' element={<ModifySchedule/>} />
           
          {/* <Route path='/Sidebar' */}
        </Routes>
       
      </BrowserRouter>
      </div>
        
  );
}

export default App;
