import React, { useState } from 'react';
import Navbar2 from '../Navbar2';
import Schedule from '../Pages/Schedule'; // Import the Schedule component
import Sidebar2 from '../Sidebar2';

const ModifySchedule = () => {
    const [toggle, setToggle] = useState(true);

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
      <div className='container-fluid bg-secondary min-vh-100' >
        <div className='row'>
          {toggle && (
            <div className='col-4 col-md-2 bg-white vh-100 position-fixed'>
              <Sidebar2 Toggle={Toggle} />
            </div>
          )}
          {toggle && <div className='col-4 col-md-2'></div>}
          <div className='col'>
           
            <Navbar2 Toggle={Toggle} />
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Roles
                </button>
                <ul className="dropdown-menu dropdown-menu-dark">
                    <li><a className="dropdown-item" href="#" onClick={() => handleRoleSelection('Doctor')}>Doctors</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() => handleRoleSelection('Nurse')}>Nurses</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() => handleRoleSelection('Receptionist')}>Receptionist</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() => handleRoleSelection('Pharmacist')}>Pharmacist</a></li>
                </ul>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="email-form1">
                    <label htmlFor="exampleInputEmail1" className="form1-label">Email address</label>
                    <input
                        type="email"
                        className="form1-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div id="emailHelp" className="form1-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3 form1-check">
                    <input
                        type="checkbox"
                        className="form1-check-input"
                        id="exampleCheck1"
                        checked={checked}
                        onChange={(e) => setChecked(e.target.checked)}
                    />
                    <label className="form1-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn1-primary">Check</button>
            </form>
            {submitted && (
                <>
                    <div className="card">
                        <div className="card-body">
                            <div className="schedule">
                                <h2>Schedule</h2>
                                <p>Name: {name}</p>
                                <p>Email: {email}</p>
                                <p>Roles: {roles.join(', ')}</p> {/* Display selected roles */}
                                {/* Render the Schedule component */}
                                <Schedule />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
        </div>
        </div>
        </div> 
    )
}

export default ModifySchedule;
