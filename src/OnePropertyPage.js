import "./App.css";
import "./images/home-pic1.jpg";
import "./images/select-dropdown.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
//import "bootstrap/dist/css/layout.css";
//import "bootstrap/dist/css/font-awesome.css";
import { Modal } from "react-bootstrap";
import { Carousel } from "react-bootstrap";

import Tilt from "react-vanilla-tilt";
import pic1 from "./images/tony.jpg";
import pic2 from "./images/tonypic2.jpg";
import logo2 from "./images/logo2.png";
import logo3 from "./images/logo3.png";
import React, { useState, useRef, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function OnePropertyPage() {
  const [smShow, setSmShow] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  return (
    <div>
      <section
        className="property-details developers-details"
        data-spy="scroll"
        data-target="#navbar-example2"
        data-offset="0"
      >
        <div className="thumb-list">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            {/* dfgh */}
            <Carousel>
              <Carousel.Item>
                <a>
                  {" "}
                  <img
                    onClick={() => setSmShow(true)}
                    src={pic1}
                    alt=""
                    className="d-block w-100"
                  />
                </a>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  onClick={() => setSmShow(true)}
                  src={pic1}
                  alt=""
                  className="d-block w-100"
                />
              </Carousel.Item>
            </Carousel>

            <div class="dev-meta">
              <div class=" container">
                <div class="row">
                  <div class="col-lg-8">
                    <h3 class="title price float-left">
                      Click on the slide to have a better view
                    </h3>

                    <h3 class="title price float-md-right">₦ 20,000,000</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="row">
                <div class="col-lg-12 navigation-main-cont">
                  <div class="navigation">
                    <nav class="navbar" id="stickynav">
                      <ul class="float-left nav nav-pills">
                        <li class="nav-item">
                          <a href="#prop-details" class="nav-link">
                            Overview
                          </a>
                        </li>
                        <li class="nav-item">
                          <a href="#neighbourhood" class="nav-link">
                            Unit & Price
                          </a>
                        </li>
                        <li class="nav-item">
                          <a href="#home-index" class="nav-link">
                            Legal Documents
                          </a>
                        </li>
                        <li class="nav-item">
                          <a href="#home-index" class="nav-link">
                            About project
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>

              <div class="main-prop-details">
                <div class="row">
                  <div class="col-lg-12 dev-status">
                    <ul>
                      <li>
                        <img
                          src="images/developers/project-status-img.svg"
                          alt=""
                        />
                        <div class="pro-sum-cont">
                          <h4 class="title">Project Status</h4>
                          <p>Completed</p>
                        </div>
                      </li>
                      <li>
                        <img
                          src="images/developers/total-unit-img.svg"
                          alt=""
                        />
                        <div class="pro-sum-cont">
                          <h4 class="title">Total Units</h4>
                          <p>14</p>
                        </div>
                      </li>
                      <li>
                        <img src="images/developers/unitsize-img.svg" alt="" />
                        <div class="pro-sum-cont">
                          <h4 class="title">Unit Size</h4>
                          <p>350sq metres</p>
                        </div>
                      </li>
                      <li>
                        <img
                          src="images/developers/possession-img.svg"
                          alt=""
                        />
                        <div class="pro-sum-cont">
                          <h4 class="title">Possession</h4>
                          <p>2017 (Available Now)</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="col-12">
                    <div class="overview">
                      <p>
                        Tolet.com.ng is the leading real estate property center
                        platform in Nigeria. with a web- based platform for
                        property retails and sales. we provide user with the
                        best property search experience both online and offline
                        by connecting them with legitimate and verified real
                        estate agents.
                      </p>
                      <p>
                        Tolet.com.ng is the leading real estate property center
                        platform in Nigeria. with a web- based platform for
                        property retails and sales. we provide user with the
                        best property search experience both online and offline
                        by connecting them with legitimate and verified real
                        estate agents.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-12">
                    <div class="tab-nav-cont text-center">
                      <ul
                        style={{ alignItems: "right" }}
                        class="nav nav-tabs"
                        id="myTab"
                        role="tablist"
                      >
                        <li class="nav-item">
                          <a
                            class="nav-link active"
                            id="bed1-tab"
                            data-toggle="tab"
                            href="#bed1"
                            role="tab"
                            aria-controls="bed1"
                            aria-selected="true"
                          >
                            N3,500,0000{" "}
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div class="tab-content" id="nav-tabContent">
                      <div
                        class="tab-pane fade show active"
                        id="bed1"
                        role="tabpanel"
                        aria-labelledby="bed1-tab"
                      >
                        <div class="row">
                          <div class="col-lg-7 main-content">
                            <h4 class="title prop-title">
                              <strong>4 Bedroom Detached House</strong>
                            </h4>
                            <h5 class="title float-left">(Area 350sq.ft)</h5>

                            <ul>
                              <li>
                                <strong>No of Bedrooms 3 </strong>
                              </li>
                              <li>
                                <strong>No of Bathroom 3</strong>
                              </li>
                              <li>
                                <strong>Furnished </strong>
                              </li>
                              <li>
                                <strong>Possession Ready to move</strong>
                              </li>
                            </ul>

                            <p>
                              This is a residence located in Victoria Island. It
                              has all the necessary amenities and more - 24/7
                              electricity, hot water, cable TV, laundry and
                              housekeeping services. This room is fully
                              furnished and can accommodate two people. Guests
                              have access to the cozy, comfortable, communal
                              lounge area. .
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-12">
                    <div class="investment-analysis">
                      <h4 class="title">
                        About this project <span class="hr"></span>
                      </h4>
                      <p>
                        <strong>Overview</strong>
                      </p>
                      <p>
                        This is a residence located in Victoria Island. It has
                        all the necessary amenities and more - 24/7 electricity,
                        hot water, cable TV, laundry and housekeeping services.
                        This room is fully furnished and can accommodate two
                        people. Guests have access to the cozy, comfortable,
                        communal lounge area. This is a residence located in
                        Victoria Island. It has all the necessary amenities and
                        more - 24/7 electricity, hot water, cable TV, laundry
                        and housekeeping services. This room is fully furnished
                        and can accommodate two people. Guests have access to
                        the cozy, comfortable, communal lounge area.
                      </p>

                      <p>
                        <strong>Project Details</strong>
                      </p>
                      <div class="readmore">
                        <p>
                          This is a residence located in Victoria Island. It has
                          all the necessary amenities and more - 24/7
                          electricity, hot water, cable TV, laundry and
                          housekeeping services. This room is fully furnished
                          and can accommodate two people. Guests have access to
                          the cozy, comfortable, communal lounge area. This is a
                          residence located in Victoria Island. It has all the
                          necessary amenities and more - 24/7 electricity, hot
                          water, cable TV, laundry and housekeeping services.
                          This room is fully furnished and can accommodate two
                          people. Guests have access to the cozy, comfortable,
                          communal lounge area.
                        </p>

                        <p>
                          This is a residence located in Victoria Island. It has
                          all the necessary amenities and more - 24/7
                          electricity, hot water, cable TV, laundry and
                          housekeeping services. This room is fully furnished
                          and can accommodate two people. Guests have access to
                          the cozy, comfortable, communal lounge area. This is a
                          residence located in Victoria Island. It has all the
                          necessary amenities and more - 24/7 electricity, hot
                          water, cable TV, laundry and housekeeping services.
                          This room is fully furnished and can accommodate two
                          people. Guests have access to the cozy, comfortable,
                          communal lounge area.
                        </p>
                      </div>

                      <p>
                        <strong>Highlights</strong>
                      </p>
                      <p>
                        This is a residence located in Victoria Island. It has
                        all the necessary amenities and more - 24/7 electricity,
                        hot water, cable TV, laundry and housekeeping services.
                        This room is fully furnished and can accommodate two
                        people. Guests have access to the cozy, comfortable,
                        communal lounge area. This is a residence located in
                        Victoria Island. It has all the necessary amenities and
                        more - 24/7 electricity, hot water, cable TV, laundry
                        and housekeeping services. This room is fully furnished
                        and can accommodate two people. Guests have access to
                        the cozy, comfortable, communal lounge area.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-12">
                    <div class="amenities">
                      <h4 class="title">
                        Amenities <span class="hr"></span>
                      </h4>

                      <ul>
                        <li class="active">
                          <i></i>
                          <p>Power Back Up</p>
                        </li>
                        <li class="active">
                          <i></i>
                          <p>Piped Gas</p>
                        </li>
                        <li class="active">
                          <i></i>
                          <p>No Swimming Pool</p>
                        </li>
                        <li>
                          <i></i>
                          <p>No Club House</p>
                        </li>
                        <li>
                          <i></i>
                          <p>No Lift</p>
                        </li>
                        <li>
                          <i></i>
                          <p>No Security</p>
                        </li>
                        <li>
                          <i></i>
                          <p>No Reserved Parking</p>
                        </li>
                        <li>
                          <i></i>
                          <p>No Visitor Parking</p>
                        </li>
                        <li>
                          <i></i>
                          <p>No Intercom Facility</p>
                        </li>
                        <li>
                          <i></i>
                          <p>No Maintenance Staff</p>
                        </li>
                        <li>
                          <i></i>
                          <p>No Bank & ATM</p>
                        </li>
                        <li>
                          <i></i>
                          <p>No Gymnasium</p>
                        </li>
                      </ul>

                      <a href="" class="readmore float-right">
                        +More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: "15%" }} class="col-lg-4  sidebar">
              <div class="row">
                <div class="col-12">
                  <div class="view_agent_cont text-center">
                    <div class="main_agent_cont text-center">
                      <span class="agent-label">Marketed By</span>
                      <div>
                        <a href="" class="agent-logo">
                          <img
                            src="images/agent-logos/img-1.jpg"
                            alt=""
                            class="img-fluid"
                          />
                        </a>
                      </div>
                      <h4 class="title">
                        <a href="">Affadble Global Realty</a>
                        <span class="verification-mark">
                          <img
                            src="images/verification.svg"
                            alt=""
                            class="img-fluid"
                          />
                        </span>
                      </h4>
                      <div class="regulatories">
                        <span class="verify-logo">
                          <img
                            src="images/verification-logo/aesn.png"
                            alt=""
                            class="img-fluid"
                          />
                        </span>
                        <span class="verify-logo">
                          <img
                            src="images/verification-logo/ercaan.png"
                            alt=""
                            class="img-fluid"
                          />
                        </span>
                        <span class="verify-logo">
                          <img
                            src="images/verification-logo/niesv.png"
                            alt=""
                            class="img-fluid"
                          />
                        </span>
                      </div>
                      <p class="review-count">0 Review</p>
                      <p class="rate-label">Rating</p>
                      <div class="rating-stars">
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                      </div>
                      <h4 class="title call-caption">
                        want to inspect this property?
                        <small>View Agent Phone Number to Call or Chat</small>
                      </h4>
                    </div>
                    <a
                      onClick={() => setShowPhone(true)}
                      class="btn btn-block cont-btn"
                      id="agent-form-cont"
                      data-toggle="collapse"
                      href="#agent-form"
                      role="button"
                      aria-expanded="false"
                      aria-controls="agent-form"
                    >
                      View Phone Number{" "}
                    </a>
                    <div class="collapse" id="agent-form">
                      <div class="agent-contact-container">
                        <h5 class="title">View agent's phone number now</h5>

                        <form class="text-left" id="agent-contact-form">
                          <div class="row">
                            <div class="col-lg-12">
                              <div class="inline-label">I am an</div>

                              <div class="custom-control custom-radio custom-control-inline">
                                <input
                                  type="radio"
                                  id="customRadioInline1"
                                  name="customRadioInline1"
                                  class="custom-control-input"
                                />
                                <label
                                  class="custom-control-label"
                                  for="customRadioInline1"
                                >
                                  Agent
                                </label>
                              </div>
                              <div class="custom-control custom-radio custom-control-inline">
                                <input
                                  type="radio"
                                  id="customRadioInline2"
                                  name="customRadioInline1"
                                  class="custom-control-input"
                                />
                                <label
                                  class="custom-control-label"
                                  for="customRadioInline2"
                                >
                                  Individual
                                </label>
                              </div>
                            </div>

                            <label class="col-lg-12">
                              Full Name
                              <input type="text" class="form-control" />
                            </label>
                            <span class="col-lg-12">Phone</span>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 select-label">
                              <select class="iconSelectpicker">
                                <option data-class="flag flag-icon-background flag-icon-ng">
                                  +234
                                </option>
                                <option data-class="flag flag-icon-background flag-icon-us">
                                  +254
                                </option>
                                <option data-class="flag flag-icon-background flag-icon-sn">
                                  +264
                                </option>
                              </select>
                            </div>
                            <label class="col-lg-8 col-md-8 col-sm-8 col-xs-8 numb-cont">
                              <input type="text" class="form-control" />
                            </label>
                            <label class="col-lg-12">
                              Email
                              <input type="text" class="form-control" />
                            </label>

                            <div class="col-lg-12 agreement_cont">
                              <div class="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  class="custom-control-input"
                                  id="customCheckDisabled"
                                />
                                <label
                                  class="custom-control-label"
                                  for="customCheckDisabled"
                                >
                                  I agreed to be contacted by other agents with
                                  regards to my request
                                </label>
                              </div>
                            </div>
                            <div class="col-lg-12">
                              <button
                                class="btn primary btn-block"
                                data-toggle="modal"
                                data-target="#sim-popup"
                                type="button"
                              >
                                Get Phone Number
                              </button>
                              <button
                                class="btn btn-block cancle"
                                role="button"
                                aria-expanded="false"
                                aria-controls="collapseExample"
                                data-toggle="collapse"
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a href="" class="ads text-center">
                <img src="images/ads/img-1.jpg" alt="" class="img-fluid" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* st2 */}

      <Modal
        size="md"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Project Photos (<span>3</span>){" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
            <Carousel.Item>
              <img src={pic1} alt="" className="d-block w-100" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={pic1} alt="" className="d-block w-100" />
            </Carousel.Item>
          </Carousel>
        </Modal.Body>
      </Modal>

      <Modal
        size="sm"
        show={showPhone}
        onHide={() => setShowPhone(false)}
        aria-labelledby="show-phone"
      >
        <Modal.Header closeButton>
          <Modal.Title id="show-phone">Agent Contact:</Modal.Title>
        </Modal.Header>
        <Modal.Body>08060229451</Modal.Body>
      </Modal>

      {/* st1 */}
    </div>
  );
}

export default OnePropertyPage;
