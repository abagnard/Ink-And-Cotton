import React from 'react';
import { Link } from 'react-router';

const logoutPreventDefault = (e, callback) => {
  e.preventDefault();
  callback();
};

const Greeting = ({currentUser, logout}) => (
	<header className="header-group">
		<h2 className="header-name">Hi, {currentUser.username}!</h2>
		<button className="header-logout" onClick={(e) => logoutPreventDefault(e, logout)}>Log Out</button>
	</header>
);

export default Greeting;
