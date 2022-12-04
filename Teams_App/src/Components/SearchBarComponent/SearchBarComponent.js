import { useState } from "react";
import "./SearchBarComponent.css";
import CARDS_LIST from "../../Data/TeamData";

const getFilteredData = (data, searchText, searchKey) => {
  return data.filter((card) =>
  searchText == "" || card[searchKey].toLowerCase().includes(searchText.toLowerCase())
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
  /**
   * inputChangeHandler
   * @param {InputEvent | ChangeEvent} event
   * Event handler for the form -> onInput and onSubmit
   */
  const inputChangeHandler = (event) => {
    event.preventDefault();
    if (event._reactName == "onInput") {
      console.log(getFilteredData(cardsList,event.target.value, "name"))
      setCardsList(getFilteredData(cardsList,event.target.value, "name"));
    } else {
      setCardsList(getFilteredData(cardsList, event.target.elements.searchText.value, "name"));
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
      </form>
    </div>
  );
};

export default SearchBarComponent;
