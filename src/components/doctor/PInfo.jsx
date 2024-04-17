import React,{useState} from 'react'
import Sidebar from './Sidebar';
import './doctor.css';
import Navbar from './Navbar1';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import {toast} from "react-toastify"

export default function PInfo() {
    const [toggle, setToggle] = useState(true);
    const location = useLocation();
    const admitId = location.state.admitId;
    const aadhaar = location.state.aadhaar;
    console.log(admitId,aadhaar);
    console.log("hello")

  const Toggle = () => {
    setToggle(!toggle);
  };

  const [patient, setPatient] = useState([]);
  React.useEffect(()=>
  {
    fetchUsers();
  },[]
);
// React.useEffect(()=>
// {
  
// },[patient]
// );
  const fetchUsers = async() =>{
    try{
      const userId = localStorage.getItem('userId');
      const token = localStorage.getItem('token');
      
      const headers = {
        'userId': userId,
        'Authorization': token,
        'ngrok-skip-browser-warning': "true",
        // 'Content-Type': 'multipart/form-data'
      }
      const response = await axios.get(
          `https://present-neat-mako.ngrok-free.app/his/patient/viewLivePatients?admitId=${admitId}&aadhaar=${aadhaar}`,
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
            setPatient(response.data.response);
            // setUsers(ans);
          

       
    }catch (error) {
      console.log("Error", error);
      // toast.error("Error from Pinfo. Please try again.");
    } 
  };

  return (
    <div>
      <div>
      <div className='container-fluid bg-secondary min-vh-100' >
        <div className='row'>
          {toggle && (
            <div className='col-4 col-md-2 bg-white vh-100 position-fixed'>
              <Sidebar Toggle={Toggle} />
            </div>
          )}
          {toggle && <div className='col-4 col-md-2 '></div>}
          <div className='col'>
            <Navbar Toggle={Toggle} />
            <div style={{position:'relative', display:'inline-flex',alignItems:'center', marginTop:'50px', marginLeft:'100px'}}>
            <img src={process.env.PUBLIC_URL+'/images/14.jpg'} alt='profile' style={{width:'150px', height:'150px', borderRadius:'50%', marginLeft:'100px'}}/>
              <div style={{marginLeft:'50px'}}>
                <h3>Patient Information</h3>
                <div style={{display: 'flex', flexDirection: 'column'}}> 
                  <div style={{display: 'flex'}}> 
                      <p style={{minWidth: '100px',marginRight:'50px'}}>First Name:</p> 
                      <p>Saloni </p>
                  </div>
                  <div style={{display: 'flex'}}> 
                      <p style={{minWidth: '100px',marginRight:'50px'}}>Last Name:</p> 
                      <p>Saloni</p>
                  </div>
                  <div style={{display: 'flex'}}> 
                      <p style={{minWidth: '100px',marginRight:'50px'}}>Adress:</p> 
                      <p>Bangalore</p>
                  </div>
                  <div style={{display: 'flex'}}>
                      <p style={{minWidth: '100px',marginRight:'50px'}}>Email:</p> 
                      <p>saloni@gmail.com</p>
                  </div>
                  <div style={{display: 'flex'}}>
                      <p style={{minWidth: '100px',marginRight:'50px'}}>Phone:</p> 
                      <p>2587945278</p>
                  </div>
                  <div style={{display: 'flex'}}>
                      <p style={{minWidth: '100px',marginRight:'50px'}}>Gender:</p> 
                      <p>Female</p>
                  </div>
                  <div style={{display: 'flex'}}>
                      <p style={{minWidth: '100px',marginRight:'50px'}}>Date of Birth:</p> 
                      <p>28-08-1999</p>
                  </div>
                  <div style={{display: 'flex'}}>
                      <p style={{minWidth: '100px',marginRight:'50px'}}>Blood group:</p> 
                      <p>B+</p>
                  </div>
                 <Link to='/AddDiag'> <button style={{color:'blue'}}>Add Diagonosis</button></Link>
                  
              </div>
              {/* {/* <div style={{position: 'relative', marginLeft: 'auto', marginRight: '50px'}}> */}
              {/* <img src={process.env.PUBLIC_URL+'/images/14.jpg'} alt='profile' style={{width:'150px', height:'150px', borderRadius:'50%', marginLeft:'100px', marginTop:'150px'}}/> */}
              {/* </div> */} 
            </div>
            </div>
          </div>

        </div>
        </div>     
    </div>
    </div>
  )
}
