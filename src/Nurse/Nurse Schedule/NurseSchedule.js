import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import axios from 'axios';
import 'react-calendar/dist/Calendar.css';
import './nurseSchedule.css'; // Ensure CSS is properly linked
import { toast } from 'react-toastify';
import Sidebar3 from '../NurseSidebar/Sidebar3';
import Navbar3 from '../Navbar3';

export default function NurseSchedule() {
  const [toggle, setToggle] = useState(true);
  const Toggle = () => {
    setToggle(!toggle);
  };
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [shiftData, setShiftData] = useState(null);
  const [selectedShiftInfo, setSelectedShiftInfo] = useState("");

  useEffect(() => {
    fetchShiftData();
  }, []);

  const userId = localStorage.getItem('userId');
      const token = localStorage.getItem('token');


  const fetchShiftData = async () => {
    try {
      const headers = {
       
        'Authorization': token,
        'ngrok-skip-browser-warning': "true",
       
      }
      const response = await axios.get(
        `${process.env.REACT_APP_SECRET_KEY}/nurse/home?userId=` +
          userId,
        {
          headers: headers,
        }
      );
      console.log("data of the user",response.data);

      setShiftData(response.data.shift);
      console.log("shift data is",shiftData);
    } catch (error) {
      console.error('Error fetching shift data:', error);
      toast.error("Error fetching shift data")
    }
  };
  
  const getShiftDescription = (shiftValue) => {
    switch (shiftValue) {
      case 0:
        return "Nurse not available";
      case 1:
        return "Available 10 AM - 1 PM";
      case 2:
        return "Available 3 PM - 6 PM";
      case 3:
        return "Available 6 PM - 9 PM";
      default:
        return "No shift data available";
    }
  };

  const handleDayClick = (value) => {
    setSelectedDate(value);
    const dayOfWeek = value.toLocaleDateString('en-US', { weekday: 'short' }).toLowerCase();
    const shiftValue = shiftData ? shiftData[dayOfWeek] : null;
    setSelectedShiftInfo(getShiftDescription(shiftValue));
  };

  return (
    <div>
      <div>
      <div className='container-fluid min-vh-100'  style={{ backgroundColor: "#ECE3F0" }} >
        <div className='row'>
          {toggle && (
            <div className='col-4 col-md-2 bg-white vh-100 position-fixed'>
              <Sidebar3 Toggle={Toggle} />
            </div>
          )}
          {toggle && <div className='col-4 col-md-2 '></div>}
          <div className='col'>
            <Navbar3 Toggle={Toggle} />
    <div className="calendar-container">
      <Calendar
        onChange={handleDayClick}
        value={selectedDate}
      />
      <div className="shift-info-container">
        <p><strong>Shift Details for {selectedDate.toLocaleDateString()}:</strong></p>
        <p>{selectedShiftInfo}</p>
      </div>
    </div>
    </div>
        </div>
      </div>
    </div>
    </div>
  );
}