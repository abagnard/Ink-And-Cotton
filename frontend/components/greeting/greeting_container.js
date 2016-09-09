import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});


export default connect(mapStateToProps, mapDispatchToProps)(Greeting);



// 
// const mapStateToProps = (state) => ({
//   cartItems: cartItems(state)
// });
// const cartItems = (state) => {
//   let totalCartItems = 0;
//   Object.keys(state.cartItems).map(cartItem => {
//     totalCartItems += cartItem.quantity;});
//   return totalCartItems;
// };
