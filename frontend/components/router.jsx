import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { App } from './app';


export const AppRouter = () => (
  <Router history={ hashHistory }>
    <Route path="/" component={ App } />
  </Router>
);
