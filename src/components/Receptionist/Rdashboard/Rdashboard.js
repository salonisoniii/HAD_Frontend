import React, { useState } from 'react'
// import Navbar4 from '../Navbar4'
import '../Rdashboard/Rdashboard.css'
import { Link } from 'react-router-dom';


function Rdashboard() {
    // const [toggle,setToggle] = useState(true);
    // const Toggle = () => {
    //     setToggle(!toggle);
    // }
    const [patients, setPatients] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const Newpatient = () => {
        // Logic to open a modal or a form to input patient details
        // After submitting the form, add the patient to the patients state
       
    };
    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        // Logic to filter patients based on the search query
    };


    return (

        <div className='px-2'>

            <div className='container-fluid-rdashboard'>
                <div className='row g-3 my-2'>
                    <div className='col-md-3 p-1'>
                        <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                            <div>
                                <h3 className='fs-2'>50</h3>
                                <p className='fs-5'>Total Counts</p>
                            </div>
                            <i className='bi bi-person-circle p-3 fs-1'></i>

                        </div>

                    </div>
                    <div className='col-md-3 p-1'>
                        <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                            <div>
                                <h3 className='fs-2'>30</h3>
                                <p className='fs-5'>Active</p>
                            </div>
                            <i className='bi bi-person-nurse-fill p-3 fs-1'></i>

                        </div>

                    </div>
                    <div className='col-md-3 p-1'>
                        <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                            <div>
                                <h3 className='fs-2'>20</h3>
                                <p className='fs-5'>Treated</p>
                            </div>
                            <i className='bi bi-person-fill p-3 fs-1'></i>

                        </div>

                    </div>
                    <div className='col-md-3 p-1'>
                        <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                            <div>
                                <h3 className='fs-2'>20%</h3>
                                <p className='fs-5'>Increase</p>
                            </div>
                            <i className='bi bi-graph-up-arrow p-3 fs-1'></i>

                        </div>

                    </div>
                    {/* <div className='col-md-3 p-1'>
                        <button className='add-patient-btn' onClick={addPatient}>Add Patient</button>
                    </div> */}
                    {/* Search Bar */}
                    {/* <div className='col-md-12 p-1'>
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Search by Aadhar ID...'
                            value={searchQuery}
                            onChange={handleSearch}
                        />
                        <button className='search-btn' onClick={handleSearch}>Search</button>
                    </div> */}
                    {/* Table to display patients */}
                    {/* <div className='col-md-12 p-1'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Aadhar ID</th> */}
                                    {/* Add other table headers as needed */}
                                {/* </tr>
                            </thead>
                            <tbody> */}
                                {/* Loop through the patients array and display each patient */}
                                {/* {patients.map((patient, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{patient.name}</td>
                                        <td>{patient.aadharId}</td> */}
                                        {/* Add other table data as needed */}
                                    {/* </tr>
                                ))}
                            </tbody>
                        </table>
                    </div> */}
                    <div className='col-md-12 p-1'>
                        <Link to="/newpatient" className='add-patient-btn'>New Patient</Link>
                    </div>
                    <div className='col-md-12 p-1'>
                        <table className='table'>
                            <thead>
                                <tr className='table-primary'>
                                    <th colSpan='3'> {/* Span across all columns */}
                                        <div className='search-bar'>
                                            <input 
                                                type='text' 
                                                className='form-control' 
                                                placeholder='Search by Aadhar ID...' 
                                                value={searchQuery} 
                                                onChange={handleSearch} 
                                            />
                                            <button className='search-btn' onClick={handleSearch}>Search</button>
                                        </div>
                                    </th>
                                </tr>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Aadhar ID</th>
                                    {/* Add other table headers as needed */}
                                </tr>
                            </thead>
                            <tbody>
                                {/* Loop through the patients array and display each patient */}
                                {patients.map((patient, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{patient.name}</td>
                                        <td>{patient.aadharId}</td>
                                        {/* Add other table data as needed */}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    
                    
                </div>

            </div>

        </div>
    )
}

export default Rdashboard;
