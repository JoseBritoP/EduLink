"use client";
import { useState } from "react";
import { Calendar, momentLocalizer, View, Views, Formats } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

type BigCalendarType = {
  title:string,
  allDay:boolean,
  start:Date,
  end:Date
}

interface BigCalendarProps {
  calendarEvents:BigCalendarType[]
}
const localizer = momentLocalizer(moment);

const BigCalendar = ({calendarEvents}:BigCalendarProps) => {
  // TODO:change calendarEvent events with moment and display events
 const [view, setView] = useState<View>(Views.WORK_WEEK);
  const [is24HourFormat, setIs24HourFormat] = useState<boolean>(true); 

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };

  // Función que devuelve el formato de hora según el estado
  const timeFormat = is24HourFormat ? 'HH:mm' : 'hh:mm A';

  const formats = {
    timeGutterFormat: (date:Date) => moment(date).format(timeFormat),
    eventTimeRangeFormat: ({ start, end }:{start:any,end:any}) => ({
      start: moment(start).format(timeFormat),
      end: moment(end).format(timeFormat),
    }),
  };

  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={["work_week", "day"]}
      view={view}
      style={{ height: "98%" }}
      onView={handleOnChangeView}
      min={new Date(2025, 1, 0, 8, 0, 0)}
      max={new Date(2025, 1, 0, 17, 0, 0)}
      formats={formats}
    />
  );
};

export default BigCalendar;
