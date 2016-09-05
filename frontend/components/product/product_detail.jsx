import React from 'react';
import { hashHistory } from 'react-router';
import { Link } from 'react-router';
import { ProductIndexItem } from './product_index_item';

export class ProductDetail extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchSingleProduct(this.props.params.id);
  }

  render() {
    if (!this.props.product) {
      return (
        <div>Loading...</div>
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
            <button className="cart-button">Add to cart</button>
            <br />
            <div className="item-description">
              <span>details</span>
              <p className="item-description">{this.props.product.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
