import React from "react";
import PInfo from "./PInfo";
import { Link } from "react-router-dom";

const Patients = ({ patients }) => {
  return (
    <div style={{marginLeft:'50px'}}>
      {/* <h2 >List of Patients</h2>
      <ul className="patients-list" style={{listStyle: 'none',padding: 0,margin: 0}}>
        {patients.map((patient) => (
          <li key={patient.id} style={{display: 'flex',alignItems: 'center',marginBottom: '10px'}}>
            <img src={patient.profilePhoto} alt="Profile" style={{width:'50px',height:'50px',marginRight:'20px'}}/>
            <div style={{ display: 'flex',alignItems: 'center',marginRight:'20px'}}>
              <p style={{marginRight:'10px'}}>Patient ID: {patient.id}</p>
              <p>Name: {patient.name}</p>
            </div>
          </li>
        ))}
      </ul> */}
      
      <h2>List of Patients</h2>
      <table >
        <thead style={{paddingBottom:'30px'}}> 
          <tr>
            <th style={{paddingRight:'20px'}}>Profile Picture</th>
            <th style={{paddingRight:'20px'}}>Patient ID</th>
            <th style={{paddingRight:'20px'}}>Name</th>
          </tr>
        </thead>
        <tbody style={{paddingBottom:'30px'}}>
          {patients.map(patient => (
            <tr key={patient.id}>
              <td >
                <Link to='/PInfo'>
                <img src={patient.profilePhoto} alt="Profile" style={{width: '40px', height: '40px',borderRadius: '50%', 
     marginRight: 'auto'}} />
                </Link>
              </td>
              <td>{patient.id}</td>
              <td>{patient.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
  );
};

export default Patients;
