import "./App.css";
import SearchByState from "./Components/SearchByState";
import React, { Component, useState } from "react";
import { render } from "react-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

//import MainCalendar from "./Components/MainCalendar";

const App = () => {
  return (
    <div className="appContainer">
      <SearchByState />
      <Calendar />
      
    </div>
  );
};
export default App;
