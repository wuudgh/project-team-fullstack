import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import App from "../App";
// import { Route, Routes } from "react-router";
// import listOfBreweries from "./listOfBreweris";

const SearchByState = () => {
  const [breweries, setBreweries] = useState([]);
  const [searchState, setSearchState] = useState("");
  console.log({ breweries });
  // const [searchName, setSearchName] = useState("")
  ///console.log("okhhhhh",{breweries});

  const onChangeHandler = (e) => {
    e.preventDefault();
    console.log("nice", e);
    setSearchState(e.target.value);
  };

  // const onChangeName = (e) => {
  //   setSearchName(e.target.value)
  // }

  const findBreweries = (e) => {
    e.preventDefault();
    fetch(`https://api.openbrewerydb.org/breweries?by_state=${searchState}`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setBreweries(data);
      });
  };

  const onClickHandler = () => {
    <Link to="/BookingForm">Booking Form</Link>;
    console.log("Link Appears");
  };

  const firstCapitalLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const bookTourBtn = `Book Your Tour`;
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
        {breweries.map((state, index) => {
          console.log("MY STATE", state, "MY INDEX", index);
          return (
            <div>
              <div className="state" key={index}>
                <div>
                  <button
                    className="brewery-name-button"
                    onClick={onClickHandler}
                  >
                    <h2 className="brewery-name">{state.name}</h2>
                  </button>
                </div>

                <div>
                  <h3 className="brewery-type">
                    {firstCapitalLetter(state.brewery_type)}
                  </h3>
                  <h3 className="brewery-street">{state.street}</h3>
                  <h3 className="brewery-city">{state.city}</h3>
                  <p className="brewery-phone">{state.phone}</p>
                  <p className="brewery-postal-code">{state.postal_code}</p>
                  <h2 className="brewery-state">{state.state}</h2>
                  <a className="brewery-url">{state.website_url}</a>
                  <button className="bookNow" onClick={onClickHandler}>
                    <h3>
                      {`
                        Click Here To~
                        ${bookTourBtn}
                      `}
                    </h3>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SearchByState;
/*
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
        ;
      </div>
*/