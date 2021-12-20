import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectHomeImages } from "../../redux/gallery/gallery.selectors";
import HomePage from "./home.component";

const HomePageContainer = ({ shop, images }) => {
  const { gallery } = images ? images : {};

  return (
    <div>
      <HomePage imagesPerDevice={gallery} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  images: selectHomeImages
});

export default connect(mapStateToProps, null)(HomePageContainer);
