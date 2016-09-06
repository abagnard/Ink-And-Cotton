import React from 'react';

export class ReviewIndexItem extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="review-content">
        <span className="review-title">{this.props.review.rating} STARS    {this.props.review.title}</span>
        <span className="review-author">by {this.props.review.author.username}</span>
        <span className="review-comment">{this.props.review.comment}</span>
      </div>
    );
  }
}

// <div className="review-index-item">
//     <div className="review-category">
//       <span>Title</span>
//
//       <span className="review-content">{this.props.review.title}</span>
//     </div>
//     <div className="review-category">
//       <span>Author</span>
//       <span className="review-content">{this.props.review.author.username}</span>
//     </div>
//     <div className="review-category">
//       <span>Rating</span>
//       <span className="review-content">{this.props.review.rating}</span>
//     </div>
//     <div className="review-category">
//       <span>Comment</span>
//       <span className="review-content">{this.props.review.comment}</span>
//     </div>
// </div>
