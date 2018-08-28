<<<<<<< HEAD
import React, { Component } from "react";
=======
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
>>>>>>> c83d58a173eef2ed74a5c93f3cf42c6404d7f74b

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Developer Connector</h1>
                <p className="lead">
<<<<<<< HEAD
                  {" "}
=======
                  {' '}
>>>>>>> c83d58a173eef2ed74a5c93f3cf42c6404d7f74b
                  Create a developer profile/portfolio, share posts and get help
                  from other developers
                </p>
                <hr />
<<<<<<< HEAD
                <a href="register.html" className="btn btn-lg btn-info mr-2">
                  Sign Up
                </a>
                <a href="login.html" className="btn btn-lg btn-light">
                  Login
                </a>
=======
                <Link to="/register" className="btn btn-lg btn-info mr-2">
                  Sign Up
                </Link>
                <Link to="/login" className="btn btn-lg btn-light">
                  Login
                </Link>
>>>>>>> c83d58a173eef2ed74a5c93f3cf42c6404d7f74b
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
