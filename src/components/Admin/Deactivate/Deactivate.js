import React, { useState } from 'react';
import Navbar2 from '../Navbar2';
import '../Deactivate/Deactivate.css';
import Sidebar2 from '../Sidebar2';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import Axios library

const Deactivate = () => {
    const [toggle, setToggle] = useState(true);
    const [email, setEmail] = useState('');
    const [checked, setChecked] = useState(false);
    const [name, setName] = useState('');
    const [userId, setUserId] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [selectedRole, setSelectedRole] = useState('');
    const [formError, setFormError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const adminId = window.localStorage.getItem("userId");
    const token = window.localStorage.getItem("token");


    const Toggle = () => {
        setToggle(!toggle);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Checking the user exist');
        const headers = {
            'Authorization': token,
            'ngrok-skip-browser-warning': "true"
        };
        // Add your form submission logic here
        if (email.trim() !== '' && selectedRole.trim() !== '') {
            try {
                const body = { email: email, role: selectedRole, adminId : adminId};
                console.log("Body: "+JSON.stringify(body));
                // Send a POST request to the backend to fetch user information
                const response = await axios.post(`https://present-neat-mako.ngrok-free.app/his/admin/checkUser`, 
                                body,
                                { headers : headers});
                // Assuming the backend responds with user information including name
                // console.log("Resp : "+JSON.stringify(response.data));

                const userData = response.data;
                setName(userData.response.firstName+" "+userData.response.lastName);
                setUserId(userData.response.userId);
                console.log("Resp : "+JSON.stringify(userData));
                setSubmitted(true);
            } catch (error) {
                // Handle errors
                console.error('Error fetching user information:', error);
                // Optionally, show an error message to the user
                setFormError('Error deactivating user');
            }
        }
    };

    const handleDeactivate = async () => {

        const headers = {
            'Authorization': token,
            'ngrok-skip-browser-warning': "true"
        };
        try {
            // Send a POST request to the backend endpoint for deactivation
            const response = await axios.post('https://present-neat-mako.ngrok-free.app/his/admin/updateAccountStatus', 
                                    { action : "D", role: selectedRole, adminId : adminId, userId: userId}, 
                                    { headers : headers});

            // Assuming the backend responds with a success message
            console.log(response.data);
            setSuccessMessage('User deactivated successfully');

            // Reset the form fields
            setEmail('');
            setChecked(false);
            setName('');
            setUserId('');
            setSelectedRole('');
            setSubmitted(false);

        } catch (error) {
            // Handle errors
            console.error('Error deactivating user:', error);
            // Optionally, show an error message to the user
        }
    };

    return (
        <div>
            <div className='container-fluid min-vh-100' style={{ backgroundColor: '#ECE3F0' }}>
                <div className='row'>
                    {toggle && (
                        <div className='col-4 col-md-2 bg-white vh-100 position-fixed'>
                            <Sidebar2 Toggle={Toggle} />
                        </div>
                    )}
                    {toggle && <div className='col-4 col-md-2'></div>}
                    <div className='col'>
                        <Navbar2 Toggle={Toggle} />
                        <div className="info-card mt-3 p-3">
                            <h5 className="card-title">Check User Information</h5>
                            <label htmlFor="exampleInputRole" className='m-3'>Role</label>
                            <div className="dropdown-info">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                    {selectedRole}
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li><Link className="dropdown-item" to='' onClick={() => setSelectedRole('DOCTOR')}>DOCTOR</Link></li>
                                    <li><Link className="dropdown-item" to='' onClick={() => setSelectedRole('NURSE')}>NURSE</Link></li>
                                    <li><Link className="dropdown-item" to='' onClick={() => setSelectedRole('RECEPTIONIST')}>RECEPTIONIST</Link></li>
                                    <li><Link className="dropdown-item" to='' onClick={() => setSelectedRole('PHARMACIST')}>PHARMACIST</Link></li>
                                </ul>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="email-form1 mt-3">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <small id="emailHelp" className="form1-text text-muted">We'll never share your email with anyone else.</small>
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
                                <button type="submit" className="btn btn-primary" onClick ={handleSubmit} style={{ width: '30%' }}>Check</button>
                            </form>
                            {formError && <div className="alert alert-danger mt-3" role="alert">{formError}</div>}
                            {successMessage && <div className="alert alert-success mt-3" role="alert">{successMessage}</div>}
                        </div>
                        {submitted && (
                            <div className="user-card">
                                <div className="card-body">
                                    <h5 className="card-title">Information</h5>
                                    <p className="card-text">Name: {name}</p>
                                    <p className="card-text">Email: {email}</p>
                                </div>
                            </div>
                        )}
                        {submitted && (
                            <button
                                type="button"
                                onClick={handleDeactivate}
                                className="btn btn-deactivate"
                                style={{ width: '30%', backgroundColor: '#d9534f', color: 'white', marginTop: '20px' }}
                            >
                                Deactivate
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Deactivate;
