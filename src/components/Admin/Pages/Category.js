import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../Pages/CSS/Category.css";
import Roles from "../Roles/Roles";
import Avatar from "@mui/material/Avatar"; // Import Material-UI Avatar
import Stack from "@mui/material/Stack";
import doctorFemaleImg from "../Assets/product_2.jpg";
import doctorMaleImg from "../Assets/product_3.jpg";
import nurseFemaleImg from '../Assets/product_5.jpg';
import nurseMaleImg from '../Assets/product_6.jpg'
import receptionistFemaleImg from '../Assets/product_10.jpg';
import receptionistmaleImg from '../Assets/product_16.jpg';
import pmaleImg from '../Assets/product_16.jpg';
import pFemaleImg from '../Assets/product_16.jpg';
import Dialog from '../Dialoge/Dialoge'

function Category({ Toggle = false, role }) {
  // const { role } = useParams();
  // const {role} = props;
  const [toggle1, setToggle1] = useState(true);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to track errors
  const [fetched, setFetched] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const Toggle1 = () => {
    setToggle1(!toggle1);
  };

  useEffect(() => {
    // if (!fetched) {
    fetchData();
    // }
  }, []);
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  const headers = {
    Authorization: token,
    "ngrok-skip-browser-warning": "true",
    // "Content-Type": "multipart/form-data",
  };
  const fetchData = async () => {
    try {
      let response = await axios.get(
        `${process.env.REACT_APP_SECRET_KEY}/admin/viewUsers?userId=${userId}`,
        {
          headers: headers,
        }
      );
      console.log("API Response: " + JSON.stringify(response.data));
      response = response.data;
      setData(response);
      setLoading(false); // Set loading to false after data is fetched
      console.log("-->" + data);
      setFetched(true);

    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error); // Set error state
      setLoading(false); // Set loading to false
    }
  };
  const handleRoleClick = (role) => {
    setSelectedRole(role);
  };
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  useEffect(() => {

    if (isLoggedIn === null) {
      navigate('/login');
    }
  }, [])
  const closeDialog = () => {
    setShowDialog(false);
  };
  const roleImages = {
    DOCTOR: {
      MALE: doctorMaleImg,
      FEMALE: doctorFemaleImg,
    },
    NURSE: {
      MALE: nurseMaleImg,
      FEMALE: nurseFemaleImg,
    },
    RECEPTIONIST: {
      MALE: receptionistmaleImg,
      FEMALE: receptionistFemaleImg,
    },
    PHARMACIST:{
      MALE: pmaleImg,
      FEMALE: pFemaleImg,
    }
  };

  return (
    <>
      {/* <Sidebar2 /> */}
      <div className="row">

        {toggle1 && <div className="col-4 col-md-2"></div>}
        {/* <div className="col"> */}
        {/* <Navbar2 Toggle={Toggle1} />  */}

        {/* console.log('Api response in category.js '+JSON.stringify(data)); */}
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          <div className="item-category">
            <div className="category-details">
              {Array.isArray(data[role.toLowerCase()]) &&
                data[role.toLowerCase()].length > 0 ? (
                data[role.toLowerCase()].map((item, i) => (
                  <div className="role-card" key={i}
                    onClick={() => handleRoleClick(item)}>
                    
                    <Stack direction="row" spacing={2} alignItems='center'>
                    <Avatar
                          className="avatar"
                          alt={item.firstName}
                          src={item.gender === "MALE"
                          ? roleImages[item.role].MALE
                          : roleImages[item.role].FEMALE}
                          sx={{
                            width: getAvatarSize(item.role),
                            height: getAvatarSize(item.role),
                          }}
                        />
                      <div className="text-container">
                        <Roles
                          id={item.id}
                          firstName={item.firstName}
                          gender={item.gender}
                          email={item.email}
                          phone={item.phone}
                        />
                      </div>
                      </Stack>
                    </div>
                ))
              ) : (
                <p>No data available</p>

              )}
            </div>
          </div>
        )}
      </div>
      <Dialog
        user={selectedUser}
        onClose={closeDialog}
        open={showDialog}
      />

    </>
  );
}
function getAvatarSize(role) {
  switch (role) {
    case "DOCTOR":
      return "80px";
    case "NURSE":
      return "60px";
    case "RECEPTIONIST":
      return "50px";
    default:
      return "40px";
  }
}
export default Category;
