import React from 'react';

export class ReviewIndexItem extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="review-index-item">
        <div> WE ARE IN THE REIVEW ITEMS </div>
          <div className="review-title">
            <p>Title</p>
            <p className="review-content">{this.props.review.title}</p>
          </div>
          <div className="review-author">
            <p>Author</p>
            <p className="review-content">{this.props.review.author.username}</p>
          </div>
          <div className="review-rating">
            <p>Rating</p>
            <p className="review-content">{this.props.review.rating}</p>
          </div>
          <div className="review-comment">
            <p>Comment</p>
            <p className="review-content">{this.props.review.comment}</p>
          </div>
      </div>
    );
  }
}
