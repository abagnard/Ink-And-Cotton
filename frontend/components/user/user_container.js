import { connect } from 'react-redux';
import { fetchAllProducts } from '../../actions/product_actions';
import { fetchSingleUser } from '../../actions/user_actions';
import { UserIndex } from './user';


const mapStateToProps = (state, ownProps) => {
  if(!state.users[ownProps.params.id]) {
    return {products: [], user: {}};
  } else {
    return {products: state.users[ownProps.params.id].products, user: state.users[ownProps.params.id]};
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchSingleUser: (id) => dispatch(fetchSingleUser(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(UserIndex);
