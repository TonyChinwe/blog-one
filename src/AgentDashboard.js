import "./App.css";
import "./images/home-pic1.jpg";
import "./images/select-dropdown.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import { Modal } from "react-bootstrap";
import { Carousel } from "react-bootstrap";

import Tilt from "react-vanilla-tilt";

import viewprof from "./images/viewpr.png";
import editpic from "./images/editprp.jpg";
import editprp from "./images/editp.svg";
import postpic from "./images/postp.svg";
import listingp from "./images/listp.svg";
import axios from "axios";
import { useHistory } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AgentNav from "./AgentNav";

function AgentDashboard() {
  useEffect(() => {
    checkAgentLogin();
  }, []);

  const [agentPicture, setAgentPicture] = useState("");
  const [agentPic, setAgentPic] = useState(false);
  const [accountName, setAccountName] = useState("");
  const [agent, setAgent] = useState(null);
  const history = useHistory();

  const fetchToken = () => {
    return localStorage.getItem("jwt");
  };
  const fetchAgentStoredName = () => {
    let aget = localStorage.getItem("agentname");
    return aget;
  };
  const fetchType = () => {
    return localStorage.getItem("type");
  };
  const fetchAgentId = () => {
    return localStorage.getItem("agentId");
  };
  const fetchAgentPicture = async e => {
    // e.preventDefault();
    await axios
      .get(
        "http://localhost:8081/agent/picture/" + fetchAgentId(),

        {
          headers: { Authorization: fetchToken() }
        }
      )
      .then(response => {
        if (response.data.code == 20) {
          setAgentPic(true);
          setAgentPicture(response.data.picture);
        }
      })
      .catch(function(err) {
        setAgentPic(false);
      });
  };

  const fetchAgent = async e => {
    // e.preventDefault();
    await axios
      .get(
        "http://localhost:8081/agent/" + fetchAgentId(),

        {
          headers: { Authorization: fetchToken() }
        }
      )
      .then(response => {
        if (response.data.code == 20) {
          setAccountName(response.data.account.name);
          setAgent(response.data.account);
          localStorage.setItem("agentname", response.data.account.name);
          localStorage.setItem("agent", response.data.account);
        }
      })
      .catch(function(err) {});
  };

  const checkAgentLogin = () => {
    if (
      localStorage.getItem("login") != "yes" &&
      localStorage.getItem("type") != "AGENT"
    ) {
      history.push({
        pathname: "/agent/login"
      });
    } else {
      fetchAgentPicture();
      fetchAgent();
    }
  };

  return (
    <div>
      <AgentNav />
      <section
        class="property-details shortlet-details"
        data-spy="scroll"
        data-target="#navbar-example2"
        data-offset="0"
      >
        <div class="container">
          <div class="row">
            <div class="col-xl-4 col-lg-4  col-md-8 offset-lg-0 offset-md-2 col-sm-8 offset-sm-2 sidebar">
              <div class="row">
                <div class="col-lg-12">
                  <div class="view_agent_cont text-center prop-cal">
                    <div class=" cal-row main_agent_cont">
                      <div class=" cal-row img-thumb text-center">
                        <img
                          style={{
                            borderRadius: "20px",
                            marginBottom: "20px",
                            maxWidth: "40%",
                            maxHeight: "30%"
                          }}
                          src={`data:image/png;base64,${agentPicture}`}
                          alt=""
                          class="img-fluid"
                        />
                        <h4 style={{ color: "#f4511e" }} class="title">
                          Welcome, {accountName}
                        </h4>
                      </div>

                      <div class="row">
                        <div class="cal-row col-lg-12">
                          <p>
                            <span class="float-left">
                              <Link to="/agent/dashboard">Dashboard</Link>
                            </span>
                          </p>
                        </div>
                        <div class="cal-row col-lg-12">
                          <p>
                            <span class="float-left">
                              <Link to="/agent/listing">View My Property</Link>
                            </span>
                          </p>
                        </div>
                        <div class="cal-row col-lg-12">
                          <p>
                            <span class="float-left">
                              <Link to="/agent/post-property">
                                Post Property
                              </Link>
                            </span>
                          </p>
                        </div>
                        <div class="cal-row col-lg-12">
                          <p>
                            <span class="float-left">
                              <Link to="/agent/profile-info">View Profile</Link>
                            </span>
                          </p>
                        </div>

                        <div class="cal-row col-lg-12">
                          <p>
                            <span class="float-left">
                              <Link to="/agent/upload-profile-picture">
                                Edit profile Picture
                              </Link>
                            </span>
                          </p>
                        </div>

                        <div class="cal-row col-lg-12">
                          <p>
                            <span class="float-left">
                              <Link to="/agent/upload-id">
                                Change profile document
                              </Link>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-8">
              <div style={{ marginTop: "5%" }} class="row">
                <div
                  style={{ marginBottom: "20px" }}
                  class="col-lg-4 col-md-6 col-sm-6 col-xs-12"
                >
                  <div class="card">
                    <div class="property-bg">
                      <Link to="/agent/listing">
                        <a href="" class="">
                          <img
                            style={{
                              maxWidth: "20%",
                              maxHeight: "20%",
                              marginBottom: "5%"
                            }}
                            src={listingp}
                            alt="img-ads"
                            class="img-fluid"
                          />
                        </a>
                        <h5 style={{ fontSize: "80%" }}>View my property</h5>
                      </Link>
                    </div>
                  </div>
                </div>

                <div
                  style={{ marginBottom: "20px" }}
                  class="col-lg-4 col-md-6 col-sm-6 col-xs-12"
                >
                  <div class="card">
                    <div class="property-bg">
                      <Link to="/agent/profile-info">
                        <a href="" class="">
                          <img
                            style={{
                              maxWidth: "20%",
                              maxHeight: "20%",
                              marginBottom: "5%"
                            }}
                            src={viewprof}
                            alt="img-ads"
                            class="img-fluid"
                          />
                        </a>
                        <h5 style={{ fontSize: "80%" }}>View profile</h5>
                      </Link>
                    </div>
                  </div>
                </div>

                <div
                  style={{ marginBottom: "20px" }}
                  class="col-lg-4 col-md-6 col-sm-6 col-xs-12"
                >
                  <div class="card">
                    <div class="property-bg">
                      <Link to="/agent/upload-profile-picture">
                        <a href="" class="">
                          <img
                            style={{
                              maxWidth: "20%",
                              maxHeight: "20%",
                              marginBottom: "5%"
                            }}
                            src={editpic}
                            alt="img-ads"
                            class="img-fluid"
                          />
                        </a>
                        <h5 style={{ fontSize: "80%" }}>
                          Change profile picture
                        </h5>
                      </Link>
                    </div>
                  </div>
                </div>

                <div
                  style={{ marginBottom: "20px" }}
                  class="col-lg-4 col-md-6 col-sm-6 col-xs-12"
                >
                  <div class="card">
                    <div class="property-bg">
                      <Link to="/agent/post-property">
                        <a href="" class="">
                          <img
                            style={{
                              maxWidth: "20%",
                              maxHeight: "20%",
                              marginBottom: "5%"
                            }}
                            src={postpic}
                            alt="img-ads"
                            class="img-fluid"
                          />
                        </a>
                        <h5 style={{ fontSize: "80%" }}>Post Property</h5>
                      </Link>
                    </div>
                  </div>
                </div>

                <div
                  style={{ marginBottom: "20px" }}
                  class="col-lg-4 col-md-6 col-sm-6 col-xs-12"
                >
                  <div class="card">
                    <div class="property-bg">
                      <Link to="/agent/upload-id">
                        <a href="" class="">
                          <img
                            style={{
                              maxWidth: "20%",
                              maxHeight: "20%",
                              marginBottom: "8%"
                            }}
                            src={editprp}
                            alt="img-ads"
                            class="img-fluid"
                          />
                        </a>
                        <h5 style={{ fontSize: "80%" }}>
                          Change profile document
                        </h5>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AgentDashboard;
