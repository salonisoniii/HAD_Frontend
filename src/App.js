import "./App.css";
import { BrowserRouter, Route, Routes,Redirect } from "react-router-dom";
import {Navigate} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import { ToastContainer } from "react-toastify";
import ForgotPassword from "./components/ForgotPasword";
import Receptionist from "./components/Receptionist/Receptionist";
import Doctor from "./components/doctor/Doctor";
import Navbar1 from "./components/doctor/Navbar1";
// import Sidebar from './components/doctor/Sidebar';
// import profile from './components/doctor/profilePhoto'
// import Navbar from './components/Navbar';
// import calendar from './components/doctor/Cal';
import Cal1 from "./components/doctor/Cal1";
import PInfo from "./components/doctor/patientInformation/PInfo";
import AddDiagnosis from "./components/doctor/AddDiagnosis/AddDiagnosis";
import { useState, useEffect } from "react";
import axios from "axios";
import Newpatient from "./components/Receptionist/Newpatient/Newpatient";

import Admin from "./components/Admin/Admin";
import Navbar2 from "../src/components/Admin/Navbar2";
import AddDoctor from "./components/Admin/adddoctor/AddDoctor";
import AddStaff from "./components/Admin/AddStaff/AddStaff";
import AddNurse from "./components/Admin/AddNurse/AddNurse";
import AddPharmacist from "./components/Admin/AddPharmacist/AddPharmacist";
import AddReceptionist from "./components/Admin/AddReceptionist/AddReceptionist";
import StaffList from "./components/Admin/StaffList/StaffList";
import Category from "./components/Admin/Pages/Category";
import ModifySchedule from "./components/Admin/ModifySchedule/ModifySchedule";
import Deactivate from "./components/Admin/Deactivate/Deactivate";

import Navbar4 from "./components/Receptionist/Navbar4";
import Rdashboard from "./components/Receptionist/Rdashboard/Rdashboard";
// import { Button } from 'react-bootstrap';
import AddPatient from "./Nurse/AddPatient/AddPatient";

import NurseSchedule from "./Nurse/Nurse Schedule/NurseSchedule";
import Nurse from "./Nurse/Nurse";
import WardAllotment from './Nurse/Ward_Allotment/WardAllotment';
import P_PInfo from "./Nurse/patientInformation/P_PInfo";
import OnShiftNurse from "./Nurse/PatientList/OnShiftNurse";
//DOCTOR
import DocIPPatientList from "./components/doctor/docPatientList/DocIPPatientList";
import RecpPatientList from "./components/Receptionist/RecpPatientList/RecpPatientList";
import ChangePassword from "./components/ChangePassword/ChangePassword";
import EditProfile from "./components/Admin/EditProfile/EditProfile";
import DocSchedule from './components/doctor/DocSchedule/DocSchedule';
import PastHistory from "./components/doctor/docPatientList/PastHistory";
import Emergency from "./components/Receptionist/Emergency/Emergency";
import Help from "./components/Help/Help";


function AdminRoute({ children }) {
  const userRole = localStorage.getItem('role');

  if (userRole !== 'ADMIN') {
    return <Navigate to="/login" />;
  }

  return children;
}
function DoctorRoute({ children }) {
  const userRole = localStorage.getItem('role');

  if (userRole !== 'DOCTOR') {
    return <Navigate to="/login" />;
    
  
  }

  return children;
}
function NurseRoute({ children }) {
  const userRole = localStorage.getItem('role');

  if (userRole !== 'NURSE') {
    return <Navigate to="/login" />;
    
  
  }

  return children;
}






function App() {
  const [toggle, setToggle] = useState(true);

  const Toggle = () => {
    setToggle(!toggle);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // try{

    // const response = await axios.get('https://present-neat-mako.ngrok-free.app/his/tryimage');
    // console.log("API Response"+JSON.stringify(response.data));
    // const image = Uint8Array.from(atob(response.json), c=> c.charCodeAt(0));
    // image = new Blob([image], {type: "image/jpeg"});
    // console.log(image);
    // //Toggle();

    // Display above image on the screen
    //document.getElementById('img').src= URL.createObjectURL(new Blob([image], {type: "image/jpeg"}));

    // }catch(error){
    //   console.log("Error",error);
    // }
  };
  // const [imageData, setImageData] = useState('');

  // const handle = (e) => {
  //   e.preventDefault();
  //   // Fetch your API endpoint here
  //   // console.log('image')
  //   fetch('https://present-neat-mako.ngrok-free.app/his/tryimage', {headers: {
  //     'ngrok-skip-browser-warning': 'true'
  //   }})
  //     .then(response => response.text())
  //     .then(data => {
  //       // Assuming your API response has a key 'imageData' containing Base64 data
  //       setImageData(data);
  //     })
  //     .catch(error => console.error('Error fetching image:', error));
  // };

  return (
    <div className="App">
      <ToastContainer/>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/help" element={<Help/>}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/forgotPassword" element={<ForgotPassword />}></Route>
          <Route path="/receptionist" element={<Receptionist />}></Route>


          {/* ADMIN */}
          <Route path="/Navbar2" element={<AdminRoute><Navbar2 /></AdminRoute>}></Route>
          <Route path="/profile" element={<profile />}></Route>
          <Route path="/calendar" element={<calendar />}></Route>
          <Route path="/Admin" element={<AdminRoute><Admin /></AdminRoute>}></Route>
          <Route path="/add-staff" element={<AdminRoute><AddStaff /></AdminRoute>} />
          <Route path="/add-doctor" element={<AdminRoute><AddDoctor /></AdminRoute>} />
          <Route path="/add-nurse" element={<AdminRoute><AddNurse /></AdminRoute>} />
          <Route path="/add-pharmacist" element={<AdminRoute><AddPharmacist /></AdminRoute>} />
          <Route path="/add-receptionist" element={<AdminRoute><AddReceptionist /></AdminRoute>} />
          <Route path="/stafflist" element={<AdminRoute><StaffList Toggle={Toggle} /></AdminRoute>} />

          {/* <Route
            path="/stafflist/:role"
            element={<AdminRoute><Category /></AdminRoute>}
          />
           */}

          {/* <Route
            path="/stafflist/:role"
            element={<AdminRoute><Category role="NURSE" Toggle={Toggle} /></AdminRoute>}
          />
          <Route
            path="/stafflist/:role"
            element={<AdminRoute><Category role="RECEPTIONIST" Toggle={Toggle} /></AdminRoute>}
          />
          <Route
            path="/stafflist/:role"
            element={<AdminRoute><Category role="PHARMACIST" Toggle={Toggle} /></AdminRoute>}
          /> */}

          <Route path="/deactivate" element={<AdminRoute><Deactivate /></AdminRoute>} />
          <Route path="/ms" element={<AdminRoute><ModifySchedule /></AdminRoute>} />

          {/* <Route path='/Sidebar' */}
          <Route path="/Receptionists" element={<Receptionist />} />
          <Route path="/Navbar4" element={<Navbar4 />} />
          <Route path="/rdashboard" element={<Rdashboard />} />


          {/* Routes for Nurse */}
          <Route path="/nurse" element={<NurseRoute><Nurse /></NurseRoute>} />
          <Route path="/AddPatient" element={<NurseRoute><AddPatient /></NurseRoute>} />
          <Route path="/P_PInfo" element={<NurseRoute><P_PInfo></P_PInfo></NurseRoute>} />

          <Route path="/NurseSchedule" element={<NurseRoute><NurseSchedule /></NurseRoute>} />
          <Route path ='/WardAllotment' element={<WardAllotment /> } />
          <Route path="/onShiftNurse" element={<NurseRoute><OnShiftNurse/></NurseRoute>} />
          {/* DOCTOR */}
          <Route path="/AddDiag" element={<DoctorRoute><AddDiagnosis /></DoctorRoute>}></Route>
          <Route path="/PInfo" element={<DoctorRoute><PInfo /></DoctorRoute>}></Route>
          <Route path="/cal1" element={<DoctorRoute><Cal1 /></DoctorRoute>}></Route>
          <Route path="/doctor" element={<DoctorRoute><Doctor /></DoctorRoute>}></Route>
          <Route path="/DocIPPatientList" element={<DoctorRoute><DocIPPatientList /></DoctorRoute>} />
          <Route path="/Navbar1" element={<DoctorRoute><Navbar1 /></DoctorRoute>}></Route>
          <Route path="/docSchedule" element={<DocSchedule />} />
          <Route path="/PastHistory" element= {<DoctorRoute><PastHistory /></DoctorRoute>} />


          {/* Receptionist */}
          <Route path="/newpatient" element={<Newpatient />} />
          <Route path="/RecpPatientList" element={<RecpPatientList />} />
          <Route path = '/emergency' element={<Emergency/>} />

          {/* Change Password */}
          <Route path="/change-password" element={<ChangePassword/>} />

          {/*  */}
          <Route path="/edit-profile" element={<EditProfile/>} />

          
        </Routes>
      </BrowserRouter>
      {/* <Button onClick={handle}>Submit</Button>
      {imageData && (
        <img
          src={`data:image/jpeg;base64,${imageData}`} // Change 'image/jpeg' based on your image type
          alt="base64_image"
        />
      )} */}
    </div>
  );
}

export default App;
