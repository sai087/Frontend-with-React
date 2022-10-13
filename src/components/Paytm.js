import React, { Component } from "react";
import axios from "axios";
import paytmlogo from "../resources/paytm.png";
import { Redirect} from "react-router-dom";

import { TOTAL } from "./PaymentMethod";
export default class Paytm extends Component {
  state = {
    id: "",
    mobileNo: "",
    pin: "",
    total:"",
    isPaymentCreated: false
  };
  componentDidMount() {
    this.setState({
      total: sessionStorage.getItem(TOTAL)
    });
  }

  handleid = event => {
      this.setState({ id: event.target.value });
  }


  handlemobileNo = event => {
    this.setState({ mobileNo: event.target.value });
  }

  handlepin = event => {
    this.setState({ pin: event.target.value });
  }

  handletotal = event => {
    this.setState({ total: event.target.value });
  }



  handleSubmit = event => {
    event.preventDefault();

    const Payment = {
      id: this.state.id,
      mobileNo: this.state.mobileNo,
      pin: this.state.pin,
      total: this.state.total,
      passengerId: this.props.location.state.passengerID
    
    };

    axios
      .post(
        "http://localhost:9095/paytm/pay",
        Payment
      )
      .then(response => {
        window.alert("Payment successfull");
    this.setState({
        id: "",
        mobileNo: "",
        pin: "",
        total:"",
    
      isPaymentCreated: true
    });
    this.props.history.push('/thankyou', response.data)
  })
      .catch(error => error.message);

    
  };

  cancel(){
    this.props.history.push('/payment');
    }

  render() {
    // if (this.state.isPaymentCreated) {
    //   return <Redirect to="/thankyou" />;
    // }
    console.log(this.props.adminId === "");
    if (this.props.adminId === "") {
      return <Redirect to="/admin" />;
    }

    return (
      <div className="bg">
          <div className="outer">
          <div className="inner">
          <h3>Paytm Payment Gateway</h3>
          <div className="logo">
                <img src={paytmlogo} width="450" height="180" alt="" />
              </div>
              <br/>
              <h3>Your Bill: {this.state.total}</h3>
              <br/>
                  <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Mobile no.</label>
                    <input type="text" className="form-control" placeholder="Enter Mobile Number"
                    onChange={this.handlemobileNo} required />
                </div> 

                <div className="form-group">
                  <label>Four Digit Pin no.</label>
                  <input  type="password" className="form-control" placeholder="Four Digit PIN Number"
                    onChange={this.handlepin} required />
                </div>

                <div className="form-group">
                  <label>Amount</label>
                  <input type="text" className="form-control"
                    value={this.state.total}
                    readOnly/>
                </div>

                <button className="btn btn-success">Proceed</button>
              </form>
        </div>
        </div>
        </div> 
    );
  }
}
