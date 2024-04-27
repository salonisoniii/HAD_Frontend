import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import Navbar2 from "../Navbar2";
import Schedule from "../Pages/Schedule"; // Import the Schedule component
import Sidebar2 from "../AdminSidebar/Sidebar2";
import { Link } from "react-router-dom";
import "../ModifySchedule/ModifySchedule.css";
import axios from "axios";

const ModifySchedule = () => {
  const [toggle, setToggle] = useState(true);
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedShifts, setSelectedShifts] = useState({
    mon: 0,
    tue: 0,
    wed: 0,
    thu: 0,
    fri: 0,
    sat: 0,
    sun: 0,
  });
  const Toggle = () => {
    setToggle(!toggle);
  };

  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(false);
  // const [name, setName] = useState("");
  const [roles, setRoles] = useState([]); // State to hold selected roles
  const [submitted, setSubmitted] = useState(false);
  const [userId, setUserId] = useState("");
  const [formError, setFormError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const adminId = window.localStorage.getItem("userId");
  const token = window.localStorage.getItem("token");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Check user Exist");
    // Assuming you want to submit only when email is not empty
    const headers = {
      Authorization: token,
      "ngrok-skip-browser-warning": "true",
    };
    if (email.trim() !== "") {
      try {
        const body = { email: email, role: selectedRole, adminId: adminId };
        console.log("Body: " + JSON.stringify(body));
        const response = await axios.post(
          `${process.env.REACT_APP_SECRET_KEY}/admin/checkUser`,
          body,
          { headers: headers }
        );
        const userData = response.data;
        // setName(userData.response.firstName + " " + userData.response.lastName);
        setUserId(userData.response.userId);
        console.log("Resp : " + JSON.stringify(userData));
        // setSelectedRole(userData.response.role);
        const scheduleResponse = await axios.post(
          `${process.env.REACT_APP_SECRET_KEY}/admin/checkUser`,
          body,
          { headers: headers }
        );
        const scheduleData = scheduleResponse.data;
        setSelectedShifts({
          mon: scheduleData.response.mon || 0,
          tue: scheduleData.response.tue || 0,
          wed: scheduleData.response.wed || 0,
          thu: scheduleData.response.thu || 0,
          fri: scheduleData.response.fri || 0,
          sat: scheduleData.response.sat || 0,
          sun: scheduleData.response.sun || 0,
        });
        setSubmitted(true);
      } catch (error) {
        // Handle errors
        console.error("Error fetching user information:", error);
        // Optionally, show an error message to the user
        setFormError("Error checking user");
      }
    }
  };

  const handleShiftSelect = (day, shift) => {
    let shiftValue = 0; // Default to 0 for "No Shift"
    switch (shift) {
      case "12:00 AM to 08:59 AM":
        shiftValue = 1;
        break;
      case "09:00 AM to 04:59 PM":
        shiftValue = 2;
        break;
      case "05:00 PM to 11:59 PM":
        shiftValue = 3;
        break;
      default:
        shiftValue = 0; // No Shift
        break;
    }
    setSelectedShifts({
      ...selectedShifts,
      [day]: shiftValue,
    });
  };

  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  useEffect(() => {
    if (isLoggedIn === null) {
      navigate("/login");
    }
  }, []);

  const handleConfirm = async () => {
    try {
      const headers = {
        Authorization: token,
        "ngrok-skip-browser-warning": "true",
      };
      // Send a POST request to the backend endpoint for deactivation
      const response = await axios.post(
        `${process.env.REACT_APP_SECRET_KEY}/admin/updateSchedule`,
        { role: selectedRole, userId: userId, ...selectedShifts },
        { headers: headers }
      );

      // Assuming the backend responds with a success message
      console.log(response.data);
      setSuccessMessage("Updated schedule successfully");

      // Reset the form fields
      setEmail("");
      setChecked(false);
      setUserId("");
      setSelectedRole("");
      setSelectedShifts({
        mon: 0,
        tue: 0,
        wed: 0,
        thu: 0,
        fri: 0,
        sat: 0,
        sun: 0,
      });
      setSubmitted(false);
    } catch (error) {
      // Handle errors
      console.error("Error checking user:", error);
      // Optionally, show an error message to the user
    }
  };

  return (
    <>
      <Sidebar2 />
      <div className="row">
        {toggle && <div className="col-4 col-md-2"></div>}
        <div className="col">
          <div className="ms-card mt-3 p-3">
            <h5 className="card-title">Check User Information</h5>
            <label htmlFor="exampleInputRole" className="m-3">
              Role
            </label>
            <div className="dropdown-ms">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {selectedRole}
              </button>
              <ul
                className="dropdown-menu dropdown-menu-ms "
                aria-labelledby="dropdownMenuButton"
              >
                <li>
                  <Link
                    className="dropdown-item"
                    to=""
                    onClick={() => setSelectedRole("DOCTOR")}
                  >
                    DOCTOR
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to=""
                    onClick={() => setSelectedRole("NURSE")}
                  >
                    NURSE
                  </Link>
                </li>
              </ul>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="ms-email-form mt-3">
                <label htmlFor="exampleInputEmail1" className="ms-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control ms-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div id="emailHelp" className="form2-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3 ms-form-check">
                <input
                  type="checkbox"
                  className="ms-check-input"
                  id="exampleCheck1"
                  checked={checked}
                  onChange={(e) => setChecked(e.target.checked)}
                />
                <label className="ms-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div>
              <div style={{ display: "" }}>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                  style={{ width: "30%" }}
                >
                  Check
                </button>
              </div>
            </form>
            {formError && (
              <div className="alert alert-danger mt-3" role="alert">
                {formError}
              </div>
            )}
            {successMessage && (
              <div className="alert alert-success mt-3" role="alert">
                {successMessage}
              </div>
            )}
          </div>
          {submitted && (
            <div className="ms1-card mt-3">
              <div className="card-body">
                <h2> Schedule </h2>
                <p> Email : {email}</p>
                <ul className="list-group list-group-sm mt-3">
                  {Object.entries(selectedShifts).map(([day, shift]) => (
                    <li className="list-group-item d-flex justify-content-between align-items-center" key={day}>
                      <strong>{day}:</strong>
                      <div className="ms-button-container">
                        <button
                          type="button"
                          className={`btn ${shift === "No Shift" ? "btn-danger" : "btn-secondary"} ${selectedShifts[day] === 0 ? "selected":""}`}
                          onClick={() => handleShiftSelect(day, "No Shift")}
                        >
                          No Shift
                        </button>
                        <button
                          type="button"
                          className={`btn ${shift === "12:00 AM to 08:59 AM" ? "btn-danger" : "btn-secondary"} ${selectedShifts[day] === 1 ? "selected" : ""}`}
                          onClick={() => handleShiftSelect(day, "12:00 AM to 08:59 AM")}
                        >
                          12:00 AM to 08:59 AM
                        </button>
                        <button
                          type="button"
                          className={`btn ${shift === "09:00 AM to 04:59 PM" ? "btn-danger" : "btn-secondary"} ${selectedShifts[day] === 2 ? "selected" : ""}`}
                          onClick={() => handleShiftSelect(day, "09:00 AM to 04:59 PM")}
                        >
                          09:00 AM to 04:59 PM
                        </button>
                        <button
                          type="button"
                          className={`btn ${shift === "05:00 PM to 11:59 PM" ? "btn-danger" : "btn-secondary"} ${selectedShifts[day] === 3 ? "selected" : ""}`}
                          onClick={() => handleShiftSelect(day, "05:00 PM to 11:59 PM")}
                        >
                          05:00 PM to 11:59 PM
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleConfirm}
                  style={{ width: "30%", marginTop: "1rem" }}
                >
                  Confirm
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ModifySchedule;
