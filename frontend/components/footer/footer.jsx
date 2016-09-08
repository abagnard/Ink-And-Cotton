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
        <footer className="footer group">
          <ul className="footer-link-list">
            <li><Link to="/">home</Link></li>
            <li><Link to="/about">about</Link></li>
            <li><Link to="/contact-us">contact us</Link></li>
          </ul>
        </footer>
        <div>
          <p className="footer-header">© 2016 Ink & Cotton</p>
          <div className="footer-group-img"></div>
        </div>
      </div>
    );
  }

}


export default Footer;
