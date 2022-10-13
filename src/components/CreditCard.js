import React, { Component } from "react";
import axios from "axios";
import { Redirect} from "react-router-dom";

import { TOTAL } from "./PaymentMethod";
export default class CreditCard extends Component {
  state = {
    id: "",
    name: "",
    cardNo: "",
    cvv:"",
    total:"",
    isPaymentCreated: false
  };
  componentDidMount() {
    console.log(this.props.location.state, 'dbdkjbsdjkb');
    this.setState({
      total: sessionStorage.getItem(TOTAL)
    });
  }

  handleid = event => {
      this.setState({ id: event.target.value });
  }


  handlename = event => {
    this.setState({ name: event.target.value });
  }

  handlecardNo = event => {
    this.setState({ cardNo: event.target.value });
  }

  handlecvv = event => {
    this.setState({ cvv: event.target.value });
  }

  handletotal = event => {
    this.setState({ total: event.target.value });
  }



  handleSubmit = event => {
    event.preventDefault();

    const Payment = {
      id: this.state.id,
      name: this.state.name,
      cardNo: this.state.cardNo,
      cvv: this.state.cvv,
      total: this.state.totalAmount,
      passengerId: this.props.location.state.passengerID
    };

    axios
      .post(
        "http://localhost:9095/payment/pay",
        Payment
      )
      .then(response => {
        window.alert("Payment successfull");
        this.setState({
            id: "",
            name: "",
            cardNo: "",
            cvv: "",
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
          <h3>Pay Using Debit/Credit Card</h3>
              
              <br/>
              <h3>Your Bill: {this.state.total}</h3>
              <br/>
            <form onSubmit={this.handleSubmit}>

                <div className="form-group">
                    <label>Name on Card</label>
                    <input type="text" className="form-control" placeholder="Enter Name"  
                   onChange={this.handlename} required />
                </div>

                <div className="form-group">
                    <label>Card Number</label>
                    <input type="text" className="form-control" placeholder="Enter Card Number"  
                    onChange={this.handlecardNo} required />
                </div>

                <div className="form-group">
                    <label>CVV Number</label>
                    <input type="password" className="form-control" placeholder="Enter cvv Number"  
                    onChange={this.handlecvv} required />
                </div>

                <div className="form-group">
                    <label>Amount</label>
                      <input type="text"
                        className="form-control"
                        name="amount"
                        value={this.state.total}
                        readOnly/>
                </div>

                

                <button className="btn btn-success">Proceed</button>
                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
            </form>
           
          </div>
          </div>
          </div>   
    );
  }
}