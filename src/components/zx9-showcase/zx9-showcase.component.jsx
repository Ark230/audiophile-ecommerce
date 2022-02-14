import React from "react";
import { useStyles } from "./zx9-showcase.styles";
<<<<<<< HEAD
=======
import "./zx9-showcase-styles.scss";
>>>>>>> hotfix/css-styles-issue-home-page
import circlePattern from "../../assets/img/pattern-circles.svg";
import Description from "../description/description.component";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectHomeImages } from "../../redux/gallery/gallery.selectors";

const ZX9Showcase = ({ images }) => {
  const { gallery } = images ? images : {};
  const classes = useStyles({ imagesPerDevice: gallery });

  const descriptionProps = {
    isTitleVisible: false,
    variant: "secondary",
    productName: "ZX9 Speaker",
    productDescription:
      "Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.",
    productId: 1,
    category: "speakers"
  };

  return (
    <div className="showcase">
      <img alt="ZX9 Speaker" className={classes.speakerShowcase} />
      <img
        alt="circle-pattern"
        className="showcase__circle-pattern"
        src={circlePattern}
      />

      <div className="showcase__product-showcase-position">
        <Description {...descriptionProps} />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  images: selectHomeImages
});

export default connect(mapStateToProps, null)(ZX9Showcase);
