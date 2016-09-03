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
      <div className="product-index-item">
        <h1 className="item-title">{this.props.product.title}</h1>
        <img src={this.props.product.img_url}/>
        <div className="product-index-item-details">
          <Link to="/all">View All Products</Link>
          <p className="item-artist">artist: <Link to={itemArtistUrl}>{this.props.product.artist.name}</Link></p>
          <p className="item-price">price: ${this.props.product.price}</p>
          <button>Add to cart</button>
          <br />
          <div className="item-description">
            <h5>Details</h5>
            <p className="item-description">{this.props.product.description}</p>
          </div>
        </div>
      </div>
    );
  }
}
