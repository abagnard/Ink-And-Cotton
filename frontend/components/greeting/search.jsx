import React from "react";
import {Link} from "react-router";
import { hashHistory } from 'react-router';
import { productSearch } from '../../util/search_api_util';



export class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {search: "", results: ""};
    this.handleSearch = this.handleSearch.bind(this);
    this.renderResults = this.renderResults.bind(this);
    this.displaySearchResults = this.displaySearchResults.bind(this);
    this.showResultPage = this.showResultPage.bind(this);
  }


  handleSearch(e) {
    e.preventDefault();
    this.setState({search: e.target.value});
    productSearch(e.target.value, this.renderResults);
  }


  showResultPage(e, id){
    e.stopPropagation();
    hashHistory.replace(id);
    this.setState({search: "", results: ""});
  }


  renderResults(products) {
    let results = [];

    products.products.forEach(product => {
      results.push(
        <li className="search-li" key={product.id} onClick={(e) => this.showResultPage(e, `/products/${product.id}`)}>{product.title}</li>
      );
    });
    products.users.forEach(user => {
      results.push(
        <li className="search-li" key={"user"+user.id} onClick={(e) => this.showResultPage(e, `/users/${user.id}`)}>{user.name}</li>
      );
    });

    if (results.length > 0) {
      this.setState({results: results});
    } else {
      this.setState({results: ""});
    }
  }

  displaySearchResults(){
    if (this.state.search.length > 0) {
      return this.state.results;
    } else {
      return "";
    }
  }


  render() {

    return(
      <div className="search-container">
        <div className="right-nav-buttonsv">
          <i className="fa fa-search" aria-hidden="true"></i>
          <input onChange={this.handleSearch} className="search-input" type="text" value={this.state.search} placeholder="SEARCH"/>
        </div>
        <ul className="search-ul">
          {this.displaySearchResults()}
        </ul>
      </div>
    );
  }
}

// <div className="all-products">
//   {this.props.cottonProducts.map(product => (
//     <ProductIndexItem key={product.id} product = {product}/>
//   ))}
