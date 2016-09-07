import { connect } from 'react-redux';
import { createCartItem } from '../../actions/cart_item_actions';
import { fetchSingleProduct } from '../../actions/product_actions';
import { ProductDetail } from './product_detail';


const mapStateToProps = (state, ownProps) => ({
  product: state.products[ownProps.params.id]
});

const mapDispatchToProps = (dispatch) => ({
  fetchSingleProduct: (product) => dispatch(fetchSingleProduct(product)),
  createCartItem: (cartItem) => dispatch(createCartItem(cartItem))
});


export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
