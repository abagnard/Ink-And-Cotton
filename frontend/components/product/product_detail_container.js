import { connect } from 'react-redux';
import { fetchSingleProduct } from '../../actions/product_actions';
import { ProductDetail } from './product_detail';


const mapStateToProps = (state, ownProps) => ({
  product: state.products[ownProps.params.id]
});

const mapDispatchToProps = (dispatch) => ({
  fetchSingleProduct: (product) => dispatch(fetchSingleProduct(product))
});


export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
