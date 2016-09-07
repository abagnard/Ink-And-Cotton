import { receiveAllCartItems, receiveSingleCartItem } from '../actions/cart_item_actions';

export const createCartItem = (cartItem, success) => {
  $.ajax({
    method: 'POST',
    url: 'api/cart_items',
    data: cartItem,
    success
  });
};

export const updateCartItem = (cartItem, success, error) => {
  $.ajax({
    method: 'PATCH',
    url: `api/cart_items/${cartItem.id}`,
    data: cartItem,
    success,
    error
  });
};

export const removeCartItem = (id, success) => {
  $.ajax({
    method: 'DELETE',
    url: `api/cart_items/${id}`,
    success
  });
};

export const fetchSingleCartItem = (cartItem, success) => {
  $.ajax({
    url: `api/cart_items/${cartItem.id}`,
    success
  });
};

export const fetchAllCartItems = (success) => {
  $.ajax({
    url: '/api/cart_items',
    success
  });
};
