import { fetchAllProducts, fetchSingleProduct } from '../util/product_api_util';
import { ProductConstants, receiveAllProducts, receiveSingleProduct } from '../actions/product_actions';


export const ProductMiddleware = ({getState, dispatch}) => next => action => {
  const successCallbackAll = products => dispatch(receiveAllProducts(products));
  const successCallbackSingle = product => dispatch(receiveSingleProduct(product));

  switch (action.type) {
    case ProductConstants.FETCH_ALL_PRODUCTS:
      fetchAllProducts(successCallbackAll);
      return next(action);
    case ProductConstants.FETCH_SINGLE_PRODUCT:
      fetchSingleProduct(action.product, successCallbackSingle);
      return next(action);
    default:
      return next(action);
    }
};
