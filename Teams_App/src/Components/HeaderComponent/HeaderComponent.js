import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ToggleButton from "react-toggle-button";
import "./HeaderComponent.css";
import LogoIcon from "../../../assets/icons/logo.svg";
import ThemeContext from "../../Context/ThemeContext";

const HeaderComponent = () => {
  const {theme, setTheme} = useContext(ThemeContext);
  const [internalTheme, setInternalTheme] = useState(theme);

  return (
    <div className={theme === "dark"?"header header-dark":"header"}>
      <div className="company-logo">
        <img src={LogoIcon} />
        <span>Indecisive</span>
      </div>
      <div className="menu-items">
        <Link className="header-link" to="/about-us/profile">
          <span>About Us</span>
        </Link>
        <Link className="header-link" to="/">
          <span>Users</span>
        </Link>
      </div>
      <div className="toggle-color">
        Dark Mode
        <ToggleButton
          value={theme === "light" ? false : true}
          onToggle={(value) => {
            setInternalTheme(!value);
            setTheme(!value?"dark":"light")
          }}
        />
      </div>
    </div>
  );
};

export default HeaderComponent;
