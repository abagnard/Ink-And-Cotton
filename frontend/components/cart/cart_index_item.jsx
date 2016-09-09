import React from 'react';
import { hashHistory } from 'react-router';
import { Link } from 'react-router';

export class CartIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      quantity: 0
    };
    this.showDetail = this.showDetail.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.quantityUpdate = this.quantityUpdate.bind(this);
    this.calcTotal = this.calcTotal.bind(this);
    this.checkSelected = this.checkSelected.bind(this);
  }

  showDetail(e) {
    e.stopPropagation();
    hashHistory.replace("/products/" + this.props.cartItem.product.id);
  }

  handleDelete(e){
    e.stopPropagation();
    this.props.removeCartItem(this.props.cartItem.id);
  }

  checkSelected(num){
    if(this.props.cartItem.quantity === num) {
      return "selected";
    } else {
      return "";
    }
  }

  quantityUpdate(e){
    e.preventDefault();
    this.setState({quantity: e.target.value});
    this.props.cartItem.quantity = parseInt(e.target.value);
    this.props.updateCartItem(this.props.cartItem);
  }

  calcTotal(){
    return(
      this.props.cartItem.quantity * this.props.cartItem.product.price
    );
  }

  render() {
    const itemArtistUrl = `/users/${this.props.cartItem.product.artist_id}`;
    return (
      <div className="cart-item">
        <div className="cart-item-details">
          <img src={this.props.cartItem.product.img_url} onClick={this.showDetail}/>
          <div>
            <p className="cart-item-title" onClick={this.showDetail}>{this.props.cartItem.product.title}</p>
            <p className="cart-item-artist"><Link to={itemArtistUrl}>{this.props.cartItem.product.artist_name}</Link></p>
            <button className="delete-item" onClick={this.handleDelete}>remove</button>
          </div>
          <p className="cart-item-price">${this.props.cartItem.product.price}</p>
          <p className="cart-item-quantity">
            <select onChange={this.quantityUpdate}>
              <option selected={this.checkSelected(1)} value="1">1</option>
              <option selected={this.checkSelected(2)} value="2">2</option>
              <option selected={this.checkSelected(3)} value="3">3</option>
              <option selected={this.checkSelected(4)} value="4">4</option>
              <option selected={this.checkSelected(5)} value="5">5</option>
            </select>
          </p>
          <p className="cart-item-total-price">${this.calcTotal()}</p>
        </div>
      </div>
    );
  }
}
