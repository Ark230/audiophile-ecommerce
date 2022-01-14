import React from "react";
import Button from "../button/button.component";
import { useStyles } from "./product-cross-sell.styles";

const ProductCrossSell = ({ crossSellImages }) => {
  const classes = useStyles();

  return (
    <div className={classes.productCrossSellSection}>
      <h2>YOU MAY ALSO LIKE</h2>
      <div className={classes.productCrossSellContainer}>
        {crossSellImages
          .filter((image, idx) => idx < 3)
          .map((image) => {
            return (
              <div className={classes.productCrossSellItem}>
                <img
                  className={classes.productCrossSellImage}
                  src={image.imageUrl}
                />
                <h3>{image.name.toUpperCase()}</h3>
                <Button>SEE PRODUCT</Button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductCrossSell;
