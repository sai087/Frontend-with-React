import React, {Component} from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import allflightService from ".././services/allflightService";
import "../App.css";

class AllFlightUser extends Component{
    constructor(props){
        super(props)
        this.state={
            searches: [],
            searchValue:''
        }
        this.BookTicket=this.BookTicket.bind(this);
        this.searchFlight=this.searchFlight.bind(this);
        this.fetchFlights=this.fetchFlights.bind(this);
    }

    componentDidMount(){
        this.fetchFlights()
    }

    fetchFlights() {
        allflightService.getSearches().then((res)=>{
            this.setState({searches: res.data});
        });
    }

    BookTicket(data){
        this.props.history.push('/Book-Ticket', data);
    }

    searchFlight(e) {
        const value = e.target.value
        const _value = value.toUpperCase()
        const filterData = this.state.searches.filter(item => {
            let res
            for (const key in item) {
                const convertInString = `${item[key]}`.toUpperCase()
                if (convertInString.includes(_value)) {
                    res = true
                }
            }
            return res
        })

        if (value != '') {
            this.setState({
                searchValue: value,
                searches: filterData
            })
        }
        else {
            this.setState({
                searchValue: value,
            })
            this.fetchFlights()
        }
    }

   

    render(){
        return(
            <div className="allflight">
                <h2 className="text-center">All Flights</h2>
                <br/><br/>
                <input onChange={this.searchFlight} value={this.state.searchValue}/>
                <div className="row">
                    <table className="table table-striped table-bordered"  style={{marginLeft:10}}>
                        <thead>
                            <tr style={{textAlign:"center"}}>
                                <th>Flight Id</th>
                                <th>Flight Number</th>
                                <th>Origin</th>
                                <th>Destination</th>
                                <th>Flight Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.searches.map(
                                    search=>
                                    <tr style={{textAlign:"center"}} key={search.id}>
                                        <td>{search.id}</td>
                                        <td>{search.flightNumber}</td>
                                        <td>{search.origin}</td>
                                        <td>{search.destination}</td>
                                        <td>{search.flightDate}</td>
                                        <td>
                                        <button  className="btn btn-info" style={{backgroundColor:"goldenrod"}} onClick={()=>this.BookTicket(search)}>Book </button>
                                        </td>
                                        
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>  
            </div>
        )
    }
}

export default AllFlightUser;
