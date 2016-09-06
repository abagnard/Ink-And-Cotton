export const CartItemConstants = {
  FETCH_ALL_CART_ITEMS: "FETCH_ALL_CART_ITEMS",
  FETCH_SINGLE_CART_ITEM: "FETCH_SINGLE_CART_ITEM",
  RECEIVE_ALL_CART_ITEMS: "RECEIVE_ALL_CART_ITEMS",
  RECEIVE_SINGLE_CART_ITEM: "RECEIVE_SINGLE_CART_ITEM"
};

export const fetchAllCartItems = () => ({
  type: CartItemConstants.FETCH_ALL_CART_ITEMS
});

export const fetchSingleCartItem = id => ({
  type: CartItemConstants.FETCH_SINGLE_CART_ITEM,
  id
});

export const receiveAllCartItems = cartItems => ({
  type: CartItemConstants.RECEIVE_ALL_CART_ITEMS,
  cartItems
});

export const receiveSingleCartItem = cartItem => ({
  type: CartItemConstants.RECEIVE_SINGLE_CART_ITEM,
  cartItem
});
