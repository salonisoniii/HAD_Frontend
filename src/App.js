
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import { ToastContainer } from 'react-toastify';
import ForgotPassword from './components/ForgotPasword';
import Receptionist from './components/Receptionist';
import Doctor from './components/doctor/Doctor';
import Navbar from './components/doctor/Navbar1';
// import Sidebar from './components/doctor/Sidebar';
import profile from './components/doctor/profilePhoto'
// import Navbar from './components/Navbar';
import calendar from './components/doctor/Cal';

function App() {
  return (
    <div className="App">
      <ToastContainer></ToastContainer>
      
      <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/forgotPassword' element={<ForgotPassword/>}></Route>
          <Route path='/receptionist' element={<Receptionist/>}></Route>
          <Route path='Navbar' element={<Navbar/>}></Route>
          <Route path='/doctor' element={<Doctor/>}></Route>
        <Route path='/profile' element={<profile/>}></Route>
        <Route path='/calendar' element={<calendar/>}></Route>
       
          {/* <Route path='/Sidebar' */}
        </Routes>
       
      </BrowserRouter>
      </div>
        
  );
}

export default App;
