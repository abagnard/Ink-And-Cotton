import React from 'react';
import { Link } from 'react-router';
import { ProductIndexItem } from './product_index_item';


export class UserIndex extends React.Component {

  constructor(props){
		super(props);
  }

  componentDidMount() {
    this.props.fetchSingleUser(this.props.params.id);
  }

  render() {
    return (
      <div>
        <div> WE ARE ON THE ARTIST PAGE!</div>
        <p className="new-products-title">New Ink</p>
        <Link to="/all">View All Products</Link>
          {this.props.artistProducts.map(product => (
            <ProductIndexItem key={product.id} product = {product}/>
          ))}
      </div>
    );
  }
}
