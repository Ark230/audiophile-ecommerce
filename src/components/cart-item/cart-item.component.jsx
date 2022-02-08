import React from "react";
import { useStyles } from "./cart-item.styles";
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
  const classes = useStyles();
  const { gallery } = cartImages ? cartImages : {};

  return (
    <Modal
      disablePortal
      disableEnforceFocus
      open={openCart}
      onClose={handleCartClose}
    >
      <Box className={classes.modalBox}>
        {cart.items.length > 0 ? (
          <React.Fragment>
            <div className={classes.boxHeader}>
              <h2>Cart ({cart.totalQuantity})</h2>
              <h2 className={classes.removeItems} onClick={clearCart}>
                Remove All
              </h2>
            </div>
            <div className={classes.cartItems}>
              {cart.items.map((item) => {
                return (
                  <React.Fragment key={item.id}>
                    <div className={classes.productDetail}>
                      <div className={classes.productInformationContainer}>
                        {gallery.map((image) => {
                          if (image.productId === item.id) {
                            return (
                              <img
                                alt="galleryImage"
                                className={classes.cartProductImage}
                                src={image.imageUrl}
                                key={image.productId}
                              />
                            );
                          }
                          return null;
                        })}
                        <div className={classes.productInformation}>
                          <p className={classes.productName}>{item.cartName}</p>
                          <p className={classes.productPrice}>$ {item.price}</p>
                        </div>
                      </div>
                      <div className={classes.quantityInput}>
                        <p
                          onClick={() => decreaseQuantity(item.id)}
                          className={classes.quantitySelector}
                        >
                          -
                        </p>
                        <p className={classes.itemQuantity}>{item.quantity}</p>
                        <p
                          onClick={() => increaseQuantity(item.id)}
                          className={classes.quantitySelector}
                        >
                          +
                        </p>
                      </div>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
            <div className={classes.cartTotal}>
              <p>TOTAL</p>
              <p>${cart.totalPrice}</p>
            </div>
            <div className={classes.buttonPosition}>
              <Button className={classes.checkoutBtn} variant="primary">
                CHECKOUT
              </Button>
            </div>
          </React.Fragment>
        ) : (
          <p className={classes.noItemsFound}>No items in cart.</p>
        )}
      </Box>
    </Modal>
  );
};

export default CartItem;
