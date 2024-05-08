import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar4 from "../RecSidebar/Sidebar4";
import Navbar4 from "../Navbar4";
import "../Newpatient/Newpatient.css";
import { toast } from "react-toastify";
import axios from "axios";

function Newpatient() {
  const [toggle, setToggle] = useState(true);
  const [checked, setChecked] = useState(false);
  const [jayImage, setJayImage] = useState(null);
  const Toggle = () => {
    setToggle(!toggle);
  };
  const [birthDate, setbirthDate] = useState("");

  const [formData, setFormData] = useState({
    receptionId: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthDate: "",
    gender: "",
    blood: "",
    aadhaar: "",
    address: "",
    remark: "",
    emerid: "",
  });

  function handleBlur(event) {
    const dateValue = event.target.value;
    const date = new Date(dateValue);
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    const formattedDate = `${year}-${month}-${day}`;
    setbirthDate(formattedDate);
    // console.log(formattedDate);
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "image") {
      setJayImage(e.target.files[0]);
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }

    // if (!formData.aadhaar) {
    //     toast.error("Please enter Aadhar ID");
    //     return; // Stop form submission
    // }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token");

      // formData["role"] = "Receptionist";
      formData["birthDate"] = birthDate;
      if (checked === true) {
        formData["isNewPatient"] = 1;
      } else {
        formData["isNewPatient"] = 0;
      }
      formData["receptionId"] = userId;
      formData["image"] = jayImage;

      const headers = {
        Authorization: token,
        "ngrok-skip-browser-warning": "true",
        "Content-Type": "multipart/form-data",
      };

      console.log("Form Data: " + JSON.stringify(formData));
      const response = await axios.post(
        `${process.env.REACT_APP_SECRET_KEY}/reception/registerPatient`,
        formData,
        {
          headers: headers,
        }
      );
      console.log("API Response: " + JSON.stringify(response.data));

      // // You can handle form submission here, e.g., send data to backend
      // console.log(newuserOBJ);
      // Reset form after submission
      setFormData({
        receptionId: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        birthDate: "",
        gender: "",
        blood: "",
        aadhaar: "",
        image: "",
        address: "",
        remark: "",
        emerid: "",
      });
      toast.success("Patient added successfully");
    } catch (error) {
      console.log("Error", error);
      toast.error("Error adding Patient. Please try again.");
    }
  };
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  useEffect(() => {
    if (isLoggedIn === null) {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <Sidebar4 />
      <div className="row">

        {toggle && <div className="col-4 col-md-2"></div>}
        <div className="col">
          {/* <Navbar4 Toggle={Toggle} /> */}

          <div className="card1">
            <div className="card1-body">
              <h5 className="card1-title">Add New Patient</h5>
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
                    <label htmlFor="aadhaar" className="form-label">
                      Aadhar ID
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="aadhaar"
                      name="aadhaar"
                      value={formData.aadhaar}
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
                  {/* add classname of birthDate */}

                  
                  <div className="col-md-6 mb-3">
                    <label htmlFor="birthDate" className="form-label">
                      BirthDate
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="birthDate"
                      name="birthDate"
                      onBlur={handleBlur}
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
                    <select
                      className="form-select"
                      id="bloodGroup"
                      name="blood"
                      value={formData.blood}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select BloodGroup</option>
                      <option value="B+">A+</option>
                      <option value="B-">A-</option>
                      <option value="A-">B+</option>
                      <option value="A+">B-</option>
                      <option value="AB-">AB-</option>
                      <option value="AB+">AB+</option>
                      <option value="O-">O-</option>
                      <option value="O+">O+</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="remark" className="form-label">
                      Remark(If any)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="remark"
                      name="remark"
                      value={formData.remark}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="image" className="form-label">
                      Image
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="image"
                      name="image"
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
                    <label htmlFor="remark" className="form-label">
                      EmerId(If any)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="remark"
                      name="remark"
                      value={formData.remark}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6 mb-3 patient-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                      checked={checked}
                      onChange={(e) => setChecked(e.target.checked)}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleCheck1"
                    >
                      Is New Patient?
                    </label>
                  </div>
                  <button type="submit" className="submit-btn">
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

export default Newpatient;
