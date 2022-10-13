import React, { Component } from "react";
import visalogo from "../resources/visalogo.png";
import masterlogo from "../resources/masterlogo.png";
import { FIRSTNAME, LASTNAME, GENDER, NOOFTICKETS, PASSENGER_ID } from "./PassengerDetails";
import axios from "axios";


export const TOTAL = "TOTAL";

class PaymentMethod extends Component {
  constructor(props) {
    super(props);
    this.state = {
      method: "",
   
      firstName: "",
      lastName: "",
      gender: "",
      nooftickets: "",
      total: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    //setting the state value to session storage value
    this.setState({
      firstName: sessionStorage.getItem(FIRSTNAME),
      lastName: sessionStorage.getItem(LASTNAME),
      gender: sessionStorage.getItem(GENDER),
      nooftickets: sessionStorage.getItem(NOOFTICKETS),
      total: sessionStorage.getItem(NOOFTICKETS) * 2000,
      passengerID : sessionStorage.getItem(PASSENGER_ID)
    });



    // this.setState({ firstName: sessionStorage.getItem(FIRSTNAME) });
    // this.setState({ lastName: sessionStorage.getItem(LASTNAME) });
    // this.setState({ gender: sessionStorage.getItem(GENDER) });
    // this.setState({ nooftickets: sessionStorage.getItem(NOOFTICKETS) });
    // this.setState({ total: sessionStorage.getItem(NOOFTICKETS) * 2000 });
    // this.setState({ passengerID : sessionStorage.getItem(PASSENGER_ID)});
    // this.setState({
    //   total:
    //     sessionStorage.getItem(NOOFTICKETS) * 2000 
    // });
  }

  handleChange(e) {
    this.setState({
      method: e.target.value
    });

    let total = this.state.total;
    sessionStorage.setItem(TOTAL, total);
  }
  handleSubmit(e) {
    e.preventDefault();
    let method = this.state.method;

    if (method === "creditcard") {
      this.props.history.push(`/credit-card`, this.state);
    } else if (method === "mobile") {
      this.props.history.push(`/paytm-payment`, this.state);
    }
    //axios.post("http://localhost:9093/passenger/",)
    // if(this.componentDidMount()){
    //   axios.post("http://localhost:9093/passenger/",{
    //     "method": "POST",
    //     "headers": {
    //       "content-type": "application/json",
    //       "accept": "application/json",
    //       "Access-Control-Allow-Origin": "*"
          
    //     },
    //     "body": JSON.stringify({
    //       firstName: this.state.firstName,
    //       lastName: this.state.lastName,
    //       gender: this.state.gender,
    //       nooftickets: this.state.nooftickets,
    //     })
    //   })
    //   .then(response => response.json())
    //   .then(response => {
    //    alert("Your ticket is not booked")
    //   })
    //   .catch(err => {
    //     alert("Your ticket is successfully booked")
    //   });
    // }

  }
  

  render() {
    return (
        <div className="bg">
          <div className="outer">
          <div className="inner">
            <form onSubmit={this.handleSubmit}>
                <h3>Your Details</h3>

                <div className="form-group">
                    <label>First Name</label>
                    <input type="text"
                    className="form-control"
                      value={this.state.firstName}
                      readOnly/>
                </div>

                <div className="form-group">
                    <label>Last Name</label>
                    <input 
                      type="text"
                      className="form-control"
                      value={this.state.lastName}
                      readOnly/>
                </div>

                <div className="form-group">
                    <label>Gender</label>
                    <input type="text"
                    className="form-control"
                      value={this.state.gender}
                      readOnly/>
                </div>

                <div className="form-group">
                    <label>No. Of Ticket</label>
                    <input type="text"
                    className="form-control"
                      value={this.state.nooftickets}
                      readOnly/>
                </div>

                <div className="form-group">
                    <label>Your Total Bill</label>
                    <input type="text"
                    className="form-control"
                    value={this.state.total}
                    readOnly/>
                </div>
                </form>
                <br/> <br/>
                <h3>Select Payment Method</h3>
                <form  onSubmit={this.handleSubmit} >

                <div className="custom-control custom-radio">
                <input
                      type="radio"
                      className="custom-control-input"
                      id="creditcard"
                      name="method"
                      value="creditcard"
                      onChange={this.handleChange}
                    />
                    <label className="custom-control-label" for="creditcard">
                      Credit Card/Debit Card
                      <div>
                        <img src={visalogo} width="50" height="20" alt="" />
                        <img src={masterlogo} width="50" height="22" alt="" />
                      </div>
                    </label>
                </div>

                <div className="custom-radio">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="mobilenum"
                      name="method"
                      value="mobile"
                      onChange={this.handleChange}
                    />
                    <label className="custom-control-label" for="mobilenum">
                      Mobile Number (Paytm)
                    </label>
                  </div>
                  <button className="btn btn-success">Next</button>
                </form>
          </div>
          </div>
          </div>   
    );
  }
}

export default PaymentMethod;