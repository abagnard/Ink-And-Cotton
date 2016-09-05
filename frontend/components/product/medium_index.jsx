import React from 'react';
import {ProductIndexItem} from './product_index_item';


export class MediumIndex extends React.Component {

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
          <p className="new-products-title">{this.props.medium}</p>
          <p><a href="javascript: history.go(-1)">Go Back</a></p>
        </div>
        <div className="all-products">
          {this.props.products.map(product => (
            <ProductIndexItem key={product.id} product = {product}/>
          ))}
        </div>
      </div>
    );
  }
}
