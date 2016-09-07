export const CartItemConstants = {
  CREATE_CART_ITEM: "CREATE_CART_ITEM",
  REMOVE_CART_ITEM: "REMOVE_CART_ITEM"
};

export const createCartItem = cartItem => ({
  type: CartItemConstants.CREATE_CART_ITEM,
  cartItem
});

export const removeCartItem = (id) => ({
  type: CartItemConstants.REMOVE_CART_ITEM,
  id
});
