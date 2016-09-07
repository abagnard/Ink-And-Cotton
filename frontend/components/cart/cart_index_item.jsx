import React from 'react';
import { hashHistory } from 'react-router';
import { Link } from 'react-router';

export class CartIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.showDetail = this.showDetail.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  showDetail(e) {
    e.stopPropagation();
    hashHistory.replace("/products/" + this.props.product.id);
  }

  handleDelete(e){
    e.stopPropagation();
    this.props.removeCartItem(this.props.product.id);
  }

  render() {
    return (
      <div className="product-index-item">
        <div className="product-index-item-details">
          <img src={this.props.product.img_url} onClick={this.showDetail}/>
          <div>
            <p className="item-title" onClick={this.showDetail}>{this.props.product.title}</p>
            <p className="item-artist">ARTIST: {this.props.product.artist.name}</p>
          </div>
          <p className="item-price">PRICE: ${this.props.product.price}</p>
          <p> Quantity:</p>
          <button className="delete-item" onClick={this.handleDelete}>Delete</button>
        </div>
      </div>
    );
  }
}
