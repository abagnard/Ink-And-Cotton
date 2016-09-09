import React from 'react';
import { hashHistory } from 'react-router';
import { Link } from 'react-router';


class About extends React.Component {



  render() {
    return (
      <div className="showpage-container">
        <div className="showpage-header">
          <p className="new-products-title">Welcome To Ink & Cotton</p>
          <p><a href="javascript: history.go(-1)">Go Back</a></p>
        </div>
        <div className="about-info">
          <p>Ink & Cotton is run by a group of art aficionados and collectors
            who believe that unique art piecies do not always have to cost a
            fortune.</p>
          <p>We feature the works of artists on limited edition prints
            (ink) and clothing (cotton). Each collection is a true collaboration
            with the artist – from selecting the artwork, sampling the merchandise and
            to sharing the resulting revenue.</p>
          <p>To make us even cooler, many of our artists have selected
            beneficiary nonprofits to donate a percentage of sales, as
            well as to facilitate art education programs.</p>
          <p className="last-line-about">So why wait to get apart of the action?</p>
          <Link className="about-link" to="/">let&#39;s go shopping!</Link>
        </div>
      </div>
    );
  }
}


export default About;
