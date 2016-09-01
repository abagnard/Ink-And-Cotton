import merge from 'lodash/merge';
import { ProductConstants } from '../actions/product_actions';

export const ProductReducer = function(state = {}, action){
  switch(action.type) {
    case ProductConstants.RECEIVE_ALL_PRODUCTS:
      let newState = {};
      action.products.forEach(product => {
        newState[product.id] = product;
      });
      return newState;
    case ProductConstants.RECEIVE_SINGLE_PRODUCT:
      const newProduct = {[action.product.id]: action.product};
      return Object.assign({}, state, newProduct);
    default:
      return state;
  }
};
