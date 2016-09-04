import React from 'react';
import { hashHistory } from 'react-router';
import { Link } from 'react-router';

export class ProductIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.showDetail = this.showDetail.bind(this);
  }

  showDetail(e) {
    e.stopPropagation();
    hashHistory.replace("/products/" + this.props.product.id);
  }

  render() {
    const itemArtistUrl = `/users/${this.props.product.artist_id}`;
    return (
      <div className="product-index-item">
        <img src={this.props.product.img_url} onClick={this.showDetail}/>
        <div className="product-index-item-details">
          <p className="item-title" onClick={this.showDetail}>{this.props.product.title}</p>
          <p className="item-artist">ARTIST: <Link to={itemArtistUrl}>{this.props.product.artist.name}</Link></p>
          <p className="item-price">PRICE: ${this.props.product.price}</p>
        </div>
      </div>
    );
  }
}
