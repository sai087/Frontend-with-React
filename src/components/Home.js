import React, { Component } from "react";
import Footer from "./Footer";
import "../App.css";


export default class Home extends Component {
  render() {
    return (
      <div>
      <header>
      <div className = "head-text">
        <div className = "head-image">
         <img src = {require ('.././resources/flight1.jpg')}/>
        </div>
        <div className="style">
             <h1 className="size">Welcome To</h1>
             <h2 className="size">Flight Booking System</h2>
        </div> 
      </div>
    </header>
    <Footer/>
    </div>
    
    );
  }
}
