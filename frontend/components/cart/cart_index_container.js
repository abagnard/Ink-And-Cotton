import { connect } from 'react-redux';
import { removeCartItem } from '../../actions/cart_item_actions';
import { CartIndex } from './cart_index';


// const cartItems = state => {
//   return state ? Object.keys(state.products).filter(id => {
//     if (state.products[id].is_in_cart === true) {return state.products[id];}
//   }).map(id => state.products[id]) : [];
// };


const mapStateToProps = (state) => ({

});

const mapDispatchToProps = dispatch => ({
  fetchAllCartItems: () => dispatch(fetchAllCartItems()),
  createCartItem: (cartItem) => dispatch(createCartItem(cartItem)),
  updateCartItem: (cartItem) => dispatch(updateCartItem(cartItem)),
  removeCartItem: (cartItem) => dispatch(removeCartItem(cartItem))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIndex);
