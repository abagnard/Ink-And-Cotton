import React from 'react';
import { hashHistory } from 'react-router';
import Greeting from '../greeting/greeting_container';
import ProductIndex from '../product/product_index_container';
import {ProductIndexItem} from '../product/product_index_item';


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
        <span> HOME FORM UP </span>
        <ProductIndex/>
      </div>
    );
  }
}

export default Home;
