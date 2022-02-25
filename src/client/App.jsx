import './App.css';
import "./styles/styles.css";
import { useState, useEffect } from 'react';

export default function App() {
  const [breweries, setBreweries] = useState([])

  /*useEffect(() => {
    fetch (`https://api.openbrewerydb.org/breweries?`)
      .then((res) => res.json())
      .then((data) => {
        console.log("lucky", data)
      })
    
  })*/


    return (
      <div className="App">
        <p>Hello, world!</p>
      </div>
    );
  }
