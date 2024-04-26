import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import Navbar1 from "../Navbar1";
import PastHistoryList from "./PastHistoryList";
import axios from "axios";
import { toast } from "react-toastify";

export default function PastHistory() {
  const [toggle, setToggle] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [forceUpdate, setForceUpdate] = useState(false); // State variable for triggering re-render

  const [users,setUsers] = useState([]);

  const Toggle = () => {
    setToggle(!toggle);
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchValue(searchValue.trim());
    // Call fetchUsers with searchValue as patientId
    console.log("now the seachVAlue is ",searchValue);
    fetchUsers(searchValue);
    
  };

 useEffect(()=>
  {
    fetchUsers("");
  },[]
);
  const fetchUsers = async(patientId) =>{
    try{
      const userId = localStorage.getItem('userId');
      const token = localStorage.getItem('token');
      const role=localStorage.getItem('role');
      const headers = {
        'Authorization': token,
        'ngrok-skip-browser-warning': "true",
      }
      const response = await axios.get(
          `https://present-neat-mako.ngrok-free.app/his/patient/pastHistory?role=${role}&userId=${userId}&patientId=${patientId}`,
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
            setForceUpdate(prevState => !prevState);
            // setUsers(ans);
          

       
    }catch (error) {
      console.log("Error", error);
      toast.error("Error from pastHistory. Please try again.");
    } 
  };

  return (
    <div>
      <div
        className="container-fluid  min-vh-100"
        style={{ backgroundColor: "#ECE3F0" }}
      >
        <div className="row">
          {toggle && (
            <div className="col-4 col-md-2 bg-white vh-100 position-fixed">
              <Sidebar Toggle={Toggle} />
            </div>
          )}
          {toggle && <div className="col-4 col-md-2"></div>}
          <div className="col">
            <Navbar1 Toggle={Toggle} />
            <div style={{display:'flex',justifyContent:'center',marginBottom:'15px'}}>
            <form onSubmit={handleSubmit}>
                <input type="text"  placeholder="Search By Aadhaar" value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}/>
                <button type="submit">Search</button>
            </form>
            </div>
           
         
            <PastHistoryList users={users} forceUpdate={forceUpdate} />


          </div>
        </div>
      </div>
    </div>
  );
}