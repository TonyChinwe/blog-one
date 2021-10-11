import "./App.css";
import "./images/home-pic1.jpg";
import "./images/select-dropdown.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import Tilt from "react-vanilla-tilt";
import AdminLoginNav from "./AdminLoginNav";
import React, { useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useHistory } from "react-router-dom";

import axios from "axios";
import { Link } from "react-router-dom";

import AgentLoginNav from "./AgentLoginNav";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function AgentLogin() {
  const history = useHistory();
  const [progressBar, setProgressBar] = useState(false);
  const [mailReg, setMailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [loginText, setLoginText] = useState("Login");
  const [loginTextColor, setLoginTextColor] = useState("white");

  //credentials

  const [login, setLogin] = useState("");
  const [jwt, setJwt] = useState("");
  const [type, setType] = useState("");
  const [agentId, setAgentId] = useState(-1);

  const logoutFunc = () => {
    setLogin("");
    setJwt("");
    setType("");
    setAgentId(-1);
  };

  const loginFunc = async e => {
    setProgressBar(true);
    e.preventDefault();
    await axios
      .post("http://localhost:8081/login", {
        username: mailReg,
        password: passwordReg
      })
      .then(response => {
        if (response.data.jwt == "50") {
          localStorage.removeItem("login");
          localStorage.removeItem("jwt");
          localStorage.removeItem("type");
          localStorage.removeItem("agentId");
          localStorage.setItem("login", "no");
          setLoginText("incorrect username or password");
          setLoginTextColor("red");
          setProgressBar(false);
        } else {
          setLogin("yes");
          localStorage.setItem("login", "yes");
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("type", response.data.type);
          localStorage.setItem("agentId", response.data.agentId);
          setLoginText("Login");
          setLoginTextColor("white");
          setProgressBar(false);
          if (response.data.type == "AGENT") {
            history.push({
              pathname: "/agent/dashboard"
            });
          } else {
            localStorage.removeItem("login");
            localStorage.removeItem("jwt");
            localStorage.removeItem("type");
            localStorage.removeItem("agentId");
            localStorage.setItem("login", "no");
            setLoginText("Register as an agent first");
            setLoginTextColor("red");
          }
        }
        console.log(response.data.jwt);
      })
      .catch(function(err) {
        setProgressBar(false);
      });
  };

  return (
    <div>
      <AgentLoginNav />
      <section className="justify-content-center doc2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-5 col-md-12">
              <div className="login_container ">
                <Tilt
                  className="Tilt  cardjava"
                  options={{ scale: 1.1 }}
                  style={{ startX: 0, marginTop: "10%" }}
                >
                  <div>{progressBar && <ProgressBar animated now={100} />}</div>

                  <div className="justify-content-center">
                    <div className="header text-center">
                      <h5 className="title" style={{ color: loginTextColor }}>
                        {loginText}
                      </h5>
                      <hr />
                    </div>

                    <form className="col-lg-12">
                      <div className="form-group">
                        <input
                          type="mail"
                          className="form-control"
                          placeholder="Email Address"
                          id="email"
                          aria-describedby="emailHelp"
                          onChange={e => {
                            setMailReg(e.target.value);
                          }}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          id="password"
                          onChange={e => {
                            setPasswordReg(e.target.value);
                          }}
                        />
                      </div>
                      <div className="row footer">
                        <div className="col-lg-6"></div>
                      </div>
                      <button
                        onClick={loginFunc}
                        className="btn btn-block primary"
                      >
                        Login
                      </button>

                      <p style={{ color: "white" }} className="text-center">
                        Don't have an account{" "}
                        <Link to="/agent/signup">
                          <a
                            style={{ color: "#F4511E", fontSize: "120%" }}
                            href=""
                          >
                            Sign up
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

export default AgentLogin;
