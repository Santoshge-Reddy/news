import React, { Component } from "react";
import { NavLink } from "react-router-dom";

// import LogOut from "../admin/logout";
import firebase from "../firebase/firebase";

class Navigation extends Component {
  constructor(Props) {
    super(Props);
    this.logout = this.logout.bind(this);
  }
  logout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.setState({
          authenticated: false
        });
      });
  }
  render() {
    return (
      <div>
        <div>
          <div>
            <NavLink to="/">Home</NavLink>
            {this.props.authenticated ? (
              <span>
                <NavLink to="/dashboard">Dashboard</NavLink>
                <a onClick={this.logout}>Logout</a>
              </span>
            ) : (
              <span>
                <NavLink to="/dashboard">Dashboard</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register">Register</NavLink>
              </span>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
