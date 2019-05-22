import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles.css";

import App from "./App";
import Navigation from "./includes/navigation";
import Login from "./admin/login";
import Register from "./admin/register";
import Admin from "./admin/admin";
import Dashboard from "./admin/dashboard";
import Logout from "./admin/logout";
import NotFound from "./admin/notFound";

import ProtectedRoute from "./admin/protectedRoute";
import firebase from "./firebase/firebase";
// import * as serviceWorker from "./serviceWorker";

class Index extends Component {
  constructor(Props) {
    super(Props);
    this.state = {
      authenticated: false
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(authenticated => {
      console.log(this.state);
      authenticated
        ? this.setState(() => ({
            authenticated: true
          }))
        : this.setState(() => ({
            authenticated: false
          }));
      console.log(this.state);
    });

    // var user = firebase.auth().currentUser;
    // if (user) {
    //   // User is signed in.
    // } else {
    //   // No user is signed in.
    // }
  }
  render() {
    return (
      <Router>
        <Navigation authenticated={this.state.authenticated} />
        <Switch>
          <Route exact path="/" component={App} />
          <Route
            authenticated={this.state.authenticated}
            path="/login"
            component={Login}
          />
          <Route path="/register" component={Register} />
          <Route path="/logout" component={Logout} />
          <ProtectedRoute
            authenticated={this.state.authenticated}
            path="/admin"
            component={Admin}
          />
          <ProtectedRoute
            authenticated={this.state.authenticated}
            path="/dashboard"
            component={Dashboard}
          />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);
