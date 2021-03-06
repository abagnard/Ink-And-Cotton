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

  componentDidMount() {
    this.getCartItemNum();
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

  getCartItemNum() {
    let sum = 0;
    Object.keys(this.props.cartItems).forEach(id => sum += this.props.cartItems[id].quantity);

    if (sum === 0){
      return "";
    } else {
      return sum;
    }
  }


  render() {
    const {currentUser, logout} = this.props;
    return (
      <div>
        <header className="header-group">
          <span onClick={this.goHome} className="header-logo" id="home-logo">Ink & Cotton</span>
        </header>
        <header className="header-group-sublinks">
          <div className="header-subgroup left">
            <div className="nav-buttons">
              <button onClick={this.goHome}><i className="fa fa-home" aria-hidden="true"></i></button>
              <button className="header-logout" onClick={(e) => this.logoutPreventDefault(e, logout)}>logout</button>
            </div>
          </div>
          <div className="header-subgroup">
            <ul className="header-link-list">
              <li className="header-link-list">artists
                  <ul className="header-sub-link-list">
                    <li><Link to="/users/7">Alex Inc</Link></li>
                    <li><Link to="/users/4">Colette Miller</Link></li>
                    <li><Link to="/users/3">Maya Hayuk</Link></li>
                    <li><Link to="/users/6">Royal</Link></li>
                    <li><Link to="/users/5">WrdSmth</Link></li>
                  </ul>
              </li>
              <li className="header-link-list"><Link to="/all">all</Link></li>
              <li className="header-link-list"><Link to="/inks">inks</Link></li>
              <li className="header-link-list"><Link to="/cottons">cottons</Link></li>
            </ul>
          </div>
          <div className="header-subgroup right">
            <div className="nav-buttons">
              < SearchContainer />
              <button className="cart-button" onClick={this.enterCart}>
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                <span className="cart-badge">{this.getCartItemNum()}</span>
              </button>
            </div>
          </div>
        </header>
        <div className="header-group-img"></div>
      </div>
    );
  }

}

export default Greeting;


// <button className="header-logout" onClick={(e) => this.logoutPreventDefault(e, logout)}><i className="fa fa-sign-out" aria-hidden="true"></i></button>
