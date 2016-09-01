import React from 'react';
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
        {this.props.inkProducts.map(product => (
          <ProductIndexItem key={product.id} product = {product}/>
        ))}
        WE MADE IT TO THE PRODUCT INDEX ITEM
      </div>
    );
  }
}
