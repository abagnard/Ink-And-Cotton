import React from 'react';
import { hashHistory } from 'react-router';
import {CartIndexItem} from './cart_index_item';


export class CartIndex extends React.Component {

  constructor(props){
		super(props);
    this.checkOut = this.checkOut.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllCartItems();
  }

  checkOut() {
    hashHistory.replace("/checkout");
  }


  render() {


    return (
      <div className="showpage-container">
        <div className="showpage-header">
          <p className="new-products-title">Your Cart</p>
          <p><a href="javascript: history.go(-1)">Go Back</a></p>
        </div>
        <div className="all-products">
          {this.props.cartItems.map(cartItem => (
            <CartIndexItem key={cartItem.id} removeCartItem = {this.props.deleteCartItem}
              updateCartItem = {this.props.updateCartItem} cartItem = {cartItem}/>
          ))}
        </div>
        <div className="total-amount">
          <p>Total: </p>
          <button onClick={this.checkOut}>Checkout</button>
        </div>
      </div>
    );
  }
}
