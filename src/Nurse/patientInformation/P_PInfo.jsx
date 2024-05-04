import React,{useState} from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {toast} from "react-toastify"
import Sidebar3 from '../NurseSidebar/Sidebar3';
import Navbar3 from '../Navbar3';

export default function P_PInfo() {
    const [toggle, setToggle] = useState(true);
    const location = useLocation();
    const admitId = location.state.admitId;
    const aadhaar = location.state.aadhaar;
    console.log(admitId,aadhaar);
    

  const Toggle = () => {
    setToggle(!toggle);
  };

  const [patient, setPatient] = useState({});
  const [diag, setDiag] = useState([]);
  React.useEffect(()=>
  {
    fetchUsers();
  },[]
);



const userId = localStorage.getItem('userId');
      const token = localStorage.getItem('token');
      const role = localStorage.getItem('role');


  const fetchUsers = async() =>{
    try{
      
      const headers = {
        'Authorization': token,
        'ngrok-skip-browser-warning': "true",
      }
    
      
   
      const response = await axios.get(
        `${process.env.REACT_APP_SECRET_KEY}/patient/viewOneLivePatient?role=${role}&admitId=${admitId}&userId=${userId}`,
           {
          headers: headers
        }
        );  
            console.log("API response of one patient list : "+JSON.stringify(response.data))

           
            console.log("this is output of oneView Patient",response.data);
            setPatient(response.data.detail);
            setDiag(response.data.list);
            console.log(response.data.list);
            // setUsers(ans);
          

       
    }catch (error) {
      console.log("Error", error);
      toast.error("Error from P_Pinfo. Please try again.");
    } 
  };

  return (
    <div>
      <div>
      <div className='container-fluid min-vh-100'  style={{ backgroundColor: "#ECE3F0" }} >
        <div className='row'>
          {toggle && (
            <div className='col-4 col-md-2 bg-white vh-100 position-fixed'>
              <Sidebar3 Toggle={Toggle} />
            </div>
          )}
          {toggle && <div className='col-4 col-md-2 '></div>}
          <div className='col'>
            <Navbar3 Toggle={Toggle} />
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '100px' }}>
  <div>
    <img src={process.env.PUBLIC_URL + '/images/14.jpg'} alt='profile' style={{ width: '150px', height: '150px', borderRadius: '50%', marginLeft: '100px' }} />
  </div>
  <div style={{ marginLeft: '50px' }}>
    <h3>Patient Information</h3>
    <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '20px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', marginRight: '50px', marginBottom: '10px' }}>
        <p style={{ minWidth: '100px', marginBottom: '5px', fontWeight: 'bold' }}>First Name:</p>
        <p>{patient.firstName}</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', marginRight: '50px', marginBottom: '10px' }}>
        <p style={{ minWidth: '100px', marginBottom: '5px', fontWeight: 'bold' }}>Last Name:</p>
        <p>{patient.lastName}</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', marginRight: '50px', marginBottom: '10px' }}>
        <p style={{ minWidth: '100px', marginBottom: '5px', fontWeight: 'bold' }}>Address:</p>
        <p>{patient.address}</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', marginRight: '50px', marginBottom: '10px' }}>
        <p style={{ minWidth: '100px', marginBottom: '5px', fontWeight: 'bold' }}>Email:</p>
        <p>{patient.email}</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', marginRight: '50px', marginBottom: '10px' }}>
        <p style={{ minWidth: '100px', marginBottom: '5px', fontWeight: 'bold' }}>Phone:</p>
        <p>{patient.phone}</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', marginRight: '50px', marginBottom: '10px' }}>
        <p style={{ minWidth: '100px', marginBottom: '5px', fontWeight: 'bold' }}>Gender:</p>
        <p>{patient.gender}</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', marginRight: '50px', marginBottom: '10px' }}>
        <p style={{ minWidth: '100px', marginBottom: '5px', fontWeight: 'bold' }}>Date of Birth:</p>
        <p>{patient.birthDate}</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', marginRight: '50px', marginBottom: '10px' }}>
        <p style={{ minWidth: '100px', marginBottom: '5px', fontWeight: 'bold' }}>Blood group:</p>
        <p>{patient.blood}</p>
      </div>
    </div>
  </div>
</div>

<div style={{ textAlign: 'center', marginTop: '20px' }}>
  <h5 style={{ marginBottom: '10px', fontSize: '20px', fontWeight: 'bold' }}>Diagnosis Information</h5>
  <table style={{ fontSize: '16px', margin: 'auto', borderCollapse: 'collapse', width: '80%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
    <thead style={{ backgroundColor: '#f2f2f2', borderTop: '2px solid #ddd', borderBottom: '2px solid #ddd' }}>
      <tr style={{ fontSize: '20px', fontWeight: 'bold' }}>
        <th style={{ padding: '15px', borderRight: '1px solid #ddd' }}>Diagnosis Id</th>
        <th style={{ padding: '15px' }}>Remarks</th>
      </tr>
    </thead>
    <tbody>
      {diag.map((diagnosis, index) => (
        <tr key={diagnosis.diagnosisId} style={{ borderBottom: '1px solid #ddd', backgroundColor: index % 2 === 0 ? '#f9f9f9' : 'transparent' }}>
          <td style={{ padding: '15px', borderRight: '1px solid #ddd' }}>{diagnosis.diagnosisId}</td>
          <td style={{ padding: '15px' }}>{diagnosis.remarks}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>




            {/* <div style={{position:'relative', display:'inline-flex',alignItems:'center', marginLeft:'100px'}}>
              <div>
            <img src={process.env.PUBLIC_URL+'/images/14.jpg'} alt='profile' style={{width:'150px', height:'150px', borderRadius:'50%', marginLeft:'100px'}}/>
            </div>
              <div style={{marginLeft:'50px'}}>
                <h3>Patient Information</h3>
                <div style={{display: 'flex', flexDirection: 'column'}}> 
                  <div style={{display: 'flex'}}> 
                      <p style={{minWidth: '100px',marginRight:'50px'}}>First Name:</p> 
                      <p>{patient.firstName} </p>
                  </div>
                  <div style={{display: 'flex'}}> 
                      <p style={{minWidth: '100px',marginRight:'50px'}}>Last Name:</p> 
                      <p>{patient.lastName}</p>
                  </div>
                  <div style={{display: 'flex'}}> 
                      <p style={{minWidth: '100px',marginRight:'50px'}}>Adress:</p> 
                      <p>{patient.address}</p>
                  </div>
                  <div style={{display: 'flex'}}>
                      <p style={{minWidth: '100px',marginRight:'50px'}}>Email:</p> 
                      <p>{patient.email}</p>
                  </div>
                  <div style={{display: 'flex'}}>
                      <p style={{minWidth: '100px',marginRight:'50px'}}>Phone:</p> 
                      <p>{patient.phone}</p>
                  </div>
                  <div style={{display: 'flex'}}>
                      <p style={{minWidth: '100px',marginRight:'50px'}}>Gender:</p> 
                      <p>{patient.gender}</p>
                  </div>
                  <div style={{display: 'flex'}}>
                      <p style={{minWidth: '100px',marginRight:'50px'}}>Date of Birth:</p> 
                      <p>{patient.birthDate}</p>
                  </div>
                  <div style={{display: 'flex'}}>
                      <p style={{minWidth: '100px',marginRight:'50px'}}>Blood group:</p> 
                      <p>{patient.blood}</p>
                  </div>
                  </div>
                  </div>
                  </div>

<div style={{ textAlign: 'center', marginTop: '20px' }}>
  <h5 style={{ marginBottom: '10px' }}>Diagnosis Information</h5>
  <table style={{ fontSize: '16px', margin: 'auto', borderCollapse: 'collapse', width: '80%' }}>
    <thead>
      <tr style={{ fontSize: '20px' }}>
       
            <th style={{ fontSize: '16px',width: '50%', padding: '10px', border: '1px solid #ddd' }}>Diagnosis Id</th>
            <th style={{ fontSize: '16px',width: '50%', padding: '10px', border: '1px solid #ddd' }}>Remarks</th>
         
      </tr>
    </thead>
    <tbody>
      {
        diag.map((diagnosis) => (
          <tr key={diagnosis.diagnosisId}>
            <td style={{ fontSize: '16px',padding: '10px', border: '1px solid #ddd' }}>{diagnosis.diagnosisId}</td>
            <td style={{ fontSize: '16px',padding: '10px', border: '1px solid #ddd' }}>{diagnosis.remarks}</td>
          </tr>
        ))
      
      }
    </tbody>
  </table>
</div> */}

            
          </div>

        </div>
        </div>     
    </div>
    </div>
  )
}