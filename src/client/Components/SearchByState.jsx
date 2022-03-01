import { useState } from "react";
import App from "../App";
import { Route, Routes } from "react-router";
import listOfBreweries from "./listOfBreweris";

const SearchByState = () => {
  const [breweries, setBreweries] = useState([]);
  const [searchState, setSearchState] = useState("");
  ///console.log("okhhhhh",{breweries});

  const onChangeHandler = (e) => {
    e.preventDefault();
    console.log("nice",e);
    setSearchState(e.target.value);
  };



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
      <form className="search-bar" onSubmit={(e) => findBreweries(e)}>
        <div className="search-by-state">
          <label>Search</label>
          <input 
            type="text"
            placeholder="Enter Your State"
            value={searchState}
            onChange={(e) => onChangeHandler(e)}
          />
        </div>
        <input type="submit" value="Display Breweries" />
      </form>

      <div className="breweryResults">
        {breweries &&
          breweries.map((state, index) => {
            return (
              <div className="state" key={index}>
                <card className="breweries">
                  <p> {state.name} </p>
                  <p> {state.street}</p>
                </card>
              </div>
            );
          })}
      </div>
      
    </>
  );
};

export default SearchByState;
