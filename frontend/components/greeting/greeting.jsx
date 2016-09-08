import React from 'react';
import Bootstrap from 'bootstrap';
import { hashHistory } from 'react-router';
import SearchContainer from './search_container';
import { Link } from 'react-router';


class Greeting extends React.Component {


  logoutPreventDefault(e, callback){
    e.preventDefault();
    callback();
  }

  handleLogout(e){
    e.stopPropagation();
    this.props.logout();
  }

  componentWillReceiveProps(nextProps){
    if (!nextProps.currentUser) {
      hashHistory.push('/login');
    }
  }

  goHome(e){
    e.stopPropagation();
    hashHistory.replace("/");
  }

  enterCart(e){
    e.stopPropagation();
    hashHistory.replace("/cart");
  }

  showArtist(e) {
    e.stopPropagation();
    hashHistory.replace("/artists");
  }


  render() {
    const {currentUser, logout} = this.props;

    return (
      <div>
        <header className="header-group">
          <span onClick={this.goHome} className="header-logo" id="home-logo">Ink & Cotton</span>
        </header>
        <header className="header-group-sublinks">
          <div className="nav-buttons">
            <button onClick={this.goHome}><i className="fa fa-home" aria-hidden="true"></i></button>
            <button className="header-logout" onClick={(e) => this.logoutPreventDefault(e, logout)}><i className="fa fa-sign-out" aria-hidden="true"></i></button>
          </div>
          <ul className="header-link-list">
            <li className="header-link-list">artists
                <ul className="header-sub-link-list">
                  <li><Link to="/users/7">ALEX INC</Link></li>
                  <li><Link to="/users/4">Colette Miller</Link></li>
                  <li><Link to="/users/3">Maya Hayuk</Link></li>
                  <li><Link to="/users/6">Royal</Link></li>
                  <li><Link to="/users/5">WRDSMTH</Link></li>
                </ul>
            </li>
            <li className="header-link-list"><Link to="/all">all</Link></li>
            <li className="header-link-list"><Link to="/inks">inks</Link></li>
            <li className="header-link-list"><Link to="/cottons">cottons</Link></li>
          </ul>
          <div className="nav-buttons">
            < SearchContainer />
            <button className="cart-button" onClick={this.enterCart}>
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              <span className="badge"></span>
            </button>
          </div>
        </header>
        <div className="header-group-img"></div>
      </div>
    );
  }

}

export default Greeting;
