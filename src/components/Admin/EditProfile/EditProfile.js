import React, { useState } from 'react'
import axios from 'axios';
import '../EditProfile/EditProfile.css'
import Sidebar2 from '../AdminSidebar/Sidebar2';
import Sidebar from '../../doctor/DocSidebar/Sidebar';
import Sidebar3 from '../../../Nurse/NurseSidebar/Sidebar3';
import Sidebar4 from '../../Receptionist/RecSidebar/Sidebar4';
function EditProfile() {
    const [toggle, setToggle] = useState(true);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setContactNumber] = useState('');
    const [address, setAddress] = useState('');
    const [formError, setFormError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const userId = window.localStorage.getItem("userId");
    const token = window.localStorage.getItem("token");
    const role = localStorage.getItem("role");
    
    const Toggle = () => {
        setToggle(!toggle);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const headers = {
                'Authorization': token,
                'ngrok-skip-browser-warning': "true"
            };
            const body = {
                role: role,
                userId: userId,
                firstName: firstName,
                lastName: lastName,
                phone: phone,
                address: address
            };
            const response = await axios.post(`${process.env.REACT_APP_SECRET_KEY}/updateProfile`, body, { headers: headers });
            console.log(response.data);
            setFormError('');
            setSuccessMessage('Changes saved successfully.');
            // Optionally, show a success message to the user
            setFirstName('');
            setLastName('');
            setContactNumber('');
            setAddress('');
        } catch (error) {
            console.error('Error updating profile:', error);
            setFormError('Error updating profile');
            setSuccessMessage('');
        }
    };
    return (
        <>
            {role === "ADMIN" && <Sidebar2 />}
            {role === "DOCTOR" && <Sidebar />}
            {role === "NURSE" && <Sidebar3 />}
            {role === "RECEPTIONIST" && <Sidebar4 />}
            <div className="row">

                {toggle && <div className="col-4 col-md-2"></div>}
                <div className="col">
                    {/* <Navbar2 Toggle={Toggle} /> */}
                    <div className="edit-card mt-3 p-3">
                        <h5 className="card-title">Edit Profile</h5>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3 edit-profile-input">
                                <label htmlFor="firstName" className="edit-label">First Name</label>
                                <input
                                    type="text"
                                    className="form-control edit-profile-textarea"
                                    id="firstName"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                            <div className="mb-3 edit-profile-input">
                                <label htmlFor="lastName" className="edit-label">Last Name</label>
                                <input
                                    type="text"
                                    className="form-control edit-profile-textarea"
                                    id="lastName"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                            <div className="mb-3 edit-profile-input">
                                <label htmlFor="Phone" className="edit-label">Phone</label>
                                <input
                                    type="text"
                                    className="form-control edit-profile-textarea"
                                    id="contactNumber"
                                    value={phone}
                                    onChange={(e) => setContactNumber(e.target.value)}
                                />
                            </div>
                            <div className="mb-3 edit-profile-input">
                                <label htmlFor="address" className="edit-label">Address</label>
                                <textarea
                                    className="form-control"
                                    id="address"
                                    rows="3"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                ></textarea>
                            </div>
                            <button type="submit" className="btn edit-btn ">Save Changes</button>
                        </form>
                        {formError && <div className="alert alert-danger mt-3" role="alert">{formError}</div>}
                        {successMessage && <div className="alert alert-success mt-3" role="alert">{successMessage}</div>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditProfile
