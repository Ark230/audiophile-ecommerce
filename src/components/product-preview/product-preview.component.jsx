import React from "react";
// import { useStyles } from "./product-preview.styles";
import "./product.styles.scss";
import Description from "../description/description.component";

const ProductPreview = ({ product, productImage }) => {
  // const classes = useStyles();

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
    <div className="product">
      <img
        alt="product"
        className="product__product-image"
        src={productImage ? productImage.gallery4 : ""}
      />
      <div className="product__description-container">
        <Description {...descriptionProps} />
      </div>
    </div>
  );
};

export default ProductPreview;
