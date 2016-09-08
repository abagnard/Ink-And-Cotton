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

  calculateTotal(){
    let total = 0;
    (this.props.cartItems).forEach(cartItem =>{
      total += cartItem.quantity * cartItem.product.price;
    });
    return total;
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
            <p>Total: ${this.calculateTotal()}</p>
            <button onClick={this.checkOut}>Checkout</button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="empty-cart">
          <p>Your cart is currently empty...</p>
          <p><Link to="/">let"'"s fix that</Link></p>
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
        <div className="all-products">
            <div className="cart-item-details-header">
              <div className="cart-header">
                <div className="header-cart-item">Item</div>
                <div className="header-cart-item-price">price</div>
                <div className="header-cart-item-quantity">Qty</div>
                <div className="header-cart-item-total">total</div>
              </div>
            </div>
        </div>
        {this.checkCart()}
      </div>
    );
  }
}

// getSum(total, num){
//   return total+num;
// }
//
// getFinalTotal(){
//   this.props.fetchAllCartItems();
//   let sum = 0;
//    totalVals = {this.props.cartItems.map(cartItem => {(
//      this.props.cartItem.quantity * this.props.cartItem.product.price
//    )});};
//   return totalVals.reduce(getSum, 0)
//   return sum;
// }
