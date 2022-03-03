import React from "react";
import { useState, useEffect } from "react";

const FilterSection = () => {
  // const [searchValueName, setSearchValueName] = useState();
  const [breweries, setBreweries] = useState([]);
  const [filteredBreweriesName, setFilteredBreweriesName] = useState([]);
  const [filteredBreweriesType, setFilteredBreweriesType] = useState([]);
  const [filteredBreweriesCity, setFilteredBreweriesCity] = useState([]);
  const [searchValueName, setSearchValueName] = useState("");
  const [searchValueType, setSearchValueType] = useState("");
  const [searchValueCity, setSearchValueCity] = useState("");
  // const [resetSearchField, setResetSearchField] = useState("")

  const handleSearchNameChange = (e) => {
    /* Name */
    setSearchValueName(e.target.value);
  };

  const handleSearchTypeChange = (e) => {
    /* Type */
    setSearchValueType(e.target.value);
  };

  const handleSearchCityChange = (e) => {
    /* City */
    setSearchValueCity(e.target.value);
  };

  // const handleSearchReset = () => {
  //   /*Move to below all search bars */
  //   setResetSearchField();
  // };

  const findBreweriesName = (e) => {
    e.preventDefault();
    fetch(`https://api.openbrewerydb.org/breweries?by_name=${searchValueName}`)
      .then((resp) => resp.json())
      .then((data) => {
        setFilteredBreweriesType([]);
        setFilteredBreweriesCity([]);

        console.log(data);
        setFilteredBreweriesName(data);
      });
  };
  const findBreweriesType = (e) => {
    e.preventDefault();
    fetch(`https://api.openbrewerydb.org/breweries?by_type=${searchValueType}`)
      .then((resp) => resp.json())
      .then((data) => {
        setFilteredBreweriesName([]);
        setFilteredBreweriesCity([]);

        console.log(data);
        setFilteredBreweriesType(data);
      });
  };
  const findBreweriesCity = (e) => {
    e.preventDefault();
    fetch(`https://api.openbrewerydb.org/breweries?by_city=${searchValueCity}`)
      .then((resp) => resp.json())
      .then((data) => {
        setFilteredBreweriesName([]);
        setFilteredBreweriesType([]);

        console.log(data);
        setFilteredBreweriesCity(data);
      });
  };
  const beerTypeFirstCapitalLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="breweryResults">
      <form onSubmit={(e) => findBreweriesName(e)}>
        <div className="startFilterByName">
          <h3>Search Breweries By Name</h3>

          <input
            type="text"
            placeholder="Enter Brewery Name"
            value={searchValueName}
            onChange={handleSearchNameChange}
          />
          <br />
          {/* <button type="button" onClick={handleSearchReset}>
            Reset Search
          </button> */}
        </div>
        <input type="submit" value="Display Search Results" />
      </form>

      <form onSubmit={(e) => findBreweriesType(e)}>
        <div className="filterBreweryType">
          <h3>Search Breweries By Brewery Type</h3>
          {/* <select
            className="form-control mb-3"
            onChange={(e) => this.setState({ brewery_type: e.target.value })}>
            <option value="Micro">Micro</option>
            <option value="Regional">Regional</option>
            <option value="Brewpub">Brewpub</option>
          </select> */}
          <input
            type="text"           
            placeholder="Enter Brewery Type"
            value={searchValueType}
            onChange={handleSearchTypeChange}
          />
          <br />
          {/* <button type="button" onClick={handleSearchReset}>
            Reset Search
          </button> */}
        </div>
        <input type="submit" value="Display Search Results" />
      </form>
      <form onSubmit={(e) => findBreweriesCity(e)}>
        <div className="breweryCity">
          <h3>Search Breweries By City</h3>
          <input
            type="text"
            placeholder="Enter Brewery City Address"
            value={searchValueCity}
            onChange={handleSearchCityChange}
          />
          <br />
        </div>
        <input type="submit" value="Display Search Results" />
      </form>

      <div>
        <h3>Available Breweries</h3>

        {filteredBreweriesName.map((brewery, index) => {
          return (
            <div className="state" key={index}>
              <p> {brewery.name} </p>
              <p className="capitalFirstLetter">
                {beerTypeFirstCapitalLetter(brewery.brewery_type)}
              </p>
              {/* <p> {brewery.brewery_type} </p> */}
              <p> {brewery.street} </p>
              <p> {brewery.city} </p>
            </div>
          );
        })}
        {filteredBreweriesType.map((brewery, index) => {
          return (
            <div className="state" key={index}>
              <p> {brewery.name} </p>
              <p className="capitalFirstLetter">
                {beerTypeFirstCapitalLetter(brewery.brewery_type)}
              </p>
              <p> {brewery.street} </p>
              <p> {brewery.city} </p>
            </div>
          );
        })}
        {filteredBreweriesCity.map((brewery, index) => {
          return (
            <div className="state" key={index}>
              <p> {brewery.name} </p>
              <p className="capitalFirstLetter">
                {beerTypeFirstCapitalLetter(brewery.brewery_type)}
              </p>
              <p> {brewery.street} </p>
              <p> {brewery.city} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterSection;
