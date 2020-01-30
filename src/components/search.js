import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Search extends Component {
  constructor(Props) {
    super(Props);
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {}
  handleChange(e) {
    this.setState({ q: e.target.value });
  }
  render() {
    return (
      <div className="wrapper">
        <form onSubmit={this.searcheverything}>
          <div className="row" id="search">
            <div className="col-md-4 col-sm-4" />
            <div className="col-md-4 col-sm-4">
              <div className="input-group">
                <input
                  type="text"
                  id="search-field"
                  className="form-control"
                  placeholder="Search for..."
                  onChange={this.handleChange}
                />
                <span className="input-group-btn">
                  <button className="btn btn-btn btn-default" type="button">
                    Go!
                  </button>
                </span>
              </div>
            </div>
            <div className="col-md-4 col-sm-4" />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Search);
