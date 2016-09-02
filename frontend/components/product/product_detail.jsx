import React from 'react';
import { hashHistory } from 'react-router';
import { fetchSingleProduct } from '../../actions/product_actions';
import { ProductIndexItem } from './product_index_item';

export class ProductDetail extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount() {
    debugger
    this.props.fetchSingleProduct(this.props.product);
  }

  render() {
    return (
      <div> WE DID IT! </div>
    );
  }
}





// <div className="product-index-item">
//   <img src={this.props.product.img_url}/>
//   <div className="product-index-item-details">
//     <p className="item-title">{this.props.product.title}</p>
//     <p className="item-artist">by: {this.props.product.artist_id}</p>
//     <p className="item-price">price: ${this.props.product.price}</p>
//     <button>Add to cart</button>
//     <div className="item-description">
//       <h5>Details</h5>
//       <p className="item-description">{this.props.product.description}</p>
//     </div>
//   </div>
// </div>
