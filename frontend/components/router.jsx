import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { App } from './app';
import { fetchSingleProduct } from '../actions/product_actions';
import SessionFormContainer from './session_form/session_form_container';
import GreetingContainer from './greeting/greeting_container';
import HomeContainer from './home/home_form_container';
import ProductIndexContainer from './product/product_index_container';
import ProductDetailContainer from './product/product_detail_container';




class AppRouter extends React.Component{
  constructor(props){
    super(props);
    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
  }

  _ensureLoggedIn(nextState, replace){
    const currentUser = this.context.store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  }

  _redirectIfLoggedIn(nextState, replace){
    const currentUser = this.context.store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  }

  // _requestSingleProductOnEnter(nextState){
  //   state.dispatch(fetchSingleProduct(nextState.params.product));
  // }


  render(){

    return(
      <Router history={ hashHistory }>
        <Route path="/" component={ App } >
          <Route path="/login" component={ SessionFormContainer } onEnter={this._redirectIfLoggedIn}/>
          <Route path="/signup" component={ SessionFormContainer } onEnter={this._redirectIfLoggedIn}/>
          <Route component={ HomeContainer } onEnter={this._ensureLoggedIn}>
            <IndexRoute component={ ProductIndexContainer } />
            <Route path="/products/:id" component={ ProductDetailContainer }/>
          </Route>
        </Route>
      </Router>

    );
  }
}

AppRouter.contextTypes = {
  store: React.PropTypes.object.isRequired
};

export default AppRouter;
