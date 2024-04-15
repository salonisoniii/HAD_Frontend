import React, { useState } from 'react';
import Navbar2 from '../Navbar2';
import Schedule from '../Pages/Schedule'; // Import the Schedule component
import Sidebar2 from '../Sidebar2';
import { Link } from 'react-router-dom';
import '../ModifySchedule/ModifySchedule.css'

const ModifySchedule = () => {
    const [toggle, setToggle] = useState(true);
    const [selectedRole, setSelectedRole] = useState('');

    const Toggle = () => {
        setToggle(!toggle);
    };

    const [email, setEmail] = useState('');
    const [checked, setChecked] = useState(false);
    const [name, setName] = useState('');
    const [roles, setRoles] = useState([]); // State to hold selected roles
    const [submitted, setSubmitted] = useState(false);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted!');
        // Assuming you want to submit only when email is not empty
        if (email.trim() !== '') {
            setSubmitted(true);
        }
    }

    // Handle role selection
    const handleRoleSelection = (role) => {
        if (roles.includes(role)) {
            setRoles(roles.filter(item => item !== role)); // Remove role if already selected
        } else {
            setRoles([...roles, role]); // Add role if not selected
        }
    }

    return (
        <div>
            <div className='container-fluid  min-vh-100' style={{ backgroundColor: '#ECE3F0' }}>
                <div className='row'>
                    {toggle && (
                        <div className='col-4 col-md-2 bg-white vh-100 position-fixed'>
                            <Sidebar2 Toggle={Toggle} />
                        </div>
                    )}
                    {toggle && <div className='col-4 col-md-2'></div>}
                    <div className='col'>

                        <Navbar2 Toggle={Toggle} />
                        <div className="ms-card mt-3 p-3">
                            <h5 className="card-title">Check User Information</h5>
                            <label htmlFor="exampleInputRole" className='m-3'>Role</label>
                            <div className="dropdown-ms">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {selectedRole}
                                </button>
                                <ul className="dropdown-menu dropdown-menu-ms " aria-labelledby="dropdownMenuButton">
                                    <li><Link className="dropdown-item" to='' onClick={() => handleRoleSelection('Doctor')}>Doctors</Link></li>
                                    <li><Link className="dropdown-item" to='' onClick={() => handleRoleSelection('Nurse')}>Nurses</Link></li>
                                    <li><Link className="dropdown-item" to='' onClick={() => handleRoleSelection('Receptionist')}>Receptionist</Link></li>
                                    <li><Link className="dropdown-item" to='' onClick={() => handleRoleSelection('Pharmacist')}>Pharmacist</Link></li>
                                </ul>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="ms-email-form mt-3">
                                    <label htmlFor="exampleInputEmail1" className="ms-label">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control ms-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <div id="emailHelp" className="form2-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3 ms-form-check">
                                    <input
                                        type="checkbox"
                                        className="ms-check-input"
                                        id="exampleCheck1"
                                        checked={checked}
                                        onChange={(e) => setChecked(e.target.checked)}
                                    />
                                    <label className="ms-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <div style={{ display: '' }}>
                                    <button type="submit" className="btn btn-primary" style={{ width: '30%' }}>Check</button>

                                </div>
                            </form>
                        </div>
                        {submitted && (
                            <>
                                <div className="ms1-card">
                                    <div className="card-body">
                                        <div className="schedule">
                                            <h2>Schedule</h2>
                                            {/* <p>Name: {name}</p> */}
                                            <p>Email: {email}</p>
                                            {/* <p>Roles: {roles.join(', ')}</p> Display selected roles */}
                                            {/* Render the Schedule component */}
                                            <Schedule />
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary" style={{ width: '30%' }}>Confirm</button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModifySchedule;
