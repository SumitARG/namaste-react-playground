import React from "react";
import { Link } from "react-router-dom";
import "./HeaderComponent.css";
import LogoIcon from "../../../assets/icons/logo.svg";

const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="company-logo">
        <img src={LogoIcon} />
        <span>Indecisive</span>
      </div>
        <Link className="header-link" to="/about-us/profile">
          <span>About Us</span>
        </Link>
        <Link className="header-link" to="/">
          <span>Users</span>
        </Link>
    </div>
  );
};

export default HeaderComponent;
