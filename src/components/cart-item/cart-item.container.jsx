import React from "react";
import CartItem from "./cart-item.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCart } from "../../redux/cart/cart.selectors";
import { selectCartImages } from "../../redux/gallery/gallery.selectors";
import {
  clearCart,
  increaseQuantity,
  decreaseQuantity
} from "../../redux/cart/cart.actions";

const CartItemContainer = ({
  cartImages,
  cart,
  openCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
  handleCartClose
}) => {
  return (
    <CartItem
      openCart={openCart}
      handleCartClose={handleCartClose}
      cartImages={cartImages}
      cart={cart}
      clearCart={clearCart}
      increaseQuantity={increaseQuantity}
      decreaseQuantity={decreaseQuantity}
    />
  );
};

const mapStateToProps = createStructuredSelector({
  cartImages: selectCartImages,
  cart: selectCart
});

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
  increaseQuantity: (productId) => dispatch(increaseQuantity(productId)),
  decreaseQuantity: (productId) => dispatch(decreaseQuantity(productId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItemContainer);
