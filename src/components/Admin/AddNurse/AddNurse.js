import React, { useState } from "react";
// import { Form, Button } from 'react-bootstrap';
import Navbar2 from "../Navbar2";
import "../AddNurse/AddNurse.css";
import Sidebar2 from "../Sidebar2";

function AddNurseForm() {
  const [toggle, setToggle] = useState(true);

  const Toggle = () => {
    setToggle(!toggle);
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    bloodGroup: "",
    specialization: "",
    experience: "",
    photo: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send data to backend
    console.log(formData);
    // Reset form after submission
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      gender: "",
      bloodGroup: "",
      specialization: "",
      experience: "",
      photo: "",
      address: "",
    });
  };

  return (
    <div>
      <div className="container-fluid bg-secondary min-vh-100">
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
                <h5 className="card1-title">Add New Nurse</h5>
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
                      <label htmlFor="bloodGroup" className="form-label">
                        Blood Group
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="bloodGroup"
                        name="bloodGroup"
                        value={formData.bloodGroup}
                        onChange={handleChange}
                        required
                      />
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
                        Experience (in years)
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="photo" className="form-label">
                        Photo
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        id="photo"
                        name="photo"
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
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNurseForm;
