import { connect } from 'react-redux';
import { deleteCartItem, updateCartItem, fetchAllCartItems } from '../../actions/cart_item_actions';
import { CartIndex } from './cart_index';



const cartItems = (state) => {
  return state ? Object.keys(state.cartItems).map(id => state.cartItems[id]) : [];
};

const mapStateToProps = (state) => ({
  cartItems: cartItems(state)
});

const mapDispatchToProps = dispatch => ({
  fetchAllCartItems: () => dispatch(fetchAllCartItems()),
  updateCartItem: (cartItem) => dispatch(updateCartItem(cartItem)),
  deleteCartItem: (id) => dispatch(deleteCartItem(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIndex);
