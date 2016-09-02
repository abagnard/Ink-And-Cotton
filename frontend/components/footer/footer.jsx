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
        <footer class="footer group">
          <ul class="footer-link-list">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
          <p class="footer-header">© 2014 Ink & Cotton. All rights reserved.</p>
        </footer>
      </div>
    );
  }

}


export default Footer;
