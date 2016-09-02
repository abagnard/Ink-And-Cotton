import React from 'react';
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

  showArtist(e) {
    e.stopPropagation();
    hashHistory.replace("/artists");
  }


  render() {
    const {currentUser, logout} = this.props;

    return (
      <div>
        <header className="header-group">
          <span className="header-logo">INK & COTTON</span>
        </header>
        <header className="header-group-sublinks">
          <span>Current User: {currentUser.username}</span>
          <button className="header-logout" onClick={(e) => this.logoutPreventDefault(e, logout)}>Log Out</button>
          <ul className="header-link-list">
            <li>
              <span onClick={this.showArtist}>Artists</span>
              <ul>
                <li><Link to="/alex-inc">ALEX INC</Link></li>
                <li><Link to="/colette-miller">Colette Miller</Link></li>
                <li><Link to="/maya-hayuk">Maya Hayuk</Link></li>
                <li><Link to="/royal">Royal</Link></li>
                <li><Link to="/wrdsmth">WRDSMTH</Link></li>
              </ul>
            </li>
            <li><Link to="/all">All</Link></li>
            <li><Link to="/inks">Inks</Link></li>
            <li><Link to="/cottons">Cottons</Link></li>
          </ul>
          <button className="cart">Cart<span className="badge">3</span></button>
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
