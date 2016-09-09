import React from 'react';
import { Link } from 'react-router';


export class Checkout extends React.Component {

  constructor(props){
		super(props);
  }


  render() {
    return (
      <div className="showpage-container">
        <div className="checkout-container">
          <p>Thank you for your order!</p>
        </div>
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
