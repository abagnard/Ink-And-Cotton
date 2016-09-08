import React from 'react';
import { hashHistory } from 'react-router';
import { Link } from 'react-router';
import { ProductIndexItem } from './product_index_item';
import { ReviewIndexItem } from '../review/review_index_item';

export class ProductDetail extends React.Component {

  constructor(props){
    super(props);
    this.state = {quantity: 1};
    this.handleReview = this.handleReview.bind(this);
    this.handleCart = this.handleCart.bind(this);
    this.quantityUpdate = this.quantityUpdate.bind(this);
    this.getQuant = this.getQuant.bind(this);
    this.checkCart = this.checkCart.bind(this);
  }

  componentDidMount(){
    this.props.fetchSingleProduct(this.props.params.id);
    this.props.fetchAllCartItems();
  }

  componentWillReceiveProps(nextProps){
    this.props.fetchSingleProduct(nextProps.params.id);
  }

  handleReview(e){
    e.stopPropagation();
    hashHistory.replace("/products/" + this.props.params.id + "/review");
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


  checkCart(id){
    let isInCart = false;
    this.props.cartItems.forEach(cartItem => {
      if(cartItem.product.id === id) {
        isInCart = true;
      }
    });
    return isInCart;
  }

  getQuant(id){
    let numItems = 1;
    this.props.cartItems.forEach(cartItem => {
      if(cartItem.product.id === parseInt(id)) {
        numItems = cartItem.quantity;
      }
    });
    return numItems;
  }

  quantityUpdate(e){
    this.setState({quantity: e.target.value});
  }

  handleCart(e){
    e.stopPropagation();
    const productId = parseInt(this.props.params.id);
    const cartItem = Object.assign({}, {product_id: productId, quantity: this.state.quantity});

    if(this.checkCart(productId)) {
      this.props.updateCartItem(cartItem);
    } else {
      this.props.createCartItem(cartItem);
    }
    hashHistory.replace("/cart");
  }

  inCartWarning(){
    if (this.checkCart(parseInt(this.props.params.id))){
      return (
        <div>
          <p className="in-cart-warning">you already have {this.getQuant(this.props.params.id)} of these items in your cart.
          update quantity desired above</p>
        <button className="update-cart-button" onClick={this.handleCart}>Update Cart</button>
        </div>
      );
    } else {
      return(
        <button className="add-cart-button" onClick={this.handleCart}>Add to cart</button>
      );
    }
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
            <select onChange={this.quantityUpdate}>
              <option selected={this.getQuant(this.props.params.id)}>{this.getQuant(this.props.params.id)}</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            {this.inCartWarning()}
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
