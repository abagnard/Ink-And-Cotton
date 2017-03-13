import React from 'react';
import { Link } from 'react-router';


export class Checkout extends React.Component {

  render() {
    return (
      <div className="showpage-container">
        <div className="checkout-notification">
          <p>Thank you for your order!</p>
        </div>
        <div className="checkout-link">
          <p><Link to="/">continue shopping</Link></p>
        </div>
      </div>
    );
  }
}
