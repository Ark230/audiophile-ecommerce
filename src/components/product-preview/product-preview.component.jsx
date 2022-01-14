import React from "react";
import { useStyles } from "./product-preview.styles";
import Description from "../description/description.component";

const ProductPreview = ({ product, productImage }) => {
  const classes = useStyles();
  return (
    <div className={classes.productContainer}>
      <img className={classes.productImage} src={productImage.gallery4} />
      <div className={classes.descriptionContainerPosition}>
        <Description
          isTitleVisible={true}
          productDetailPage={true}
          productName={product.name}
          productDescription={product.description}
        />
      </div>
    </div>
  );
};

export default ProductPreview;
