import React from 'react';
import {CartIndexItem} from './cart_index_item';


export class CartIndex extends React.Component {

  constructor(props){
		super(props);
  }

  componentDidMount() {
    this.props.fetchAllProducts();
  }


  render() {
    return (
      <div className="showpage-container">
        <div className="showpage-header">
          <p className="new-products-title">Your Cart</p>
          <p><a href="javascript: history.go(-1)">Go Back</a></p>
        </div>
        <div className="all-products">
          {this.props.cartItems.map(product => (
            <CartIndexItem key={product.id} removeCartItem = {this.props.removeCartItem} product = {product}/>
          ))}
        </div>
        <div className="total-amount">
          <p>Total: </p>
        </div>
      </div>
    );
  }
}
