import React, { Component } from "react";
import { NavLink } from "react-router-dom";

// import Logo from "./logo";
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
        <NavLink to="/">Home</NavLink>
        {this.props.authenticated ? (
          <span>
            {/* <NavLink to="/dashboard">Dashboard</NavLink> */}
            <a onClick={this.logout}>Logout</a>
          </span>
        ) : (
          <span>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </span>
        )}
      </div>
    );
  }
}

export default Navigation;
