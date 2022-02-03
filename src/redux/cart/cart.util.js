export const addCartItem = (cartItems, item) => {
  const product = cartItems.find((product) => product.id === item.id);

  if (product) {
    product.quantity += item.quantity;
    product.price += item.price;
  } else {
    cartItems.push(item);
  }

  return [...cartItems];
};

export const sumItemsPrice = (cartItems, item) => {
  const cartItemsPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return cartItemsPrice + item.price;
};

export const sumItemsQuantity = (cartItems, item) => {
  const cartItemsQuantity = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return cartItemsQuantity + item.quantity;
};

export const handleQuantity = (type, productId, cart) => {
  const item = cart.items.find((item) => item.id === productId);
  let productPrice = 0;
  let cartItems = [];
  let filtered = false;

  switch (type) {
    case "INCREASE_QUANTITY":
      productPrice = item.price / item.quantity;
      cart.totalPrice += productPrice;
      cart.totalQuantity += 1;
      item.quantity += 1;
      item.price += productPrice;
      break;

    case "DECREASE_QUANTITY":
      productPrice = item.price / item.quantity;
      cart.totalPrice -= productPrice;
      cart.totalQuantity -= 1;
      item.quantity -= 1;
      item.price -= productPrice;

      if (item.quantity === 0) {
        filtered = true;
        cartItems = cart.items.filter((item) => item.id !== productId);
      }

      break;
  }

  return {
    items: filtered ? cartItems : [...cart.items],
    totalPrice: cart.totalPrice,
    totalQuantity: cart.totalQuantity
  };
};
