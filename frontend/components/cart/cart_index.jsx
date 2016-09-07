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
          <h2>Your Cart</h2>
          <p><a href="javascript: history.go(-1)">Go Back</a></p>
          <div className="all-products">
            {this.props.cartItems.map(product => (
              <CartIndexItem key={product.id} removeCartItem = {this.props.removeCartItem} product = {product}/>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
