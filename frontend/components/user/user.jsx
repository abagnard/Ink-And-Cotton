import React from 'react';
import { Link } from 'react-router';
import { ProductIndexItem } from '../product/product_index_item';


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
        <p className="new-products-title">{this.props.user.name}</p>
        <Link to="/all">View All Products</Link>
          {this.props.products.map(product => (
            <ProductIndexItem key={product.id} product = {product}/>
          ))}
      </div>
    );
  }
}

// <h1>{this.props.user.name}</h1>


// constructor(props){
//   super(props);
//   this.artistProducts = this.artistProducts.bind(this);
// }
//
// componentDidMount() {
//   this.props.fetchSingleUser(this.props.params.id);
//   this.props.fetchAllProducts();
//   this.setState({products: this.artistProducts(this.state)});
// }
//
// artistProducts(state) {
//     return state ? Object.keys(state.products).filter(id => {
//       if (state.products[id].artist_id === state.users.id) {return state.products[id];}
//     }).map(id => state.products[id]) : [];
// }
