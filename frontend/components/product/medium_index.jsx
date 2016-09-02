import React from 'react';
import {ProductIndexItem} from './product_index_item';


export class MediumIndex extends React.Component {

  constructor(props){
		super(props);\
  }

  componentDidMount() {
    this.props.fetchAllProducts();
  }



  render() {
    return (
      <div class="all-products">
        <h2>{this.props.products[0].type}</h2>
        {this.props.products.map(product => (
          <ProductIndexItem key={product.id} product = {product}/>
        ))}
      </div>
    );
  }
}
