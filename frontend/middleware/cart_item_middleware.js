import { createCartItem, removeCartItem } from '../util/cart_item_api_util';
import { CartItemConstants } from '../actions/cart_item_actions';
import { receiveSingleProduct } from '../actions/product_actions';


export const CartItemMiddleware = ({getState, dispatch}) => next => action => {
  const successCallback = product => dispatch(receiveSingleProduct(product));

  switch (action.type) {
    case CartItemConstants.CREATE_CART_ITEM:
      createCartItem(action.cartItem, successCallback);
      return next(action);
    case CartItemConstants.REMOVE_CART_ITEM:
      removeCartItem(action.id, successCallback);
      return next(action);
    default:
      return next(action);
    }
};
