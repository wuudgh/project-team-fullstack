<<<<<<< HEAD
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import App from "../App";
// import { Route, Routes } from "react-router";
// import listOfBreweries from "./listOfBreweris";
=======
//import e from "express";


import { useState } from "react";
import App from "../App";
import { Route, Routes } from "react-router";
import listOfBreweries from "./listOfBreweris";
>>>>>>> Styling-header

const SearchByState = () => {
  const [breweries, setBreweries] = useState([]);
  const [searchState, setSearchState] = useState("");
<<<<<<< HEAD
  console.log({ breweries });
  // const [searchName, setSearchName] = useState("")
=======
>>>>>>> Styling-header
  ///console.log("okhhhhh",{breweries});

  const onChangeHandler = (e) => {
    e.preventDefault();
<<<<<<< HEAD
    console.log("nice", e);
    setSearchState(e.target.value);
  };

  // const onChangeName = (e) => {
  //   setSearchName(e.target.value)
  // }
  const onClickHandler = () => {
    <Link to="/BookingForm">Booking Form</Link>;
    console.log("Link Appears")
  };
=======
    console.log("nice",e);
    setSearchState(e.target.value);
  };

  
>>>>>>> Styling-header

  const findBreweries = (e) => {
    e.preventDefault();
    fetch(`https://api.openbrewerydb.org/breweries?by_state=${searchState}`)
      .then((resp) => resp.json())
      .then((data) => {
<<<<<<< HEAD
        //console.log(data);
=======
      
>>>>>>> Styling-header
        setBreweries(data);
      });
  };

  return (
    <>
<<<<<<< HEAD
      <form className="search-bar" onSubmit={(e) => findBreweries(e)}>
        <div className="search-by-state">
          <label>Search</label>
          <input
=======
      <form className="search-bar"  onSubmit={(e) => findBreweries(e)}>

        <div className="search-by-state">
          <label></label>
          <input 
>>>>>>> Styling-header
            type="text"
            placeholder="Enter Your State"
            value={searchState}
            onChange={(e) => onChangeHandler(e)}
          />
        </div>
<<<<<<< HEAD
        <input type="submit" value="Display Breweries" />
      </form>

      <div className="breweryResults">
        {breweries.map((state, index) => {
          return (
            <div>
              <div className="state" key={index}>
                <div>
                  <button onClick={onClickHandler}>
                    <h2 className="brewery-name">{state.name}</h2>
                  </button>
                </div>
                <div>
                  <h3 className="brewery-type">{state.brewery_type}</h3>
                  <h3 className="brewery-street">{state.street}</h3>
                  <p className="brewery-phone">{state.phone}</p>
                  <p className="brewery-postal-code">{state.postal_code}</p>
                  <h2 className="brewery-state">{state.state}</h2>
                  <a className="brewery-url">{state.website_url}</a>
                </div>
              </div>
              {/* <div className="FilterSection">
              
                  <h3>Filter Section</h3>
                  <form className="FilterByBreweryName">
                    <label>Filter By Brewery Name</label>
                    <input
                      type="text"
                      placeholder="Enter Brewery Name"
                      value={e}
                      onChange={(e) => onChangeName(e)}
                    />
                    <input type="submit" value="Breweries By Name Filter" />
                  </form>
                </div> */}
            </div>
          );
        })}
      </div>
=======
        <input className="display-breweries-button"
          type="Submit"
          value="Display Breweries"
        />
      </form>

      <div className="breweryResults">
        {breweries &&
          breweries.map((state, index) => {
            return (
              <div className="state" key={index}>
                <h2 className="brewery-name">{state.name}</h2>
                <h3 className="brewery-type">{state.brewery_type}</h3>
                <h3 className="brewery-street">{state.street}</h3>
                <p className="brewery-phone">{state.phone}</p>
                <p className="brewery-postal-code">{state.postal_code}</p>
                <h2 className="brewery-state">{state.state}</h2>
                <a className="brewery-url">{state.website_url}</a>



                <div className="breweries">
                  <p>{breweries.name} </p>
                  <p>{breweries.street}</p>
                  
                </div>
              </div>
            );
          })}
      </div>
      
>>>>>>> Styling-header
    </>
  );
};

export default SearchByState;
