import React,{useState} from 'react'
import Sidebar from './Sidebar';
import './doctor.css';
import Navbar from './Navbar1';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Calendar from 'react-calendar';
import ReactCalendar from './Cal';


export default function Doctor() {
    const [toggle, setToggle] = useState(true);

  const Toggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
   

    <div>
      <div className='container-fluid bg-secondary min-vh-100'>
        <div className='row'>
          {toggle && (
            <div className='col-4 col-md-2 bg-white vh-100 position-fixed'>
              <Sidebar Toggle={Toggle} />
            </div>
          )}
          {toggle && <div className='col-4 col-md-2'></div>}
          <div className='col'>
          <Navbar Toggle={Toggle} />
          </div>
        </div>
      </div>
      <div className="calendar-container" style={{position: 'absolute',
    top: '0',
    right: '0',
    marginTop: '20px',
    marginRight: '20px'}}>
        <ReactCalendar/>    
      </div>
    </div>
    </>
  )
}
