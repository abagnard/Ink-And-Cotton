import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting_container';

export const App = ({children}) => (
  <div>
    <header>
      <Link to="/" className="header-logo"><h1>Ink & Cotton</h1></Link>
    </header>
    {children}
  </div>
);
