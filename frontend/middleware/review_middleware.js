import { createReview } from '../util/review_api_util';
import { ReveiwConstants } from '../actions/review_actions';
import { receiveSingleProduct } from '../actions/product_actions';


export const ReviewMiddleware = ({getState, dispatch}) => next => action => {
  const successCallback = product => dispatch(receiveSingleProduct(product));

  switch (action.type) {
    case ReveiwConstants.CREATE_REVIEW:
      createReview(action.review, successCallback);
      return next(action);
    default:
      return next(action);
    }
};
