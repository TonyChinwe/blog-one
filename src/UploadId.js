import "./App.css";
import "./images/home-pic1.jpg";
import "./images/select-dropdown.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";

import pic1 from "./images/tony.jpg";
import React, { useState, useRef, useEffect } from "react";
import AgentNav from "./AgentNav";

import AgentSideBar from "./AgentSideBar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function UploadId(props) {
  const [progressBar, setProgressBar] = useState(false);

  const [agentPicture, setAgentPicture] = useState(null);
  const [image, setImage] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [text, setText] = useState("Kindly upload your id");
  const [textColor, setTextColor] = useState("#7F7F7F");

  const toggleShowToast = () => setShowToast(!showToast);
  //alert
  const [showAlert, setShowAlert] = useState(false);

  const history = useHistory();

  const fetchToken = () => {
    return localStorage.getItem("jwt");
  };

  const fetchType = () => {
    return localStorage.getItem("type");
  };

  const fetchAgentId = () => {
    return localStorage.getItem("agentId");
  };

  const handlePicture = e => {
    let picture = e.target.files[0];
    setAgentPicture(picture);
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const fetchAgentName = () => {
    return localStorage.getItem("agentname");
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
          setAgentPicture(response.data.picture);
        }
      })
      .catch(function(err) {});
  };

  const uploadPicture = async e => {
    setProgressBar(true);
    setText("Uloading the id !!!!!!");
    setTextColor("#F4511E");
    let formData = new FormData();
    formData.append("file", agentPicture);
    e.preventDefault();
    await axios
      .post(
        "http://localhost:8081/agent-upload/profile-id/" + fetchAgentId(),
        formData,
        {
          headers: {
            Authorization: fetchToken(),
            "Content-Type": "multipart/form-data"
          }
        }
      )
      .then(response => {
        setShowAlert(true);
        setProgressBar(false);
        setTextColor("#2ECC71");
        setText("file uploaded successfully");
      })
      .catch(function(err) {
        setShowToast(true);
        setProgressBar(false);
        setTextColor("#FF0000");
        setText("file upload failed");
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
    checkAgentLogin();
    fetchAgentPicture();
  }, []);

  return (
    <div>
      <AgentNav />

      <section
        className="property-details shortlet-details"
        data-spy="scroll"
        data-target="#navbar-example2"
        data-offset="0"
      >
        <div class="container">
          <div className="row">
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

            <div className="col-lg-8">
              <div className="row">
                <section
                  style={{ marginTop: "5%" }}
                  className="post-step light-container post-project"
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-10 offset-xl-1">
                        <div className="content-holder">
                          <div>
                            <form id="post-p" action="#">
                              <div>
                                <section className="text-center prop-use img-upload">
                                  <div className="row">
                                    <div className="col-lg-10 text-left main-title">
                                      <div>
                                        {progressBar && (
                                          <ProgressBar animated now={100} />
                                        )}
                                      </div>
                                      <h4
                                        style={{
                                          marginBottom: "5%",
                                          color: textColor
                                        }}
                                        className="title"
                                      >
                                        {text}
                                      </h4>
                                      <hr />
                                    </div>
                                    <div className="col-lg-12 text-left">
                                      <div className="row">
                                        <div className="img-cont text-center">
                                          <div className="img-holders row">
                                            <div className="col-12 thumb-list">
                                              <a href=""></a>
                                              <img
                                                src={image}
                                                alt="preview image"
                                                className="img-fluid"
                                              />
                                            </div>
                                          </div>
                                          <hr />
                                          <label>
                                            <span
                                              style={{
                                                borderRadius: "40px",
                                                paddingTop: "-20px",
                                                paddingBottom: "-20px"
                                              }}
                                              className="btn secondry"
                                            >
                                              Select File
                                            </span>{" "}
                                            <input
                                              onChange={e => {
                                                handlePicture(e);
                                              }}
                                              type="file"
                                            />
                                          </label>

                                          <button
                                            style={{
                                              borderRadius: "40px",
                                              paddingTop: "-20px",
                                              paddingBottom: "-20px",
                                              maxWidth: "70%",
                                              marginLeft: "15%"
                                            }}
                                            onClick={uploadPicture}
                                            className="btn btn-block primary"
                                          >
                                            Upload id
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </section>
                              </div>
                            </form>
                          </div>
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

export default UploadId;
