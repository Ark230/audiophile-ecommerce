import React, { useState } from "react";
import { useStyles } from "./description.styles";
import Button from "../button/button.component";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

const Description = (props) => {
  const navigate = useNavigate();
  const [productQuantity, setProductQuantity] = useState(1);

  const {
    isTitleVisible,
    productDetailPage,
    variant,
    productName,
    productDescription,
    productId,
    productPrice,
    productCartName,
    category,
    addItem
  } = props;

  const classes = useStyles();

  const handleNavigate = () => {
    navigate(`/category/${category}/${productId}`);
  };

  const handleAddProduct = () => {
    addItem({
      id: productId,
      cartName: productCartName,
      name: productName,
      price: productPrice * productQuantity,
      quantity: productQuantity
    });
  };

  const handleQuantity = (method) => {
    if (method === "increase") {
      setProductQuantity(productQuantity + 1);
    } else if (method === "decrease" && productQuantity > 1) {
      setProductQuantity(productQuantity - 1);
    }
  };

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
            <p
              className={classes.quantitySelector}
              onClick={() => handleQuantity("decrease")}
            >
              -
            </p>
            <p>{productQuantity}</p>
            <p
              className={classes.quantitySelector}
              onClick={() => handleQuantity("increase")}
            >
              +
            </p>
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

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(Description);
