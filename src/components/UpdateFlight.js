import React, { Component } from "react";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";

export default class UpdateFlight extends Component {
  state = {
    id:this.props.location.state.id || '',
    flightNumber: this.props.location.state.flightNumber || '',
    origin: this.props.location.state.origin || '',
    destination: this.props.location.state.destination || '',
    flightDate:this.props.location.state.flightDate || '',
    isFlightFilled: false
  };

 
  handleid = event => {
    this.setState({ id: event.target.value });
  }


  handleflightNumber = event => {
    this.setState({ flightNumber: event.target.value });
  }

  handleorigin = event => {
    this.setState({ origin: event.target.value });
  }

  handledestination = event => {
    this.setState({ destination: event.target.value });
  }

  handleflightDate = event => {
    this.setState({ flightDate: event.target.value });
    console.log(event.target.value, 'event.target.value');

  }



  handleSubmit = event => {
    event.preventDefault();

    const UpdateFlight = {
      id: this.state.id,
      flightNumber: this.state.flightNumber,
      origin: this.state.origin,
      destination: this.state.destination,
      flightDate: this.state.flightDate,
    
    };

    axios
      .put(
        "http://localhost:9091/search/{id}" +
        this.props.match.params.id,
        UpdateFlight
      )
      .then(response => response)
      .catch(error => error.message);
      window.alert("Flight update successfully");
    this.setState({
      id:"",
        flightNumber: "",
        origin: "",
        destination: "",
        flightDate:"",
    
      isFlightFilled: true
    });
  };

  cancel(){
    this.props.history.push('/AllFlightadmin');
    }

  render() {
    if (this.state.isFlightFilled) {
      return <Redirect to="/AllFlightadmin" />;
    }
    console.log(this.props.adminId === "");
    if (this.props.adminId === "") {
      return <Redirect to="/update-flight" />;
    }

    return (
      <div className="bg">
          <div className="outer">
          <div className="inner">
            <form onSubmit={this.handleSubmit}>
                <h3>Update Flight</h3>

                <div className="form-group">
                    <label>Flight Id</label>
                    <input type="text" className="form-control" placeholder="Enter Flight id"  
                   onChange={this.handleid} value={this.state.id} required />
                </div>
                
                <div className="form-group">
                    <label>Flight Number</label>
                    <input type="text" className="form-control" placeholder="Enter Flight Number"  
                   onChange={this.handleflightNumber} value={this.state.flightNumber} required />
                </div>

                <div className="form-group">
                    <label>Origin</label>
                    <input type="text" className="form-control" placeholder="Enter Origin"  
                    onChange={this.handleorigin} value={this.state.origin} required />
                </div>

                <div className="form-group">
                    <label>Destination</label>
                    <input type="text" className="form-control" placeholder="Enter Destination"  
                    onChange={this.handledestination} value={this.state.destination} required />
                </div>

                <div className="form-group">
                    <label>Flight Date</label>
                    <input type="date" className="form-control"  
                    onChange={this.handleflightDate} value={this.state.flightDate} required />
                </div>

                

                <button className="btn btn-success">Update</button>
                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
            </form>
           
          </div>
          </div>
          </div>   
    );
  }
}