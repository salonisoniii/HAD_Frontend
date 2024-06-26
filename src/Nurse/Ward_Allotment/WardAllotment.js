import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './table.css';
import './ward.css'; 
import Swal from 'sweetalert2';
import Sidebar3 from '../NurseSidebar/Sidebar3';


export default function Home() {
  const [toggle, setToggle] = useState(true);
  const Toggle = () => {
    setToggle(!toggle);
  };

  const [wardData, setWardData] = useState([]);
  const [formData, setFormData] = useState({ wardNo: '', patientId: '', action: 'A' });
  const [fetchingData, setFetchingData] = useState(false); // State to track whether data is being fetched
  const [showForm, setShowForm] = useState(false); // State to manage form visibility


const userId = localStorage.getItem('userId');
const token = localStorage.getItem('token');

  const fetchWardDetails = async () => {
    const headers = {
      'Authorization': token,
      'ngrok-skip-browser-warning': "true",
    }
    try {
      setFetchingData(true); // Set fetchingData to true when fetching starts
      const response = await axios.get(`${process.env.REACT_APP_SECRET_KEY}/nurse/getWard?userId=${userId}`, 
        {
          headers: headers
        }
      );
      const responseData = response.data.response;
      console.log('Response data:', responseData);
      setWardData(responseData);
    } catch (error) {
      console.error('Error fetching ward details:', error);
    } finally {
      setFetchingData(false); // Set fetchingData to false when fetching ends
    }
  };

  const handleAssignPatient = (wardNo) => {
    setFormData({ ...formData, wardNo });
    setShowForm(true); // Show the form when assigning patient
  };
  
  const handleAssignPatientSubmit = () => {
    const { patientId, action, wardNo } = formData;
    // Call API to assign patient
    const requestBody = {
      aadhaar: patientId,
      wardNo,
      action
    };


    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You want to assign the patient : "+patientId+" to the ward : "+wardNo+"!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Assign!",
      cancelBut4tonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

        console.log('Form data submitted:', requestBody);
        axios.post(`${process.env.REACT_APP_SECRET_KEY}/nurse/updateWard?userId=${userId}`, requestBody, {
          headers: {
            'ngrok-skip-browser-warning': 'true',
            'Authorization': token,
          }
        })
          .then(response => {
            console.log('Patient assigned successfully:', response.data);
            setShowForm(false); // Hide the form after submission
            swalWithBootstrapButtons.fire({
              title: "Assigned!",
              text: "Patient is admited successfully.",
              icon: "success"
            });
            fetchWardDetails();
          })
          .catch(error => {
            console.error('Error assigning patient:', error);
            setShowForm(false);
            swalWithBootstrapButtons.fire({
              title: "Error!",
              text: "Patient could not be assigned. Please try again later.",
              icon: "error"
            });
          });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Patient is not assigned :)",
          icon: "error"
        });
      }
    });
    
  };


  const handleDischarge = (wardNo, patientId) => {
    const action = 'D';
    const requestBody = {
      aadhaar: patientId,
      wardNo,
      action
    };

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You want to discharge the patient : "+patientId+" from the ward : "+wardNo,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Discharge it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

        console.log('Discharge request:', requestBody);
        axios.post(`${process.env.REACT_APP_SECRET_KEY}/nurse/updateWard?userId=${userId}`, requestBody, {
          headers: {
        'ngrok-skip-browser-warning': 'true',
        'Authorization': token,
      }
    })
      .then(response => {
        console.log('Patient discharged successfully:', response.data);
        // Refresh the ward details after discharge
        fetchWardDetails();
      })
      .catch(error => {
        console.error('Error discharging patient:', error);
      });
        swalWithBootstrapButtons.fire({
          title: "Discharged!",
          text: "Patient removed from ward.",
          icon: "success"
        });
      } else if (
        //Read more about handling dismissals below
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Patient is not discharged :)",
          icon: "error"
        });
      }
    });

  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <>
    <Sidebar3 />
        <div className='row'>
          
          {/* {toggle && <div className='col-4 col-md-2 '></div>} */}
          <div className='col'>
            {/* <Navbar3 Toggle={Toggle} /> */}

            <div className="container mt-4" style={{width:'60%'}}>
  <h2 className="text-center mb-4">Available Wards</h2>

  <button onClick={fetchWardDetails} className="btn btn-primary mb-3" disabled={fetchingData}>
    {fetchingData ? 'Fetching Patient...' : 'Fetch Patient'}
  </button>

  <div className="table-responsive">
    <table className="table table-striped table-bordered" style={{fontSize:'15px'}}>
      <thead className="thead-dark">
        <tr>
          <th>Ward Number</th>
          <th>Ward Type</th>
          <th>Patient ID</th>
          <th>Patient Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {wardData.map(ward => (
          <tr key={ward.wardNo}>
            <td>{ward.wardNo}</td>
            <td>{ward.type}</td>
            <td>{ward.patientId}</td>
            <td>{ward.firstName} {ward.lastName}</td>
            <td className="text-center">
              {ward.empty ? (
                <button onClick={() => handleAssignPatient(ward.wardNo)} className="btn btn-sm btn-primary">Assign Patient</button>
              ) : (
                <button onClick={() => handleDischarge(ward.wardNo, ward.patientId)} className="btn btn-sm btn-danger">Discharge</button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {showForm && (
    <div className="card form-container">
      <div className="card-body">
        <h5 className="card-title">Assign Patient</h5>
        <div className="form-group">
          <input type="text" name="patientId" value={formData.patientId} onChange={handleInputChange} placeholder="Enter Patient ID" className="form-control mb-2" />
          <select name="action" value={formData.action} onChange={handleInputChange} className="form-control mb-2">
            <option value="A">Admit</option>
            <option value="D">Discharge</option>
          </select>
          <button onClick={handleAssignPatientSubmit} className="btn btn-success">Submit</button>
        </div>
      </div>
    </div>
  )}
</div>
    {/* <div className="container mt-4">

      <h2>Available Wards</h2>
    
      <button onClick={fetchWardDetails} className="btn btn-primary mb-3" disabled={fetchingData}>
        {fetchingData ? 'Fetching Patient...' : 'Fetch Patient'}
      </button>
      <table className="table">
        <thead>
          <tr>
            <th>Ward Number</th>
            <th>Ward Type</th>
            <th>Patient ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Assign Patient</th>
            <th>Discharge</th>
          </tr>
        </thead>
        <tbody>
          {wardData.map(ward => (
            <tr key={ward.wardNo}>
              <td>{ward.wardNo}</td>
              <td>{ward.type}</td>
              <td>{ward.patientId}</td>
              <td>{ward.firstName}</td>
              <td>{ward.lastName}</td>
              <td>
                {ward.empty && (
                  <button onClick={() => handleAssignPatient(ward.wardNo)} className="btn btn-primary">Assign Patient</button>
                )}
              </td>
              <td>
                {!ward.empty && (
                  <button onClick={() => handleDischarge(ward.wardNo, ward.patientId)} className="btn btn-danger">Discharge</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showForm && (
        <div className="form-container">
          <div className="form-group">
            <input type="text" name="patientId" value={formData.patientId} onChange={handleInputChange} placeholder="Enter Patient ID" className="form-control mr-2" />
            <select name="action" value={formData.action} onChange={handleInputChange} className="form-control mr-2">
              <option value="A">Admit</option>
              <option value="D">Discharge</option>
            </select>
            <button onClick={handleAssignPatientSubmit} className="btn btn-success">Submit</button>
          </div>
        </div>
      )} 
    </div>*/}
    </div>
    </div>
    </> 
  );
}