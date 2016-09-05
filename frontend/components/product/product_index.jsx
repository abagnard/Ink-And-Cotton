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
        <div className="showpage-container">
          <div className="showpage-header">
            <p className="new-products-title">New Inks</p>
            <p><Link to="/inks">View All Inks</Link></p>
          </div>
          <div className="all-products">
            {this.props.inkProducts.map(product => (
              <ProductIndexItem key={product.id} product = {product}/>
            ))}
          </div>
        </div>
        <br />
        <div className="showpage-container">
          <div className="showpage-header">
            <p className="new-products-title">New Cottons</p>
            <p><Link to="/cottons">View All Cottons</Link></p>
          </div>
          <div className="all-products">
            {this.props.cottonProducts.map(product => (
              <ProductIndexItem key={product.id} product = {product}/>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
