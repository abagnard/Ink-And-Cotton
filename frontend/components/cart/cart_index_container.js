import { connect } from 'react-redux';
import { fetchAllProducts } from '../../actions/product_actions';
import { CartIndex } from './cart_index';


const cartItems = state => {
  return state ? Object.keys(state.products).filter(id => {
    if (state.products[id].is_in_cart === true) {return state.products[id];}
  }).map(id => state.products[id]) : [];
};


const mapStateToProps = (state, ownProps) => ({
  cartItems: cartItems(state)
});

const mapDispatchToProps = dispatch => ({
  fetchAllProducts: () => dispatch(fetchAllProducts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIndex);
