import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Label, Button } from "reactstrap";




import { useHistory } from "react-router-dom";

const Login = () => {
  var auth = JSON.stringify(localStorage.getItem("auth"));

  const history = useHistory();

 

  const [input, setInput] = useState({
    username: "",
    password: "",
    role: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setInput((previousvalue) => {
      console.log(previousvalue.data);
      return {
        ...previousvalue,
        [name]: value,
      };
    });
  };
  const showdata = async (event) => {
    event.preventDefault();

    try {
      //   axios
      //     .post("http://localhost:8682/auth", {
      //       username: input.username,
      //       password: input.password,
      //       role: input.role,
      //     })
      const { data } = await axios.post("http://localhost:8682/auth", {
        username: input.username,
        password: input.password,
        
      });
      console.log(data.response);
      localStorage.setItem("jwt", JSON.stringify(data.response));
      localStorage.setItem("username",input.username)
      if (data.response ){
          const{data} = await axios.get("http://localhost:8682/"+input.username)
        localStorage.setItem('role',data)
        history.push("/AllFlightuser");
       // if(data ==='USER'){

       
       // if (data==='ADMIN') {
        //  history("/AllFlightadmin")
          
       // }

      } 
      else{
        alert("Invalid Credentials Please Check your Username and Password")
      }
      // .then(
      //   (response) => {
      //     console.log(response);

      //     localStorage.setItem("jwt", JSON.stringify(response.data.response));
      //     localStorage.setItem("role", JSON.stringify(response.data.role));

      //     console.log(JSON.stringify(localStorage.getItem("jwt")));

      //     if (input.role === "farmer") {
      //       console.log(input.role);

      //       nav("/");
      //     }
      //   },
      //   (error) => {
      //     alert("Fail");
      //     console.log(error);
      //   }
      // );
    } catch (error) {
      console.log("error is", error);
    }
  };

  return (
    <>
        <div className="bg">
          <div className="outer">
            <div className="inner">
            <form>
            
                <h3>Log in</h3>
                <div className="form-group">
                
                <label>UserName</label>
                  <input
                  name="username"
                  type="text"
                  className="form-control"
                  placeholder="Enter username"
                  onChange={inputEvent}
                  value={input.username}
                  />
                </div>
                
                <div className="form-group">
                
                <label>Password</label>
                  <input
                  name="password"
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={inputEvent}
                  value={input.password}
                  />
                </div>
                
                <button className="btn btn-dark btn-block" outline onClick={showdata}>
                  Login
                </button>

                <p>Don't have a account?<Link to="/signUp"> Register Here</Link></p>
            
            </form>
            </div>
          </div>
        </div>
    </>
  );
};

export default Login;
