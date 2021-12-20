import React from "react";
import { useStyles } from "./category-showcase.styles";
import { Typography } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectSharedImages } from "../../redux/gallery/gallery.selectors";

const CategoryShowcase = ({ images }) => {
  const { gallery } = images ? images : {};
  const classes = useStyles({ imagesPerDevice: gallery });

  return (
    <div className={classes.showcaseContainer}>
      <div className={classes.categoryContainer}>
        <img
          alt="headphones category"
          className={classes.headphonesShowcaseImage}
        />
        <Typography className={classes.categoryName} variant="h3">
          HEADPHONES
        </Typography>
        <div className={classes.shopLink}>
          <Typography variant="h4">SHOP</Typography>
          <ChevronRightIcon />
        </div>
      </div>
      <div className={classes.categoryContainer}>
        <img
          alt="speakers category"
          className={classes.speakersShowcaseImage}
        />
        <Typography className={classes.categoryName} variant="h3">
          SPEAKERS
        </Typography>
        <div className={classes.shopLink}>
          <Typography variant="h4">SHOP</Typography>
          <ChevronRightIcon />
        </div>
      </div>
      <div className={classes.categoryContainer}>
        <img
          alt="earphones category"
          className={classes.earphonesShowcaseImage}
        />
        <Typography className={classes.categoryName} variant="h3">
          EARPHONES
        </Typography>
        <div className={classes.shopLink}>
          <Typography variant="h4">SHOP</Typography>
          <ChevronRightIcon />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  images: selectSharedImages
});

export default connect(mapStateToProps, null)(CategoryShowcase);
