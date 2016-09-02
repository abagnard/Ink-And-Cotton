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
      <div class="all-products">
        <h2>Cottons</h2>
        {this.props.cottonProducts.map(product => (
          <ProductIndexItem key={product.id} product = {product}/>
        ))}
      </div>
    );
  }
}
