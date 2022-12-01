import { useState } from "react";
import "./SearchBarComponent.css";
import CARDS_LIST from "../../Data/TeamData";

const SearchBarComponent = ({ setCardsList }) => {
  /**
   * getFilteredData
   * @param {*} search
   * @returns List of filtered cards matching the searched pattern
   */
  const getFilteredData = (search) => {
    return CARDS_LIST.filter((card) =>
      card.name.toLowerCase().includes(search.toLowerCase())
    );
  };

  //   State variables for type time and search string
  const [searchText, setSearchText] = useState("");
  const [typeTime, setTypeTime] = useState(true);

  /**
   * inputChangeHandler
   * @param {*} event
   * Event handler for the form -> onInput and onSubmit
   */
  const inputChangeHandler = (event) => {
    event.preventDefault();
    if (event._reactName == "onInput") {
      if (typeTime == true) {
        setCardsList(getFilteredData(event.target.value));
        setTypeTime(false);
        setTimeout(setTypeTime(true), 100);
      }
    } else {
      setCardsList(getFilteredData(event.target.elements.searchText.value));
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
