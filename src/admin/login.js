import React, { Component } from "react";
import { withRouter } from "react-router-dom";
// import { Container, Flex, Box, Input, Button, Subhead, Text } from "rebass";
import firebase from "../firebase/firebase";

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: null
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        console.log(user);
        this.setState({
          authenticated: true
        });
        this.props.history.push("/dashboard");
      })
      .catch(error => {
        this.setState({ error: error });
      });
  };
  render() {
    const { email, password, error } = this.state;
    return (
      <div>
        {error ? (
          <div>
            <div>
              <div>{error.message}</div>
            </div>
          </div>
        ) : null}
        <div>
          <div>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                onChange={this.handleInputChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={this.handleInputChange}
              />
              <button children="Log In" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
