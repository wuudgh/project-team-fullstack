
import { useState } from "react";


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
      
        setBreweries(data);
      });
  };

  return (
    <>
      <form className="search-bar"  onSubmit={(e) => findBreweries(e)}>

        <div className="search-by-state">
          <label>Search</label>
          <input 
            type="text"
            placeholder="Enter Your State"
            value={searchState}
            onChange={(e) => onChangeHandler(e)}
          />
        </div>
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



               
              </div>
            );
          })}
      </div>
      
    </>
  );
};

export default SearchByState;
