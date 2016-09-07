export const CartItemConstants = {
  CREATE_CART_ITEM: "CREATE_CART_ITEM",
  UPDATE_CART_ITEM: "UPDATE_CART_ITEM",
  REMOVE_CART_ITEM: "REMOVE_CART_ITEM",
  DELETE_CART_ITEM: "DELETE_CART_ITEM",
  RECEIVE_SINGLE_CART_ITEM: "RECEIVE_SINGLE_CART_ITEM",
  RECEIVE_ALL_CART_ITEMS: "RECEIVE_ALL_CART_ITEMS",
  FETCH_ALL_CART_ITEMS: "FETCH_ALL_CART_ITEMS"
};

export const createCartItem = cartItem => ({
  type: CartItemConstants.CREATE_CART_ITEM,
  cartItem
});

export const updateCartItem = cartItem => ({
  type: CartItemConstants.UPDATE_CART_ITEM,
  cartItem
});

export const removeCartItem = id => ({
  type: CartItemConstants.REMOVE_CART_ITEM,
  id
});

export const deleteCartItem = id => ({
  type: CartItemConstants.DELETE_CART_ITEM,
  id
});

export const fetchAllCartItems = () => ({
  type: CartItemConstants.FETCH_ALL_CART_ITEMS
});

export const receiveSingleCartItem = cartItem => ({
  type: CartItemConstants.RECEIVE_SINGLE_CART_ITEM,
  cartItem
});

export const receiveAllCartItems = cartItems => ({
  type: CartItemConstants.RECEIVE_ALL_CART_ITEMS,
  cartItems
});
