import React from 'react';
import { hashHistory } from 'react-router';
import { Link } from 'react-router';


export class ThankYou extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    hashHistory.replace("/checkout");
  }


  render() {
    return (
      <div className="checkout-form">
        <form onSubmit={this.handleSubmit}>
          <div className="review-label-form">
            <label>First</label>
            <label>Last</label>
            <label>Address</label>
            <label>City</label>
            <label>State</label>
            <label>ZipCode</label>
            <label>ZipCode</label>
            <label>ZipCode</label>

          </div>
          <div className="reivew-form-content" >
            <input type="text" value={this.state.title} onChange={this.update("title")}/>
            <input type="number" value={this.state.rating} onChange={this.update("rating")}/>
            <textarea value={this.state.comment} onChange={this.update("comment")}/>
            <div className="review-form-buttons">
              <button className="submit-button" onClick={this.handleSubmit}>Complete Order</button>
            </div>
          </div>
        </form>

      </div>
    );
 }
}
