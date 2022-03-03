export default function Results() {
    const [calDate, setCalDate] = useState(new Date());
  
    function onChange(calDate) {
      setCalDate(calDate);
  
      const filterResults = userResults.filter((result) => {
        const newResultFormat = new Date(result.created_at)
          .toLocaleString()
          .split(",")[0];
        const newCalDateFormat = calDate.toLocaleString().split(",")[0];
        return newResultFormat === newCalDateFormat;
      });
    }
    return (
      <div className="myResultsCalendar">
        <Calendar onChange={onChange} value={calDate} />
      </div>
    );
  }