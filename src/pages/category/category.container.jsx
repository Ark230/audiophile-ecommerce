import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCollections } from "../../redux/shop/shop.actions";
import CategoryPage from "./category.component";
import { withWidth } from "@material-ui/core";

const CategoryContainer = ({ fetchCollections, width }) => {
  const params = useParams();
  const { categoryId } = params;
  useEffect(() => {
    fetchCollections();
  }, [fetchCollections]);

  return <CategoryPage categoryParam={categoryId} width={width} />;
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollections: () => dispatch(fetchCollections())
});

export default connect(
  null,
  mapDispatchToProps
)(withWidth()(CategoryContainer));
