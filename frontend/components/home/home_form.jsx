import React from 'react';
import { hashHistory } from 'react-router';
import Greeting from '../greeting/greeting_container';
import Footer from '../footer/footer_container.js';
import ProductIndex from '../product/product_index_container';
import { ProductIndexItem } from '../product/product_index_item';


class Home extends React.Component{

  componentWillReceiveProps(nextProps){
    if (!nextProps.currentUser) {
      hashHistory.push('/login');
    }
  }

  render(){
    return(

      <div>
        < Greeting />
        {this.props.children}
        < Footer />
      </div>
    );
  }
}

export default Home;
