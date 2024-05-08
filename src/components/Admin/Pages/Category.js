import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../Pages/CSS/Category.css";
import Roles from "../Roles/Roles";
import Avatar from "@mui/material/Avatar"; // Import Material-UI Avatar
import Stack from "@mui/material/Stack";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import doctorFemaleImg from "../Assets/docf_2.png";
import doctorMaleImg from "../Assets/doc_1.png";
import nurseFemaleImg from '../Assets/nur_2.jpg';
import nurseMaleImg from '../Assets/nur_1.jpg'
import receptionistFemaleImg from '../Assets/Rec_2.png';
import receptionistmaleImg from '../Assets/Rec_1.png';
import pmaleImg from '../Assets/pharm_1.png';
import pFemaleImg from '../Assets/phar_2.png';


function Category({ Toggle = false, role }) {
  const [toggle1, setToggle1] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null); // State to track errors
  const [fetched, setFetched] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [personalDetails, setPersonalDetails] = useState(null);
  const [profileImage, setImageData] = useState('');
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
      console.log("-->" + data);
      setFetched(true);

    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error); // Set error state
    }
  };

  const handleRoleClick = async (role) => {
    setSelectedRole(role);
    try {
      const response = await axios.get(`${process.env.REACT_APP_SECRET_KEY}/personalDetails?id=${role.userId}&role=${role.role}`,
        {
          headers: headers,

        });
      // setImageData(response.profileImage);
      console.log("Personal Details Response: ", response.data);
      setPersonalDetails(response.data);
      setImageData(response.data.response.profileImage);
      setDialogOpen(true);
    } catch (error) {
      console.error("Error fetching personal details:", error);
    }
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    // Reset personal details
    setPersonalDetails(null);
  };

  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  useEffect(() => {

    if (isLoggedIn === null) {
      navigate('/login');
    }
  }, [])

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
    PHARMACIST: {
      MALE: pmaleImg,
      FEMALE: pFemaleImg,
    }
  };

  return (
    <>
      {/* <Sidebar2 /> */}
      <div className="row">
        {toggle1 && <div className="col-4 col-md-2"></div>}
        {(error || !fetched) ? (
          <p>Error: {error?.message || 'Loading...'}</p>
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
      <Dialog open={dialogOpen} onClose={handleCloseDialog} className="dialog-container">
        <DialogTitle className="dialog-title">{selectedRole?.firstName}'s Details</DialogTitle>
        <DialogContent className="dialog-content">
          {selectedRole && (

            <div className="dialog-content-wrapper">
              <div className="dialog-image-container">
                {profileImage && (
                  <img
                    src={`data:image/jpeg;base64,${profileImage}`} alt="Profile" className="dialog-image" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />)}
              </div>
              <div className="dialog-text-container">
                <p className="dialog-text">First Name: {selectedRole.firstName}</p>
                <p className="dialog-text">Last Name: {selectedRole.lastName}</p>
                <p className="dialog-text">Email: {selectedRole.email}</p>
                <p className="dialog-text">Phone: {selectedRole.phone}</p>
                <p className="dialog-text">Gender: {selectedRole.gender}</p>
                <p className="dialog-text">Birth Date: {selectedRole.birthDate}</p>
                <p className="dialog-text">Blood Type: {selectedRole.blood}</p>
                <p className="dialog-text">Address: {selectedRole.address}</p>
              </div>
            </div>
          )}
        </DialogContent>
        <DialogActions className="dialog-actions">
          <Button onClick={handleCloseDialog}>Close</Button>
        </DialogActions>
      </Dialog>

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
