import React from "react";
import Description from "../description/description.component";
import { useStyles } from "./zx7-showcase.styles";
import "./zx7-showcase.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectHomeImages } from "../../redux/gallery/gallery.selectors";

const ZX7Showcase = ({ images }) => {
  const { gallery } = images ? images : {};
  const classes = useStyles({ imagesPerDevice: gallery });

  const descriptionProps = {
    isTitleVisible: false,
    variant: "tertiary",
    productName: "ZX7 Speaker",
    productDescription: null,
    productId: 2,
    category: "speakers"
  };

  return (
    <div className={classes.showcaseContainer}>
      <div className="showcase__zx7-showcase-position">
        <Description {...descriptionProps} />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  images: selectHomeImages
});

export default connect(mapStateToProps, null)(ZX7Showcase);
