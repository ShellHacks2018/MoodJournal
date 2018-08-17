import React from 'react';
import Calendar from "react-big-calendar";
import moment from "moment";
import PropTypes from 'prop-types';

import "react-big-calendar/lib/css/react-big-calendar.css";

Calendar.setLocalizer(Calendar.momentLocalizer(moment));

const CalendarPageView = (props) => {
  return (
    <div className="my-5 container">
      <div className="row justify-content-center">
        <div className="col-lg align-center" align="center">
        <Calendar 
          defaultDate={new Date()}
          defaultView="month"
          events={props.events}
          style={{ height: props.event_height }}/>
        </div>
      </div>
    </div>  
  );
}

export default CalendarPageView;

CalendarPageView.propTypes = {
  events: PropTypes.array,
  event_height: PropTypes.string
}