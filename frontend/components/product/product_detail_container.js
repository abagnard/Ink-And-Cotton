import { connect } from 'react-redux';
import { fetchSingleProduct } from '../../actions/product_actions';
import { ProductDetail } from './product_detail';


const allProducts = state => {
  return state ? Object.keys(state.products).map(id => state.products[id]) : [];
};

const mapStateToProps = state => ({
  products: state.products
});

const mapDispatchToProps = dispatch => ({
  fetchSingleProduct: (product) => dispatch(fetchSingleProduct(product))
});


export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
