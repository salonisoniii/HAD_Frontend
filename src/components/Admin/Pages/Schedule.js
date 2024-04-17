import React,{useState,useEffect,useNavigate} from 'react';

const Schedule = () => {
    // Sample schedule data
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    // const navigate = useNavigate();
    // const isLoggedIn=localStorage.getItem('isLoggedIn');
    // useEffect(()=>{
     
    //   if(isLoggedIn==='false')
    //   {
    //   navigate('/login');
    //   }
    // },[])
    return (
        <div className="schedule">
            <h3>Days Schedule</h3>
            <div className="row">
                {days.map((day, index) => (
                    <div key={index} className="col">
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id={`dropdownMenuButton${index}`} data-bs-toggle="dropdown" aria-expanded="false">
                                {day}
                            </button>
                            <ul className="dropdown-menu" aria-labelledby={`dropdownMenuButton${index}`}>
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Schedule;
