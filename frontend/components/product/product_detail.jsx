import React from 'react';
import { hashHistory } from 'react-router';
import { Link } from 'react-router';
import { ProductIndexItem } from './product_index_item';
import { ReviewIndexItem } from '../review/review_index_item';

export class ProductDetail extends React.Component {

  constructor(props){
    super(props);
    this.handleReview = this.handleReview.bind(this);
    this.handleCart = this.handleCart.bind(this);
  }

  componentDidMount(){
    this.props.fetchSingleProduct(this.props.params.id);
  }

  componentWillReceiveProps(nextProps){
    this.props.fetchSingleProduct(nextProps.params.id);
  }

  handleReview(e){
    e.stopPropagation();
    hashHistory.replace("/products/" + this.props.params.id + "/review");
  }

  handleCart(e){
    e.stopPropagation();
    const productId = parseInt(this.props.params.id);
    const cart_item = Object.assign({}, this.state, {product_id: productId});
    this.props.createCartItem({cart_item});
    hashHistory.replace("/cart");
  }

  showReviews(){
    let reviews = this.props.product.reviews;
    if(reviews === undefined) {
      reviews = [];
    }
    if (reviews.length < 1) {
        return(
          <div className="no-reviews">--there are no customer reviews yet--</div>
        );
      }
    return(
      <div className="all-reviews">
        {reviews.map(review => (
          <ReviewIndexItem key={review.id} review = {review}/>
        ))}
      </div>
    );
  }


  render() {
    if (!this.props.product) {
      return (
        <div>Fetching products...</div>
      );
    }

    const itemArtistUrl = `/users/${this.props.product.artist_id}`;

    return (
      <div className="product-showpage">
        <div className="inner-product-showpage">
          <div className="showpage-links">
            <a href="javascript: history.go(-1)">Go Back</a>
          </div>
          <img src={this.props.product.img_url}/>
          <div className="product-showpage-details">
            <p className="showpage-item-title">{this.props.product.title}</p>
            <p className="showpage-item-artist">artist: <Link to={itemArtistUrl}>{this.props.product.artist.name}</Link></p>
            <p className="showpage-item-price">price: ${this.props.product.price}</p>
            <div className="item-description">
              <p className="item-description">{this.props.product.description}</p>
            </div>
            <button className="cart-button" onClick={this.handleCart}>Add to cart</button>
            <br />
          </div>
          <br/>
          <div className="review-showpage">
            <span className="review-header">reviews</span>
            <button className="review-button" onClick={this.handleReview}>Create Review</button>
            {this.props.children}
            {this.showReviews()}
          </div>
        </div>
      </div>
    );
  }
}
