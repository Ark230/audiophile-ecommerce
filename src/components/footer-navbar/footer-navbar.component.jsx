import React from "react";
import audiophileLogo from "../../assets/img/logo.svg";

import "./footer-navbar.styles.scss";
import { useNavigate } from "react-router-dom";

const FooterNavbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="footer-navbar">
      <img
        className="footer-navbar__business-logo"
        src={audiophileLogo}
        alt="Audiophile Logo"
        onClick={() => navigate("/")}
      />
      <ul className="footer-navbar__items">
        <li onClick={() => navigate("/")}>HOME</li>
        <li onClick={() => navigate("/category/headphones")}>HEADPHONES</li>
        <li onClick={() => navigate("/category/speakers")}>SPEAKER</li>
        <li onClick={() => navigate("/category/earphones")}>EARPHONES</li>
      </ul>
    </nav>
  );
};

export default FooterNavbar;
