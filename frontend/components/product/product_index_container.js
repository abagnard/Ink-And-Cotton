import { connect } from 'react-redux';
import { fetchAllProducts, fetchSingleProduct } from '../../actions/product_actions';
import {ProductIndex} from './product_index';



const allProducts = state => {
  return state ? Object.keys(state.products).map(id => state.products[id]) : [];
};

const inkProducts = state => {
  return state ? Object.keys(state.products).filter(id => {
    if (state.products[id].medium === "ink") {return state.products[id];}
  }).map(id => state.products[id]) : [];
};

const cottonProducts = state => {
  return state ? Object.keys(state.products).filter(id => {
    if (state.products[id].medium === "cotton") {return state.products[id];}
  }).map(id => state.products[id]) : [];
};



const mapStateToProps = state => ({
  products: allProducts(state),
  inkProducts: inkProducts(state),
  cottonProducts: cottonProducts(state)
});

const mapDispatchToProps = dispatch => ({
  fetchAllProducts: () => dispatch(fetchAllProducts()),
  fetchSingleProduct: (product) => dispatch(fetchSingleProduct(product))
});


export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex);
