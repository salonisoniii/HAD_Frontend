import React,{useState} from 'react'
import Sidebar from '../Sidebar';
import '../doctor.css';
import Navbar1 from '../Navbar1';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {toast} from "react-toastify"

export default function PInfo() {
    const [toggle, setToggle] = useState(true);
    const location = useLocation();
    const admitId = location.state.admitId;
    const aadhaar = location.state.aadhaar;
    const isLive = location.state.isLive;
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

const Navigate = useNavigate();

const userId = localStorage.getItem('userId');
      const token = localStorage.getItem('token');
      const role = localStorage.getItem('role');

const [gdwai,setGDWAI]= useState([]);
const [admit,selectAdmit] = useState([]);
const handleView = async(admitId) =>{
        try{
          const headers = {
            // 'userId': userId,
            'Authorization': token,
            'ngrok-skip-browser-warning': "true",
            // 'Content-Type': 'multipart/form-data'
          }

          const response = await axios.get(
            `${process.env.REACT_APP_SECRET_KEY}/patient/getDiagnosisWithAdmitId?role=${role}&admitId=${admitId}&userId=${userId}`,
            // `https://present-neat-mako.ngrok-free.app/his/patient/getDiagnosisWithAdmitId?role=${role}&admitId=${admitId}&userId=${userId}`,
            // `https://summary-gnu-equally.ngrok-free.app/his/patient/viewOneLivePatient?role=${role}&admitId=${admitId}&userId=${userId}`,
            {
            headers: headers
          }
          );
            setGDWAI(response.data.response);
            selectAdmit(admit === admitId ? null : admitId);
            
            console.log("output of this url",response.data.response);
            console.log("output of gdwai",gdwai);


        }catch (error) {
          console.log("Error", error);
          toast.error("Error from Pinfo. Please try again.");
        } 
}
  const fetchUsers = async() =>{
    try{
      
      
      const headers = {
        // 'userId': userId,
        'Authorization': token,
        'ngrok-skip-browser-warning': "true",
        // 'Content-Type': 'multipart/form-data'
      }
      let response;
      
      if(isLive){
      response = await axios.get(
        `${process.env.REACT_APP_SECRET_KEY}/patient/viewOneLivePatient?role=${role}&admitId=${admitId}&userId=${userId}`,
          // `https://present-neat-mako.ngrok-free.app/his/patient/viewOneLivePatient?role=${role}&admitId=${admitId}&userId=${userId}`,
          // `https://summary-gnu-equally.ngrok-free.app/his/patient/viewOneLivePatient?role=${role}&admitId=${admitId}&userId=${userId}`,
          {
          headers: headers
        }
        );
      }
      else{
        response = await axios.get(
          `${process.env.REACT_APP_SECRET_KEY}/patient/pastHistoryOnePatient?role=${role}&patientId=${aadhaar}&userId=${userId}`,
          // `https://present-neat-mako.ngrok-free.app/his/patient/pastHistoryOnePatient?role=${role}&patientId=${aadhaar}&userId=${userId}`,
          // `https://summary-gnu-equally.ngrok-free.app/his/patient/viewOneLivePatient?role=${role}&admitId=${admitId}&userId=${userId}`,
          {
          headers: headers
        }
        );
      }
       
      
        
            console.log("API response of one patient list : "+JSON.stringify(response.data))

            // const ans = response.response.map((curUsers) => ({
            
              // id:curUsers.id,
              // firstName:curUsers.firstName,
              // lastName:curUsers.lastName,
              // gender: curUsers.gender,
              // DOB: curUsers.birthDate
                          //  setUsers(resp.response);
            // }));
            console.log("this is output of oneView Patient",response.data);
            setPatient(response.data.detail);
            setDiag(response.data.list);
            console.log(response.data.list);
            // setUsers(ans);
          

       
    }catch (error) {
      console.log("Error", error);
      toast.error("Error from Pinfo. Please try again.");
    } 
  };

  return (
    <div>
      <div>
      <div className='container-fluid min-vh-100'  style={{ backgroundColor: "#ECE3F0" }} >
        <div className='row'>
          {toggle && (
            <div className='col-4 col-md-2 bg-white vh-100 position-fixed'>
              <Sidebar Toggle={Toggle} />
            </div>
          )}
          {toggle && <div className='col-4 col-md-2 '></div>}
          <div className='col'>
            <Navbar1 Toggle={Toggle} />
            <div style={{position:'relative', display:'inline-flex',alignItems:'center', marginLeft:'100px'}}>
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
                {isLive? (
                  <div style={{textAlign:'center',marginTop:'10px'}}>
                 {/* <Link to={{pathname:'/AddDiag',
                state: {admitId: patient.admitId, aadhaar: patient.aadhaar}}}> */}
               
                   <button onClick={()=>Navigate('/AddDiag',{state: {admitId: patient.admitId, aadhaar: patient.aadhaar}})} style={{color:'blue'}}>Add Diagonosis</button>
               
                   {/* </Link> */}
                  </div>
                ):
                <p></p>
               }
              
            
             

<div style={{ textAlign: 'center', marginTop: '20px' }}>
  <h5 style={{ marginBottom: '10px' }}>Diagnosis Information</h5>
  <table style={{ fontSize: '16px', margin: 'auto', borderCollapse: 'collapse', width: '80%' }}>
    <thead>
      <tr style={{ fontSize: '20px' }}>
        {isLive ? (
          <>
            <th style={{ fontSize: '16px',width: '50%', padding: '10px', border: '1px solid #ddd' }}>Diagnosis Id</th>
            <th style={{ fontSize: '16px',width: '50%', padding: '10px', border: '1px solid #ddd' }}>Remarks</th>
          </>
        ) : (
          <>
            <th style={{ fontSize: '16px',width: '50%', padding: '10px', border: '1px solid #ddd' }}>Admit Id</th>
            <th style={{ fontSize: '16px',width: '50%', padding: '10px', border: '1px solid #ddd' }}>View</th>
          </>
        )}
      </tr>
    </thead>
    <tbody>
      {isLive ? (
        diag.map((diagnosis) => (
          <tr key={diagnosis.diagnosisId}>
            <td style={{ fontSize: '16px',padding: '10px', border: '1px solid #ddd' }}>{diagnosis.diagnosisId}</td>
            <td style={{ fontSize: '16px',padding: '10px', border: '1px solid #ddd' }}>{diagnosis.remarks}</td>
          </tr>
        ))
      ) : (
        diag.map((diagnosis) => (
          <React.Fragment key={diagnosis.diagnosisId}>
            <tr>
              <td style={{ fontSize: '16px',padding: '10px', border: '1px solid #ddd' }}>{diagnosis.admitId}</td>
              <td style={{ fontSize: '16px',padding: '10px', border: '1px solid #ddd' }}>
                <button onClick={() => handleView(diagnosis.admitId)} className='btn btn-primary'>View</button>
              </td>
            </tr>
            {admit === diagnosis.admitId && (
              <tr>
                <td colSpan='2'>
                  <table style={{ fontSize: '16px',margin: 'auto', borderCollapse: 'collapse', width: '100%' }}>
                    <thead>
                      <tr>
                        <th style={{ fontSize: '16px',padding: '10px', border: '1px solid #ddd', width: '50%' }}>Diagnosis Id</th>
                        <th style={{ fontSize: '16px',padding: '10px', border: '1px solid #ddd', width: '50%' }}>Remarks</th>
                      </tr>
                    </thead>
                    <tbody>
                      {gdwai.map((diagnosis) => (
                        <tr key={diagnosis.diagnosisId}>
                          <td style={{ fontSize: '16px',padding: '10px', border: '1px solid #ddd' }}>{diagnosis.diagnosisId}</td>
                          <td style={{ fontSize: '16px',padding: '10px', border: '1px solid #ddd' }}>{diagnosis.remarks}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </td>
              </tr>
            )}
          </React.Fragment>
        ))
      )}
    </tbody>
  </table>
</div>

            
          </div>

        </div>
        </div>     
    </div>
    </div>
  )
}