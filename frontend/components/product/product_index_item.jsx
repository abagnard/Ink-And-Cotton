import React from 'react';
import { hashHistory } from 'react-router';

export class ProductIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.showDetail = this.showDetail.bind(this);
  }

  showDetail(e) {
    e.stopPropagation();
    hashHistory.replace("/products/" + this.props.product.id);
  }

  artistName(){
    let artistId = this.props.product.artist_id;

  }

  render() {

    return (
      <div onClick={this.showDetail} className="product-index-item">
        <img src={this.props.product.img_url} />
        <div className="product-index-item-details">
          <p className="item-title">{this.props.product.title}</p>
          <p className="item-artist">BY: {this.props.product.artist_id}</p>
          <p className="item-price">PRICE: ${this.props.product.price}</p>
        </div>
      </div>
    );
  }
}
