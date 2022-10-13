import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

//importing the components

import Home from "./Home";

import SignUp from "./SignUp";
import Login from "./Login";
import Admin from "./Admin";
import AllFlight from "./AllFlight";
import AddFlight from "./AddFlight";
import DeleteFlight from "./DeleteFlight";
import BookTicket from "./BookTicket";
import UpdateFlight from "./UpdateFlight";
import AllFlightAdmin from "./AllFlightAdmin";
import AllFlightUser from "./AllFlightUser";
import PassengerDetails from "./PassengerDetails";
import PaymentMethod from "./PaymentMethod";
import Paytm from "./Paytm";
import CreditCard from "./CreditCard";
import Thankyou from "./Thankyou";
import BookingConfirmation from "./BookingConfirmation";


function Main() {
  return (
    
    <Router>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{paddingLeft:40}}>
        
       <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item" style={{ color: "goldenrod", marginLeft:20,letterSpacing:1 }}>
              <b>Flight Booking System</b>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link" style={{ color: "white" }}>
                Home
              </Link>
            </li>
          </ul>
        </div>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link
                to="/AllFlight"
                className="nav-link"
                style={{ color: "white"}}
              >
                All Flight
              </Link>
            </li>
          </ul>
        </div>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link
                to="/booking-confirmation"
                className="nav-link"
                style={{ color: "white"}}
              >
                Booking Confirmation
              </Link>
            </li>
          </ul>
        </div>
      
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link
                to="/signUp"
                className="nav-link"
                style={{ color: "white", marginLeft:400}}
              >
                SignUp
              </Link>
            </li>
          </ul>
        </div> 
      </nav>
      

      {/* Switching between components */}
      <Switch>
        
        <Route path="/" exact component={Home}/>
        <Route path="/signUp"  component={SignUp} />
        <Route path="/login"  component={Login} />
        <Route path="/admin"  component={Admin}/>
        <Route path="/AllFlight"  component={AllFlight} />
        <Route path="/add-flight"  component={AddFlight}/>
        <Route path="/DeleteFlight"  component={DeleteFlight}/>
        <Route path="/Book-Ticket"  component={BookTicket}/>
        <Route path="/update-flight"  component={UpdateFlight}/>
        <Route path="/AllFlightadmin"  component={AllFlightAdmin}/>
        <Route path="/AllFlightuser"  component={AllFlightUser}/>
        <Route path="/Passenger-Detail"  component={PassengerDetails}/>
        <Route path="/Payment"  component={PaymentMethod}/>
        <Route path="/paytm-payment"  component={Paytm}/>
        <Route path="/credit-card"  component={CreditCard}/>
        <Route path="/thankyou"  component={Thankyou}/>
        <Route path="/booking-confirmation" component={BookingConfirmation}/>

        
       
      </Switch>
      
    
    </Router>
    
    
  );
}

export default Main;
