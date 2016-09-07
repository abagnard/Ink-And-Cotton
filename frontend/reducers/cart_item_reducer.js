import merge from 'lodash/merge';
import { CartItemConstants } from '../actions/cart_item_actions';

export const CartItemReducer = function(state = {}, action){
  switch(action.type) {
    case CartItemConstants.REMOVE_CART_ITEM:
      newState = Object.assign({}, state);
      delete newState[action.id];
      return newState;
    case CartItemConstants.RECEIVE_SINGLE_CART_ITEM:
      const newCartItem = {[action.cartItem.id]: action.cartItem};
      return Object.assign({}, state, newCartItem);
    case CartItemConstants.RECEIVE_ALL_CART_ITEMS:
      let newState = {};
      action.cartItems.forEach(cartItem => {
        newState[cartItem.id] = cartItem;
      });
      return newState;
    default:
      return state;
  }
};


// dispatch(createCartItem(cartItem));
// const updateSuccessCallback = id => dispatch(updateCartItem(id));
// const removeSuccessCallback = id => dispatch(removeCartItem(id));
