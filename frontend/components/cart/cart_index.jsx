import React from 'react';
import { hashHistory } from 'react-router';
import { Link } from 'react-router';
import {CartIndexItem} from './cart_index_item';


export class CartIndex extends React.Component {

  constructor(props){
		super(props);
    this.checkOut = this.checkOut.bind(this);
    this.checkCart = this.checkCart.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllCartItems();
  }

  checkOut() {
    hashHistory.replace("/checkout");
  }

  checkCart(){
    if (this.props.cartItems.length > 0) {
      return(
        <div>
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
    } else {
      return (
        <div>
          <p>Your cart is currently empty...<Link to="/">lets fix that!</Link></p>
        </div>
      );
    }
  }


  render() {
    return (
      <div className="showpage-container">
        <div className="showpage-header">
          <p className="new-products-title">Your Cart</p>
          <p><Link to="/">continue shopping</Link></p>
        </div>
        {this.checkCart()}
      </div>
    );
  }
}
