import "./App.css";
import "./images/home-pic1.jpg";
import "./images/select-dropdown.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";

import { Modal } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { NavbarBrand } from "react-bootstrap";
import { Container } from "react-bootstrap";

import { Carousel } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Tilt from "react-vanilla-tilt";
import pic1 from "./images/tony.jpg";
import logo3 from "./images/logo3.png";
import React, { useState, useRef, useEffect } from "react";
import AgentNav from "./AgentNav";
import { Button } from "react-bootstrap";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function AgentListingPage(props) {
  const history = useHistory();

  const publish = "publish(show)";
  const unpublish = "unpublish(hide)";
  const [progressBar, setProgressBar] = useState(false);
  const [text, setText] = useState("");
  const [textColor, setTextColor] = useState("black");
  const [smShow, setSmShow] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const [type, setType] = useState("Select Type");
  const [ptext, setPtext] = useState("Select published State");

  const [properties, setProperties] = useState([]);
  const [wtype, setWtype] = useState([]);
  const [photoc, setPhotoc] = useState([]);
  const [pid, setPid] = useState(-1);

  const [pshow, setPshow] = useState(false);
  const phandleClose = () => setPshow(false);
  const phandleShow = index => {
    setPid(properties[index].id);
    setText(
      "Are you sure you want to publish the property with the Id of " +
        properties[index].id
    );
    setPshow(true);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = index => {
    setPhotoc(properties[index].photos);
    setShow(true);
  };

  const fetchToken = () => {
    return localStorage.getItem("jwt");
  };

  const fetchAgentId = () => {
    return localStorage.getItem("agentId");
  };

  const searchProperty = async e => {
    setProgressBar(true);
    e.preventDefault();
    await axios
      .post(
        "http://localhost:8081/agent/property/search",
        {
          id: fetchAgentId(),
          published: ptext,
          type: type
        },
        {
          headers: {
            Authorization: fetchToken()
          }
        }
      )
      .then(function(response) {
        setProgressBar(false);
        setProperties(response.data);
        setType("Select Type");
        setPtext("Select published State");
      })
      .catch(function(err) {
        setText(err.message);
      });
  };

  const fetchType = async e => {
    await axios
      .get("http://localhost:8081/managed/type")
      .then(response => {
        setWtype(response.data);
      })
      .catch(function(err) {});
  };

  const publishProperty = async e => {
    setProgressBar(true);
    setText("Wait !!!!. Trying to publish the property");
    setTextColor("red");
    await axios
      .get(
        "http://localhost:8081/agent/publish/property/" + pid,

        {
          headers: { Authorization: fetchToken() }
        }
      )
      .then(response => {
        if (response.data.code == 20) {
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
        setTextColor("red");
        setProgressBar(false);
        setText(err.message);
      });
  };

  const fetchProperty = async e => {
    await axios
      .get(
        "http://localhost:8081/agent/property/" + fetchAgentId(),

        {
          headers: { Authorization: fetchToken() }
        }
      )
      .then(response => {
        setProperties(response.data);
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

  useEffect(() => {
    fetchProperty();
    fetchType();
    checkAgentLogin();
  }, []);

  return (
    <div>
      <AgentNav />
      <section className="filter result-page">
        <div className="container">
          <div className="row">
            <form className="col-lg-12">
              <div className="row">
                <Navbar bg="light" expand="lg">
                  <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="me-auto">
                        <NavDropdown
                          onSelect={selectedKey => setType(selectedKey)}
                          title={type}
                          id="basic-nav-dropdown"
                        >
                          <NavDropdown.Item eventKey="Non">
                            Non
                          </NavDropdown.Item>

                          {wtype &&
                            wtype.map(type => (
                              <NavDropdown.Item
                                eventKey={type.name}
                                key={type.id}
                              >
                                {type.name}
                              </NavDropdown.Item>
                            ))}
                        </NavDropdown>

                        <NavDropdown
                          onSelect={selectedKey => setPtext(selectedKey)}
                          title={ptext}
                          id="basic-nav-dropdown"
                        >
                          <NavDropdown.Item eventKey="Non">
                            Non
                          </NavDropdown.Item>

                          <NavDropdown.Item eventKey="Published">
                            Published
                          </NavDropdown.Item>

                          <NavDropdown.Item eventKey="Unpublished">
                            Unpublished
                          </NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link>
                          <button
                            onClick={searchProperty}
                            style={{ maxHeight: "50px" }}
                            class="primary btn "
                          >
                            search
                          </button>
                        </Nav.Link>
                      </Nav>
                    </Navbar.Collapse>
                  </Container>
                </Navbar>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="result-listing">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 main-listing-cont">
              <div className="row">
                <div className="secondry-filter col-lg-12">
                  <div className="sec-filter-bg">
                    <ul>
                      <li className="active">
                        <a href="">{properties.length} Properties</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-12">
                  <div className="jumbotron">
                    <p>
                      {" "}
                      These are your properties based on the search criteria you
                      provided
                    </p>
                    <h6 className="active">
                      {" "}
                      Click on the pictures to view in a full screen mode
                    </h6>
                  </div>
                </div>

                <div className="col-lg-12">
                  <Modal show={pshow} onHide={phandleClose}>
                    <Modal.Header closeButton></Modal.Header>
                    <Modal.Body>
                      <div>
                        {progressBar && <ProgressBar animated now={100} />}
                      </div>
                      <h5 style={{ color: textColor }} className="title">
                        {text}
                      </h5>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={phandleClose}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={publishProperty}>
                        Continue
                      </Button>
                    </Modal.Footer>
                  </Modal>

                  <Modal size="lg" show={show} onHide={handleClose}>
                    <Modal.Header closeButton></Modal.Header>
                    <Modal.Body>
                      <Carousel>
                        {photoc.map(photo => (
                          <Carousel.Item>
                            <img
                              src={`data:image/png;base64,${photo}`}
                              alt=""
                              className="img-fluid"
                            />
                          </Carousel.Item>
                        ))}
                      </Carousel>
                    </Modal.Body>
                    <Modal.Footer></Modal.Footer>
                  </Modal>

                  {properties &&
                    properties.map((property, index) => (
                      <div className="property-bg premium luxury">
                        <div className="row">
                          <h2 className="title prop-title col-lg-8 offset-lg-4 col-md-8 offset-md-4 col-sm-7 offset-sm-5 col-xs-12">
                            <a href="">{property.title}</a>
                          </h2>
                          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-5 col-xs-12 image-bg">
                            <Carousel>
                              {property.photos.map(photo => (
                                <Carousel.Item>
                                  <img
                                    onClick={() => handleShow(index)}
                                    src={`data:image/png;base64,${photo}`}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </Carousel.Item>
                              ))}
                            </Carousel>
                          </div>
                          <span className="tag"></span>

                          <div className="col-lg-8 col-md-8 col-sm-7 col-xs-12 prop-meta-data text-left">
                            <p className="prop-price">₦ {property.price}</p>
                            <h4 className="title prop-sub-title">
                              {property.summary}
                            </h4>

                            <p className="pro-location">{property.address}</p>
                            <p className="pro-description">
                              {property.description}
                            </p>
                            <p className="prop-date pull-left">
                              Posted: {property.updatedOn}
                            </p>

                            <br className="clr" />

                            <Link
                              to={{
                                pathname: "/agent/edit-property",
                                param: property
                              }}
                            >
                              <a
                                style={{
                                  marginRight: "5px",
                                  marginBottom: "5px"
                                }}
                                href=""
                                className="btn secondry float-left"
                              >
                                Edit the Property
                              </a>
                            </Link>

                            <Link
                              to={{
                                pathname: "/agent/edit-property-pictures",
                                param: property
                              }}
                            >
                              <a
                                href=""
                                style={{
                                  marginRight: "5px",
                                  marginBottom: "5px"
                                }}
                                className="btn secondry float-left"
                              >
                                Edit picture
                              </a>
                            </Link>

                            <a
                              onClick={() => phandleShow(index)}
                              style={{ marginBottom: "5px" }}
                              className="btn secondry float-left"
                            >
                              {property.published ? unpublish : publish}
                            </a>

                            <span className="tag">{property.leadCount}</span>

                            <small className="float-right agent-title">
                              Marketed By{" "}
                              <a href="" className="lnk">
                                <strong>{property.name}</strong>
                              </a>
                            </small>

                            <div className="prop-features">
                              <span className="prop-aminities float-left">
                                <span>
                                  <i className="fa fa-bath"></i>

                                  {property.bed}
                                </span>
                                <span>
                                  <i className="fa fa-bath"></i>
                                  {property.bath}
                                </span>
                                <span>
                                  <i className="fa fa-bath"></i>
                                  {property.toilet}
                                </span>

                                <span>
                                  <i className="fa fa-bath"></i>
                                  {property.kitchen}
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-12">
                            <hr className="prop_div" />
                          </div>
                          <ul className="col-xs-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 thumbnails_list">
                            {property.photos.map(photo => (
                              <li>
                                <img
                                  src={`data:image/png;base64,${photo}`}
                                  alt=""
                                  className="img-fluid"
                                />
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AgentListingPage;
