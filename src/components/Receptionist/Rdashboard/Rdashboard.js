import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import Navbar4 from '../Navbar4'
import "../Rdashboard/Rdashboard.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Rdashboard() {
  const [patients, setPatients] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async (e) => {
    const query = e.target.value.toLowerCase();

    // setSearchQuery(e.target.value);
    let body = {};
    body["aadhaar"] = searchQuery;

    try {
      // const userId = localStorage.getItem('userId');
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

      // Assuming the response data contains an array of patients matching the search query
      const patientDetails = response.data.response;
      console.log("Resp: " + JSON.stringify(patientDetails));
      setPatients(patientDetails);

      // if (Array.isArray(patientDetails)) {
      // } else {
      //     console.error('Fetched data is not an array:', patientDetails);
      // }
      setSearchQuery("");

      // Update the patients state with the fetched patient details
    } catch (error) {
      console.error("Error fetching patient details:", error);
      // Handle error (e.g., display an error message)
    }
  };
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };
//   const navigate = useNavigate();
//   const isLoggedIn = localStorage.getItem("isLoggedIn");
//   useEffect(() => {
//     if (isLoggedIn === null) {
//       navigate("/login");
//     }
//   }, []);

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
            <table className="table">
              <thead>
                <tr className="table-primary">
                  <th colSpan="3">
                    {" "}
                    {/* Span across all columns */}
                    <div className="search-bar">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search by Aadhar ID..."
                        value={searchQuery}
                        onChange={handleChange}
                      />
                      <button className="search-btn" onClick={handleSearch}>
                        Search
                      </button>
                    </div>
                  </th>
                </tr>
                <tr>
                  <th>#</th>
                  <th>FirstName</th>
                  <th>LastName</th>
                  <th>Aadhar ID</th>
                  {/* Add other table headers as needed */}
                </tr>
              </thead>
              <tbody>
                {/* Loop through the patients array and display each patient */}
                {patients.map((patient, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{patient.firstName}</td>
                    <td>{patient.lastName}</td>
                    <td>{patient.aadhaar}</td>
                    {/* Add other table data as needed */}
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
