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
    debugger
    hashHistory.replace("/products/" + this.props.cartItem.product.id);
  }

  handleDelete(e){
    e.stopPropagation();

    this.props.removeCartItem(this.props.cartItem.id);
  }

  render() {
    return (
      <div className="cart-item">
        <div className="cart-item-details">
          <img src={this.props.cartItem.product.img_url} onClick={this.showDetail}/>
          <div>
            <p className="cart-item-title" onClick={this.showDetail}>{this.props.cartItem.product.title}</p>
            <p className="cart-item-artist">{this.props.cartItem.product.artist_name}</p>
          </div>
          <p className="cart-item-price">${this.props.cartItem.product.price}</p>
          <p className="cart-item-quantity"> Quantity:</p>
          <button className="delete-item" onClick={this.handleDelete}>Delete</button>
        </div>
      </div>
    );
  }
}
