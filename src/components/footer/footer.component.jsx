import React from "react";
import FooterNavbar from "../footer-navbar/footer-navbar.component";
import { ReactComponent as FacebookLogo } from "../../assets/img/icon-facebook.svg";
import { ReactComponent as InstagramLogo } from "../../assets/img/icon-instagram.svg";
import { ReactComponent as TwitterLogo } from "../../assets/img/icon-twitter.svg";

import { useStyles } from "./footer.styles";
import "./footer-styles.scss";
import { SvgIcon } from "@material-ui/core";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectSharedImages } from "../../redux/gallery/gallery.selectors";

const Footer = ({ images }) => {
  const { gallery } = images ? images : {};
  const classes = useStyles({ imagesPerDevice: gallery });

  return (
    <div className="footer">
      <div className="footer__description-container">
        <div className="footer__description">
          <h1 className="footer__description-header">
            Bringing you the <span className="footer__span">best</span> audio
            gear
          </h1>
          <p className="footer__description-detail">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <img alt="best-audio-gear" className={classes.footerImage} />
      </div>

      <div className="footer__redirection">
        <FooterNavbar />
        <p className="footer__redirection__description">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <div className="footer__socials">
          <p className="footer__socials__copyright">
            Copyright 2021. All Rights Reserved.
          </p>
          <div className="footer__socials__icons">
            <SvgIcon
              className="footer__socials__svg"
              component={FacebookLogo}
              fontSize="large"
            />
            <SvgIcon
              className="footer__socials__svg"
              component={TwitterLogo}
              fontSize="large"
            />
            <SvgIcon
              className="footer__socials__svg"
              component={InstagramLogo}
              fontSize="large"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  images: selectSharedImages
});

export default connect(mapStateToProps, null)(Footer);
