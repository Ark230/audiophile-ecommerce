import { useStyles } from "./zx7-showcase.styles";
import React from "react";
import Description from "../description/description.component";
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
      <div className={classes.descriptionShowCasePosition}>
        <Description {...descriptionProps} />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  images: selectHomeImages
});

export default connect(mapStateToProps, null)(ZX7Showcase);
