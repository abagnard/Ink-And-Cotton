import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login" activeClassName="current">Login</Link>
    <Link to="/signup" activeClassName="current">Sign Up</Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
	<header className="header-group">
		<h2 className="header-name">Hi, {currentUser.username}!</h2>
		<button className="header-logout" onClick={logout}>Log Out</button>
	</header>
);

function Greeting({currentUser, logout}){
  if (currentUser){
    return personalGreeting(currentUser, logout);
  } else {
    return sessionLinks();
  }
}

export default Greeting;
