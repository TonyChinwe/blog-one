import "./App.css";
import "./images/home-pic1.jpg";
import "./images/select-dropdown.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
//import "bootstrap/dist/css/layout.css";
//import "bootstrap/dist/css/font-awesome.css";

import Tilt from "react-vanilla-tilt";

import viewprof from "./images/viewpr.png";
import editpic from "./images/editprp.jpg";
import editprof from "./images/editpr.png";
import editprp from "./images/editp.svg";
import postpic from "./images/postp.svg";
import listingp from "./images/listp.svg";

import pic1 from "./images/tony.jpg";

import pic2 from "./images/tonypic2.jpg";
import logo2 from "./images/logo2.png";
import logo3 from "./images/logo3.png";
import React, { useState, useRef, useEffect } from "react";
import AgentNav from "./AgentNav";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function SetPropertyMainPicture() {
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
                            <h4 style={{ textAlign: "center" }} class="title">
                              Set your property main picture
                            </h4>
                            <hr />
                          </div>
                          <div class="col-lg-10 text-left">
                            <div class="row">
                              <div class="img-cont text-center">
                                <div class="img-holders row">
                                  <div class="col-lg-3 col-md-4 col-sm-6 thumb-list">
                                    <img src={pic1} alt="" class="img-fluid" />
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
                                    Add a Picture
                                  </span>{" "}
                                  <input type="file" />
                                </label>
                              </div>

                              <div class="btn-send">
                                <button class="btn primary btn-block">
                                  Post Pictures
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

export default SetPropertyMainPicture;
