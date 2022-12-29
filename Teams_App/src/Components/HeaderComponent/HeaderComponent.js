import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ToggleButton from "react-toggle-button";
import "./HeaderComponent.css";
import LogoIcon from "../../../assets/icons/logo.svg";
import ThemeContext from "../../Context/ThemeContext";
import defaultPersonImg from "../../../assets/icons/person.svg";

const HeaderComponent = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [internalTheme, setInternalTheme] = useState(theme);
  const cartItems = useSelector((store) => store.cart.value);
  const userDetails = useSelector((store) => store.login.value);
  return (
    <div className={theme === "dark" ? "header header-dark" : "header"}>
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
        <Link className="header-link" to="/login">
          <span>Login</span>
        </Link>
      </div>
      <div className="cart">
        <Badge badgeContent={cartItems.length} color="primary">
          <ShoppingCartIcon color="inherit" />
        </Badge>
      </div>
      <div className="toggle-color">
        Dark Mode
        <ToggleButton
          value={theme === "light" ? false : true}
          onToggle={(value) => {
            setInternalTheme(!value);
            setTheme(!value ? "dark" : "light");
          }}
        />
      </div>
      <div className="user-avatar">
        {userDetails.username}
        <img className="user-image" src={userDetails.userImage} alt={userDetails.username + "image"}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src = defaultPersonImg;
        }}/>
      </div>
    </div>
  );
};

export default HeaderComponent;
