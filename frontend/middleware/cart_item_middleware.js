import * as API from '../util/cart_item_api_util';
import * as ACTIONS from '../actions/cart_item_actions';


export const CartItemMiddleware = ({getState, dispatch}) => next => action => {

  const allSuccessCallback = cartItems => dispatch(ACTIONS.receiveAllCartItems(cartItems));
  const editsSuccessCallback = cartItem => dispatch(ACTIONS.receiveSingleCartItem(cartItem));
  const removeSuccessCallback = cartItem => dispatch(ACTIONS.removeCartItem(cartItem));

  const errorCallback = () => dispatch(console.log("error"));

  switch (action.type) {
    case ACTIONS.CartItemConstants.CREATE_CART_ITEM:
      API.createCartItem(action.cartItem, editsSuccessCallback);
      return next(action);
    case ACTIONS.CartItemConstants.UPDATE_CART_ITEM:
      API.updateCartItem(action.cartItem, editsSuccessCallback, errorCallback);
      return next(action);
    case ACTIONS.CartItemConstants.REMOVE_CART_ITEM:
      API.removeCartItem(action.cartItem, removeSuccessCallback);
      return next(action);
    case ACTIONS.CartItemConstants.FETCH_ALL_CART_ITEMS:
      API.fetchAllCartItems(allSuccessCallback);
      return next(action);
    default:
      return next(action);
    }
};


// const createSuccessCallback = cartItem => dispatch(ACTIONS.createCartItem(cartItem));
// const updateSuccessCallback = cartItem => dispatch(ACTIONS.updateCartItem(cartItem));
