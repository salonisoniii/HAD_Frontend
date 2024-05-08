import React, { useState } from 'react';
import './ChangePassword.css'; // Import the CSS file
import Sidebar from '../doctor/DocSidebar/Sidebar';
import Sidebar2 from '../Admin/AdminSidebar/Sidebar2';
import Sidebar3 from '../../Nurse/NurseSidebar/Sidebar3';
import Sidebar4 from '../Receptionist/RecSidebar/Sidebar4';
import axios from 'axios';


const ChangePassword = () => {
    // State variables to store current password, new password, and confirm password
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    // State variable to store success or error message
    const [message, setMessage] = useState('');
    const [toggle, setToggle] = useState(true);
    const role = localStorage.getItem("role");


    const Toggle = () => {
        setToggle(!toggle);
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if new password matches confirm password
        if (newPassword !== confirmPassword) {
            setMessage('New password and confirm password must match.');
            return;
        }

        const userId = localStorage.getItem("userId");
        const token = localStorage.getItem("token");

        try {
            // Send a POST request to your backend endpoint to change the password
            const response = await axios.post('${process.env.REACT_APP_SECRET_KEY}/changePassword', {
                userId: userId,
                oldPassword:currentPassword,
                newPassword: newPassword,
                role : role
        },{
                headers: {
                    'ngrok-skip-browser-warning': 'true',
                    "Authorization":token
                },
                // body: JSON.stringify({
                //     currentPassword,
                //     newPassword,
                // }),
            });

            // Parse the JSON response
            // const data = await response.json();
            // console.log("API response : "+JSON.stringify(response.data))

            // Check if the request was successful
            if (response.status === 200) {
                // Clear form fields and set success message
                setCurrentPassword('');
                setNewPassword('');
                setConfirmPassword('');
                setMessage('Password changed successfully.');
            } else {
                // Display the error message from the backend
                setMessage(JSON.stringify(response));
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('An error occurred while changing the password.');
        }
    };

    return (
        <>
            {role === "ADMIN" && <Sidebar2 />}
            {role === "DOCTOR" && <Sidebar />}
            {role === "NURSE" && <Sidebar3 />}
            {role === "RECEPTIONIST" && <Sidebar4 />}
            
                <div className="row">
                    
                    {/* {toggle && <div className="col-4 col-md-2"></div>} */}
                    <div className="col">
                        {/* <Navbar2 Toggle={Toggle} /> */}
                        <div className="container-changepassword"> {/* Add the container class here */}
                            <h2 className="change-password-heading">Change Password</h2>
                            {message && <p className="message">{message}</p>}

                            <form onSubmit={handleSubmit} className="password-form">
                                {/* Form fields for current password, new password, and confirm password */}
                                {/* Submit button to trigger the form submission */}
                                <div className="form-group">
                                    <label htmlFor="currentPassword" className="password-label">Current Password:</label>
                                    <input
                                        type="password"
                                        id="currentPassword"
                                        value={currentPassword}
                                        onChange={(e) => setCurrentPassword(e.target.value)}
                                        required
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="newPassword" className="password-label">New Password:</label>
                                    <input
                                        type="password"
                                        id="newPassword"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        required
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="confirmPassword" className="password-label">Confirm Password:</label>
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                        className="form-control"
                                    />
                                </div>
                                <button type="submit" className='btn btn-primary change-password-btn'>Change Password</button>
                            </form>
                        </div>
                    </div>
                </div>
        </>
    );
};

export default ChangePassword;
