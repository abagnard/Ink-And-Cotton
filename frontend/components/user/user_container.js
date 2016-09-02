import { connect } from 'react-redux';
import { fetchAllProducts } from '../../actions/product_actions';
import { fetchSingleUser } from '../../actions/user_actions';
import { User } from './user_index';



const artistProducts = state => {
  return state ? Object.keys(state.products).filter(id => {
    if (state.products[id].artist_id === this.props.params.id) {return state.products[id];}
  }).map(id => state.products[id]) : [];
};

const mapStateToProps = (state) => {
  products: artistProducts(state);
};

const mapDispatchToProps = dispatch => ({
  fetchSingleUser: (user) => dispatch(fetchSingleUser(user)),
  fetchAllProducts: () => dispatch(fetchAllProducts())
});


export default connect(mapStateToProps, mapDispatchToProps)(User);
