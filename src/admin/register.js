import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import firebase from "../firebase/firebase";
// import { Pop5 } from "../pops/pop";
class Register extends Component {
  constructor(Props) {
    super(Props);
    this.state = {
      email: "",
      password: "",
      error: null
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(authenticated => {
      authenticated
        ? this.setState(() => ({
            authenticated: true
          }))
        : this.setState(() => ({
            authenticated: false
          }));

      if (authenticated) {
        this.props.history.push("/dashboard");
      }
    });
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, password, confirm_password } = this.state;
    console.log(email, password, confirm_password);
    if (email && password && confirm_password === password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          this.props.history.push("/dashboard");
        })
        .catch(error => {
          this.setState({ error: error });
        });
    } else if (confirm_password !== password) {
      var error = {};
      error.message = "Password miss matched";
      this.setState({ error: error });
    }
  };

  render() {
    const { email, password, confirm_password, error } = this.state;
    return (
      <div>
        <div className="card-box col-md-4" />
        <div className="card-box col-md-4 col-sm-6">
          <div
            className="card card-with-border"
            data-background="color"
            data-color="azure"
          >
            <div className="header">
              <div className="icon">
                <h4 className="title title-modern">Register</h4>
              </div>
              <div className="social-line social-line-visible" data-buttons="4">
                <button className="btn btn-social btn-facebook">
                  <i className="fa fa-facebook" />
                </button>
                <button className="btn btn-social btn-twitter">
                  <i className="fa fa-twitter" />
                </button>
                <button className="btn btn-social btn-pinterest">
                  <i className="fa fa-pinterest" />
                </button>
                <button className="btn btn-social btn-google">
                  <i className="fa fa-google-plus" />
                </button>
              </div>
            </div>
            <div className="content text-center">
              <p className="description">
                {error ? <div>{error.message}</div> : null}
              </p>
              <p className="description">
                <input
                  type="text"
                  id="input-name"
                  placeholder="Email"
                  name="email"
                  value={email}
                  required
                  onChange={this.handleInputChange}
                />
              </p>
              <p className="description">
                <input
                  type="password"
                  id="input-password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  required
                  onChange={this.handleInputChange}
                />
              </p>
              <p className="description">
                <input
                  type="password"
                  id="input-password"
                  placeholder="Repeat Password"
                  name="confirm_password"
                  value={confirm_password}
                  required
                  onChange={this.handleInputChange}
                />
              </p>
            </div>
            <div className="footer text-center">
              <button
                className="btn btn-danger btn-round btn-fill"
                onClick={this.handleSubmit}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Register);
