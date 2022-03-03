import { useState } from "react";

const MainCalendar = () => {
  const [calDate, setCalDate] = useState(new Date());
  const [calTime, setCalTime] = useState("")
  
  const onChangeDate = (e) => {
    setCalDate(e);
  };
  const onChangeTime = (e) => {
    setCalTime(e);v
  }
  return (
    <>
      <Calendar 
        value={calDate} 
        onChange={onChangeDate} />;
      <p>
        Your selected tour time is{" "}
        <b>{calDate.format("MMMM Do YYYY Do TTTT")}</b>
      </p>
    </>
  );
};

export default MainCalendar;
