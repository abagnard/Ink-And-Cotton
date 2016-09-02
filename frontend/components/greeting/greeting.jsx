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

  showArtist(e) {
    e.stopPropagation();
    hashHistory.replace("/artists");
  }

  showInks(e){
    e.stopPropagation();
    hashHistory.replace("/products/inks");
  }

  showCottons(e){
    e.stopPropagation();
    hashHistory.replace("/products/cottons");
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
        <header className="header-group-sublinks">
            <span onClick={this.showArtist}>Artists</span>
            <span onClick={this.showInks}>Ink</span>
            <span onClick={this.showCottons}>Cotton</span>
        </header>
        <div className="header-group-img"></div>
      </div>
    );
  }

}


export default Greeting;


// <header className="header-group-sublinks">
//     <Link to="/">Artists</Link>
//     <Link to="/">Ink</Link>
//     <Link to="/">Cotton</Link>
// </header>
