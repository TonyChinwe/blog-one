import "./App.css";
import "./images/home-pic1.jpg";
import "./images/select-dropdown.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import Tilt from "react-vanilla-tilt";
import pic1 from "./images/tony.jpg";
import AgentNav from "./AgentNav";
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory, Redirect } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function PostProperty(props) {
  const history = useHistory();

  const [wmode, setWmode] = useState([]);
  const [wtype, setWtype] = useState([]);
  const [wpduration, setWpduration] = useState([]);
  const [wcurrency, setWcurrency] = useState([]);

  const [title, setTitle] = useState("");
  const [descrip, setDescrip] = useState("");
  const [summary, setSummary] = useState("");

  const [streetAd, setStreetAd] = useState("");
  const [fullAd, setFullAd] = useState("");
  const [name, setName] = useState("");

  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");

  const [mode, setMode] = useState("");
  const [type, setType] = useState("");
  const [pduration, setPduration] = useState("");

  const [currency, setCurrency] = useState("");
  const [price, setPrice] = useState("");
  const [state, setState] = useState("");
  const [states, setStates] = useState([]);

  const [local, setLocal] = useState([]);
  const [deposit, setDeposit] = useState("");
  const [locality, setLocality] = useState("");

  const [bed, setBed] = useState("");
  const [bath, setBath] = useState("");

  const [toilet, setToilet] = useState("");
  const [kitchen, setKitchen] = useState("");

  const [progressBar, setProgressBar] = useState(false);
  const [text, setText] = useState("");
  const [textColor, setTextColor] = useState("red");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fetchToken = () => {
    return localStorage.getItem("jwt");
  };

  const fetchAgentId = () => {
    return localStorage.getItem("agentId");
  };

  const uploadProperty = e => {
    handleShow();
    postProperty(e);
  };

  const postProperty = async e => {
    setProgressBar(true);
    e.preventDefault();
    await axios
      .post(
        "http://localhost:8081/agent/upload/property/" + fetchAgentId(),
        {
          mode: mode,
          type: type,
          currency: currency,
          price: price,
          priceDuration: pduration,
          title: title,
          description: descrip,
          summary: summary,
          street: streetAd,
          state: state,
          lga: locality,
          address: fullAd,
          initialDeposit: deposit,
          bedroom: bed,
          bathroom: bath,
          toilet: toilet,
          kitchen: kitchen,
          contactName: name,
          contactEmail: mail,
          contactPhone: phone
        },
        {
          headers: {
            Authorization: fetchToken()
          }
        }
      )
      .then(function(response) {
        if (response.data.code == "20") {
          setText(response.data.message);
          setTextColor("#2ECC71");
          setProgressBar(false);
          history.push({
            pathname: "/agent/upload-property-image",
            id: response.data.id
          });
        } else {
          setText(response.data.message);
          setTextColor("red");
          setProgressBar(false);
        }
      })
      .catch(function(err) {
        setProgressBar(false);
        setText(err.message);
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

  const setStateIdForAxis = key => {
    setState(key);
    fetchAxis(key);
  };

  const fetchStates = async e => {
    await axios
      .get("http://localhost:8081/managed/states")
      .then(response => {
        setStates(response.data);
      })
      .catch(function(err) {
        alert(err.message);
      });
  };

  const fetchAxis = async key => {
    await axios
      .get("http://localhost:8081/managed/axises/" + key)
      .then(response => {
        setLocal(response.data);
      })
      .catch(function(err) {});
  };

  const fetchMode = async e => {
    await axios
      .get("http://localhost:8081/managed/mode")
      .then(response => {
        setWmode(response.data);
      })
      .catch(function(err) {});
  };

  const fetchType = async e => {
    await axios
      .get("http://localhost:8081/managed/type")
      .then(response => {
        setWtype(response.data);
      })
      .catch(function(err) {});
  };

  const fetchPduration = async e => {
    await axios
      .get("http://localhost:8081/managed/price-duration")
      .then(response => {
        setWpduration(response.data);
      })
      .catch(function(err) {});
  };

  const fetchCurrency = async e => {
    await axios
      .get("http://localhost:8081/managed/currency")
      .then(response => {
        setWcurrency(response.data);
      })
      .catch(function(err) {});
  };

  useEffect(() => {
    fetchStates();
    fetchMode();
    fetchType();
    fetchPduration();
    fetchCurrency();
    checkAgentLogin();
  }, []);

  return (
    <div>
      <AgentNav />

      <section
        style={{ marginTop: "2%" }}
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
                            <Modal show={show} onHide={handleClose}>
                              <Modal.Header closeButton></Modal.Header>
                              <Modal.Body>
                                <div>
                                  {progressBar && (
                                    <ProgressBar animated now={100} />
                                  )}
                                </div>

                                <h4
                                  style={{
                                    textAlign: "center",
                                    color: textColor
                                  }}
                                  class="title"
                                >
                                  {" "}
                                  {text}
                                </h4>
                              </Modal.Body>
                              <Modal.Footer>
                                <Button
                                  variant="secondary"
                                  onClick={handleClose}
                                >
                                  Close
                                </Button>
                              </Modal.Footer>
                            </Modal>

                            <h3
                              style={{
                                textAlign: "center",
                                color: "#f4511e"
                              }}
                              class="title"
                            >
                              Post your property
                            </h3>

                            <hr />
                          </div>

                          <div class="col-lg-10 text-left">
                            <div class="row">
                              <div class="col-lg-12">
                                <p style={{ marginBottom: "-1px" }}>
                                  <span style={{ color: "red" }}>*</span>
                                  Title
                                </p>
                              </div>
                              <label class="col-lg-12">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="datepicker"
                                  onChange={e => {
                                    setTitle(e.target.value);
                                  }}
                                />
                              </label>
                              <div class="col-lg-12">
                                <p style={{ marginBottom: "-1px" }}>
                                  <span style={{ color: "red" }}>*</span>
                                  Description
                                </p>
                              </div>
                              <label class="col-lg-12">
                                <textarea
                                  onChange={e => {
                                    setDescrip(e.target.value);
                                  }}
                                  class="form-control"
                                ></textarea>
                              </label>
                              <div class="col-lg-12">
                                <p style={{ marginBottom: "-1px" }}>
                                  <span style={{ color: "red" }}>*</span>
                                  Summary
                                </p>
                              </div>
                              <label class="col-lg-12">
                                <textarea
                                  onChange={e => {
                                    setSummary(e.target.value);
                                  }}
                                  class="form-control"
                                ></textarea>
                              </label>
                              <div class="col-lg-12">
                                <p style={{ marginBottom: "-1px" }}>
                                  <span style={{ color: "red" }}>*</span>
                                  Street Address
                                </p>
                              </div>
                              <label class="col-lg-12">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="datepicker"
                                  onChange={e => {
                                    setStreetAd(e.target.value);
                                  }}
                                />
                              </label>

                              <div class="col-lg-12">
                                <p style={{ marginBottom: "-1px" }}>
                                  <span style={{ color: "red" }}>*</span>
                                  Full Address
                                </p>
                              </div>
                              <label class="col-lg-12">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="datepicker"
                                  onChange={e => {
                                    setFullAd(e.target.value);
                                  }}
                                />
                              </label>

                              <div class="col-lg-12">
                                <p style={{ marginBottom: "-1px" }}>
                                  <span style={{ color: "red" }}>*</span>
                                  Contact Name
                                </p>
                              </div>
                              <label class="col-lg-12">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="datepicker"
                                  onChange={e => {
                                    setName(e.target.value);
                                  }}
                                />
                              </label>

                              <div class="col-lg-12">
                                <p style={{ marginBottom: "-1px" }}>
                                  <span style={{ color: "red" }}>*</span>
                                  Contact Phone
                                </p>
                              </div>
                              <label class="col-lg-12">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="datepicker"
                                  onChange={e => {
                                    setPhone(e.target.value);
                                  }}
                                />
                              </label>

                              <div class="col-lg-12">
                                <p style={{ marginBottom: "-1px" }}>
                                  Contact Email
                                </p>
                              </div>
                              <label class="col-lg-12">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="datepicker"
                                  onChange={e => {
                                    setMail(e.target.value);
                                  }}
                                />
                              </label>
                            </div>
                          </div>
                        </div>
                      </section>

                      <section class="text-center prop-use price-type">
                        <div class="row">
                          <div class="col-lg-10 offset-lg-1 text-left">
                            <div class="row">
                              <label
                                style={{ marginBottom: "10px" }}
                                style={{ marginBottom: "10px" }}
                                class="col-lg-6 text-left"
                              >
                                <p style={{ marginBottom: "-1px" }}>
                                  <span style={{ color: "red" }}>*</span>
                                  Mode
                                </p>
                                <select
                                  onChange={e => {
                                    setMode(e.target.value);
                                  }}
                                  name=""
                                  class="selectpicker"
                                >
                                  <option key="">Select Mode</option>
                                  {wmode &&
                                    wmode.map(mode => (
                                      <option key={mode.id}>{mode.name}</option>
                                    ))}
                                </select>
                              </label>

                              <label
                                style={{ marginBottom: "10px" }}
                                class="col-lg-6 text-left"
                              >
                                <p style={{ marginBottom: "-1px" }}>
                                  <span style={{ color: "red" }}>*</span>
                                  Type
                                </p>

                                <select
                                  onChange={e => {
                                    setType(e.target.value);
                                  }}
                                  name=""
                                  class="selectpicker"
                                >
                                  <option key="">Select Type</option>
                                  {wtype &&
                                    wtype.map(type => (
                                      <option key={type.id}>{type.name}</option>
                                    ))}
                                </select>
                              </label>

                              <label
                                style={{ marginBottom: "10px" }}
                                class="col-lg-6 text-left"
                              >
                                <p style={{ marginBottom: "-1px" }}>
                                  Price Duration
                                </p>

                                <select
                                  onChange={e => {
                                    setPduration(e.target.value);
                                  }}
                                  name=""
                                  class="selectpicker"
                                >
                                  <option key="">Select Price-duration</option>
                                  {wpduration &&
                                    wpduration.map(dura => (
                                      <option key={dura.id}>{dura.name}</option>
                                    ))}
                                </select>
                              </label>

                              <label
                                style={{ marginBottom: "10px" }}
                                class="col-lg-6 text-left"
                              >
                                <p style={{ marginBottom: "-1px" }}>Currency</p>

                                <select
                                  onChange={e => {
                                    setCurrency(e.target.value);
                                  }}
                                  name=""
                                  class="selectpicker"
                                >
                                  <option key="">Select Currency</option>
                                  {wcurrency &&
                                    wcurrency.map(currency => (
                                      <option key={currency.id}>
                                        {currency.name}
                                      </option>
                                    ))}
                                </select>
                              </label>

                              <label class="col-lg-6 text-left">
                                <p style={{ marginBottom: "-1px" }}>
                                  <span style={{ color: "red" }}>*</span>
                                  Price
                                </p>
                                <input
                                  type="number"
                                  class="form-control"
                                  id="datepicker"
                                  onChange={e => {
                                    setPrice(e.target.value);
                                  }}
                                />
                              </label>

                              <label class="col-lg-6 text-left">
                                <p style={{ marginBottom: "-1px" }}>
                                  Initial deposit
                                </p>
                                <input
                                  type="number"
                                  class="form-control"
                                  id="datepicker"
                                  onChange={e => {
                                    setDeposit(e.target.value);
                                  }}
                                />
                              </label>

                              <label
                                style={{ marginBottom: "10px" }}
                                class="col-lg-6 text-left"
                              >
                                <p style={{ marginBottom: "-1px" }}>
                                  <span style={{ color: "red" }}>*</span>
                                  State
                                </p>
                                <select
                                  onChange={e => {
                                    setStateIdForAxis(e.target.value);
                                  }}
                                  class="selectpicker"
                                >
                                  <option key="">Select Your State</option>
                                  {states &&
                                    states.map(stat => (
                                      <option key={stat.key}>
                                        {stat.name}
                                      </option>
                                    ))}
                                </select>
                              </label>

                              <label
                                style={{ marginBottom: "10px" }}
                                class="col-lg-6 text-left"
                              >
                                <p style={{ marginBottom: "-1px" }}>
                                  <span style={{ color: "red" }}>*</span>
                                  Local Government
                                </p>

                                <select
                                  onChange={e => {
                                    setLocality(e.target.value);
                                  }}
                                  name=""
                                  class="selectpicker"
                                >
                                  <option key="">Select Your Locality</option>
                                  {local &&
                                    local.map(city => (
                                      <option key={city.key}>
                                        {city.name}
                                      </option>
                                    ))}
                                </select>
                              </label>

                              <label class="col-lg-6 text-left">
                                <p style={{ marginBottom: "-1px" }}>
                                  Number of beds
                                </p>
                                <input
                                  type="number"
                                  class="form-control"
                                  id="datepicker"
                                  onChange={e => {
                                    setBed(e.target.value);
                                  }}
                                />
                              </label>

                              <label class="col-lg-6 text-left">
                                <p style={{ marginBottom: "-1px" }}>
                                  Number of Baths
                                </p>
                                <input
                                  type="number"
                                  class="form-control"
                                  id="datepicker"
                                  onChange={e => {
                                    setBath(e.target.value);
                                  }}
                                />
                              </label>

                              <label class="col-lg-6 text-left">
                                <p style={{ marginBottom: "-1px" }}>
                                  Number of Kitchens
                                </p>
                                <input
                                  type="number"
                                  class="form-control"
                                  id="datepicker"
                                  onChange={e => {
                                    setKitchen(e.target.value);
                                  }}
                                />
                              </label>

                              <label class="col-lg-6 text-left">
                                <p style={{ marginBottom: "-1px" }}>
                                  Number of Toilets
                                </p>
                                <input
                                  type="number"
                                  class="form-control"
                                  id="datepicker"
                                  onChange={e => {
                                    setToilet(e.target.value);
                                  }}
                                />
                              </label>

                              <div class="btn-send">
                                <button
                                  onClick={uploadProperty}
                                  class="btn primary btn-block"
                                >
                                  Submit
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
  );
}

export default PostProperty;
