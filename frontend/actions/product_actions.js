export const ProductConstants = {
  FETCH_ALL_PRODUCTS: "FETCH_ALL_PRODUCTS",
  FETCH_SINGLE_PRODUCT: "FETCH_SINGLE_PRODUCT",
  RECEIVE_ALL_PRODUCTS: "RECEIVE_ALL_PRODUCTS",
  RECEIVE_SINGLE_PRODUCT: "RECEIVE_SINGLE_PRODUCT"
};

export const fetchAllProducts = () => ({
  type: ProductConstants.FETCH_ALL_PRODUCTS
});

export const fetchSingleProduct = product => ({
  type: ProductConstants.FETCH_SINGLE_PRODUCT,
  product
});

export const receiveAllProducts = products => ({
  type: ProductConstants.RECEIVE_ALL_PRODUCTS,
  products
});

export const receiveSingleProduct = product => ({
  type: ProductConstants.RECEIVE_SINGLE_PRODUCT,
  product
});
