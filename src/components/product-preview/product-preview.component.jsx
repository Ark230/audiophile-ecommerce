import React from "react";
import { useParams } from "react-router-dom";
import { useStyles } from "./product-preview.styles";
import Description from "../description/description.component";

const ProductPreview = ({ product, productImage }) => {
  const classes = useStyles();

  const descriptionProps = {
    isTitleVisible: true,
    productDetailPage: true,
    productId: product ? product.id : 0,
    productCartName: product ? product.cartName : "",
    productName: product ? product.name : "",
    productDescription: product ? product.description : "",
    productPrice: product ? product.price : 0
  };

  return (
    <div className={classes.productContainer}>
      <img
        className={classes.productImage}
        src={productImage ? productImage.gallery4 : ""}
      />
      <div className={classes.descriptionContainerPosition}>
        <Description {...descriptionProps} />
      </div>
    </div>
  );
};

export default ProductPreview;
