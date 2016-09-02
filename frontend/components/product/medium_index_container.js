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



const mapStateToProps = state => ({
  const formType = ownProps.location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;

  return {
    processForm: user => dispatch(processForm(user)),
    formType
  };


  products: allProducts(state),
  inkProducts: inkProducts(state),
  cottonProducts: cottonProducts(state)
});

const mapDispatchToProps = dispatch => ({
  fetchAllProducts: () => dispatch(fetchAllProducts()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Medium);
