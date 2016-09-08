import { connect } from 'react-redux';
import { createCartItem, updateCartItem, fetchAllCartItems } from '../../actions/cart_item_actions';
import { fetchSingleProduct } from '../../actions/product_actions';
import { ProductDetail } from './product_detail';

const cartItems = (state) => {
  return state ? Object.keys(state.cartItems).map(id => state.cartItems[id]) : [];
};

const mapStateToProps = (state, ownProps) => ({
  product: state.products[ownProps.params.id],
  cartItems: cartItems(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchSingleProduct: (product) => dispatch(fetchSingleProduct(product)),
  fetchAllCartItems: () => dispatch(fetchAllCartItems()),
  createCartItem: (cartItem) => dispatch(createCartItem(cartItem)),
  updateCartItem: (cartItem) => dispatch(updateCartItem(cartItem))
});


export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
