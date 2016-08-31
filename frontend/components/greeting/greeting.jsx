import React from 'react';
import { hashHistory } from 'react-router';
import { Link } from 'react-router';


class Greeting extends React.Component {


  logoutPreventDefault(e, callback){
    e.preventDefault();
    callback();
  }

  componentWillReceiveProps(nextProps){
    if (!nextProps.currentUser) {
      hashHistory.push('/login');
    }
  }

  render() {
    const {currentUser, logout} = this.props;

    return (
      <header className="header-group">
        <h2 className="header-name">Hi, {currentUser.username}!</h2>
        <button className="header-logout" onClick={(e) => this.logoutPreventDefault(e, logout)}>Log Out</button>
      </header>
    );
  }

}


export default Greeting;
