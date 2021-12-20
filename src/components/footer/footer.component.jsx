import React from "react";
import FooterNavbar from "../footer-navbar/footer-navbar.component";
import { ReactComponent as FacebookLogo } from "../../assets/img/shared/desktop/icon-facebook.svg";
import { ReactComponent as InstagramLogo } from "../../assets/img/shared/desktop/icon-instagram.svg";
import { ReactComponent as TwitterLogo } from "../../assets/img/shared/desktop/icon-twitter.svg";

import { useStyles } from "./footer.styles";
import { SvgIcon } from "@material-ui/core";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectSharedImages } from "../../redux/gallery/gallery.selectors";

const Footer = ({ images }) => {
  const { gallery } = images ? images : {};
  const classes = useStyles({ imagesPerDevice: gallery });

  return (
    <div className={classes.footerContainer}>
      <div className={classes.footerPosition}>
        <div className={classes.footerDescription}>
          <h1 className={classes.footerDescriptionHeader}>
            Bringing you the{" "}
            <span className={classes.descriptionSpan}>best</span> audio gear
          </h1>
          <p className={classes.footerDescriptionDetail}>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <img className={classes.footerImage} />
      </div>

      <div className={classes.footerRedirection}>
        <FooterNavbar />
        <p className={classes.footerRedirectionDescription}>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <div className={classes.footerSocials}>
          <p className={classes.footerCopyright}>
            Copyright 2021. All Rights Reserved.
          </p>
          <div className={classes.footerSocialsIcons}>
            <SvgIcon
              className={classes.footerSocialSvg}
              component={FacebookLogo}
              fontSize="large"
            />
            <SvgIcon
              className={classes.footerSocialSvg}
              component={TwitterLogo}
              fontSize="large"
            />
            <SvgIcon
              className={classes.footerSocialSvg}
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
