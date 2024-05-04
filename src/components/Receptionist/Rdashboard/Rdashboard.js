import React, { useState } from "react";
import "../Rdashboard/Rdashboard.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Rdashboard() {
  const [patients, setPatients] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [aadharID, setAadharID] = useState("");
  const [error, setError] = useState("");

  const handleSearch = async () => {
    let body = {};

    if (searchQuery.length === 12 && !isNaN(searchQuery)) {
      body["aadhaar"] = searchQuery;
    } else {
      body["firstName"] = firstName;
      body["lastName"] = lastName;
    }

    try {
      const token = localStorage.getItem("token");
      console.log("API Body: " + JSON.stringify(body));
      const response = await axios.post(
        `${process.env.REACT_APP_SECRET_KEY}/reception/isPatientPresent`,
        body,
        {
          headers: {
            Authorization: token,
            "ngrok-skip-browser-warning": "true",
          },
        }
      );

      const patientDetails = response.data.response;
      console.log("Resp: " + JSON.stringify(patientDetails));
      setPatients(patientDetails.concat(patients));
      
    } catch (error) {
      console.error("Error fetching patient details:",error );
      setError("Error fetching patient details. Please try again.");
      toast.error("Patient details wrong");
    }
    clearSearchFields();
  };

  const clearSearchFields = () => {
    setFirstName("");
    setLastName("");
    setAadharID("");
  };

  return (
    <div className="px-2">
      <div className="container-fluid-rdashboard">
        <div className="row g-3 my-2">
          <div className="col-md-3 p-1">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">50</h3>
                <p className="fs-5">Total Counts</p>
              </div>
              <i className="bi bi-person-circle p-3 fs-1"></i>
            </div>
          </div>
          <div className="col-md-3 p-1">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">30</h3>
                <p className="fs-5">Active</p>
              </div>
              <i className="bi bi-person-nurse-fill p-3 fs-1"></i>
            </div>
          </div>
          <div className="col-md-3 p-1">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">20</h3>
                <p className="fs-5">Treated</p>
              </div>
              <i className="bi bi-person-fill p-3 fs-1"></i>
            </div>
          </div>
          <div className="col-md-3 p-1">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">20%</h3>
                <p className="fs-5">Increase</p>
              </div>
              <i className="bi bi-graph-up-arrow p-3 fs-1"></i>
            </div>
          </div>

          <div className="col-md-12 p-1">
            <Link to="/newpatient" className="add-patient-btn">
              New Patient
            </Link>
          </div>
          <div className="col-md-12 p-1">
            <div className="search-bar">
              <input
                type="text"
                className="form-control mr-2"
                placeholder="Search by First Name..."
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                className="form-control mr-2"
                placeholder="Search by Last Name..."
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <input
                type="text"
                className="form-control mr-2"
                placeholder="Search by Aadhar ID..."
                pattern="[0-9]*"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="search-btn" onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>
          <div className="col-md-12 p-1">
            <table className="table">
              <thead>
                <tr className="table-primary">
                  <th>#</th>
                  <th>FirstName</th>
                  <th>LastName</th>
                  <th>Aadhar ID</th>
                </tr>
              </thead>
              <tbody>
              {patients.map((patient, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{patient.firstName}</td>
                    <td>{patient.lastName}</td>
                    <td>{patient.aadhaar}</td>
                  </tr>
                ))}
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rdashboard;
