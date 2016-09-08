import React from 'react';
import { hashHistory } from 'react-router';
import { Link } from 'react-router';


class ContactUs extends React.Component {



  render() {
    return (
      <div className="showpage-container">
        <div className="showpage-header">
          <p className="new-products-title">Contact Us</p>
          <p><a href="javascript: history.go(-1)">Go Back</a></p>
        </div>
        <div className="contact-info">
          <div>Alexa Bagnard</div>
          <div className="links"><a href="mailto:abagnard@gmail.com">abagnard@gmail.com</a></div>
          <div className="links"><a href="https://github.com/abagnard">GitHub Page</a></div>
        </div>
      </div>
    );
  }

}


export default ContactUs;
