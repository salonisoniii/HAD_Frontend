import React, { useState } from "react";
import { Calendar } from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { Link } from "react-router-dom";
import Cal1 from "./Cal1";

const ReactCalendar = () => {
    const [date, setDate] = useState(new Date());

    const onChange = (date) => {
        setDate(date);
    };

    return (
        <div style={{marginTop:'70px'}}>
            <Link to="/cal1">
            <Calendar onChange={onChange} value={date} />
            </Link>
        </div>
    );
};

export default ReactCalendar;
