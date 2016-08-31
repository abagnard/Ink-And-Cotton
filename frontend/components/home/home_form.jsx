import React from 'react';
import Greeting from '../greeting_container';
import { hashHistory } from 'react-router';

class Home extends React.Component{

  componentWillReceiveProps(nextProps){
    if (!nextProps.currentUser) {
      hashHistory.push('/login');
    }
  }

  render(){
    return(
      <div>
        <Greeting />
        <span> INK & COTTON </span>
      </div>
    );
  }
}

export default Home;
