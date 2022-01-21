import React from "react";
import { useStyles } from "./description.styles";
import Button from "../button/button.component";
import { useNavigate } from "react-router-dom";

const Description = (props) => {
  const navigate = useNavigate();
  const {
    isTitleVisible,
    productDetailPage,
    variant,
    productName,
    productDescription,
    productId,
    productPrice,
    category
  } = props;
  const classes = useStyles();

  const handleNavigate = () => {
    navigate(`/category/${category}/${productId}`);
  };

  const handleAddProduct = () => {};

  return (
    <div className={classes.descriptionContainer}>
      {isTitleVisible && (
        <span className={classes.newProduct}>NEW PRODUCT</span>
      )}
      <h1 className={classes.productTitle}>
        {new String(productName).toUpperCase()}
      </h1>
      <p className={classes.descriptionText}>{productDescription}</p>
      {productDetailPage ? (
        <div>
          <h2 className={classes.productPrice}>$ {productPrice}</h2>

          <div className={classes.quantityInput}>
            <p className={classes.quantitySelector}>-</p>
            <p>1</p>
            <p className={classes.quantitySelector}>+</p>
          </div>
          <Button handleClick={handleAddProduct} variant="primary">
            ADD TO CART
          </Button>
        </div>
      ) : (
        <Button variant={props.variant} handleClick={handleNavigate}>
          SEE PRODUCT
        </Button>
      )}
    </div>
  );
};

export default Description;
