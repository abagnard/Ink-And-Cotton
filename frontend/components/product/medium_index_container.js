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



const mapStateToProps = (state, ownProps) => {
  let mediumRequested = ownProps.location.pathname.slice(1);

  if (mediumRequested === "inks") {
    return {products: inkProducts(state), medium: "Inks"};
  } else if (mediumRequested === "cottons"){
    return {products: cottonProducts(state), medium: "Cottons"};
  } else if (mediumRequested === "all"){
    return {products: allProducts(state), medium: "All Products"};
  }
};

const mapDispatchToProps = dispatch => ({
  fetchAllProducts: () => dispatch(fetchAllProducts()),
});


export default connect(mapStateToProps, mapDispatchToProps)(MediumIndex);
