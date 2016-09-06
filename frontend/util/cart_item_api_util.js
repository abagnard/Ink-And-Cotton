export const createCartItem = (cartItem, success) => {
  $.ajax({
    method: 'POST',
    url: 'api/cart_items',
    data: cartItem,
    success
  });
};
