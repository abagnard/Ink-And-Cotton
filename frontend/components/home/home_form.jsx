import React from 'react';
import Greeting from '../greeting/greeting_container';
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
        < Greeting />
        <span> HOME FORM UP </span>
      </div>
    );
  }
}

export default Home;
