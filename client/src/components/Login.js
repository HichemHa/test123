import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { userLogin } from "../JS/actions";
import { Col, Container, Row } from 'react-bootstrap';
import './loginstyle.css'
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loading = useSelector((state) => state.userReducer.loading);
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const errors = useSelector((state) => state.userReducer.errors);

  const dispatch = useDispatch();
  const login = (e) => {
    e.preventDefault();
    dispatch(
      userLogin({
        email,
        password,
      })
    );
  };
  if (isAuth) return <Redirect to="/" />;
  return (
    <div style={{ height: '70vh', display:"flex",justifyContent:"space-around",width:"100%",textSizeAdjust:"auto" }} className="loginimg" >

  

    
            {loading ? (
              <h1 style={{ backgroundColor: "rgba(248, 249, 250, 1)" }}> Please wait </h1>
            ) : (
              <div className="col-md-3 offset-mt-3" style={{paddingLeft:"0px !important"}}>

                {errors ? <span> {errors.msg}   </span> : null}

                <div className="row mt-3" style={{paddingTop:"90px"}}>
                  <label >Email</label>
                  <input
                    type="text"
                    name="email"
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="row mt-3" >
                  <label >Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="row" style={{marginTop:"50px"}}>
                  <button type="submit" className="btn btn-primary" onClick={login}>
                    {" "}
              Login
            </button>
                </div>
              </div>
            )}



    </div>
  );
};

export default Login;
