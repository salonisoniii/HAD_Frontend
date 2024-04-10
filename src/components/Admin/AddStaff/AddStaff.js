import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar2 from "../Navbar2";
import "../AddStaff/AddStaff.css";
import Sidebar2 from "../Sidebar2";

function AddStaff() {
  const [toggle, setToggle] = useState(true);

  const Toggle = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <div className="container-fluid min-vh-100" style={{backgroundColor:'#ECE3F0' }}>
        <div className="row">
          {toggle && (
            <div className="col-4 col-md-2 bg-white vh-100 position-fixed">
              <Sidebar2 Toggle={Toggle} />
            </div>
          )}
          {toggle && <div className="col-4 col-md-2"></div>}
          <div className="col">
            <Navbar2 Toggle={Toggle} />
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Add Staff</h5>
                <div className="button-container">
                  <div className="button-row">
                    <Link to="/add-doctor" className="button">
                      Add Doctor
                    </Link>
                    <Link to="/add-nurse" className="button">
                      Add Nurse
                    </Link>
                  </div>
                </div>

                <div className="button-container2">
                  <Link to="/add-pharmacist" className="button">
                    Add Pharmacist
                  </Link>
                  <Link to="/add-receptionist" className="button">
                    Add Receptionist
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddStaff;
