import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createReview } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => ({
  author: state.session.currentUser.username
});

const mapDispatchToProps = dispatch => ({
  createReview: review => dispatch(createReview(review))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);



// review: state.products[ownProps.params.id]
