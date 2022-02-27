//import e from "express";


import { useState } from "react";
import App from "../App";
import { Route, Routes } from "react-router";
import listOfBreweries from "./listOfBreweris";

const SearchByState = () => {
  const [breweries, setBreweries] = useState([]);
  const [searchState, setSearchState] = useState("");
  console.log("okhhhhh",{breweries});

  const onChangeHandler = (e) => {
    e.preventDefault();
    console.log("nice",e);
    setSearchState(e.target.value);
  };

  // const onChange = () => {
  //   console.log(onChange);
  // };

  const findBreweries = (e) => {
    e.preventDefault();
    fetch(`https://api.openbrewerydb.org/breweries?by_state=${searchState}`)
      .then((resp) => resp.json())
      .then((data) => {
        //console.log(data);
        setBreweries(data);
      });
  };

  return (
    <>
      <form className="search-bar"  onSubmit={(e) => findBreweries(e)}>

        <div className="search-form">
          <label>Search</label>
          <input
            type="text"
            placeholder="Enter Your State"
            value={searchState}
            onChange={(e) => onChangeHandler(e)}
          />
        </div>
        <input
          type="Submit"
          value="Display Breweries"
        />
      </form>

      <div className="breweryResults">
        {breweries &&
          breweries.map((state, index) => {
            return (
              <div className="state" key={index}>
                {/* <h3>State {index + 1}</h3> */}
                <h2 className="brewery-name">{state.brewery_type}</h2>
                <h3 className="brewery-name">{state.name}</h3>
                <h3 className="brewery-street">{state.street}</h3>
                <p className="brewery-phone">{state.phone}</p>
                <p className="brewery-postal-code">{state.postal_code}</p>
                <h2 className="brewery-state">{state.state}</h2>
                <p className="brewery-url">{state.website_url}</p>



                <div className="breweries">
                  <p>{breweries.name} </p>
                  <p>{breweries.street}</p>
                  
                </div>
              </div>
            );
          })}
      </div>
      
    </>
  );
};

export default SearchByState;
