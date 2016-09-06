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
          <div className="review-label-form">
            <label>Title</label>
            <label>Rating</label>
            <label>Comment</label>
          </div>
          <div className="reivew-form-content" >
            <input type="text" value={this.state.title} onChange={this.update("title")}/>
            <input type="number" value={this.state.rating} onChange={this.update("rating")}/>
            <textarea value={this.state.comment} onChange={this.update("comment")}/>
            <div className="review-form-buttons">
              <button className="cancel-button" onClick={this.showProductDetails}>Cancel</button>
              <button className="submit-button">Submit</button>
            </div>
          </div>
        </form>

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
