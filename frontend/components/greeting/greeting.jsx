import React from 'react';
import Bootstrap from 'bootstrap';
import { hashHistory } from 'react-router';
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
          <button className="header-logout" onClick={(e) => this.logoutPreventDefault(e, logout)}>log out</button>
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
          <button className="cart-button" onClick={this.enterCart}>Cart<span className="badge">3</span></button>
        </header>
        <div className="header-group-img"></div>
      </div>
    );
  }

}

export default Greeting;


  // <header class="header">
  //   <nav class="header-nav group">
  //     <h1 class="header-logo">App Academy Friends</h1>
  //     <ul class="header-list group">
  //       <li>
  //         <a href="#Notifications">Notifications<span class="badge">3</span></a>
  //         <ul>
  //           <li><a href="#">LikeLikeLikeLikeLikeLikeLikeLikeLikeLikeLikeLikeLike</a></li>
  //           <li><a href="#">Comment</a></li>
  //           <li><a href="#">New Friend</a></li>
  //         </ul>
  //       </li>
  //       <li><a href="#profile">Profile</a></li>
  //       <li><a href="#settings">Settings</a></li>
  //     </ul>
  //   </nav>
  // </header>



// <header className="header-group-sublinks">
//   <span>Current User: {currentUser.username}</span>
//   <button className="header-logout" onClick={(e) => this.logoutPreventDefault(e, logout)}>Log Out</button>
//   <span onClick={this.showArtist}>Artists</span>
//   <Link to="/all">All</Link>
//   <Link to="/inks">Inks</Link>
//   <Link to="/cottons">Cottons</Link>
//   <button className="cart">Cart</button>
// </header>


// <header className="header-group-sublinks">
//     <Link to="/">Artists</Link>
//     <Link to="/">Ink</Link>
//     <Link to="/">Cotton</Link>
// </header>
