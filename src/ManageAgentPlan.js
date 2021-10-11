import "./App.css";
import "./images/home-pic1.jpg";
import "./images/select-dropdown.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import Tilt from "react-vanilla-tilt";
import pic1 from "./images/tony.jpg";
import React, { useState, useRef, useEffect } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import AdminNav from "./AdminNav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Toast from "react-bootstrap/Toast";

import { Carousel } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

function ManageAgentPlan() {
  const [agents, setAgent] = useState([]);
  const [plans, setPlans] = useState([]);
  const [agentId, setAgentId] = useState(-1);
  //modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //toast
  const [showToast, setShowToast] = useState(false);
  const [errorText, setErrorText] = useState("");
  const toggleShowToast = () => setShowToast(!showToast);

  //alert
  const [showAlert, setShowAlert] = useState(false);

  //plans
  const [planId, setPlanId] = useState("");

  const history = useHistory();

  const fetchToken = () => {
    return localStorage.getItem("jwt");
  };

  const fetchType = () => {
    return localStorage.getItem("type");
  };

  const setAgentIdForEnable = key => {
    setAgentId(key);
    handleShow();
  };

  const asignPlan = async e => {
    e.preventDefault();
    await axios
      .post(
        "http://localhost:8081/assign-plan-agent",
        { id: agentId, name: planId },
        {
          headers: { Authorization: fetchToken() }
        }
      )
      .then(response => {
        setShowAlert(true);
        setShow(false);
      })
      .catch(function(err) {
        setShowToast(true);
        setShow(false);
        setErrorText(err.message);
      });
  };

  const fetchAgents = async e => {
    if (fetchType() == "ADMIN") {
      // e.preventDefault();
      await axios
        .get("http://localhost:8081/agents", {
          headers: { Authorization: fetchToken() }
        })
        .then(response => {
          setAgent(response.data);
        })
        .catch(function(err) {
          setShowToast(true);
          setErrorText(err.message);
        });
    } else {
      history.push("/");
    }
  };

  const fetchPlans = async e => {
    if (fetchType() == "ADMIN") {
      // e.preventDefault();
      await axios
        .get(
          "http://localhost:8081/plans",

          {
            headers: { Authorization: fetchToken() }
          }
        )
        .then(response => {
          setPlans(response.data);
        })
        .catch(function(err) {
          setShowToast(true);
          setErrorText(err.message);
        });
    } else {
      history.push("/");
    }
  };

  useEffect(() => {
    fetchAgents();
    fetchPlans();
  }, []);

  return (
    <div>
      <AdminNav />

      <section className="filter result-page">
        <div className="container">
          <Toast
            style={{
              alignContent: "center",
              marginLeft: "35%",
              marginRight: "5%"
            }}
            show={showToast}
            onClose={toggleShowToast}
          >
            <Toast.Header></Toast.Header>
            <Toast.Body>{errorText}</Toast.Body>
          </Toast>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
              Are you sure you want to assign plan with name: {planId} to the
              agent with id {agentId}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={asignPlan}>
                Continue
              </Button>
            </Modal.Footer>
          </Modal>

          <Alert
            style={{ maxWidth: "40%", marginLeft: "40%", marginRight: "20%" }}
            show={showAlert}
            variant="success"
          >
            <p>Action completed. Refresh the page.</p>
            <hr />
            <div className="d-flex justify-content-end">
              <Button
                onClick={() => setShowAlert(false)}
                variant="outline-success"
              >
                Close
              </Button>
            </div>
          </Alert>

          <div className="row">
            <form className="col-lg-12">
              <div className="row">
                <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2 dropdown-cont input-group">
                  <select
                    onChange={e => {
                      setPlanId(e.target.value);
                    }}
                    className="selectpicker"
                  >
                    <option key="">Select Plan</option>
                    {plans &&
                      plans.map(plan => (
                        <option key={plan.id}>{plan.name}</option>
                      ))}
                  </select>
                </div>

                <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2 dropdown-cont input-group"></div>

                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-12 btn-cont">
                  <button className="primary btn float-right">search</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section
        style={{ marginTop: "5%" }}
        className="post-step light-container post-project "
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-10 offset-xl-1">
              <div className="content-holder">
                <div className="table-responsive">
                  <table className="table table-hover ">
                    <thead>
                      <tr>
                        <th scope="col">Username</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Onboard Date</th>
                        <th scope="col">Plan</th>
                        <th scope="col">Plan remaining days</th>
                        <th scope="col">State</th>
                        <th scope="col">Assign</th>
                      </tr>
                    </thead>
                    <tbody>
                      {agents &&
                        agents.map(agent => (
                          <tr key={agent.id}>
                            <td>{agent.email}</td>
                            <td>{agent.phone}</td>
                            <td>{agent.created}</td>
                            <td>{agent.planName}</td>
                            <td>{agent.subRemainingDays}</td>

                            <td>
                              {agent.active == true ? (
                                <button
                                  style={{
                                    borderRadius: "50px",
                                    paddingLeft: "10px",
                                    paddingRight: "10px",
                                    paddingTop: "6px",
                                    paddingBottom: "6px",
                                    marginTop: "5px"
                                  }}
                                  className="btn secondry"
                                >
                                  Disabled &#10006;
                                </button>
                              ) : (
                                <button
                                  style={{
                                    borderRadius: "50px",
                                    paddingLeft: "10px",
                                    paddingRight: "10px",
                                    paddingTop: "6px",
                                    paddingBottom: "6px",
                                    marginTop: "5px",
                                    backgroundColor: "#F4511E"
                                  }}
                                  className="btn primary"
                                >
                                  Enabled &#10003;
                                </button>
                              )}
                            </td>

                            <td>
                              <button
                                onClick={() => setAgentIdForEnable(agent.id)}
                                style={{
                                  borderRadius: "50px",
                                  paddingLeft: "10px",
                                  paddingRight: "10px",
                                  paddingTop: "6px",
                                  paddingBottom: "6px",
                                  marginTop: "5px"
                                }}
                                className="btn primary"
                              >
                                Assign
                              </button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ManageAgentPlan;
