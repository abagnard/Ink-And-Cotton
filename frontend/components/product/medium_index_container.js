import { connect } from 'react-redux';
import { fetchAllProducts } from '../../actions/product_actions';
import {MediumIndex} from './medium_index';



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



const mapStateToProps = (state, ownProps) => ({
  const mediumRequested = ownProps.location.pathname.slice(1);

  if (mediumRequested === "inks") {
    return {products: inkProducts(state)};
  } else if (mediumRequested === "cottons"){
    return {products: cottonProducts(state)};
  } else {
    return {products: allProducts(state)};
  };
});

const mapDispatchToProps = dispatch => ({
  fetchAllProducts: () => dispatch(fetchAllProducts()),
});


export default connect(mapStateToProps, mapDispatchToProps)(MediumIndex);
