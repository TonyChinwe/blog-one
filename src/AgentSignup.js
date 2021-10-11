import "./App.css";
import "./images/home-pic1.jpg";
import "./images/select-dropdown.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import Tilt from "react-vanilla-tilt";
import pic1 from "./images/tony.jpg";
import AgentLoginNav from "./AgentLoginNav";
import { useHistory } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import React, { useState } from "react";
import axios from "axios";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function AgentSignup() {
  const history = useHistory();
  const [progressBar, setProgressBar] = useState(false);

  const [mailReg, setMailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [bizNumber, setBizNumber] = useState("");

  const [textSignup, setTextSignup] = useState("Sign up today");
  const [loginTextColor, setLoginTextColor] = useState("white");

  const register = async e => {
    e.preventDefault();
    setProgressBar(true);
    await axios
      .post("http://localhost:8081/register/agent", {
        name: name,
        username: mailReg,
        password: passwordReg,
        phone: number,
        businessNumber: bizNumber
      })
      .then(function(response) {
        if (response.data.code == "200") {
          setTextSignup("Sign up");
          setLoginTextColor("white");
          setProgressBar(false);
          history.push("/agent/login");
        } else {
          setTextSignup(response.data.message);
          setLoginTextColor("red");
          setProgressBar(false);
        }
      })
      .catch(function(err) {
        setProgressBar(false);
        console.log(err);
      })
      .then(function() {
        setProgressBar(false);
      });
  };

  return (
    <div>
      <AgentLoginNav />
      <section className="justify-content-center doc2">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-7 col-md-12 text-lg-left text-md-center offset-xl-1 offset-xl-0 ">
              <Tilt
                className="Tilt cardjava"
                options={{ scale: 1 }}
                style={{ startX: 0, marginTop: "10%" }}
              >
                <div className="justify-content-center">
                  <h3 style={{ color: "white" }} className="title">
                    Sign up today to start posting properties
                  </h3>
                  <p style={{ color: "white" }}>
                    Post properties to start generating leads.When you post
                    properties on this platform, we showcase and advertise your
                    properties to the world.
                  </p>

                  <p style={{ color: "white" }}>
                    If you are new to our platform, sign up today and start your
                    three months trial period.
                  </p>
                </div>
              </Tilt>
            </div>
            <div className="col-xl-4 col-lg-5 col-md-12">
              <div className="login_container ">
                <Tilt
                  className="Tilt  cardjava"
                  options={{ scale: 1 }}
                  style={{
                    startX: 0,
                    marginTop: "5%",
                    marginBottom: "5%"
                  }}
                >
                  <div>{progressBar && <ProgressBar animated now={100} />}</div>

                  <div className="justify-content-center">
                    <div className="header text-center">
                      <h5 className="title" style={{ color: loginTextColor }}>
                        {textSignup}
                      </h5>
                      <hr />
                    </div>

                    <form className="col-lg-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Name"
                          onChange={e => {
                            setName(e.target.value);
                          }}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          aria-describedby="emailHelp"
                          placeholder="Email address"
                          onChange={e => {
                            setMailReg(e.target.value);
                          }}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="mobile"
                          placeholder="Mobile number"
                          onChange={e => {
                            setNumber(e.target.value);
                          }}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="mobile"
                          placeholder="Business number"
                          onChange={e => {
                            setBizNumber(e.target.value);
                          }}
                        />
                      </div>

                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          placeholder="Password"
                          onChange={e => {
                            setPasswordReg(e.target.value);
                          }}
                        />
                      </div>
                      <button
                        onClick={register}
                        className="btn btn-block primary"
                      >
                        Sign up
                      </button>
                      <p style={{ color: "white" }} className="text-center">
                        Have an account{" "}
                        <Link to="/agent/login">
                          <a
                            style={{ color: "#F4511E", fontSize: "120%" }}
                            href=""
                          >
                            Login
                          </a>
                        </Link>
                      </p>
                    </form>
                  </div>
                </Tilt>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AgentSignup;
