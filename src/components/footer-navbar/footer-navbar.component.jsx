import React from "react";
import audiophileLogo from "../../assets/img/shared/desktop/logo.svg";
import { useStyles } from "./footer-navbar.styles";
import { useNavigate } from "react-router-dom";

const FooterNavbar = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  return (
    <nav className={classes.footerNavbar}>
      <img
        className={classes.businessLogo}
        src={audiophileLogo}
        alt="Audiophile Logo"
        onClick={() => navigate("/")}
      />
      <ul className={classes.footerNavbarItems}>
        <li onClick={() => navigate("/")}>HOME</li>
        <li onClick={() => navigate("/category/headphones")}>HEADPHONES</li>
        <li onClick={() => navigate("/category/speakers")}>SPEAKER</li>
        <li onClick={() => navigate("/category/earphones")}>EARPHONES</li>
      </ul>
    </nav>
  );
};

export default FooterNavbar;
