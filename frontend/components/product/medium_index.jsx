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
      <div className="all-products">
        <h1>{this.props.medium}</h1>
        <a href="javascript: history.go(-1)">Back</a>
        {this.props.products.map(product => (
          <ProductIndexItem key={product.id} product = {product}/>
        ))}
      </div>
    );
  }
}
