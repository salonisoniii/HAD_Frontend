import React, { useEffect, useState } from "react";
import Navbar3 from "./Navbar3";
import Sidebar3 from "./Sidebar3";
import UserData from "./UserData";
import './userData.css';

import axios from "axios";
import {toast} from "react-toastify";

export default function Nurse() {
  const [toggle, setToggle] = useState(true);

  const Toggle = () => {
    setToggle(!toggle);
  };

  const [users,setUsers] = useState([]);
  const fetchUsers = async() =>{
    try{
      const userId = localStorage.getItem('userId');
      const token = localStorage.getItem('token');
      const isOP=0;
      const role=localStorage.getItem('role');
      const headers = {
        // 'userId': userId,
        'Authorization': token,
        'ngrok-skip-browser-warning': "true",
        // 'Content-Type': 'multipart/form-data'
      }
      const response = await axios.get(
          `${process.env.REACT_APP_SECRET_KEY}/patient/viewLivePatients?role=${role}&isOP=${isOP}&userId=${userId}`,
          {
          headers: headers
        }
        );
       
      
        
            console.log("API response of patient list : "+JSON.stringify(response.data))

            // const ans = response.response.map((curUsers) => ({
            
              // id:curUsers.id,
              // firstName:curUsers.firstName,
              // lastName:curUsers.lastName,
              // gender: curUsers.gender,
              // DOB: curUsers.birthDate
                          //  setUsers(resp.response);
            // }));
            //console.log(ans);
            setUsers(response.data.response);
            // setUsers(ans);
          

       
    }catch (error) {
      console.log("Error", error);
      toast.error("Error from docInPatient. Please try again.");
    } 

       
   
  };

  useEffect(()=>{
    fetchUsers();
  },[])
  return (
    <div>
      <div>
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

              <div class='container'>
    <div class='row'>
        <div class='col-md my-.5'>
            <div class='p-1 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                <div>
                    <h3 class='fs-2'>10</h3>
                    <p class='fs-5'>Nurse</p>
                </div>
                <i class='bi bi-person-circle p-3 fs-1'></i>
            </div>
        </div>
        <div class='col-md my-.5'>
            <div class='p-1 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                <div>
                    <h3 class='fs-2'>150</h3>
                    <p class='fs-5'>Patients</p>
                </div>
                <i class='bi bi-person-circle p-3 fs-1'></i>
            </div>
        </div>
    </div>
</div>

                <div>
                    <table>
                        <thead>
                            <tr>
                            <th>Id</th>
                            <th>firstName</th>
                            <th>lastName</th>
                            {/* <th>Address</th> */}
                            </tr>
                        </thead>
                        
                            <UserData users={users} />
                        
                    </table>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
