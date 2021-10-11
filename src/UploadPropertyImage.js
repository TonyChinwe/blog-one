import "./App.css";
import "./images/home-pic1.jpg";
import "./images/select-dropdown.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import Tilt from "react-vanilla-tilt";
import pic1 from "./images/tony.jpg";
import React, { useState, useRef, useEffect } from "react";
import AgentNav from "./AgentNav";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function UploadPropertyImage(props) {
  //alert(props.history.location.id);
  const history = useHistory();

  const [progressBar, setProgressBar] = useState(false);
  const [propertyPicture, setPropertyPicture] = useState(null);
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");
  const [textColor, setTextColor] = useState("red");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handlePicture = e => {
    let picture = e.target.files[0];
    setPropertyPicture(picture);
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const fetchToken = () => {
    return localStorage.getItem("jwt");
  };

  const uploadImagePropertyImage = e => {
    handleShow();
    uploadPicture(e);
  };

  const uploadPicture = async e => {
    setProgressBar(true);
    setText("Wait!!!!!. Uploading the property");
    setTextColor("#F4511E");
    let formData = new FormData();
    formData.append("file", propertyPicture);
    e.preventDefault();
    await axios
      .post(
        "http://localhost:8081/property-upload/picture/" +
          props.history.location.id,
        formData,
        {
          headers: {
            Authorization: fetchToken(),
            "Content-Type": "multipart/form-data"
          }
        }
      )
      .then(response => {
        setProgressBar(false);
        setTextColor("#2ECC71");
        setText("Image uploaded successfully");
      })
      .catch(function(err) {
        setProgressBar(false);
        setTextColor("red");
        // setTextColor("#FF0000");
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

  useEffect(() => {
    if (props.history.location.id == undefined) {
      history.push("/agent/post-property");
    }
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

                            <h4 style={{ textAlign: "center" }} class="title">
                              Kindly upload your property images. For property
                              with multiple pictures, you can upload them one
                              after another.
                            </h4>

                            <hr />
                          </div>
                          <div class="col-lg-10 text-left">
                            <div class="row">
                              <div class="img-cont text-center">
                                <div class="img-holders row">
                                  <div class="col-12 thumb-list">
                                    <img src={image} alt="" class="img-fluid" />
                                  </div>
                                </div>
                                <hr />
                                <label>
                                  <span
                                    style={{
                                      borderRadius: "50px"
                                    }}
                                    class="btn secondry"
                                  >
                                    Select a Picture
                                  </span>{" "}
                                  <input
                                    onChange={e => {
                                      handlePicture(e);
                                    }}
                                    type="file"
                                  />
                                </label>
                              </div>

                              <div class="btn-send">
                                <button
                                  onClick={uploadImagePropertyImage}
                                  class="btn primary btn-block"
                                >
                                  Upload Image
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

export default UploadPropertyImage;
