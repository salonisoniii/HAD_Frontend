import React, { useState,useEffect,useNavigate } from "react";
// import { Form, Button } from 'react-bootstrap';
import Navbar3 from "../Navbar3";
import './addPatient.css';
import Sidebar3 from "../Sidebar3";
import axios from "axios";
import { toast } from "react-toastify";

function AddDoctorForm() {
  const [toggle, setToggle] = useState(true);

  const Toggle = () => {
    setToggle(!toggle);
  };

  const [checked, setChecked] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    blood: "",
    Reason: "",
    doctor: "",
    profileImage: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const confirmed = window.confirm("Do you want to share your Data?");
    
    if (confirmed){

    try{
   
    const userobj = {...formData};
    userobj["role"]="Nurse";
    const req = {
      "personal":userobj
    };
    // console.log(personal);
    console.log(req);
    // req["personal"] = userobj;

    const response = await axios.post('https://present-neat-mako.ngrok-free.app/his/admin/addUser',req);
    console.log("API Response"+JSON.stringify(response.data));

    // You can handle form submission here, e.g., send data to backend
    // console.log(JSON.stringify(req));
    // Reset form after submission
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      gender: "",
      blood: "",
      Reason: "",
      doctor: "",
      profileImage: "",
      address: "",
    });

    toast.success('doctor added successfully');
  }catch(error){
    console.log("Error",error);
    toast.error("Error adding doctor. Please try again.");
  }}
  };
  // const navigate = useNavigate();
  // const isLoggedIn=localStorage.getItem('isLoggedIn');
  // useEffect(()=>{
   
  //   if(isLoggedIn==='false')
  //   {
  //   navigate('/login');
  //   }
  // },[])

  return (
    <div className="container-fluid  min-vh-100" style={{backgroundColor:'#ECE3F0' }}>
      <div className="row">
        {toggle && (
          <div className="col-4 col-md-2 bg-white vh-100 position-fixed">
            <Sidebar3 Toggle={Toggle} />
          </div>
        )}
        {toggle && <div className="col-4 col-md-2"></div>}
        <div className="col">
          <Navbar3 Toggle={Toggle} />

          <div className="card1">
            <div className="card1-body">
              <h5 className="card1-title">Add Emergency Patient</h5>
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
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="blood" className="form-label">
                      Blood Group
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="bloodGroup"
                      name="blood"
                      value={formData.blood}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="Reason" className="form-label">
                      Reason for seeing Doctor
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="Reason"
                      name="Reason"
                      value={formData.Reason}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="doctor" className="form-label">
                      Doctor Consulted
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="doctor"
                      name="doctor"
                      value={formData.doctor}
                      onChange={handleChange}
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
                    <label htmlFor="Aadhar" className="form-label">
                      Aadhar ID
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="Aadhar"
                      name="Aadhar"
                      value={formData.Aadhar}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                  <label htmlFor="DOB" className="form-label">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="DOB"
                    name="DOB"
                    value={formData.DOB}
                    onChange={handleChange}
                    required
                  />
                </div>
                  <div className="col-md-6 mb-3">
                    <input
                        type="checkbox"
                        className="form1-check-input"
                        id="exampleCheck1"
                        checked={checked}
                        onChange={(e) => setChecked(e.target.checked)}
                        required
                    />
                    <label className="form1-check-label" htmlFor="exampleCheck1">Do you Want to share your Data?</label>
                </div>
                  <button type="submit" className="btn btn-primary" style={{width:'30%', marginLeft:'30%'}}>
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
