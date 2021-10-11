import "./App.css";
import "./images/home-pic1.jpg";
import "./images/select-dropdown.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import pic1 from "./images/tony.jpg";
import React, { useState, useRef, useEffect } from "react";
import AgentNav from "./AgentNav";
import axios from "axios";
import { Link } from "react-router-dom";

import { useHistory, Redirect } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function EditPropertyPictures(prop) {
  const history = useHistory();

  const [photos, setPhotos] = useState([]);
  const [photoindex, setPhotoindex] = useState(-1);
  const [progressBar, setProgressBar] = useState(false);
  const [text, setText] = useState("");
  const [textColor, setTextColor] = useState("black");
  const [id, setId] = useState(-1);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = index => {
    setText("Are you sure you want to delete the picture ?");
    setTextColor("black");
    setPhotoindex(index);
    setShow(true);
  };

  const fetchToken = () => {
    return localStorage.getItem("jwt");
  };

  const deletePhoto = async e => {
    setProgressBar(true);
    setText("Wait !!!!. deleting the image");
    setTextColor("red");
    e.preventDefault();
    await axios
      .post(
        "http://localhost:8081/agent/delete/property/photo",
        {
          prop: getPropertyId(),
          photo: photoindex
        },

        {
          headers: {
            Authorization: fetchToken()
          }
        }
      )
      .then(function(response) {
        if (response.data.code == "20") {
          setPhotos(response.data.phostos);
          setText(response.data.message);
          setTextColor("#2ECC71");
          setProgressBar(false);
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

  const fetchPhotos = async e => {
    await axios
      .get("http://localhost:8081/single/property/photos/" + getPropertyId(), {
        headers: { Authorization: fetchToken() }
      })
      .then(response => {
        setPhotos(response.data);
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
    }
  };

  const getPropertyId = () => {
    return localStorage.getItem("property-id");
  };

  useEffect(() => {
    if (prop.location.param) {
      localStorage.setItem("property-id", prop.location.param.id);
    }
    fetchPhotos();
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
                      <section class="text-center prop-use img-upload">
                        <div class="row">
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
                              </h4>{" "}
                            </Modal.Body>
                            <Modal.Footer>
                              <Button variant="secondary" onClick={handleClose}>
                                Close
                              </Button>
                              <Button variant="primary" onClick={deletePhoto}>
                                Continue
                              </Button>
                            </Modal.Footer>
                          </Modal>

                          <div class="col-lg-10 text-left main-title">
                            <h4 style={{ textAlign: "center" }} class="title">
                              Edit your property images
                            </h4>
                            <hr />
                          </div>
                          <div class="col-lg-10 text-left">
                            <div class="row">
                              <div class="img-cont text-center">
                                <div class="img-holders row">
                                  {photos.map((photo, index) => (
                                    <div class="col-lg-3 col-md-4 col-sm-6 thumb-list">
                                      <img
                                        src={`data:image/png;base64,${photo}`}
                                        alt=""
                                        className="img-fluid"
                                      />
                                      <label>
                                        <span
                                          onClick={() => handleShow(index)}
                                          style={{
                                            borderRadius: "50px",
                                            paddingLeft: "10px",
                                            paddingRight: "10px",
                                            paddingTop: "6px",
                                            paddingBottom: "6px",
                                            marginTop: "5px"
                                          }}
                                          class="btn secondry"
                                        >
                                          delete
                                        </span>
                                      </label>
                                    </div>
                                  ))}
                                </div>
                                <hr />
                                <label>
                                  <Link
                                    to={{
                                      pathname: "/agent/add-image/property",
                                      state: {
                                        param: id
                                      }
                                    }}
                                  >
                                    <span
                                      style={{
                                        borderRadius: "50px"
                                      }}
                                      class="btn secondry"
                                    >
                                      Add a Picture
                                    </span>
                                  </Link>
                                </label>
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

export default EditPropertyPictures;
