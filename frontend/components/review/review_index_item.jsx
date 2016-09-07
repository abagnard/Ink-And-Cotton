import React from 'react';

export class ReviewIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.createStars = this.createStars.bind(this);
  }

  createStars(num){
    if (num === 0) {
      return (<div><i className="fa fa-star-o" aria-hidden="true"></i><i className="fa fa-star-o" aria-hidden="true"></i><i className="fa fa-star-o" aria-hidden="true"></i><i className="fa fa-star-o" aria-hidden="true"></i><i className="fa fa-star-o" aria-hidden="true"></i></div>);
    } else if (num === 1) {
      return (<div><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star-o" aria-hidden="true"></i><i className="fa fa-star-o" aria-hidden="true"></i><i className="fa fa-star-o" aria-hidden="true"></i><i className="fa fa-star-o" aria-hidden="true"></i></div>);
    } else if (num === 2) {
      return (<div><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star-o" aria-hidden="true"></i><i className="fa fa-star-o" aria-hidden="true"></i><i className="fa fa-star-o" aria-hidden="true"></i></div>);
    } else if (num === 3) {
      return (<div><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star-o" aria-hidden="true"></i><i className="fa fa-star-o" aria-hidden="true"></i></div>);
    } else if (num === 4) {
      return (<div><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star-o" aria-hidden="true"></i></div>);
    } else if (num === 5) {
      return (<div><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i></div>);
    }
  }

  render() {
    const numStar = this.props.review.rating;
    return (
      <div className="review-content">
        <span className="review-title">{this.createStars(numStar)}{this.props.review.title}</span>
        <span className="review-author">by {this.props.review.author.username}</span>
        <span className="review-comment">{this.props.review.comment}</span>
      </div>
    );
  }
}
