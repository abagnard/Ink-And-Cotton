import { connect } from 'react-redux';
import ProductIndex from './product_index';
import { fetchAllProducts, fetchSingleProduct } from '../../actions/product_actions';


const mapStateToProps = state => ({
  product: state.product
});

const mapDispatchToProps = dispatch => ({
  fetchAllProducts: () => dispatch(fetchAllProducts()),
  fetchSingleProduct: (product) => dispatch(fetchSingleProduct(product))
});


export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex);
