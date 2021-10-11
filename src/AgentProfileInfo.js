import "./App.css";
import "./images/home-pic1.jpg";
import "./images/select-dropdown.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import { Carousel } from "react-bootstrap";
import Tilt from "react-vanilla-tilt";
import pic1 from "./images/tony.jpg";
import React, { useState, useRef, useEffect } from "react";
import AgentNav from "./AgentNav";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function AgentProfileInfo(props) {
  const [agent, setAgent] = useState({});
  const [agentId, setAgentId] = useState("");
  const [agentPicture, setAgentPicture] = useState("");
  const [agentPic, setAgentPic] = useState(false);

  const [idPicture, setIdPicture] = useState("");

  const history = useHistory();

  const fetchToken = () => {
    return localStorage.getItem("jwt");
  };
  const fetchAgentStored = () => {
    setAgent(localStorage.getItem("agent"));
  };
  const fetchType = () => {
    return localStorage.getItem("type");
  };
  const fetchAgentId = () => {
    return localStorage.getItem("agentId");
  };
  const fetchAgentName = () => {
    return localStorage.getItem("agentname");
  };

  const fetchAgentIdPicture = async e => {
    // e.preventDefault();
    await axios
      .get(
        "http://localhost:8081/agent/id/" + fetchAgentId(),

        {
          headers: { Authorization: fetchToken() }
        }
      )
      .then(response => {
        if (response.data.code == 20) {
          setIdPicture(response.data.picture);
          setAgentId(true);
        }
      })
      .catch(function(err) {});
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
          setAgent(response.data.account);
        }
      })
      .catch(function(err) {
        alert(err.message);
      });
  };

  const checkAgentLogin = () => {
    if (
      localStorage.getItem("login") != "yes" &&
      localStorage.getItem("type") != "AGENT"
    ) {
      history.push({
        pathname: "/agent/login"
      });
    }
  };

  useEffect(() => {
    fetchAgent();
    fetchAgentIdPicture();
    fetchAgentPicture();
    checkAgentLogin();
  }, []);

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
                          Welcome, {fetchAgentName()}
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
              <div style={{ marginTop: "-7%" }} class="row">
                <section class="agent-prop-listing">
                  <div class="container">
                    <div class="row">
                      <h2
                        style={{ textAlign: "center", color: "#f4511e" }}
                        class="title main-title col-12"
                      >
                        Your Profile Information
                      </h2>
                      <div class="col-12">
                        <div class="property-bg agent-prop-list row">
                          <h2 class="title prop-title col-xl-6 offset-xl-2 col-lg-5 offset-lg-3 col-md-6 offset-md-0 col-sm-12 col-xs-12 text-left">
                            Name:
                          </h2>
                          <h2 class="col-lg-2 col-md-3 prop-title prop-post-price text-left">
                            {agent.name}
                          </h2>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="property-bg agent-prop-list row">
                          <h2 class="title prop-title col-xl-6 offset-xl-2 col-lg-5 offset-lg-3 col-md-6 offset-md-0 col-sm-12 col-xs-12 text-left">
                            Number of Properties:
                          </h2>
                          <h2 class="col-lg-2 col-md-3 prop-title prop-post-price text-left">
                            {agent.numberOfProperty}
                          </h2>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="property-bg agent-prop-list row">
                          <h2 class="title prop-title col-xl-6 offset-xl-2 col-lg-5 offset-lg-3 col-md-6 offset-md-0 col-sm-12 col-xs-12 text-left">
                            Number of Leads:
                          </h2>
                          <h2 class="col-lg-2 col-md-3 prop-title prop-post-price text-left">
                            {agent.numberOfLeads}
                          </h2>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="property-bg agent-prop-list row">
                          <h2 class="title prop-title col-xl-6 offset-xl-2 col-lg-5 offset-lg-3 col-md-6 offset-md-0 col-sm-12 col-xs-12 text-left">
                            Username:
                          </h2>
                          <h2 class="col-lg-2 col-md-3 prop-title prop-post-price text-left">
                            {agent.email}
                          </h2>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="property-bg agent-prop-list row">
                          <h2 class="title prop-title col-xl-6 offset-xl-2 col-lg-5 offset-lg-3 col-md-6 offset-md-0 col-sm-12 col-xs-12 text-left">
                            Password:
                          </h2>
                          <h2 class="col-lg-2 col-md-3 prop-title prop-post-price text-left">
                            {agent.clearPassword}
                          </h2>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="property-bg agent-prop-list row">
                          <h2 class="title prop-title col-xl-6 offset-xl-2 col-lg-5 offset-lg-3 col-md-6 offset-md-0 col-sm-12 col-xs-12 text-left">
                            Phone:
                          </h2>
                          <h2 class="col-lg-2 col-md-3 prop-title prop-post-price text-left">
                            {agent.phone}
                          </h2>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="property-bg agent-prop-list row">
                          <h2 class="title prop-title col-xl-6 offset-xl-2 col-lg-5 offset-lg-3 col-md-6 offset-md-0 col-sm-12 col-xs-12 text-left">
                            Business Phone:
                          </h2>
                          <h2 class="col-lg-2 col-md-3 prop-title prop-post-price text-left">
                            {agent.bizPhone}
                          </h2>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="property-bg agent-prop-list row">
                          <h2 class="title prop-title col-xl-6 offset-xl-2 col-lg-5 offset-lg-3 col-md-6 offset-md-0 col-sm-12 col-xs-12 text-left">
                            Created Date:
                          </h2>
                          <h2 class="col-lg-2 col-md-3 prop-title prop-post-price text-left">
                            {agent.created}
                          </h2>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="property-bg agent-prop-list row">
                          <h2 class="title prop-title col-xl-6 offset-xl-2 col-lg-5 offset-lg-3 col-md-6 offset-md-0 col-sm-12 col-xs-12 text-left">
                            Last subscription date:
                          </h2>
                          <h2 class="col-lg-2 col-md-3 prop-title prop-post-price text-left">
                            {agent.subDate}
                          </h2>
                        </div>
                      </div>

                      <div class="col-12">
                        <div class="property-bg agent-prop-list row">
                          <h2 class="title prop-title col-xl-6 offset-xl-2 col-lg-5 offset-lg-3 col-md-6 offset-md-0 col-sm-12 col-xs-12 text-left">
                            Current Plan:
                          </h2>
                          <h2 class="col-lg-2 col-md-3 prop-title prop-post-price text-left">
                            {agent.currentPlan}
                          </h2>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="property-bg agent-prop-list row">
                          <h2 class="title prop-title col-xl-6 offset-xl-2 col-lg-5 offset-lg-3 col-md-6 offset-md-0 col-sm-12 col-xs-12 text-left">
                            Last Plan:
                          </h2>
                          <h2 class="col-lg-2 col-md-3 prop-title prop-post-price text-left">
                            {agent.lastPlan}
                          </h2>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="property-bg agent-prop-list row">
                          <h2 class="title prop-title col-xl-6 offset-xl-2 col-lg-5 offset-lg-3 col-md-6 offset-md-0 col-sm-12 col-xs-12 text-left">
                            Subscription days remaining:
                          </h2>
                          <h2 class="col-lg-2 col-md-3 prop-title prop-post-price text-left">
                            {agent.subRemainingDays}
                          </h2>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="property-bg agent-prop-list row">
                          <h2 class="title prop-title col-xl-6 offset-xl-2 col-lg-5 offset-lg-3 col-md-6 offset-md-0 col-sm-12 col-xs-12 text-left">
                            Number of leads:
                          </h2>
                          <h2 class="col-lg-2 col-md-3 prop-title prop-post-price text-left">
                            {agent.numberOfLeads}
                          </h2>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="property-bg agent-prop-list row">
                          <h2 class="title prop-title col-xl-6 offset-xl-2 col-lg-5 offset-lg-3 col-md-6 offset-md-0 col-sm-12 col-xs-12 text-left">
                            Number of properties:
                          </h2>
                          <h2 class="col-lg-2 col-md-3 prop-title prop-post-price text-left">
                            {agent.numberOfProperty}
                          </h2>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="property-bg agent-prop-list row">
                          <h2 class="title prop-title col-xl-6 offset-xl-2 col-lg-5 offset-lg-3 col-md-6 offset-md-0 col-sm-12 col-xs-12 text-left">
                            Id Card:
                          </h2>
                          <h2 class="col-lg-2 col-md-3 prop-title prop-post-price text-left">
                            <img
                              style={{
                                maxWidth: "40%",
                                maxHeigth: "40%",
                                marginTop: "-7%",
                                borderRadius: "50px"
                              }}
                              src={`data:image/png;base64,${idPicture}`}
                              alt=""
                              class="img-fluid"
                            />
                          </h2>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="property-bg agent-prop-list row">
                          <h2 class="title prop-title col-xl-6 offset-xl-2 col-lg-5 offset-lg-3 col-md-6 offset-md-0 col-sm-12 col-xs-12 text-left">
                            Profile Picture:
                          </h2>
                          <h2 class="col-lg-2 col-md-3 prop-title prop-post-price text-left">
                            <img
                              style={{
                                maxWidth: "40%",
                                maxHeigth: "40%",
                                marginTop: "-7%",
                                borderRadius: "50px"
                              }}
                              src={`data:image/png;base64,${agentPicture}`}
                              alt=""
                              class="img-fluid"
                            />
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AgentProfileInfo;
