import React, { Component } from "react";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";

export default class AddFlight extends Component {
  state = {
    
    flightNumber: this.props.location.state.flightNumber || '',
    origin: this.props.location.state.origin || '',
    destination: this.props.location.state.destination || '',
    flightDate:this.props.location.state.flightDate || '',
    bookingDate:"",
    isFlightFilled: false
  };

 
  

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

  }

  handlebookingDate = event => {
    this.setState({ bookingDate: event.target.value });
  }



  handleSubmit = event => {
    event.preventDefault();

    const BookFlight = {
     
      flightNumber: this.state.flightNumber,
      origin: this.state.origin,
      destination: this.state.destination,
      flightDate: this.state.flightDate,
      bookingDate: this.state.bookingDate,
    
    };

    axios
      .post(
        "http://localhost:9092/booking/",
        BookFlight
      )
      .then(response => response)
      .catch(error => error.message);
    this.setState({
     
        flightNumber: "",
        origin: "",
        destination: "",
        flightDate:"",
        bookingDate:"",
    
      isFlightFilled: true
    });
  };

  cancel(){
    this.props.history.push('/AllFlight');
    }

  render() {
    if (this.state.isFlightFilled) {
      return <Redirect to="/Passenger-Detail" />;
    }
    console.log(this.props.adminId === "");
    if (this.props.adminId === "") {
      return <Redirect to="/Book-Ticket" />;
    }

    return (
      <div className="bg">
          <div className="outer">
          <div className="inner">
            <form onSubmit={this.handleSubmit}>
                <h3>Book Ticket</h3>

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

                <div className="form-group">
                    <label>Booking Date</label>
                    <input type="date" className="form-control"  
                    onChange={this.handlebookingDate} required />
                </div>

                

                <button className="btn btn-success">Next</button>
                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
            </form>
           
          </div>
          </div>
          </div>   
    );
  }
}