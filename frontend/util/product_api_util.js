import { receiveAllProducts, receiveSingleProduct } from '../actions/product_actions';

export const fetchAllProducts = (success) => {
  $.ajax({
    url: '/api/products',
    success
  });
};

export const fetchSingleProduct = (id, success) => {

  $.ajax({
    url: `/api/products/${id}`,
    success
  });
};
