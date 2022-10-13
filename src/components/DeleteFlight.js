import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class DeleteFlight extends Component {
  state = {
    alertMessage: String
  };

  componentDidMount() {
    axios
      .post(
        "http://localhost:9091/search/{id}" +
          this.props.match.params.id
      )
      .then(response => {
        this.setState({
          alertMessage: "Flight Deleted Successfully"
        });
      })
      .catch(error => console.log(error.message));
  }

  render() {
    return (
      <div>
        <div className="alert alert-success" role="alert">
          <h4 className="alert-heading">Well done!</h4>
          <h1>{this.state.alertMessage}</h1>
          <hr />
          <h3 className="mb-0">
            <Link to={"/AllFlight"}> Go Back To Your Flight List.</Link>
          </h3>
        </div>
      </div>
    );
  }
}