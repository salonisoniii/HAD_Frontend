import React, { useEffect, useState } from "react";
import Navbar3 from "./Navbar3";
import Sidebar3 from "./Sidebar3";
import UserData from "./UserData";
import './userData.css';
const API = 'https://summary-gnu-equally.ngrok-free.app/doc/viewPastPatients';

export default function Nurse() {
  const [toggle, setToggle] = useState(true);

  const Toggle = () => {
    setToggle(!toggle);
  };

  const [users,setUsers] = useState([]);
  const fetchUsers = async() =>{
    try{
        await fetch('https://summary-gnu-equally.ngrok-free.app/his/doc/viewPastPatients', {
            headers : {
                'ngrok-skip-browser-warning':'true'
            }
        })
        .then(resp => resp.json())
        .then(resp => { 
           
            console.log("API response : "+JSON.stringify(resp))
                           setUsers(resp.response);
         
        });

       
    }catch(e){
        console.error(e); 
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
