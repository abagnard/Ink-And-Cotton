import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Home from './home_form';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
});


export default connect(mapStateToProps, mapDispatchToProps)(Home);
