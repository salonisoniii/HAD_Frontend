
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import { ToastContainer } from 'react-toastify';
import ForgotPassword from './components/ForgotPasword';
import Receptionist from './components/Receptionist';

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
