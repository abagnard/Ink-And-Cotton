import React from 'react';
import { Link, hashHistory } from 'react-router';

class SessionForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			username: "",
			password: "",
			guestLogin: {
				username: "guest",
				password: "password"
			}
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleGuestSubmit = this.handleGuestSubmit.bind(this);
	}

	componentDidUpdate(){
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn(){
		if (this.props.loggedIn){
			hashHistory.push("/");
		}
	}

	update(field){
		return e => { this.setState({[field]: e.currentTarget.value }); };
	}

	handleSubmit(e){
		e.preventDefault();
		const user = this.state;
		this.props.processForm({user});
	}

	handleGuestSubmit(e){
		e.preventDefault();
		this.props.login({user: this.state.guestLogin});
	}


	renderErrors(){
		return(
			<ul>
				{this.props.errors.map( (error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	clearErrors(){
		return(
			this.props.errors = []
		);
	}


	navLink(login, signup){
		if (this.props.formType === "login") {
			return (
				<div className="other-login-option">
					<input type="submit" value="Sign In" />
					<br />
					{this.renderErrors()}
					<br />
					New to Paper & Cotton?
					<Link to="/signup">Create Account</Link>
					<br />
					Sign in as guest:
					<button type="button" className="guest-button" onClick={this.handleGuestSubmit}>
						Guest
					</button>
				</div>
			);
		} else {
			return (
				<div className="other-login-option">
					<input type="submit" value="Create Account" />
					<br />
					{this.renderErrors()}
					<br />
					Already have an account?
					<Link to="/login">Sign In</Link>
					<br />
					Sign in as guest:
					<button type="button" className="guest-button" onClick={this.handleGuestSubmit}>
						Guest
					</button>
				</div>
			);
		}
	}


	render() {
		return (
			<div className="login-background">
				<div className="login-form-container">
					<form onSubmit={this.handleSubmit} className="login-form-box">
						<span className="header-logo">INK & COTTON</span>
						<br/>
						<div className="login-form">
							<br />
							<label><span>Username:</span>
								<input type="text"
									value={this.state.username}
									onChange={this.update("username")}
									className="login-input"/>
							</label>

							<br />
							<label><span>Password:</span>
								<input type="password"
									value={this.state.password}
									onChange={this.update("password")}
									className="login-input" />
							</label>
						</div>
							{this.navLink()}
					</form>
				</div>
			</div>
		);
	}

}

export default SessionForm;
