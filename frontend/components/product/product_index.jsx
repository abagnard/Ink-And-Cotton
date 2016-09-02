import React from 'react';
import { Link } from 'react-router';
import {ProductIndexItem} from './product_index_item';


export class ProductIndex extends React.Component {

  constructor(props){
		super(props);
  }

  componentDidMount() {
    this.props.fetchAllProducts();
  }


  render() {
    return (
      <div>
        <div>
          <p className="new-products-title">New Ink</p>
          <Link to="/">View All Ink</Link>
            {this.props.inkProducts.map(product => (
              <ProductIndexItem key={product.id} product = {product}/>
            ))}
        </div>
        <br />
        <div>
          <p className="new-products-title">New Cotton</p>
          <Link to="/">View All Cotton</Link>
            {this.props.cottonProducts.map(product => (
              <ProductIndexItem key={product.id} product = {product}/>
            ))}
        </div>
      </div>
    );
  }
}
