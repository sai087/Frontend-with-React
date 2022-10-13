import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Thankyou extends Component {
  constructor(props) {
    super(props)
    this.state = {
      response: {}
    }
    this.successful = this.successful.bind(this);
  }

  successful() {
    this.props.history.push('/AllFlightuser');
  }

  componentDidMount() {
    console.log(this.props.location.state, 'thankyou');
    const id = this.props.location.state.passengerId
    axios
      .get(
        `http://localhost:9093/passenger/${id}`,
      )
      .then(response => this.setState({ response: response.data }))
      .catch(error => error.message);
  }

  render() {
    return (
      <div>
        <div className="bg">
          <div style={{ textAlign: "center" }}>
            <br />
            <h4>Your Booking is successful</h4>
          </div>
          <br /><br /><br /><br /><br />
          <h5 style={{ textAlign: "center" }}>Your Booking Details</h5>
          <div className="thankyou">
            <table className="table table-bordered" style={{ marginLeft: 10, textAlign: "center", border: "1px solid black" }}>
              <tr style={{ textAlign: "center" }} key={this.state.response.id}>
                <th>Booking Number</th>
                <td>{this.state.response.id}</td>
              </tr>
              <tr>
                <th>First Name</th>
                <td>{this.state.response.firstName}</td>
              </tr>
              <tr>
                <th>Last Name</th>
                <td>{this.state.response.lastName}</td>
              </tr>
              <tr>
                <th>Gender</th>
                <td>{this.state.response.gender}</td>
              </tr>
              <tr>
                <th>No. of Tickets</th>
                <td>{this.state.response.nooftickets}</td>
              </tr>
            </table>
          </div>
          <div style={{ textAlign: "center" }}>
            <br /><br /><br />
            <h5>Thank You</h5>
            <br />
            <button onClick={() => this.successful()} style={{ backgroundColor: "goldenrod" }}>Home</button>
           
          </div>
        </div>
      </div>
    );
  }
}

export default Thankyou;