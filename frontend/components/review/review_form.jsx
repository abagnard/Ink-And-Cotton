import React from 'react';
import { hashHistory } from 'react-router';

class ReviewForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { rating: 5, title: "", comment: ""};
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showProductDetails = this.showProductDetails.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    const productId = parseInt(this.props.params.id);
    const review = Object.assign({}, this.state, {product_id: productId});
    this.props.createReview({review});
    this.showProductDetails();
  }

  showProductDetails() {
    hashHistory.push("/products/" + this.props.params.id);
  }

  update(attribute) {
    return e => {
      this.setState({[attribute]: e.currentTarget.value});
    };
  }

  render() {
    return (
      <div className="review-form">
        <form onSubmit={this.handleSubmit}>
          <div>Yeah</div>
          <label>Title</label>
          <input type="text" value={this.state.title} onChange={this.update("title")}/>
          <label>Rating</label>
          <input type="number" value={this.state.rating} onChange={this.update("rating")}/>
          <label>Comment</label>
          <textarea value={this.state.comment} onChange={this.update("comment")}/>
          <button>Create Review</button>
        </form>
        <button onClick={this.showProductDetails}>Cancel</button>
      </div>
    );
 }
}

export default ReviewForm;



//
// <p>Comment</p>
// <textarea value={this.state.comment} onChange={this.update("comment")}/>
//
//
