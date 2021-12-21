import React from "react";
import { connect } from "react-redux";
import withSpinner from "../with-spinner/with-spinner-component";
import { createStructuredSelector } from "reselect";
import { selectIsGalleryLoaded } from "../../redux/gallery/gallery.selectors";

const Wrapper = (props) => {
  return <div>{props.children}</div>;
};

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsGalleryLoaded
});

export default connect(mapStateToProps, null)(withSpinner(Wrapper));
