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
      <div>
        <header className="header-group">
          <span>Current User: {currentUser.username}</span>
          <button className="header-logout" onClick={(e) => this.logoutPreventDefault(e, logout)}>Log Out</button>
          <span className="header-logo">INK & COTTON</span>
          <button className="cart">Cart</button>
        </header>
        <header>
            <Link to="/">Artists</Link>
            <Link to="/">Ink</Link>
            <Link to="/">Cotton</Link>
        </header>
      </div>
    );
  }

}


export default Greeting;
