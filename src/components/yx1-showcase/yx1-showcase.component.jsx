import React from "react";
import { useStyles } from "./yx1.showcase.styles";
import "./yx1-showcase.styles.scss";
import Description from "../description/description.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectHomeImages } from "../../redux/gallery/gallery.selectors";

const YX1Showcase = ({ images, setUrlPathName }) => {
  const { gallery } = images ? images : {};
  const classes = useStyles({ imagesPerDevice: gallery });
  const descriptionProps = {
    isTitleVisible: false,
    variant: "tertiary",
    productName: "YX1 Earphones",
    productDescription: null,
    productId: 6,
    category: "earphones"
  };

  return (
    <div className="showcase-yx1">
      <div className={classes.productShowCaseImage} />
      <div className="showcase-yx1__showcase-position">
        <Description {...descriptionProps} />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  images: selectHomeImages
});

export default connect(mapStateToProps, null)(YX1Showcase);
