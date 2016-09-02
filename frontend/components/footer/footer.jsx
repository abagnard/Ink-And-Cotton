import React from 'react';
import { hashHistory } from 'react-router';
import { Link } from 'react-router';


class Footer extends React.Component {


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
    return (
      <div>
        <div className="header-group-img"></div>
        <footer className="footer group">
          <ul className="footer-link-list">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
          </ul>
          <p className="footer-header">© 2014 Ink & Cotton. All rights reserved.</p>
        </footer>
      </div>
    );
  }

}


export default Footer;