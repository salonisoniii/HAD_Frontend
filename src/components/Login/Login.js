import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import axios from "axios";
// import backgroundImage from '././images/his1.jpg';

import "../Login/login.css";
import { getSwitchUtilityClass } from "@mui/material";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const usenavigate = useNavigate();
  localStorage.removeItem("userId");
  localStorage.removeItem("token");
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("role");


  // let a="saloni";
  // let b="1234";
   //   "https://summary-gnu-equally.ngrok-free.app/his/authenticate",

  const ProceedLogin = async (e) => {
    e.preventDefault();

    try {
      if (validate()) {
        const responsee = await axios.post(
          "https://present-neat-mako.ngrok-free.app/his/authenticate",
       
          {
            username: username,
            password: password,
            role: role,
          }
        );
        localStorage.setItem("role", role);
        setUsername("");
        setPassword("");
        setRole("");
        const { userId, token, response } = responsee.data;
        console.log(responsee);

        localStorage.setItem("userId", userId);
        localStorage.setItem("token", "Bearer " + token);
        localStorage.setItem("isLoggedIn", "true");

        switch (role) {
          case "ADMIN":
            usenavigate("/Admin");
            break;
          case "NURSE":
            usenavigate("/nurse");
            break;
          case "DOCTOR":
            usenavigate("/doctor");
            break;
          case "PHARMACIST":
            usenavigate("/pharmacist");
            break;
          case "RECEPTIONIST":
            usenavigate("/Receptionists");
            break;
          default:
            usenavigate("/");
        }
      }
    } catch (error) {
      console.log(error);
      if (error.responsee) {
        toast.error(error.responsee.data.error);
      } else if (error.request) {
        // The request was made but no response was received
        toast.error(
          "No response received from the server. Please try again later."
        );
      } else {
        toast.error("Failed to login, Please try again later");
      }
    }
  }
  const validate = () => {
    let result = true;
    if (username === "" || username === null) {
      result = false;
      toast.warning("Please Enter Username");
    } else if (password === "" || password === null) {
      result = false;
      toast.warning("Please Enter Password");
    } else if (role === "" || role === null) {
      result = false;
      toast.warning("Please Select Role");
    }
    return result;
  };
  return (
    <div
      className="saloni"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/his1.jpg)`,
      }}
    >
      <div
        className="offset-lg-3 col-lg-6"
        style={{
          backgroundColor: "transparent",
          marginLeft: "35%",
          width: "35%",
        }}
      >
        <form
          onSubmit={ProceedLogin}
          className="container"
          style={{ backgroundColor: "transparent" }}
        >
          <div
            className="card"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0)",
              border: "none",
            }}
          >
            <div
              className="card-header"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0)",
                marginTop: "-5px",
              }}
            >
              <h2>User Login</h2>
            </div>
            <div className="card-body">
              <div className="form-group">
                {/* <label for="role">Select Role:</label> */}
                <select
                  style={{ marginBottom: "10px", background: "transparent" }}
                  id="role"
                  name="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="" disabled selected>
                    Select Role
                  </option>
                  <option value="ADMIN">Admin</option>
                  <option value="NURSE">Nurse</option>
                  <option value="DOCTOR">Doctor</option>
                  <option value="PHARMACIST">Pharmacist</option>
                  <option value="RECEPTIONIST">Receptionist</option>
                </select>
              </div>
              <div className="form-group" style={{ background: "transparent" }}>
                <label>
                  User Name <span className="errmsg">*</span>
                </label>
                <input
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                ></input>
              </div>
              <div className="form-group">
                <label>
                  Password <span className="errmsg">*</span>
                </label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </div>
            </div>
            <div
              className="card-footer"
              style={{ backgroundColor: "rgba(255, 255, 255, 0)" }}
            >
              <button
                style={{
                  marginRight: "10px",
                  display: "block",
                  marginBottom: "10px",
                }}
                type="submit"
                className="btn btn-primary"
              >
                Login
              </button>
              <Link
                style={{ color: "blue", fontWeight: "bold", marginLeft: "30%" }}
                to="/ForgotPassword"
              >
                forgot Password?
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import axios from 'axios';
// // import backgroundImage from '././images/his1.jpg';
// import { login } from "../../services/login_service";

// const Login = () => {
//     // const styles = {
//     //     backgroundImage:`url(${process.env.PUBLIC_URL}/images/his1.jpg)` ,
//     //     display: 'flex', alignItems: 'center', height: '105vh', margin: '0px'
//     // }
//     const[username,usernameUpdate]=useState('');
//     const[password,passwordUpdate]=useState('');
//     const[role,roleUpdate]=useState('');

//     const usenavigate=useNavigate();

//     let a="saloni";
//     let b="1234";

//     const ProceedLogin=async(e)=>{
//         e.preventDefault();
//         login(e).then((resp)=>{
//             console.log(resp)
//             console.log("success log")
//         }).catch((error)=>{
//             console.log(error)

//         })

//         if(validate()){
//             // const response = await axios.post('https://present-neat-mako.ngrok-free.app/his/authenticate', {
//             //     username: username,
//             //     password: password,
//             //     role: role
//             // });
//             // console.log("API response: "+JSON.stringify(response.data));
//             if(username===a && password===b){
//             console.log("proceed");
//             console.log(JSON.stringify({ username, password, role}));
//             usernameUpdate('');
//             passwordUpdate('');
//             roleUpdate('');
//             toast.success('Login Successful');
//             usenavigate('/Admin')
//             sessionStorage.setItem('username',username);
//         }else{
//             toast.error("please enter correct username and password")
//         }}
//     }
//     const validate=()=>{
//         let result=true;
//         if(username==='' || username===null){
//             result=false;
//             toast.warning('Please Enter Username');
//         }
//         else if(password==='' || password===null){
//             result=false;
//             toast.warning('Please Enter Password');
//         }
//         else if(role==='' || role===null){
//             result=false;
//             toast.warning('Please Select Role');
//         }
//         return result;
//     }
//     return (
//         <div className="row sal" style={styles}>
//             <div className="offset-lg-3 col-lg-6">
//             <form onSubmit={ProceedLogin} className="container" style={{height:'80vh',marginTop:'150px', backgroundColor: 'transparent'}}>
//                 <div className="card" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', border: 'none' }}>
//                     <div className="card-header">
//                         <h2>User Login</h2>
//                     </div>
//                     <div className="card-body">
//                         <div className="form-group" >
//                         {/* <label for="role">Select Role:</label> */}
//                             <select style={{marginBottom:'10px', background: 'transparent'}} id="role" name="role" value={role} onChange={(e)=>roleUpdate(e.target.value)}>
//                             <option value="" disabled selected>Select Role</option>
//                             <option value="admin">Admin</option>
//                             <option value="nurse">Nurse</option>
//                             <option value="doctor">Doctor</option>
//                             <option value="pharmacist">Pharmacist</option>
//                             <option value="receptionist">Receptionist</option>
//                             </select>
//                         </div>
//                         <div className="form-group" style={{ background: 'transparent' }}>
//                             <label >User Name <span className="errmsg">*</span></label>
//                             <input className="form-control" style={{ background: 'transparent',borderColor: 'rgba(0, 0, 0, 0.2)'}} value={username} onChange={e=>usernameUpdate(e.target.value)}></input>
//                         </div>
//                         <div className="form-group">
//                             <label >Password <span className="errmsg">*</span></label>
//                             <input type="password" className="form-control" style={{ background: 'transparent',borderColor: 'rgba(0, 0, 0, 0.2)'}} value={password} onChange={e=>passwordUpdate(e.target.value)}></input>
//                         </div>
//                     </div>
//                     <div className="card-footer">
//                         <button style={{marginRight:'10px'}} type="submit" className="btn btn-primary">Login</button>
//                         <Link style={{color:'blue', fontWeight:'bold'}} to='/ForgotPassword'>forgot Password?</Link>
//                     </div>
//                 </div>

//             </form>
//             </div>

//         </div>
//      );
// }

// export default Login;

// if(validate()){
//     // const response = await axios.post('https://present-neat-mako.ngrok-free.app/his/authenticate', {
//     //     username: username,
//     //     password: password,
//     //     role: role
//     // });
//     // console.log("API response: "+JSON.stringify(response.data));
//     if(username===a && password===b){
//     console.log("proceed");
//     console.log(JSON.stringify({ username, password, role}));
//     usernameUpdate('');
//     passwordUpdate('');
//     roleUpdate('');
//     toast.success('Login Successful');
//      // Swal.fire({
//     //     title: "Successfully Login",
//     //     text: "Press OK to Continue",
//     //     icon: "success"
//     // });
//     usenavigate('/admin')

//     sessionStorage.setItem('username',username);
// }else{
//     toast.error("please enter correct username and password")
// }}
