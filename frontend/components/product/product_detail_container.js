import { connect } from 'react-redux';
import { fetchSingleProduct } from '../../actions/product_actions';
import { ProductDetail } from './product_detail';


const mapStateToProps = state => ({
  products: state.products
});

const mapDispatchToProps = (dispatch) => ({
  fetchSingleProduct: (product) => dispatch(fetchSingleProduct(product))
});


export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
