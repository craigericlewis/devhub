import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser } from './actions/authActions';
import Navbar from './components/layout/Navbar.js';
import Footer from './components/layout/Footer.js';
import Landing from './components/layout/Landing.js';
import Register from './components/auth/Register.js';
import Login from './components/auth/Login.js';
import { logoutUser } from './actions/authActions';
import Dashboard from './components/dashboard/Dashboard';
import './App.css';
import { clearCurrentProfile } from './actions/profileActions';

// Check for token
if (localStorage.jwtToken) {
	//Set auth token header auth
	setAuthToken(localStorage.jwtToken);

	const decoded = jwt_decode(localStorage.jwtToken);

	store.dispatch(setCurrentUser(decoded));

	//Check for expired token
	const currentTime = Date.now() / 1000;
	if (decoded.exp < currentTime) {
		//Logout
		store.dispatch(logoutUser());
		//
		store.dispatch(clearCurrentProfile());
		window.location.href = '/login';
	}
}

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<div className="App">
						<Navbar />

						<Route exact path="/" component={Landing} />
						<div className="container">
							<Route exact path="/register" component={Register} />
							<Route exact path="/login" component={Login} />
							<Route exact path="/dashboard" component={Dashboard} />
						</div>
						<Footer />
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
