import "./App.css";
import "./images/home-pic1.jpg";
import "./images/select-dropdown.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import { Modal } from "react-bootstrap";
import { Carousel } from "react-bootstrap";

import Tilt from "react-vanilla-tilt";

import axios from "axios";
import { useHistory } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AgentNav from "./AgentNav";

function AgentSideBar() {
  const [agentPicture, setAgentPicture] = useState("");
  const [agentPic, setAgentPic] = useState(false);

  const fetchToken = () => {
    return localStorage.getItem("jwt");
  };

  const fetchAgentStored = () => {
    return localStorage.getItem("agent");
  };

  const setAgentId = key => {
    setAgentId(key);
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
          localStorage.setItem("agent", response.data.account);
        }
      })
      .catch(function(err) {});
  };

  useEffect(() => {
    fetchAgentPicture();
    fetchAgent();
  }, []);

  return (
    <div>
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
                    Welcome, {fetchAgentStored()}
                  </h4>
                </div>

                <div class="row">
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
                        <Link to="/agent/post-property">Post Property</Link>
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
                        <Link to="/agent/edit-profile">Edit Profile</Link>
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
    </div>
  );
}

export default AgentSideBar;
