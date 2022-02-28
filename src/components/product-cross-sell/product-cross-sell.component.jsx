import React from "react";
import Button from "../button/button.component";
import "./product-cross-sell.styles.scss";
import { useNavigate } from "react-router-dom";
const ProductCrossSell = ({ crossSellImages }) => {
  const navigate = useNavigate();

  const handleNavigation = (categoryName, productId) => {
    navigate(`/category/${categoryName}/${productId}`);
  };

  return (
    <div className="product-cross-sell-section">
      <h2 className="product-cross-sell-section__header">YOU MAY ALSO LIKE</h2>
      <div className="product-cross-sell">
        {crossSellImages
          .filter((image, idx) => idx < 3)
          .map((image) => {
            return (
              <div key={image.productId} className="product-cross-sell__item">
                <img
                  alt="product-cross-sell"
                  className="product-cross-sell__image"
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
