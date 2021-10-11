import "./App.css";
import "./images/home-pic1.jpg";
import "./images/select-dropdown.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import Tilt from "react-vanilla-tilt";
import React, { useState, useRef, useEffect } from "react";
import banner from "./statepics/banner.jpg";
import enugu from "./statepics/enugu1.jpeg";
import enugu2 from "./statepics/enugumap1.png";
import pic2 from "./images/tonypic2.jpg";
import logo2 from "./images/logo2.png";
import logo3 from "./images/logo3.png";
import UserNav from "./UserNav";
import { Carousel } from "react-bootstrap";

import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";

function UserDashboard() {
  const [state, setState] = useState([]);

  return (
    <div>
      <UserNav />
      <section
        style={{ backgroundImage: "url(" + banner + ")" }}
        className="agent_bg"
      >
        <div className="container">
          <div className="row">
            <form class="offset-lg-2 col-lg-8 offset-md-0 col-md-12 offset-sm-0 col-sm-12 col-xs-12">
              <Tilt
                className="Tilt cardjava2"
                options={{ scale: 1 }}
                style={{ startX: 0 }}
              >
                <div className="justify-content-center">
                  <h3 style={{ color: "white" }} class="titl">
                    Real Estate and Properties in Nigeria for Sale and Rent
                  </h3>
                </div>
              </Tilt>
            </form>
          </div>
        </div>
      </section>

      <section class="user-cont" id="activity">
        <div class="container">
          <div class="row">
            <div class="navigation-main-cont">
              <div class="col-12 text-center navigation">
                <nav class="navbar" id="stickynav">
                  <ul class="page-nav nav nav-pills">
                    <li class="current">
                      <a href="#activity">My Activity</a>
                    </li>
                    <li>
                      <a href="#saved">saved properties</a>
                    </li>
                    <li>
                      <a href="#inspection">Inspection Scheduler </a>
                    </li>
                    <li>
                      <a href="#profile">My Profile</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <div className="col-xl-10 col-lg-12 offset-xl-1 offset-lg-0">
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <div className="user-history-prop-cont">
                    <div className="user-history-prop-main-cont">
                      <div className="row">
                        <a
                          style={{}}
                          href=""
                          className=" col-lg-3 col-md-4 offset-md-0 col-sm-8 offset-sm-2"
                        >
                          <img src={enugu} alt="" className="img-fluid" />
                        </a>

                        <div className="col-lg-9 col-md-8 col-sm-12 prop-history-meta">
                          <h4 className="price pull-left">N 200,000,000</h4>
                          <h4 className="title pull-rigth history-title">
                            3 Bedroom Flat / Apartment for Shortlet Old Ikoyi
                            Ikoyi Lagos asdfghj sdfgyhuio qwertyuio asdfghjkl
                            qwertyui qwertyui asdfghjk asdfghj zxcvbn qwertyui
                            asdfghjk asdfghj asdfghjk
                          </h4>
                          <h4 className="title pull-rigth prop-status">
                            <strong>Address: </strong>Newly built property at
                            the ikoyi estate in the sand of time wertyuio
                            zxcvbnm sdfghjk asdfghjk asdfghjk
                          </h4>

                          <h4 className="title pull-rigth prop-status">
                            <strong>Company: </strong>Newly built property at
                            the ikoyi estate in the sand of time wertyuio
                            zxcvbnm sdfghjk asdfghjk asdfghjk
                          </h4>

                          <h4 className="titlepull-rigth prop-status">
                            <strong>Summary:</strong>Newly built property at the
                            ikoyi estate in the sand of time wertyuio zxcvbnm
                            sdfghjk asdfghjk asdfghjk
                          </h4>
                          <h4 className="title prop-details pull-left">
                            <strong>Details</strong>
                            <span className="prop-aminities">
                              <span>
                                <i className="fa fa-bath"></i>2 bed
                              </span>
                              <span>
                                <i className="fa fa-bath"></i>2 bath
                              </span>
                              <span>
                                <i className="fa fa-bath"></i>4 toilet
                              </span>
                            </span>
                            <a href="" className="lnk">
                              View More Details…
                            </a>
                          </h4>
                          <div className="footer pull-left">
                            <a
                              href=""
                              style={{ marginLeft: "10px" }}
                              className="pull-rigth btn primary"
                            >
                              View property
                            </a>

                            <a
                              href=""
                              style={{ marginLeft: "10px" }}
                              className="pull-rigth btn primary"
                            >
                              Agent's contact
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                ></div>
                <div
                  className="tab-pane fade"
                  id="nav-contact"
                  role="tabpanel"
                  aria-labelledby="nav-contact-tab"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="fetured-properties" id="saved">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h2 class="title text-center">
                Saved Properties (10)<span class="hr"></span>
              </h2>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 pro-cont">
              <div class="property-bg">
                <a href="" class="image-bg">
                  <img src={enugu} alt="" class="img-fluid" />
                  <span>₦ 200,000,000</span>
                </a>

                <div class="property-content text-center">
                  <h4 class="title">
                    4 bedroom duplex for sale agungi lekki lagos
                  </h4>
                  <p>
                    <span>
                      <i class="fa fa-bath"></i>2 bed
                    </span>
                    <span>
                      <i class="fa fa-bath"></i>5 bath
                    </span>
                    <span>
                      <i class="fa fa-bath"></i>3 toilet
                    </span>
                  </p>
                  <a href="" class="btn primary">
                    View Property
                  </a>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 pro-cont">
              <div class="property-bg">
                <a href="" class="image-bg">
                  <img src={enugu} alt="" class="img-fluid" />
                  <span>₦ 200,000,000</span>
                </a>
                <div class="property-content text-center">
                  <h4 class="title">
                    4 bedroom duplex for sale agungi lekki lagos
                  </h4>
                  <p>
                    <span>2 bed</span>
                    <span>5 bath</span>
                    <span>3 toilet</span>
                  </p>
                  <a href="" class="btn primary">
                    View Property
                  </a>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 pro-cont">
              <div class="property-bg">
                <a href="" class="image-bg">
                  <img src={enugu} alt="" class="img-fluid" />
                  <span>₦ 200,000,000</span>
                </a>
                <div class="property-content text-center">
                  <h4 class="title">
                    4 bedroom duplex for sale agungi lekki lagos
                  </h4>
                  <p>
                    <span>
                      <i class="fa fa-bath"></i>2 bed
                    </span>
                    <span>
                      <i class="fa fa-bath"></i>5 bath
                    </span>
                    <span>
                      <i class="fa fa-bath"></i>3 toilet
                    </span>
                  </p>
                  <a href="" class="btn primary">
                    View Property
                  </a>
                </div>
              </div>
            </div>

            <div class="col-xl-3 d-xl-block col-md-6 col-sm-6 d-lg-none pro-cont">
              <div class="property-bg">
                <a href="" class="image-bg">
                  <img src={enugu} alt="" class="img-fluid" />
                  <span>₦ 200,000,000</span>
                </a>

                <div class="property-content text-center">
                  <h4 class="title">
                    4 bedroom duplex for sale agungi lekki lagos
                  </h4>
                  <p>
                    <span>
                      <i class="fa fa-bath"></i>2 bed
                    </span>
                    <span>
                      <i class="fa fa-bath"></i>5 bath
                    </span>
                    <span>
                      <i class="fa fa-bath"></i>3 toilet
                    </span>
                  </p>
                  <a href="" class="btn primary">
                    View Property
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UserDashboard;
