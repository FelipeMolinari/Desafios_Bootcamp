import React from "react";
import facebookLogo from "../../assets/facebook.svg";
import AccountIcon from "../../assets/account-icon.png";
import "./Header.css";

const HeaderComponent = () => (
  <header id="header">
    <a href="http://facebook.com" className="left-header">
      <img src={facebookLogo} alt="Facebook Logo" />
    </a>
    <div className="right-header">
      <p>Meu perfil</p>
      <img src={AccountIcon} alt="Account Icon" />
    </div>
  </header>
);

export default HeaderComponent;
