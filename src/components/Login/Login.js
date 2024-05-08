import { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import axios from "axios";
// import backgroundImage from '././images/his1.jpg';

import "../Login/login.css";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const usenavigate = useNavigate();
  localStorage.removeItem("userId");
  localStorage.removeItem("token");
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("role");
  localStorage.removeItem("username");


  // let a="saloni";
  // let b="1234";
   //   "https://summary-gnu-equally.ngrok-free.app/his/authenticate",

  const ProceedLogin = async (e) => {
    e.preventDefault();

    try {
      if (validate()) {
        const base = `${process.env.REACT_APP_SECRET_KEY}`;
        console.log("URL: "+base+"/authenticate");
        const responsee = await axios.post(
          `${process.env.REACT_APP_SECRET_KEY}/authenticate`,
          {
            username: username,
            password: password,
          }
        );
        localStorage.setItem("username",username);
  
        setUsername("");
        setPassword("");
      
        const { userId, token, role } = responsee.data;
        console.log(responsee);
        console.log(responsee.data)

        localStorage.setItem("userId", userId);
        localStorage.setItem("token", "Bearer " + token);
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("role", role);

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
    
    }
    return result;
  };
  return (
    <div
      className="saloni"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/his1.jpg)`,
        backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  width: '100%', // Set the width to 100% to fill the entire screen horizontally
  height: '100vh',
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


