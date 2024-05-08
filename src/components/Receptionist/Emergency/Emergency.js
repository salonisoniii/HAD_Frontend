import React, { useState } from 'react'
import axios from 'axios';
import '../Emergency/Emergency.css'
import Sidebar4 from '../RecSidebar/Sidebar4'
import { toast } from 'react-toastify';

const Emergency = () => {
  const [emergencyText, setEmergencyText] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token")
  const headers = {
    Authorization: token,
    "ngrok-skip-browser-warning": "true",

  };

  const handleEmergencySubmit = async () => {
    try {
      setLoading(true);
      let response = await axios.post(`${process.env.REACT_APP_SECRET_KEY}/reception/emergency?userId=${userId}`,
        { response: emergencyText },
        { headers: headers },
      );
      console.log("API Response: " + JSON.stringify(response.data));
      setEmergencyText('');
      setSubmitted(true);
      toast.success("Send Successfully");
    } catch (error) {
      console.log("Error", error);
      toast.error("Error... Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Sidebar4 />
      <textarea
        className="emergency-textarea"
        value={emergencyText}
        onChange={(e) => setEmergencyText(e.target.value)}
        placeholder="Type your emergency message here..."
      />
      <div className='button-container3'>
        <button
          className="emergency-button"
          onClick={handleEmergencySubmit}
          disabled={loading}
        >

          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </div>
      \
    </>
  )
}

export default Emergency
