import "./App.css";
import "./images/home-pic1.jpg";
import "./images/select-dropdown.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import Tilt from "react-vanilla-tilt";
import pic1 from "./images/tony.jpg";
import React, { useState, useRef, useEffect } from "react";
import AgentNav from "./AgentNav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";

function EditAgentProfile() {
  //form
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [businessPhone, setBusinessPhone] = useState("");
  const [whatsap, setWhatsap] = useState("");
  const [address, setAddress] = useState("");
  const [locality, setLocality] = useState("");
  const [state, setState] = useState("");
  const [textEditStatus, setTextEditStatus] = useState("");
  const [textEditStatusColor, setTextEditStatusColor] = useState("");

  //form

  const [states, setStates] = useState([]);
  const [local, setLocal] = useState([]);
  const [stateId, setStateId] = useState();
  const [agent, setAgent] = useState({});
  const [progressBar, setProgressBar] = useState(false);
  const [agentPicture, setAgentPicture] = useState({});
  const [showToast, setShowToast] = useState(false);
  const [text, setText] = useState("Kindly upload your profile picture");
  const [textColor, setTextColor] = useState("#7F7F7F");

  const toggleShowToast = () => setShowToast(!showToast);
  //alert
  const [showAlert, setShowAlert] = useState(false);

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

  const setStateIdForAxis = key => {
    //alert(key);
    setStates(key);
    fetchAxis(key);
  };

  const fetchStates = async e => {
    await axios
      .get("http://localhost:8081/states")
      .then(response => {
        setStates(response.data);
      })
      .catch(function(err) {});
  };

  const fetchAxis = async key => {
    await axios
      .get("http://localhost:8081/axises/" + key)
      .then(response => {
        setLocal(response.data);
      })
      .catch(function(err) {});
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
          alert("true");
          setAgent(response.data.account);
        }
      })
      .catch(function(err) {
        alert(err.message);
      });
  };

  const submitEdit = async e => {
    e.preventDefault();
    setProgressBar(true);
    await axios
      .post(
        "http://localhost:8081/agent/edit",

        {
          id: fetchAgentId(),
          name: name,
          companyName: businessName,
          mail: mail,
          password: password,
          phone: phone,
          businessPhone: businessPhone,
          whatssap: whatsap,
          state: state,
          locality: locality,
          address: address
        },
        {
          headers: { Authorization: fetchToken() }
        }
      )
      .then(function(response) {
        if (response.data.code == "20") {
          setTextEditStatus(response.data.message);
          setTextEditStatusColor("#90EE90");
          setProgressBar(false);
          history.push("/agent/dashboard");
        } else {
          setTextEditStatus(response.data.message);
          setTextEditStatusColor("red");
          setProgressBar(false);
        }
      })
      .catch(function(err) {
        alert(err.message);
        setProgressBar(false);
        console.log(err);
      })
      .then(function() {
        setProgressBar(false);
      });
  };

  // const initAgent = () => {
  //   setName(agent.name);
  //   setMail(agent.email);
  //   setPhone(agent.phone);
  //   setBusinessPhone(agent.phone);
  //   setBusinessName(agent.name);
  // };

  useEffect(() => {
    fetchStates();
    fetchAgentStored();
    fetchAgent();
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
                      <div class="row">
                        <div
                          style={{ marginTop: "20px" }}
                          class="col-lg-10 text-left main-title"
                        >
                          <h4
                            style={{
                              textAlign: "center",
                              color: "#f4511e"
                            }}
                            class="title"
                          >
                            <span></span>Profile Details
                          </h4>
                        </div>

                        <div class="cal-row col-lg-12">
                          <p>
                            <span class="float-left">Name: {agent.name}</span>
                          </p>
                        </div>
                        <div class="cal-row col-lg-12">
                          <p>
                            <span class="float-left">Post Property</span>
                          </p>
                        </div>
                        <div class="cal-row col-lg-12">
                          <p>
                            <span class="float-left">View Profile</span>
                          </p>
                        </div>
                        <div class="cal-row col-lg-12">
                          <p>
                            <span class="float-left">Edit Profile</span>
                          </p>
                        </div>

                        <div class="cal-row col-lg-12">
                          <p>
                            <span class="float-left">Edit profile Picture</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-8">
              <div class="row">
                <section
                  style={{ marginTop: "5%" }}
                  class="post-step light-container post-project"
                >
                  <div class="container">
                    <div class="row">
                      <div class="col-xl-10 offset-xl-1">
                        <div class="content-holder">
                          <div>
                            <form id="post-p" action="#">
                              <div>
                                <section class="text-center prop-use shortlet">
                                  <div class="row">
                                    <div class="col-lg-10 text-left main-title">
                                      <h3 style={{ textAlign: "center" }}>
                                        {" "}
                                        <span></span>{" "}
                                        {progressBar && (
                                          <ProgressBar animated now={100} />
                                        )}
                                      </h3>

                                      <h4
                                        style={{
                                          color: textEditStatusColor,
                                          textAlign: "center"
                                        }}
                                      >
                                        {textEditStatus}
                                      </h4>
                                      <h2
                                        style={{
                                          textAlign: "center",
                                          color: "#f4511e"
                                        }}
                                        class="title"
                                      >
                                        <span></span>Edit Your Profile Details
                                      </h2>
                                    </div>

                                    <div class="col-lg-10 text-left">
                                      <div class="row">
                                        <div class="col-lg-12">
                                          <p>
                                            Name{" "}
                                            <span style={{ color: "red" }}>
                                              *
                                            </span>
                                          </p>
                                        </div>
                                        <label class="col-lg-12">
                                          <input
                                            onChange={e => {
                                              setName(e.target.value);
                                            }}
                                            type="text"
                                            name="name"
                                            value={agent.name}
                                            class="form-control"
                                            id="name"
                                            required
                                          />
                                        </label>

                                        <div class="col-lg-12">
                                          <p>Company name</p>
                                        </div>
                                        <label class="col-lg-12">
                                          <input
                                            onChange={e => {
                                              setBusinessName(e.target.value);
                                            }}
                                            type="text"
                                            name="name"
                                            class="form-control"
                                            id="name"
                                            value={agent.name}
                                          />
                                        </label>

                                        <div class="col-lg-12">
                                          <p>
                                            Username/Email
                                            <span style={{ color: "red" }}>
                                              *
                                            </span>
                                          </p>
                                        </div>
                                        <label class="col-lg-12">
                                          <input
                                            onChange={e => {
                                              setMail(e.target.value);
                                            }}
                                            type="mail"
                                            name="name"
                                            value={agent.email}
                                            class="form-control"
                                            id="name"
                                            required
                                          />
                                        </label>

                                        <div class="col-lg-12">
                                          <p>
                                            Change Password{" "}
                                            <span
                                              style={{ color: "red" }}
                                            ></span>
                                          </p>
                                        </div>
                                        <label class="col-lg-12">
                                          <input
                                            onChange={e => {
                                              setPassword(e.target.value);
                                            }}
                                            type="text"
                                            name="name"
                                            class="form-control"
                                            id="name"
                                          />
                                        </label>

                                        <div class="col-lg-12">
                                          <p>
                                            Business phone{" "}
                                            <span style={{ color: "red" }}>
                                              *
                                            </span>
                                          </p>
                                        </div>
                                        <label class="col-lg-12">
                                          <input
                                            onChange={e => {
                                              setBusinessPhone(e.target.value);
                                            }}
                                            type="text"
                                            name="name"
                                            class="form-control"
                                            value={agent.phone}
                                            id="name"
                                            required
                                          />
                                        </label>

                                        <div class="col-lg-12">
                                          <p>
                                            Phone{" "}
                                            <span
                                              style={{ color: "red" }}
                                            ></span>
                                          </p>
                                        </div>
                                        <label class="col-lg-12">
                                          <input
                                            onChange={e => {
                                              setPhone(e.target.value);
                                            }}
                                            type="text"
                                            name="name"
                                            class="form-control"
                                            id="name"
                                            value={agent.phone}
                                          />
                                        </label>

                                        <div class="col-lg-12">
                                          <p>Whatssap </p>
                                        </div>
                                        <label class="col-lg-12">
                                          <input
                                            onChange={e => {
                                              setWhatsap(e.target.value);
                                            }}
                                            type="text"
                                            name="name"
                                            class="form-control"
                                            id="name"
                                          />
                                        </label>

                                        <div className="col-lg-12">
                                          <p>
                                            Your state{" "}
                                            <span style={{ color: "red" }}>
                                              *
                                            </span>
                                          </p>
                                        </div>
                                        <label className="col-lg-12">
                                          <select
                                            style={{ padding: "2%" }}
                                            className="col-lg-12"
                                            onChange={e => {
                                              setStateIdForAxis(e.target.value);
                                            }}
                                          >
                                            <option key="">
                                              Select Your State
                                            </option>
                                            {states &&
                                              states.map(state => (
                                                <option key={state.key}>
                                                  {state.name}
                                                </option>
                                              ))}
                                          </select>
                                        </label>

                                        <div className="col-lg-12">
                                          <p>
                                            Your locality{" "}
                                            <span style={{ color: "red" }}>
                                              *
                                            </span>
                                          </p>
                                        </div>
                                        <label className="col-lg-12">
                                          <select
                                            onChange={e => {
                                              setLocality(e.target.value);
                                            }}
                                            style={{ padding: "2%" }}
                                            className="col-lg-12"
                                          >
                                            <option key="">
                                              Select Your Locality
                                            </option>
                                            {local &&
                                              local.map(city => (
                                                <option key={city.key}>
                                                  {city.name}
                                                </option>
                                              ))}
                                          </select>
                                        </label>

                                        <div class="col-lg-12">
                                          <p>
                                            Address{" "}
                                            <span style={{ color: "red" }}>
                                              *
                                            </span>
                                          </p>
                                        </div>
                                        <label class="col-lg-12">
                                          <input
                                            onChange={e => {
                                              setAddress(e.target.value);
                                            }}
                                            type="text"
                                            name="name"
                                            class="form-control"
                                            id="name"
                                            required
                                          />
                                        </label>
                                      </div>

                                      <div class="btn-send">
                                        <button
                                          onClick={submitEdit}
                                          class="btn primary btn-block"
                                        >
                                          Submit
                                        </button>
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

export default EditAgentProfile;
