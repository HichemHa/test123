import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { userRegister } from "../JS/actions";
import { Link, useHistory,Redirect } from "react-router-dom";
import { Col, Container, Row } from 'react-bootstrap';
import './loginstyle.css'
const Register = () => {
  const user = useSelector((state) => state.userReducer.user);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();
  // const history = useHistory();
  const addUser = () => {
    dispatch(
      userRegister({
        name,
        email,
        phoneNumber,
        password,
      })
    );
    setName("");
    setEmail("");
    setPhoneNumber("");
    setPassword("");
    // history.push("/login");
  };
  
  return (
    <div style={{ height: '70vh',paddingTop:"20px", display:"flex",justifyContent:"space-around",width:"100%",textSizeAdjust:"auto",color:"white" }} className="loginimg" >
          <div className="col-md-3 offset-mt-3" style={{paddingLeft:"0px !important"}} >
            <h1 style={{ textAlign: 'center' }}>Register</h1>
            <div className="row mt-3" style={{paddingTop:"30px"}} >
              <input
                placeholder="name"
                type="text"
                name="name"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="row mt-3" style={{paddingTop:"30px"}}>

              <input
                placeholder="email"
                type="text"
                name="email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="row mt-3" style={{paddingTop:"30px"}}>

              <input
                placeholder="Phone Number"
                type="number"
                name="phoneNumber"
                className="form-control"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="row mt-3" style={{paddingTop:"30px"}}>

              <input
                placeholder="Your password"
                type="password"
                name="password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="row mt-3" style={{paddingTop:"30px"}}>
              <button type="submit" className="btn btn-primary"  onClick={addUser}>
                {" "}
              Register
            </button>
            </div>
            {user ? <Redirect to="/login" /> : null}
            
          </div>
        </div>
  );
};

export default Register;
