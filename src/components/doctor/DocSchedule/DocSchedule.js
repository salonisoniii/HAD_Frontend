import React, { useState, useEffect } from "react";
import axios from "axios";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { format, parse, startOfWeek, getDay } from "date-fns";
import "date-fns/locale/en-US";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

function MyCalendar() {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      // Make a GET request to fetch schedule data from the backend
      const response = await axios.get("your-backend-api-url");

      // Process the response data to generate events array
      const eventData = response.data;
      const events = eventData.map((eventItem) => ({
        title: eventItem.title,
        start: new Date(eventItem.date),
        end: new Date(eventItem.date), // Assuming events are for a single day
      }));

      // Update state with the generated events array
      setEvents(events);
    } catch (error) {
      console.error("Error fetching events:", error);
      // Handle error
    }
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    // You can add further logic here, such as displaying details of the selected date's schedule
  };

  return (
    <div style={{ height: 500 }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ margin: "50px" }}
        onSelectSlot={handleDateClick}
      />
      {selectedDate && (
        <div>
          <h2>Schedule for {selectedDate.toLocaleDateString()}</h2>
          {/* Display schedule details for the selected date */}
          {/* You can customize this part based on your backend data */}
        </div>
      )}
    </div>
  );
}

export default MyCalendar;
