import { receiveAllProducts, receiveSingleProduct } from '../actions/product_actions';

export const fetchAllProducts = (success) => {
  $.ajax({
    url: '/api/products',
    success
  });
};

export const fetchSingleProduct = (product, success) => {
  
  $.ajax({
    url: `/api/products/${product.id}`,
    data: product,
    success
  });
};
