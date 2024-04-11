import React, { useState } from "react";
// import { Form, Button } from 'react-bootstrap';
import Navbar2 from "../Navbar2";
import "../adddoctor/AddDoctor.css";
import Sidebar2 from "../Sidebar2";
import axios from "axios";
import { toast } from "react-toastify";
// import {readFile} from "fs";


// function AddDoctorForm() {
//   const [toggle, setToggle] = useState(true);

//   const Toggle = () => {
//     setToggle(!toggle);
//   };

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     gender: "",
//     blood: "",
//     specialization: "",
//     experience: "",
//     profileImage: "",
//     address: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {

//       const userId = localStorage.getItem('userId');
//       const token = localStorage.getItem('token');

//       const imageFileToBase64 = async (imageFile) => {
//         return new Promise((resolve, reject) => {
//             // Create a new FileReader instance
//             const reader = new FileReader();

//             // Define onload event handler
//             reader.onload = () => {
//                 // Resolve the promise with the base64 string
//                 resolve(reader.result.split(',')[1]);
//             };

//             // Define onerror event handler
//             reader.onerror = (error) => {
//                 // Reject the promise with the error
//                 reject(error);
//             };

//             // Read the image file as data URL
//             reader.readAsDataURL(imageFile);
//         });
//     };

//     const imageFile = formData.profileImage; // Assuming formData.profileImage is the image file
//     imageFileToBase64(imageFile)
//     .then(base64Data => {
//         // Construct newuserObj with base64 image and userobj
//         const newuserObj = {
//             'image': base64Data,
//             'request': {
//                 ...userobj
//             }
//         };

//         // Now you can use newuserObj
//         console.log(newuserObj);
//     })
//     .catch(error => {
//         console.error("Error converting image to base64:", error);
//     });



//       const headers ={
//         'userId':userId,
//         'Authorization': `Bearer ${token}`
//       }

//       const userobj = { ...formData };
//       userobj["role"] = "DOCTOR";

//       // const newuserObj = {
//       //   'image': formData.profileImage,
//       //   'request':{
//       //     ...userobj
//       //   }
//       // }
//       console.log(JSON.stringify(newuserObj));

//       const response = await axios.post(
//         "http://present-neat-mako.ngrok-free.app/his/admin/addUser",
//         newuserObj,{
//           headers :headers
//         }
//       );
//       console.log("API Response: " + JSON.stringify(response.data));



//       setFormData({
//         firstName: "",
//         lastName: "",
//         email: "",
//         phone: "",
//         gender: "",
//         blood: "",
//         specialization: "",
//         experience: "",
//         profileImage: "",

//         address: "",
//       });
//       toast.success("doctor added successfully");
//     } catch (error) {
//       console.log("Error", error);
//       toast.error("Error adding doctor. Please try again.");
//     }
//   };

function AddDoctorForm() {
  const [toggle, setToggle] = useState(true);

  const Toggle = () => {
    setToggle(!toggle);
  };

  
    const [birthDate, setBirthdate] = useState('');
  
    function handleBlur(event) {
      const dateValue = event.target.value;
      const date = new Date(dateValue);
      const year = date.getFullYear();
      const month = ('0' + (date.getMonth() + 1)).slice(-2);
      const day = ('0' + date.getDate()).slice(-2);
      const formattedDate = `${year}-${month}-${day}`;
      setBirthdate(formattedDate);
      console.log(birthDate);
    }

  const [jayImage, setJayImage] = useState(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    blood: "",
    specialization: "",
    experience: "",
    profileImage: null, // Updated to null
    address: "",
    role: "",
    birthDate: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'profileImage') {
      setJayImage(e.target.files[0]);
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userId = localStorage.getItem('userId');
      const token = localStorage.getItem('token');

      
      formData["role"] = "DOCTOR";
      formData["birthDate"]=birthDate;
     
      const newuserObj = {
        'image': jayImage,
        'request':
          JSON.stringify(formData)

      };

      const headers = {
        'userId': userId,
        'Authorization': token,
        'ngrok-skip-browser-warning': "true",
        'Content-Type': 'multipart/form-data'
      }
      console.log(newuserObj);

      // const response = await axios.post(
      //   "https://present-neat-mako.ngrok-free.app/his/admin/addUser",
      //   newuserObj, {
      //   headers: headers
      // }
      // );
      // console.log("API Response: " + JSON.stringify(response.data));

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        gender: "",
        blood: "",
        specialization: "",
        experience: "",
        profileImage: null, // Reset the file input
        address: "",
        role: "",
        birthDate:""
      });
      toast.success("Doctor added successfully");
    } catch (error) {
      console.log("Error", error);
      toast.error("Error adding doctor. Please try again.");
    }
  };

 


  return (
    <div
      className="container-fluid  min-vh-100"
      style={{ backgroundColor: "#ECE3F0" }}
    >
      <div className="row">
        {toggle && (
          <div className="col-4 col-md-2 bg-white vh-100 position-fixed">
            <Sidebar2 Toggle={Toggle} />
          </div>
        )}
        {toggle && <div className="col-4 col-md-2"></div>}
        <div className="col">
          <Navbar2 Toggle={Toggle} />

          <div className="card1">
            <div className="card1-body">
              <h5 className="card1-title">Add New Doctor</h5>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="firstName" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="lastName" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="phone" className="form-label">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="gender" className="form-label">
                      Gender
                    </label>
                    <select
                      className="form-select"
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="MALE">Male</option>
                      <option value="FEMALE">Female</option>
                      <option value="OTHER">Other</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="blood" className="form-label">
                      Blood Group
                    </label>
                    <select
                      className="form-control"
                      id="bloodGroup"
                      name="blood"
                      value={formData.blood}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select BloodGroup</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="A-">A-</option>
                      <option value="A+">A+</option>
                      <option value="AB-">AB-</option>
                      <option value="AB+">AB+</option>
                      <option value="O-">O-</option>
                      <option value="O+">O+</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="specialization" className="form-label">
                      Specialization
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="specialization"
                      name="specialization"
                      value={formData.specialization}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="experience" className="form-label">
                      Experience (in months)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      min="0"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="profileImage" className="form-label">
                      Photo
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="photo"
                      name="profileImage"
                      value={formData.profileImage}
                      accept="image/*"

                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="address" className="form-label">
                      Address
                    </label>
                    <textarea
                      className="form-control"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="birthdate">Birth Date:</label>
                    <input type="date" id="birthdate" name="birthDate" onBlur={handleBlur} required/>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: "30%", marginLeft: "30%" }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddDoctorForm;
