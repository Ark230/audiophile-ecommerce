import { withWidth } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router-dom";
import ProductDetailPage from "./product-detail.component";

const ProductDetailPageContainer = ({ width }) => {
  const params = useParams();

  return <ProductDetailPage productId={params.productId} width={width} />;
};

export default withWidth()(ProductDetailPageContainer);
