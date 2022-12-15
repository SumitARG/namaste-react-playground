import { useState } from "react";
import stateCityDataObj from "../../../assets/data/StateCityData.json";
import useCities from "../../Helpers/useCities";
import "./SearchBarComponent.css";

const getFilteredData = (data, searchText, searchKey) => {
  return data.filter(
    (card) =>
      searchText == "" ||
      card[searchKey].toLowerCase().includes(searchText.toLowerCase())
  );
};

const SearchBarComponent = ({ setCardsList, cardsList }) => {
  /**
   * getFilteredData
   * @param {string} search
   * @returns List of filtered cards matching the searched pattern
   */

  //   State variables for search string
  const [searchText, setSearchText] = useState("");
  const [stateName, setStateName] = useState("Andaman and Nicobar Islands");
  const [cityName, setCityName] = useState("");

  const cityList = useCities(stateName);

  /**
   * inputChangeHandler
   * @param {InputEvent | ChangeEvent} event
   * Event handler for the form -> onInput and onSubmit
   */
  const inputChangeHandler = (event) => {
    event.preventDefault();
    if(event.target.className != "select-location"){
      if (event._reactName == "onInput") {
        console.log(event);
        setCardsList(getFilteredData(cardsList, event.target.value, "name"));
      } else {
        setCardsList(
          getFilteredData(
            cardsList,
            event.target.elements.searchText.value,
            "name"
          )
        );
      }
    }
  };

  return (
    <div className="search">
      <form
        className="search-bar-container"
        onInput={inputChangeHandler}
        onSubmit={inputChangeHandler}
      >
        <label className="search-bar-label">
          <input
            type="text"
            autoComplete="false"
            name="searchText"
            className="search-text"
            maxLength="30"
            placeholder="Search name"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
          <img
            className="search-image"
            src={require("../../../assets/icons/search.svg")}
            id="search-img"
          />
        </label>
        <select
          className="select-location"
          value={stateName}
          onChange={(e) => {
            setStateName(e.target.value);
          }}
        >
          {Object.keys(stateCityDataObj).map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
        <select
          className="select-location"
          value={cityName}
          onChange={(e) => {
            setCityName(e.target.value);
          }}
        >
          {cityList?.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default SearchBarComponent;
