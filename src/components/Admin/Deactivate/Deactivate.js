import React, { useState } from 'react'
import Navbar2 from '../Navbar2'
import '../Deactivate/Deactivate.css'
import Sidebar2 from '../Sidebar2'
import { Link } from 'react-router-dom'
const Deactivate = () => {
    const [toggle, setToggle] = useState(true);

    const Toggle = () => {
      setToggle(!toggle);
    };

    // State variables for form inputs
    const [email, setEmail] = useState('');
    const [checked, setChecked] = useState(false);
    const [name, setName] = useState('');
    const [submitted, setSubmitted] = useState(false);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted!');
        // Add your form submission logic here
        if (email.trim() !== '') {
            setSubmitted(true);
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
                    <li><Link className="dropdown-item" to=''>Doctors</Link></li>
                    <li><Link className="dropdown-item" to=''>Nurses</Link></li>
                    <li><Link className="dropdown-item" to=''>Receptionist</Link></li>
                    <li><Link className="dropdown-item" to=''>Pharmacist</Link></li>
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
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Information</h5>
                        <p className="card-text">Name: {name}</p>
                        <p className="card-text">Email: {email}</p>
                    </div>
                </div>
                
                
            )}
            </div>
                </div>
                </div>
                </div>
        
    );
}

export default Deactivate
