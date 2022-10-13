import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";




const BookingConfirmation = () => {
    // const loc=useLocation();
    // const {test}=loc.state;
    // const id = this.props.location.state.passengerId
    const [data, Setdata] = useState({});
    const [searchVal, setSearchVal] = useState('');

    

    const getData = (id) => {
        axios
            .get(
                `http://localhost:9093/passenger/${id}`,
            )
            .then((response) => {
                const myData = response.data
                Setdata(myData)
            })

    }
   

    const onchangeHandler = e => {
        const id = e.target.value
        if (id == '') {
            setSearchVal(id)

        } else {
            getData(id)
            setSearchVal(id)

        }

    }
    

    return (
        <div className="bg">
            <br /><br /><br /><br />
            <div className="form-group" style={{ textAlign: "center" }}>
                <label><b>Booking Number:-</b></label>
                <input
                    onChange={onchangeHandler}
                    placeholder="Enter Booking Number"
                    value={searchVal}
                />
            </div>
            <br /><br /><br />
            {
                data && (


                    <div className="thankyou">
                        <table className="table table-bordered"
                            style={{ marginLeft: 10, textAlign: "center", border: "1px solid black" }}>
                            <tr style={{ textAlign: "center" }} >
                                <th>Booking Number</th>
                                <td>{data.id}</td>
                            </tr>
                            <tr>
                                <th>First Name</th>
                                <td>{data.firstName}</td>
                            </tr>
                            <tr>
                                <th>Last Name</th>
                                <td>{data.lastName}</td>
                            </tr>
                            <tr>
                                <th>Gender</th>
                                <td>{data.gender}</td>
                            </tr>
                            <tr>
                                <th>No. of Tickets</th>
                                <td>{data.nooftickets}</td>
                            </tr>
                        </table>
                    </div>
                )
            }
            <br/><br/><br/><br/><br/><br/><br/>
            
        </div>
    )
}

export default BookingConfirmation
