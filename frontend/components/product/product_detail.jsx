import React from 'react';
import { hashHistory } from 'react-router';
import { fetchSingleProduct } from '../../actions/product_actions';
import { ProductIndexItem } from './product_index_item';

export class ProductDetail extends React.Component {

  constructor(props){
    super(props);
    this.state = {product: this.props.products[this.props.params.id]};
  }

  render() {
    return (
      <div className="product-index-item">
        <img src={this.state.product.img_url}/>
        <div className="product-index-item-details">
          <p className="item-title">{this.state.product.title}</p>
          <p className="item-artist">by: {this.state.product.artist_id}</p>
          <p className="item-price">price: ${this.state.product.price}</p>
          <button>Add to cart</button>
          <div className="item-description">
            <h5>Details</h5>
            <p className="item-description">{this.state.product.description}</p>
          </div>
        </div>
      </div>
    );
  }
}
