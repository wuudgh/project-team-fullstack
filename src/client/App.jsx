import "./App.css";
<<<<<<< HEAD
import SearchByState from "./Components/SearchByState";
import FilterSection from "./Components/FilterSection";
// import React, { Component, useState } from "react";
// import { render } from "react-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import BookingForm from "./Components/BookingForm";

//import MainCalendar from "./Components/MainCalendar";
=======
import SearchByState from "./Components/SearchByState"
import React, { Component, useState } from "react";
import { render } from "react-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"
>>>>>>> Styling-header

const App = () => {
  
  return (
    <div className="appContainer">
      <SearchByState />
<<<<<<< HEAD
      <Calendar />
      <FilterSection />
      <BookingForm />
=======
       <Calendar /> 
>>>>>>> Styling-header
    </div>
  );
};
export default App;
