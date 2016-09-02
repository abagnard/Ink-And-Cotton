import { connect } from 'react-redux';
import { fetchAllProducts } from '../../actions/product_actions';
import { Artist } from './artist_index';



const allProducts = state => {
  return state ? Object.keys(state.products).map(id => state.products[id]) : [];
};

const artistProducts = state => {
  return state ? Object.keys(state.products).filter(id => {
    if (state.products[id].artist_id === state.user.id) {return state.products[id];}
  }).map(id => state.products[id]) : [];
};

const artistName = artistId => {

}


  if (mediumRequested === "inks") {
    return {products: inkProducts(state), medium: "Inks"};
  } else if (mediumRequested === "cottons"){
    return {products: cottonProducts(state), medium: "Cottons"};
  } else if (mediumRequested === "all"){
    return {products: allProducts(state), medium: "All Products"};
  }



const mapStateToProps = (state, ownProps) => {
  let artistRequested = ownProps.location.pathname.slice(1);

  products: state.products
};

const mapDispatchToProps = dispatch => ({
  fetchAllProducts: () => dispatch(fetchAllProducts()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Arist);
