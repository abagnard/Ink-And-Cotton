import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { App } from './app';
import SessionFormContainer from './session_form/session_form_container';


export const AppRouter = () => (
  <Router history={ hashHistory }>
    <Route path="/" component={ App } />
      <Route path="/login" component={ SessionFormContainer } />
      <Route path="/signup" component={ SessionFormContainer } />
  </Router>
);
