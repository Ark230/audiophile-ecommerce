import React from "react";
import { useStyles } from "./category-showcase.styles";
import "./category-showcase.styles.scss";
import { Typography } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectSharedImages } from "../../redux/gallery/gallery.selectors";
import { useNavigate } from "react-router-dom";

const CategoryShowcase = ({ images }) => {
  const navigate = useNavigate();
  const { gallery } = images ? images : {};
  const classes = useStyles({ imagesPerDevice: gallery });

  return (
    <div className="category-showcase">
      <div className="category-showcase__category">
        <img
          alt="headphones category"
          className={classes.headphonesShowcaseImage}
        />
        <Typography className="category-showcase__category-name" variant="h3">
          HEADPHONES
        </Typography>
        <div className="category-showcase__shop-link">
          <Typography
            variant="h4"
            onClick={() => navigate("/category/headphones")}
          >
            SHOP
          </Typography>
          <ChevronRightIcon />
        </div>
      </div>
      <div className="category-showcase__category">
        <img
          alt="speakers category"
          className={classes.speakersShowcaseImage}
        />
        <Typography className="category-showcase__category-name" variant="h3">
          SPEAKERS
        </Typography>
        <div className="category-showcase__shop-link">
          <Typography
            variant="h4"
            onClick={() => navigate("/category/speakers")}
          >
            SHOP
          </Typography>
          <ChevronRightIcon />
        </div>
      </div>
      <div className="category-showcase__category">
        <img
          alt="earphones category"
          className={classes.earphonesShowcaseImage}
        />
        <Typography className="category-showcase__category-name" variant="h3">
          EARPHONES
        </Typography>
        <div className="category-showcase__shop-link">
          <Typography
            variant="h4"
            onClick={() => navigate("/category/earphones")}
          >
            SHOP
          </Typography>
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
