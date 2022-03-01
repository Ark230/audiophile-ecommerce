import React from "react";
import "./cart-item.styles.scss";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "../button/button.component";

const CartItem = ({
  openCart,
  handleCartClose,
  cartImages,
  cart,
  clearCart,
  increaseQuantity,
  decreaseQuantity
}) => {
  const { gallery } = cartImages ? cartImages : {};

  return (
    <Modal
      disablePortal
      disableEnforceFocus
      open={openCart}
      onClose={handleCartClose}
    >
      <Box className="cart-modal">
        {cart.items.length > 0 ? (
          <React.Fragment>
            <div className="cart-modal__header">
              <h2>Cart ({cart.totalQuantity})</h2>
              <h2 className="cart-modal__remove-items" onClick={clearCart}>
                Remove All
              </h2>
            </div>
            <div className="cart-modal__items">
              {cart.items.map((item) => {
                return (
                  <React.Fragment key={item.id}>
                    <div className="cart-modal__product-detail">
                      <div className="cart-modal__product-information-container">
                        {gallery.map((image) => {
                          if (image.productId === item.id) {
                            return (
                              <img
                                alt="galleryImage"
                                className="cart-modal__product-image"
                                src={image.imageUrl}
                                key={image.productId}
                              />
                            );
                          }
                          return null;
                        })}
                        <div className="cart-modal__product-information">
                          <p className="cart-modal__product-name">
                            {item.cartName}
                          </p>
                          <p className="cart-modal__product-price">
                            $ {item.price}
                          </p>
                        </div>
                      </div>
                      <div className="cart-modal__quantity-input">
                        <p
                          onClick={() => decreaseQuantity(item.id)}
                          className="cart-modal__quantity-selector"
                        >
                          -
                        </p>
                        <p className="cart-modal__item-quantity">
                          {item.quantity}
                        </p>
                        <p
                          onClick={() => increaseQuantity(item.id)}
                          className="cart-modal__quantity-selector"
                        >
                          +
                        </p>
                      </div>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
            <div className="cart-modal__total">
              <p>TOTAL</p>
              <p>${cart.totalPrice}</p>
            </div>
            <div className="cart-modal__button-position">
              <Button variant="primary">CHECKOUT</Button>
            </div>
          </React.Fragment>
        ) : (
          <p className="cart-modal__no-items-found">No items in cart.</p>
        )}
      </Box>
    </Modal>
  );
};

export default CartItem;
