import React, { useRef } from "react";
import { useStyles } from "./description.styles";
import Button from "../button/button.component";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import { useEffect } from "react";

const Description = (props) => {
  const navigate = useNavigate();
  const counterRef = useRef(1);

  const {
    isTitleVisible,
    productDetailPage,
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
      price: productPrice * counterRef.current,
      quantity: counterRef.current
    });
  };

  const handleQuantity = (method) => {
    const input = document.getElementById("counter");
    if (method === "increase") {
      counterRef.current += 1;
      input.textContent = counterRef.current;
    } else if (method === "decrease" && counterRef.current > 1) {
      counterRef.current -= 1;
      input.textContent = counterRef.current;
    }
  };

  useEffect(() => {
    return () => {
      const input = document.getElementById("counter");
      if (input) {
        counterRef.current = 1;
        input.textContent = counterRef.current;
      }
    };
  });

  return (
    <div className={classes.descriptionContainer}>
      {isTitleVisible && (
        <span className={classes.newProduct}>NEW PRODUCT</span>
      )}
      <h1 className={classes.productTitle}>{productName.toUpperCase()}</h1>
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
            <p id="counter">{counterRef.current}</p>

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
