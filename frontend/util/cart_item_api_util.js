export const createCartItem = (cartItem, success) => {
  $.ajax({
    method: 'POST',
    url: 'api/cart_items',
    data: cartItem,
    success
  });
};

export const removeCartItem = (id, success) => {
  $.ajax({
    method: 'DELETE',
    url: `api/cart_items/${id}`,
    success
  });
};
