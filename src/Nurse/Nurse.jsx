import React, { useEffect, useState } from "react";
import Navbar3 from "./Navbar3";
import Sidebar3 from "./NurseSidebar/Sidebar3";
import axios from "axios";
import { toast } from "react-toastify";
import NurseIPPatientList from "./PatientList/NurseIPPatientList";

export default function Nurse() {
  const [toggle, setToggle] = useState(true);


  const Toggle = () => {
    setToggle(!toggle);
  };

  const [IpCount, setIpCount] = useState(0);
  const [OpCount, setOpCount] = useState(0);
  const [user, setUser] = useState([]);

  const fetchdoc = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token");

      const headers = {
        Authorization: token,
        "ngrok-skip-browser-warning": "true",
      };

      const response = await axios.get(
        `${process.env.REACT_APP_SECRET_KEY}/nurse/home?userId=${userId}`,
        {
          headers: headers,
        }
      );
      console.log("data of the user", response.data);

      // Check if response status is successful before setting state
      if (response.status === 200) {
        if (response.data) {
          setOpCount(response.data.opPatient);
          setIpCount(response.data.ipPatient);
          setUser(response.data);
        }

      }
      else {
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      console.log("Error here", error);
      toast.error("Error from Doctor. Please try again.");
    }
  };

  useEffect(() => {
    fetchdoc();
  }, []);

  return (
    <div style={{ maxWidth: '100vw',overflow:'hidden' }}>
      <Sidebar3 />
      <div className="row">
        <div className="col">
          {/* <Navbar3 Toggle={Toggle} firstName={user.detail.firstName} lastName={user.detail.lastName} phone={user.detail.phone}/> */}

          <div class="container" style={{ marginBottom: '15px' }}>
            <div class="row">
              <div class="col-md my-.5">
                <div class="p-1 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                  <div>
                    <h3 class="fs-2">{IpCount}</h3>
                    <p class="fs-5">In Patient</p>
                  </div>
                  <i class="bi bi-person-circle p-3 fs-1"></i>
                </div>
              </div>
              <div class="col-md my-.5">
                <div class="p-1 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                  <div>
                    <h3 class="fs-2">{OpCount}</h3>
                    <p class="fs-5">Out Patient</p>
                  </div>
                  <i class="bi bi-person-circle p-3 fs-1"></i>
                </div>
              </div>
            </div>
          </div>
          <NurseIPPatientList />
        </div>
      </div>
    </div>
  );
}
