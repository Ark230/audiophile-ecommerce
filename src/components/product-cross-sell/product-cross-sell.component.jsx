import React from "react";
import Button from "../button/button.component";
import { useStyles } from "./product-cross-sell.styles";
import { useNavigate } from "react-router-dom";
const ProductCrossSell = ({ crossSellImages }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleNavigation = (categoryName, productId) => {
    navigate(`/category/${categoryName}/${productId}`);
  };

  return (
    <div className={classes.productCrossSellSection}>
      <h2>YOU MAY ALSO LIKE</h2>
      <div className={classes.productCrossSellContainer}>
        {crossSellImages
          .filter((image, idx) => idx < 3)
          .map((image) => {
            return (
              <div
                key={image.productId}
                className={classes.productCrossSellItem}
              >
                <img
                  alt="product-cross-sell"
                  className={classes.productCrossSellImage}
                  src={image.imageUrl}
                />
                <h3>{image.name.toUpperCase()}</h3>
                <Button
                  handleClick={() =>
                    handleNavigation(image.category, image.productId)
                  }
                >
                  SEE PRODUCT
                </Button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductCrossSell;
