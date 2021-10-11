import "./App.css";
import "./images/home-pic1.jpg";
import "./images/select-dropdown.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";

import { Modal } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Tilt from "react-vanilla-tilt";
import pic1 from "./images/tony.jpg";
import logo3 from "./images/logo3.png";
import React, { useState, useRef, useEffect } from "react";
import UserNav from "./UserNav";
import { Button } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { NavbarBrand } from "react-bootstrap";
import { Container } from "react-bootstrap";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function ListingPage(prop) {
  const history = useHistory();
  const [progressBar, setProgressBar] = useState(false);
  const [text, setText] = useState("");
  const [textColor, setTextColor] = useState("black");
  const [smShow, setSmShow] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  ////////////////
  const [mode, setMode] = useState("Select Mode");
  const [lga, setLga] = useState("Select Locality");
  const [lgas, setLgas] = useState([]);
  const [state, setState] = useState("");
  const [p1, setP1] = useState(-1);
  const [p2, setP2] = useState(-1);
  const [bed, setBed] = useState(-1);
  ////////////////////

  const [properties, setProperties] = useState([]);
  const [wtype, setWtype] = useState([]);
  const [phone, setPhone] = useState();
  const [photoc, setPhotoc] = useState([]);
  const [pshow, setPshow] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const phandleClose = () => setPshow(false);
  const phandleShow = index => {
    if (localStorage.getItem("login") == "yes") {
      setPhone(properties[index].phone);
    } else {
      setPhone("Please login to start seeing and recieving agent contacts");
    }
    setPshow(true);
  };

  const handleShow = index => {
    setPhotoc(properties[index].photos);
    setShow(true);
  };
  const fetchStateName = () => {
    return localStorage.getItem("state-name");
  };

  const fetchMode = async e => {
    await axios
      .get("http://localhost:8081/managed/mode")
      .then(response => {
        setWtype(response.data);
      })
      .catch(function(err) {});
  };

  const fetchProperty = async e => {
    await axios
      .get("http://localhost:8081/property/state/" + fetchStateName())
      .then(response => {
        setProperties(response.data);
      })
      .catch(function(err) {});
  };

  const searchProperty = async e => {
    setProgressBar(true);
    e.preventDefault();
    await axios
      .post("http://localhost:8081/user/property/search", {
        state: localStorage.getItem("state-name"),
        lga: lga,
        mode: mode,
        bed: bed,
        p1: p1,
        p2: p2
      })
      .then(function(response) {
        setProgressBar(false);
        setProperties(response.data);
        setLga("Select Locality");
        setMode("Select Mode");
      })
      .catch(function(err) {
        setText(err.message);
      });
  };

  const fetchLga = async e => {
    await axios
      .get(
        "http://localhost:8081/managed/axises/" +
          localStorage.getItem("state-name")
      )
      .then(response => {
        setLgas(response.data);
      })
      .catch(function(err) {});
  };

  useEffect(() => {
    if (prop.location.param) {
      localStorage.setItem("state-name", prop.location.param);
    }
    fetchMode();
    fetchProperty();
    fetchLga();
  }, []);

  return (
    <div>
      <UserNav />

      <header style={{ backgroundColor: "#343434" }} className="primary">
        <Navbar bg="#343434" expand="lg">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown
                  onSelect={selectedKey => setMode(selectedKey)}
                  title={mode}
                  id="basic-nav-dropdown"
                >
                  {wtype &&
                    wtype.map(type => (
                      <NavDropdown.Item eventKey={type.name} key={type.id}>
                        {type.name}
                      </NavDropdown.Item>
                    ))}
                </NavDropdown>

                <NavDropdown
                  onSelect={selectedKey => setLga(selectedKey)}
                  id="basic-nav-dropdown"
                  title={lga}
                >
                  {lgas &&
                    lgas.map(city => (
                      <NavDropdown.Item eventKey={city.name} key={city.key}>
                        {city.name}
                      </NavDropdown.Item>
                    ))}
                </NavDropdown>

                <Nav.Link>
                  <input
                    onChange={e => {
                      setBed(e.target.value);
                    }}
                    style={{
                      marginLeft: "5px",
                      minHeight: "40px"
                    }}
                    type="number"
                    placeholder="Bed"
                  />
                </Nav.Link>

                <Nav.Link>
                  <input
                    onChange={e => {
                      setP1(e.target.value);
                    }}
                    style={{ minHeight: "40px" }}
                    type="number"
                    placeholder="Min Price"
                  />
                </Nav.Link>
                <Nav.Link>
                  <input
                    onChange={e => {
                      setP2(e.target.value);
                    }}
                    style={{ minHeight: "40px" }}
                    type="number"
                    placeholder="Max Price"
                  />
                </Nav.Link>
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
      </header>

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
                      <div>{phone}</div>
                      <h3 style={{ color: textColor }}>{text}</h3>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={phandleClose}>
                        Close
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
                            {property.title}
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

                            <a
                              onClick={() => handleShow(index)}
                              style={{
                                marginRight: "5px",
                                marginBottom: "5px"
                              }}
                              className="btn secondry float-left"
                            >
                              view property
                            </a>

                            <a
                              onClick={() => phandleShow(index)}
                              style={{
                                marginRight: "5px",
                                marginBottom: "5px"
                              }}
                              className="btn secondry float-left"
                            >
                              view contacts
                            </a>

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

export default ListingPage;
