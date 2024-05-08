//by clicking on that date shift will highlight.

// import React, { useState } from 'react';
// import Calendar from 'react-calendar';
// import axios from 'axios';
// import 'react-calendar/dist/Calendar.css';

// export default function CalendarEvent () {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [shift, setShift] = useState(null);

//   const handleDateChange = async (date) => {
//     setSelectedDate(date);
//     const response = await fetchEvents(date);
//     setShift(response);
//   };

//   const fetchEvents = async (date) => {
//     const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'short' }).toLowerCase();
//     try {
//       const response = await axios.get('https://run.mocky.io/v3/f2190bc6-da3e-466f-bdcb-bb903ef11ae0');
//       const shifts = response.data.response[0];
//       return shifts[dayOfWeek];
//     } catch (error) {
//       console.error('Error fetching events:', error);
//       return null;
//     }
//   };

//   const renderShift = (shiftValue) => {
//     switch (shiftValue) {
//       case 0:
//         return "10 AM - 12 PM";
//       case 1:
//         return "1 PM - 3 PM";
//       case 2:
//         return "3 PM - 6 PM";
//       case 3:
//         return "6 PM - 9 PM";
//       default:
//         return "No shift available";
//     }
//   };

//   return (
//     <div>
//       <Calendar
//         onChange={handleDateChange}
//         value={selectedDate}
//       />
//       {shift !== null && (
//         <p>Shift: {renderShift(shift)}</p>
//       )}
//     </div>
//   );
// }



//this code will color entire column 

// import React, { useState, useEffect } from 'react';
// import Calendar from 'react-calendar';
// import axios from 'axios';
// import 'react-calendar/dist/Calendar.css';
// import './cal.css'; // Import custom CSS file for styling

// export default function CalendarEvent() {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [shiftData, setShiftData] = useState(null);

//   useEffect(() => {
//     fetchShiftData();
//   }, []);

//   const fetchShiftData = async () => {
//     try {
//       const response = await axios.get('https://run.mocky.io/v3/eb90863d-2754-46e4-b621-15bb3d4b5b68');
//       setShiftData(response.data.response[0]);
//     } catch (error) {
//       console.error('Error fetching shift data:', error);
//     }
//   };

//   const getShiftColor = (shiftValue) => {
//     switch (shiftValue) {
//       case 0:
//         return "#ffcccc"; // Light red for shift 0
//       case 1:
//         return "#ccffcc"; // Light green for shift 1
//       case 2:
//         return "#ccccff"; // Light blue for shift 2
//       case 3:
//         return "#ffffcc"; // Light yellow for shift 3
//       default:
//         return "#ffffff"; // Default color
//     }
//   };

//   const tileClassName = ({ date }) => {
//     if (shiftData) {
//       const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'short' }).toLowerCase();
//       const shiftValue = shiftData[dayOfWeek];
//       return `shift-${shiftValue}`;
//     }
//     return '';
//   };

//   const highlightCurrentDate = ({ date }) => {
//     if (date.getDate() === selectedDate.getDate() &&
//       date.getMonth() === selectedDate.getMonth() &&
//       date.getFullYear() === selectedDate.getFullYear()) {
//       return '';
//     }
//     return null;
//   };

//   return (
//     <div className="calendar-container">
//       <div className="calendar-top" style={{ backgroundColor: 'red' }}></div>
//       <div className="calendar" >
//         <Calendar
//           onChange={setSelectedDate}
//           value={selectedDate}
//           tileClassName={tileClassName}
//           tileContent={highlightCurrentDate}
//         />
//       </div>
//       <div className="legend">
//         <p><strong>Shift Information:</strong></p>
//         <div className="color-box" style={{ backgroundColor: getShiftColor(0) }}>
//           <span>Shift:0 10AM:1PM</span>
//         </div>
//         <div className="color-box" style={{ backgroundColor: getShiftColor(1) }}>
//           <span>Shift:1 1PM-5PM</span>
//         </div>
//         <div className="color-box" style={{ backgroundColor: getShiftColor(2) }}>
//           <span>Shift:2 6PM-9PM</span>
//         </div>
//         <div className="color-box" style={{ backgroundColor: getShiftColor(3) }}>
//           <span>Shift:3 9PM-12AM</span>
//         </div>
//       </div>
//       <style jsx>{`
//         .legend {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           margin-top: 10px;
//         }
//         .color-box {
//           width: 200px;
//           height: 50px;
//           // border-radius: 0%;
//           margin-bottom: 5px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
// }
//         .color-box span {
//           margin-left: 5px;
//         }
//       `}</style>
//     </div>
//   );
// }  


// import React, { useState, useEffect } from 'react';
// import Calendar from 'react-calendar';
// import axios from 'axios';
// import 'react-calendar/dist/Calendar.css';
// import './cal.css'; // Import custom CSS file for styling

// export default function CalendarEvent() {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [shiftData, setShiftData] = useState(null);

//   useEffect(() => {
//     fetchShiftData();
//   }, []);

//   const fetchShiftData = async () => {
//     try {
//       const response = await axios.get('https://run.mocky.io/v3/eb90863d-2754-46e4-b621-15bb3d4b5b68');
//       setShiftData(response.data.response[0]);
//     } catch (error) {
//       console.error('Error fetching shift data:', error);
//     }
//   };

//   const getShiftColor = (shiftValue) => {
//     switch (shiftValue) {
//       case 0:
//         return "#BABAB7"; 
//       case 1:
//         return "#AB55A0"; 
//       case 2:
//         return "#5DCAE8"; 
//       case 3:
//         return "#6F56A4"; 
//       default:
//         return "#122C44"; 
//     }
//   };

//   const tileClassName = ({ date }) => {
//     if (shiftData) {
//       const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'short' }).toLowerCase();
//       const shiftValue = shiftData[dayOfWeek];
//       return `shift-${shiftValue}`;
//     }
//     return '';
//   };

//   const tileContent = ({ date, view }) => {
//     if (shiftData && view === 'month') {
//       const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'short' }).toLowerCase();
//       const shiftValue = shiftData[dayOfWeek];
//       const color = getShiftColor(shiftValue);
//       return (
//         <div style={{ backgroundColor: color, width: '40px', height: '8px', borderRadius: '10px' }}></div>
//       );
//     }
//     return null;
//   };

//   return (
//     <div className="calendar-container">
//       <div className="calendar-top"></div>
//       <div className="calendar">
//         <Calendar
//           onChange={setSelectedDate}
//           value={selectedDate}
//           tileClassName={tileClassName}
//           tileContent={tileContent}
//         />
//       </div>
//       <div className="legend">
//         <p><strong>Shift Information:</strong></p>
//         <div className="color-box" style={{ backgroundColor: getShiftColor(0) }}>
//           <span>Not available</span>
//         </div>
//         <div className="color-box" style={{ backgroundColor: getShiftColor(1) }}>
//           <span>Shift:1 1PM-5PM</span>
//         </div>
//         <div className="color-box" style={{ backgroundColor: getShiftColor(2) }}>
//           <span>Shift:2 6PM-9PM</span>
//         </div>
//         <div className="color-box" style={{ backgroundColor: getShiftColor(3) }}>
//           <span>Shift:3 9PM-12AM</span>
//         </div>
//       </div>
//     </div>
//   );
// }


// import React, { useState, useEffect } from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import Modal from 'react-modal';
// import axios from 'axios';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import './cal.css';

// const localizer = momentLocalizer(moment);
// Modal.setAppElement('#root'); // Assuming your root element has an ID of 'root'

// export default function CalendarEvent() {
//   const [events, setEvents] = useState([]);
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [selectedEvent, setSelectedEvent] = useState(null);

//   useEffect(() => {
//     fetchShiftData();
//   },[]);

//   const fetchShiftData = async () => {
//     try {
//       const response = await axios.get('https://run.mocky.io/v3/eb90863d-2754-46e4-b621-15bb3d4b5b68');
//       processShiftData(response.data.response[0]);
//     } catch (error) {
//       console.error('Error fetching shift data:', error);
//     }
//   };

//   // Define a function to map shift values to their descriptions
// const getShiftDescription = (shiftValue) => {
//   switch (shiftValue) {
//     case 0:
//       return "Doctor not available"; // Shift 0 means the doctor is not available
//     case 1:
//       return "10 AM - 1 PM"; // Shift 1 means available from 10 AM to 1 PM
//     case 2:
//       return "3 PM - 6 PM"; // Shift 2 means available from 3 PM to 6 PM
//     case 3:
//       return "6 PM - 9 PM"; // Shift 3 means available from 6 PM to 9 PM
//     default:
//       return "No data"; // Default text if the shift is undefined
//   }
// };


//   const processShiftData = (shiftData) => {
//     const monthStart = moment().startOf('month').day(-7);
//     const monthEnd = moment().endOf('month').day(14);
//     let days = [];
//     while (monthStart.isBefore(monthEnd)) {
//       days.push({
//         date: monthStart.toDate(),
//         shift: shiftData[monthStart.format('ddd').toLowerCase()]
//       });
//       monthStart.add(1, 'day');
//     }
//     mapDaysToEvents(days);
//   };

//   const mapDaysToEvents = (days) => {
//     const eventList = days.map(day => ({
//       title: getShiftDescription(day.shift),
//       start: day.date,
//       end: day.date,
//       allDay: true,
//       resource: day.shift
//     }));
//     setEvents(eventList);
//   };

//   const handleSelectEvent = (event) => {
//     setSelectedEvent(event);
//     setModalIsOpen(true);
//   };

//   const handleCloseModal = () => {
//     setModalIsOpen(false);
//   };

//   const handleToday = () => {
//     const todayEvents = events.filter(event =>
//       moment(event.start).isSame(new Date(), 'day')
//     );
//     if (todayEvents.length > 0) {
//       setSelectedEvent(todayEvents[0]);
//       setModalIsOpen(true);
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleToday}>Today</button>
//       <div style={{ height: '700px', padding: '20px' }}>
//         <Calendar
//           localizer={localizer}
//           events={events}
//           onSelectEvent={handleSelectEvent}
//           startAccessor="start"
//           endAccessor="end"
//           style={{ height: '100%' }}
//         />
//         <Modal
//           isOpen={modalIsOpen}
//           onRequestClose={handleCloseModal}
//           contentLabel="Event Details"
//           style={{
//             content: {
//               top: '50%',
//               left: '50%',
//               right: 'auto',
//               bottom: 'auto',
//               marginRight: '-50%',
//               transform: 'translate(-50%, -50%)'
//             }
//           }}
//         >
//           {selectedEvent ? (
//             <div>
//               <h2>{selectedEvent.title}</h2>
//               <p>Date: {moment(selectedEvent.start).format('MMMM Do YYYY')}</p>
//             </div>
//           ) : null}
//         </Modal>
//       </div>
//     </div>
//   );
// }



// import React, { useState, useEffect } from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import axios from 'axios';
// import './cal.css';

// const localizer = momentLocalizer(moment);

// export default function CalendarEvent() {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     fetchShiftData();
//   }, []);

//   const fetchShiftData = async () => {
//     try {
//       const response = await axios.get('https://run.mocky.io/v3/eb90863d-2754-46e4-b621-15bb3d4b5b68');
//       processShiftData(response.data.response[0]);
//     } catch (error) {
//       console.error('Error fetching shift data:', error);
//     }
//   };

//   const processShiftData = (shiftData) => {
//     const monthStart = moment().startOf('month').day(-7);
//     const monthEnd = moment().endOf('month').day(14);
//     let days = [];
//     while (monthStart.isBefore(monthEnd)) {
//       days.push({
//         date: monthStart.toDate(),
//         shift: shiftData[monthStart.format('ddd').toLowerCase()]
//       });
//       monthStart.add(1, 'day');
//     }
//     mapDaysToEvents(days);
//   };

//   const mapDaysToEvents = (days) => {
//     const eventList = days.map(day => ({
//       title: getShiftDescription(day.shift),
//       start: day.date,
//       end: day.date,
//       allDay: true,
//       resource: day.shift
//     }));
//     setEvents(eventList);
//   };

//   const getShiftDescription = (shiftValue) => {
//     switch (shiftValue) {
//       case 0: return "Doctor not available";
//       case 1: return "10 AM - 1 PM";
//       case 2: return "3 PM - 6 PM";
//       case 3: return "6 PM - 9 PM";
//       default: return "No data";
//     }
//   };

//   const eventStyleGetter = (event) => {
//     const backgroundColor = getShiftColor(event.resource);
//     return {
//       style: {
//         backgroundColor,
//         color: 'black',
//         borderRadius: '5px',
//         border: 'none'
//       }
//     };
//   };

//   const getShiftColor = (shiftValue) => {
//     switch (shiftValue) {
//       case 0: return "#f8d7da";
//       case 1: return "#d4edda";
//       case 2: return "#d1ecf1";
//       case 3: return "#fff3cd";
//       default: return "#ffffff";
//     }
//   };

//   return (
//     <div style={{ height: '700px', padding: '20px' }}>
//       <Calendar
//         localizer={localizer}
//         events={events}
//         startAccessor="start"
//         endAccessor="end"
//         style={{ height: '100%' }}
//         eventPropGetter={eventStyleGetter}
//         views={['month', 'agenda']}
//       />
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import axios from 'axios';
import 'react-calendar/dist/Calendar.css';
import './docSchedule.css'; // Ensure CSS is properly linked
import { toast } from 'react-toastify';

import Sidebar from '../DocSidebar/Sidebar';

export default function DocSchedule() {
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
        `${process.env.REACT_APP_SECRET_KEY}/doc/home?userId=` +
        userId,
        {
          headers: headers,
        }
      );
      console.log("data of the user", response.data);

      setShiftData(response.data.shift);
      console.log("shift data is", shiftData);
    } catch (error) {
      console.error('Error fetching shift data:', error);
      toast.error("Error fetching shift data")
    }
  };

  const getShiftDescription = (shiftValue) => {
    switch (shiftValue) {
      case 0:
        return "Doctor not available";
      case 1:
        return "Available 12 AM - 8:59 AM";
      case 2:
        return "Available 9 AM - 4:59 PM";
      case 3:
        return "Available 5 PM - 11:59 PM";
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
      <Sidebar />
      <div className='row'>

        {toggle && <div className='col-4 col-md-2 '></div>}
        <div className='col' style={{marginTop:'15px'}}>
          {/* <Navbar1 Toggle={Toggle} /> */}
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
  );
}
