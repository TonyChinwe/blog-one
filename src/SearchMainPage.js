import "./App.css";
import "./images/home-pic1.jpg";
import "./images/select-dropdown.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import Tilt from "react-vanilla-tilt";
import React, { useState, useRef, useEffect } from "react";
import banner from "./statepics/banner.jpg";
import anamb from "./statepics/anamap2.jpeg";
import abia from "./statepics/abiamap1.jpeg";
import abuja from "./statepics/abuja.jpeg";
import adamawa from "./statepics/adamawa.png";
import akwaibom from "./statepics/akawaibom.gif";
import bauchi from "./statepics/bauchi.jpeg";
import bayelsa from "./statepics/bayelsa.jpeg";
import benue from "./statepics/benue.gif";
import borno from "./statepics/borno.jpeg";
import cross from "./statepics/cross.png";
import delta from "./statepics/deltamap3.jpeg";
import ebonyi from "./statepics/ebonyimap2.jpeg";
import edo from "./statepics/edomap1.png";
import ekiti from "./statepics/ekiti.gif";
import enugu from "./statepics/enugu1.jpeg";
import enugu2 from "./statepics/enugumap1.png";
import gombe from "./statepics/gombe.jpeg";
import imo from "./statepics/imomap1.png";
import jigawa from "./statepics/jigawa.jpeg";
import kaduna from "./statepics/kaduna.jpeg";
import kano from "./statepics/kano.gif";
import katsina from "./statepics/katsina.jpeg";
import kebbi from "./statepics/kebbi.jpeg";
import kogi from "./statepics/kogi.jpeg";
import kwara from "./statepics/kwara.png";
import lagos from "./statepics/lagos.jpeg";
import niger from "./statepics/niger.jpeg";
import ogun from "./statepics/ogun.jpeg";
import ondo from "./statepics/ondomap1.png";
import oshun from "./statepics/oshun.gif";
import oyo from "./statepics/oyo.png";
import platue from "./statepics/platue.jpeg";
import river from "./statepics/rivers.jpeg";
import sokoto from "./statepics/sokoto.jpeg";
import taraba from "./statepics/taraba.jpeg";
import yobe from "./statepics/yobe.gif";
import zamfara from "./statepics/zamfara.jpeg";
import pic2 from "./images/tonypic2.jpg";
import logo2 from "./images/logo2.png";
import logo3 from "./images/logo3.png";
import banner2 from "./images/pr11.jpeg";
import banner3 from "./images/pr12.jpeg";

import UserNav from "./UserNav";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";

function SearchMainPage() {
  const [name, setName] = useState([
    { name: "", rent: 0, sale: 0 },
    { name: "", rent: 0, sale: 0 },
    { name: "", rent: 0, sale: 0 },
    { name: "", rent: 0, sale: 0 },
    { name: "", rent: 0, sale: 0 },
    { name: "", rent: 0, sale: 0 },
    { name: "", rent: 0, sale: 0 },
    { name: "", rent: 0, sale: 0 },
    { name: "", rent: 0, sale: 0 },
    { name: "", rent: 0, sale: 0 },
    { name: "", rent: 0, sale: 0 },
    { name: "", rent: 0, sale: 0 },
    { name: "", rent: 0, sale: 0 }
  ]);

  const fetchPropertyStateCount = async e => {
    await axios
      .get("http://localhost:8081/property/display/state")
      .then(response => {
        setName(response.data);
      })
      .catch(function(err) {
        alert(err.message);
      });
  };

  useEffect(() => {
    fetchPropertyStateCount();
  }, []);

  return (
    <div>
      <UserNav />
      <section
        style={{ backgroundImage: "url(" + banner2 + ")" }}
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

      <section className="agent_list result-list">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 breadcrumb-cont"></div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <h1 className="title text-center main-title">
                Properties for Rent and Sale Across Nigeria
                <span className="hr"></span>
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="property-bg">
                <Link
                  to={{
                    pathname: "/user/listings",
                    param: name[0].name
                  }}
                >
                  <a href="" className="image-bg">
                    <p
                      style={{
                        marginLeft: "1%",
                        marginRight: "1%",
                        fontSize: "60%"
                      }}
                    >
                      Click to View Properties
                    </p>

                    <img src={anamb} alt="img-ads" className="img-fluid" />

                    <p
                      style={{
                        marginLeft: "1%",
                        marginRight: "1%",
                        fontSize: "60%"
                      }}
                    >
                      Anambra State Nigeria
                    </p>
                  </a>
                </Link>
                <div className="property-content text-center">
                  <h2 className="title">Anambra State Nigeria</h2>
                  <p>900,091 properties closed</p>
                  <div className="prop_count text-center">
                    <p>
                      {name[0].rent} properties for{" "}
                      <span className="cont-label">Rent</span>
                    </p>
                    <p>
                      {name[0].sale} properties for{" "}
                      <span className="cont-label sales">Sale</span>
                    </p>
                  </div>
                  <Link
                    to={{
                      pathname: "/user/listings",
                      param: name[0].name
                    }}
                  >
                    <a href="" className="btn primary">
                      View Properties
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="property-bg">
                <Link
                  to={{
                    pathname: "/user/listings",
                    param: name[1].name
                  }}
                >
                  <a href="" className="image-bg">
                    <p
                      style={{
                        marginLeft: "1%",
                        marginRight: "1%",
                        fontSize: "60%"
                      }}
                    >
                      Click to View Properties
                    </p>
                    <img src={enugu2} alt="img-ads" className="img-fluid" />
                    <p
                      style={{
                        marginLeft: "1%",
                        marginRight: "1%",
                        fontSize: "60%"
                      }}
                    >
                      Enugu State Nigeria
                    </p>
                  </a>
                </Link>
                <div className="property-content text-center">
                  <h2 className="title">Enugu State Nigeria</h2>
                  <p>800,678 properties closed</p>
                  <div className="prop_count text-center">
                    <p>
                      {name[1].rent} properties for{" "}
                      <span className="cont-label">Rent</span>
                    </p>
                    <p>
                      {name[1].sale} properties for{" "}
                      <span className="cont-label sales">Sale</span>
                    </p>
                  </div>
                  <Link
                    to={{
                      pathname: "/user/listings",
                      param: name[1].name
                    }}
                  >
                    <a href="" className="btn primary">
                      View Properties
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="property-bg">
                <Link
                  to={{
                    pathname: "/user/listings",
                    param: name[2].name
                  }}
                >
                  <a href="" className="image-bg">
                    <p
                      style={{
                        marginLeft: "1%",
                        marginRight: "1%",
                        fontSize: "60%"
                      }}
                    >
                      Click to View Properties
                    </p>
                    <img src={ebonyi} alt="img-ads" className="img-fluid" />
                    <p
                      style={{
                        marginLeft: "1%",
                        marginRight: "1%",
                        fontSize: "60%"
                      }}
                    >
                      Ebonyi State Nigeria
                    </p>
                  </a>
                </Link>
                <div className="property-content text-center">
                  <h2 className="title">Ebonyi State Nigeria</h2>
                  <p>230,876 properties closed</p>
                  <div className="prop_count text-center">
                    <p>
                      {name[2].rent} properties for{" "}
                      <span className="cont-label">Rent</span>
                    </p>
                    <p>
                      {name[2].sale} properties for{" "}
                      <span className="cont-label sales">Sale</span>
                    </p>
                  </div>
                  <Link
                    to={{
                      pathname: "/user/listings",
                      param: name[2].name
                    }}
                  >
                    <a href="" className="btn primary">
                      View Properties
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="property-bg">
                <Link
                  to={{
                    pathname: "/user/listings",
                    param: name[3].name
                  }}
                >
                  <a href="" className="image-bg">
                    <p
                      style={{
                        marginLeft: "1%",
                        marginRight: "1%",
                        fontSize: "60%"
                      }}
                    >
                      Click to View Properties
                    </p>
                    <img src={imo} alt="img-ads" className="img-fluid" />
                    <p
                      style={{
                        marginLeft: "1%",
                        marginRight: "1%",
                        fontSize: "60%"
                      }}
                    >
                      Imo State Nigeria
                    </p>
                  </a>
                </Link>
                <div className="property-content text-center">
                  <h2 className="title">Imo State Nigeria</h2>
                  <p>980,345 properties closed</p>
                  <div className="prop_count text-center">
                    <p>
                      {name[3].rent} properties for{" "}
                      <span className="cont-label">Rent</span>
                    </p>
                    <p>
                      {name[3].sale} properties for{" "}
                      <span className="cont-label sales">Sale</span>
                    </p>
                  </div>
                  <Link
                    to={{
                      pathname: "/user/listings",
                      param: name[3].name
                    }}
                  >
                    <a href="" className="btn primary">
                      View Properties
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="property-bg">
                <Link
                  to={{
                    pathname: "/user/listings",
                    param: name[4].name
                  }}
                >
                  <a href="" className="image-bg">
                    <p
                      style={{
                        marginLeft: "1%",
                        marginRight: "1%",
                        fontSize: "60%"
                      }}
                    >
                      Click to View Properties
                    </p>
                    <img src={abia} alt="img-ads" className="img-fluid" />
                    <p
                      style={{
                        marginLeft: "1%",
                        marginRight: "1%",
                        fontSize: "60%"
                      }}
                    >
                      Abia State Nigeria
                    </p>
                  </a>
                </Link>
                <div className="property-content text-center">
                  <h2 className="title">Abia State Nigeria</h2>
                  <p>703,784 properties closed</p>
                  <div className="prop_count text-center">
                    <p>
                      {name[4].rent} properties for{" "}
                      <span className="cont-label">Rent</span>
                    </p>
                    <p>
                      {name[4].sale} properties for{" "}
                      <span className="cont-label sales">Sale</span>
                    </p>
                  </div>
                  <Link
                    to={{
                      pathname: "/user/listings",
                      param: name[4].name
                    }}
                  >
                    <a href="#" className="btn primary">
                      View properties
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="property-bg">
                <Link
                  to={{
                    pathname: "/user/listings",
                    param: name[5].name
                  }}
                >
                  <a href="" className="image-bg">
                    <p
                      style={{
                        marginLeft: "1%",
                        marginRight: "1%",
                        fontSize: "60%"
                      }}
                    >
                      Click to View Properties
                    </p>
                    <img src={delta} alt="img-ads" className="img-fluid" />
                    <p
                      style={{
                        marginLeft: "1%",
                        marginRight: "1%",
                        fontSize: "60%"
                      }}
                    >
                      Delta State Nigeria
                    </p>
                  </a>
                </Link>
                <div className="property-content text-center">
                  <h2 className="title">Delta State Nigeria</h2>
                  <p>380,908 properties closed</p>
                  <div className="prop_count text-center">
                    <p>
                      {name[5].rent} properties for{" "}
                      <span className="cont-label">Rent</span>
                    </p>
                    <p>
                      {name[5].sale} properties for{" "}
                      <span className="cont-label sales">Sale</span>
                    </p>
                  </div>
                  <Link
                    to={{
                      pathname: "/user/listings",
                      param: name[5].name
                    }}
                  >
                    <a href="" className="btn primary">
                      View Properties
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="property-bg">
                <Link
                  to={{
                    pathname: "/user/listings",
                    param: name[6].name
                  }}
                >
                  <a href="" className="image-bg">
                    <p
                      style={{
                        marginLeft: "1%",
                        marginRight: "1%",
                        fontSize: "60%"
                      }}
                    >
                      Click to View Properties
                    </p>
                    <img src={river} alt="img-ads" className="img-fluid" />
                    <p
                      style={{
                        marginLeft: "1%",
                        marginRight: "1%",
                        fontSize: "60%"
                      }}
                    >
                      Rivers State Nigeria
                    </p>
                  </a>
                </Link>
                <div className="property-content text-center">
                  <h2 className="title">Rivers State Nigeria</h2>
                  <p>590,906 properties closed</p>
                  <div className="prop_count text-center">
                    <p>
                      {name[6].rent} properties for{" "}
                      <span className="cont-label">Rent</span>
                    </p>
                    <p>
                      {name[6].sale} properties for{" "}
                      <span className="cont-label sales">Sale</span>
                    </p>
                  </div>
                  <Link
                    to={{
                      pathname: "/user/listings",
                      param: name[6].name
                    }}
                  >
                    <a href="" className="btn primary">
                      View Properties
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="property-bg">
                <Link
                  to={{
                    pathname: "/user/listings",
                    param: name[7].name
                  }}
                >
                  <a href="" className="image-bg">
                    <p
                      style={{
                        marginLeft: "1%",
                        marginRight: "1%",
                        fontSize: "60%"
                      }}
                    >
                      Click to View Properties
                    </p>
                    <img src={edo} alt="img-ads" className="img-fluid" />
                    <p
                      style={{
                        marginLeft: "1%",
                        marginRight: "1%",
                        fontSize: "60%"
                      }}
                    >
                      Edo State Nigeria
                    </p>
                  </a>
                </Link>
                <div className="property-content text-center">
                  <h2 className="title">Edo State Nigeria</h2>
                  <p>86,890 properties closed</p>
                  <div className="prop_count text-center">
                    <p>
                      {name[7].rent} properties for{" "}
                      <span className="cont-label">Rent</span>
                    </p>
                    <p>
                      {name[7].sale} properties for{" "}
                      <span className="cont-label sales">Sale</span>
                    </p>
                  </div>
                  <Link
                    to={{
                      pathname: "/user/listings",
                      param: name[7].name
                    }}
                  >
                    <a href="" className="btn primary">
                      View Properties
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="property-bg">
                <Link
                  to={{
                    pathname: "/user/listings",
                    param: name[8].name
                  }}
                >
                  <a href="" className="image-bg">
                    <p
                      style={{
                        marginLeft: "1%",
                        marginRight: "1%",
                        fontSize: "60%"
                      }}
                    >
                      Click to View Properties
                    </p>
                    <img src={abuja} alt="img-ads" className="img-fluid" />
                    <p
                      style={{
                        marginLeft: "1%",
                        marginRight: "1%",
                        fontSize: "60%"
                      }}
                    >
                      Abuja Federal Capital Nigeria
                    </p>
                  </a>
                </Link>
                <div className="property-content text-center">
                  <h2 className="title">Abuja Federal Capital Nigeria</h2>
                  <p>705,456 properties closed</p>
                  <div className="prop_count text-center">
                    <p>
                      {name[8].rent} properties for{" "}
                      <span className="cont-label">Rent</span>
                    </p>
                    <p>
                      {name[8].sale} properties for{" "}
                      <span className="cont-label sales">Sale</span>
                    </p>
                  </div>
                  <Link
                    to={{
                      pathname: "/user/listings",
                      param: name[8].name
                    }}
                  >
                    <a href="" className="btn primary">
                      View Properties
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="property-bg">
                <Link
                  to={{
                    pathname: "/user/listings",
                    param: name[9].name
                  }}
                >
                  <a href="" className="image-bg">
                    <p
                      style={{
                        marginLeft: "1%",
                        marginRight: "1%",
                        fontSize: "60%"
                      }}
                    >
                      Click to View Properties
                    </p>
                    <img src={lagos} alt="img-ads" className="img-fluid" />
                    <p
                      style={{
                        marginLeft: "1%",
                        marginRight: "1%",
                        fontSize: "60%"
                      }}
                    >
                      Lagos State Nigeria
                    </p>
                  </a>
                </Link>
                <div className="property-content text-center">
                  <h2 className="title">Lagos State Nigeria</h2>
                  <p>102,590 properties closed</p>
                  <div className="prop_count text-center">
                    <p>
                      {name[9].rent} properties for{" "}
                      <span className="cont-label">Rent</span>
                    </p>
                    <p>
                      {name[9].sale} properties for{" "}
                      <span className="cont-label sales">Sale</span>
                    </p>
                  </div>
                  <Link
                    to={{
                      pathname: "/user/listings",
                      param: name[9].name
                    }}
                  >
                    <a href="" className="btn primary">
                      View Properties
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="property-bg">
                <Link
                  to={{
                    pathname: "/user/listings",
                    param: name[10].name
                  }}
                >
                  <a href="" className="image-bg">
                    <p
                      style={{
                        marginLeft: "1%",
                        marginRight: "1%",
                        fontSize: "60%"
                      }}
                    >
                      Click to View Properties
                    </p>
                    <img src={cross} alt="img-ads" className="img-fluid" />
                    <p
                      style={{
                        marginLeft: "1%",
                        marginRight: "1%",
                        fontSize: "60%"
                      }}
                    >
                      Cross Rivers State Nigeria
                    </p>
                  </a>
                </Link>
                <div className="property-content text-center">
                  <h2 className="title">Cross Rivers State Nigeria</h2>
                  <p>12,890 properties closed</p>
                  <div className="prop_count text-center">
                    <p>
                      {name[10].rent} properties for{" "}
                      <span className="cont-label">Rent</span>
                    </p>
                    <p>
                      {name[10].sale} properties for{" "}
                      <span className="cont-label sales">Sale</span>
                    </p>
                  </div>
                  <Link
                    to={{
                      pathname: "/user/listings",
                      param: name[10].name
                    }}
                  >
                    <a href="" className="btn primary">
                      View Properties
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="property-bg">
                <Link
                  to={{
                    pathname: "/user/listings",
                    param: name[11].name
                  }}
                >
                  <a href="" className="image-bg">
                    <p
                      style={{
                        marginLeft: "1%",
                        marginRight: "1%",
                        fontSize: "60%"
                      }}
                    >
                      Click to View Properties
                    </p>
                    <img src={bayelsa} alt="img-ads" className="img-fluid" />
                    <p
                      style={{
                        marginLeft: "1%",
                        marginRight: "1%",
                        fontSize: "60%"
                      }}
                    >
                      Bayelsa State Nigeria
                    </p>
                  </a>
                </Link>
                <div className="property-content text-center">
                  <h2 className="title">Bayelsa State Nigeria</h2>
                  <p>1,890 properties closed</p>
                  <div className="prop_count text-center">
                    <p>
                      {name[11].rent} properties for{" "}
                      <span className="cont-label">Rent</span>
                    </p>
                    <p>
                      {name[11].sale} properties for{" "}
                      <span className="cont-label sales">Sale</span>
                    </p>
                  </div>
                  <Link
                    to={{
                      pathname: "/user/listings",
                      param: name[11].name
                    }}
                  >
                    <a href="" className="btn primary">
                      View Properties
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="property-bg">
                <a href="" className="image-bg">
                  <p
                    style={{
                      marginLeft: "1%",
                      marginRight: "1%",
                      fontSize: "60%"
                    }}
                  >
                    Click to View Properties
                  </p>
                  <img src={akwaibom} alt="img-ads" className="img-fluid" />
                  <p
                    style={{
                      marginLeft: "1%",
                      marginRight: "1%",
                      fontSize: "60%"
                    }}
                  >
                    Akwa-Ibom State Nigeria
                  </p>
                </a>
                <div className="property-content text-center">
                  <h2 className="title">Akwa-Ibom State Nigeria</h2>
                  <p>1,096 properties closed</p>
                  <div className="prop_count text-center">
                    <p>
                      0 properties for <span className="cont-label">Rent</span>
                    </p>
                    <p>
                      0 properties for{" "}
                      <span className="cont-label sales">Sale</span>
                    </p>
                  </div>
                  <a href="" className="btn primary">
                    View Properties
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="property-bg">
                <a href="" className="image-bg">
                  <p
                    style={{
                      marginLeft: "1%",
                      marginRight: "1%",
                      fontSize: "60%"
                    }}
                  >
                    Click to View Properties
                  </p>
                  <img src={bauchi} alt="img-ads" className="img-fluid" />
                  <p
                    style={{
                      marginLeft: "1%",
                      marginRight: "1%",
                      fontSize: "60%"
                    }}
                  >
                    Bauchi State Nigeria
                  </p>
                </a>
                <div className="property-content text-center">
                  <h2 className="title">Bauchi State Nigeria</h2>
                  <p>2,789 properties closed</p>
                  <div className="prop_count text-center">
                    <p>
                      0 properties for <span className="cont-label">Rent</span>
                    </p>
                    <p>
                      0 properties for{" "}
                      <span className="cont-label sales">Sale</span>
                    </p>
                  </div>
                  <a href="" className="btn primary">
                    View Properties
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="property-bg">
                <a href="" className="image-bg">
                  <p
                    style={{
                      marginLeft: "1%",
                      marginRight: "1%",
                      fontSize: "60%"
                    }}
                  >
                    Click to View Properties
                  </p>
                  <img src={benue} alt="img-ads" className="img-fluid" />
                  <p
                    style={{
                      marginLeft: "1%",
                      marginRight: "1%",
                      fontSize: "60%"
                    }}
                  >
                    Benue State Nigeria
                  </p>
                </a>
                <div className="property-content text-center">
                  <h2 className="title">Benue State Nigeria</h2>
                  <p>1,209 properties closed</p>
                  <div className="prop_count text-center">
                    <p>
                      0 properties for <span class="cont-label">Rent</span>
                    </p>
                    <p>
                      0 properties for{" "}
                      <span className="cont-label sales">Sale</span>
                    </p>
                  </div>
                  <a href="" className="btn primary">
                    View Properties
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="property-bg">
                <a href="" className="image-bg">
                  <p
                    style={{
                      marginLeft: "1%",
                      marginRight: "1%",
                      fontSize: "60%"
                    }}
                  >
                    Click to View Properties
                  </p>
                  <img src={ekiti} alt="img-ads" className="img-fluid" />
                  <p
                    style={{
                      marginLeft: "1%",
                      marginRight: "1%",
                      fontSize: "60%"
                    }}
                  >
                    Ekiti State Nigeria
                  </p>
                </a>
                <div className="property-content text-center">
                  <h2 className="title">Ekiti State Nigeria</h2>
                  <p>902 properties closed</p>
                  <div className="prop_count text-center">
                    <p>
                      0 properties for <span className="cont-label">Rent</span>
                    </p>
                    <p>
                      0 properties for{" "}
                      <span className="cont-label sales">Sale</span>
                    </p>
                  </div>
                  <a href="" className="btn primary">
                    View Properties
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="property-bg">
                <a href="" className="image-bg">
                  <p
                    style={{
                      marginLeft: "1%",
                      marginRight: "1%",
                      fontSize: "60%"
                    }}
                  >
                    Click to View Properties
                  </p>
                  <img src={gombe} alt="img-ads" className="img-fluid" />
                  <p
                    style={{
                      marginLeft: "1%",
                      marginRight: "1%",
                      fontSize: "60%"
                    }}
                  >
                    Gombe State Nigeria
                  </p>
                </a>
                <div className="property-content text-center">
                  <h2 className="title">Gombe State Nigeria</h2>
                  <p>922 properties closed</p>
                  <div className="prop_count text-center">
                    <p>
                      0 properties for <span className="cont-label">Rent</span>
                    </p>
                    <p>
                      0 properties for{" "}
                      <span className="cont-label sales">Sale</span>
                    </p>
                  </div>
                  <a href="" className="btn primary">
                    View Properties
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="property-bg">
                <a href="" className="image-bg">
                  <p
                    style={{
                      marginLeft: "1%",
                      marginRight: "1%",
                      fontSize: "60%"
                    }}
                  >
                    Click to View Properties
                  </p>
                  <img src={jigawa} alt="img-ads" className="img-fluid" />
                  <p
                    style={{
                      marginLeft: "1%",
                      marginRight: "1%",
                      fontSize: "60%"
                    }}
                  >
                    Jigawa State Nigeria
                  </p>
                </a>
                <div className="property-content text-center">
                  <h2 className="title">Jigawa State Nigeria</h2>
                  <p>207 properties closed</p>
                  <div className="prop_count text-center">
                    <p>
                      0 properties for <span className="cont-label">Rent</span>
                    </p>
                    <p>
                      0 properties for{" "}
                      <span className="cont-label sales">Sale</span>
                    </p>
                  </div>
                  <a href="" className="btn primary">
                    View Properties
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="property-bg">
                <a href="" className="image-bg">
                  <p
                    style={{
                      marginLeft: "1%",
                      marginRight: "1%",
                      fontSize: "60%"
                    }}
                  >
                    Click to View Properties
                  </p>
                  <img src={kaduna} alt="img-ads" className="img-fluid" />
                  <p
                    style={{
                      marginLeft: "1%",
                      marginRight: "1%",
                      fontSize: "60%"
                    }}
                  >
                    Kaduna State Nigeria
                  </p>
                </a>
                <div className="property-content text-center">
                  <h2 className="title">Kaduna State Nigeria</h2>
                  <p>5,072 properties closed</p>
                  <div className="prop_count text-center">
                    <p>
                      0 properties for <span className="cont-label">Rent</span>
                    </p>
                    <p>
                      0 properties for{" "}
                      <span className="cont-label sales">Sale</span>
                    </p>
                  </div>
                  <a href="" className="btn primary">
                    View Properties
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="property-bg">
                <a href="" className="image-bg">
                  <p
                    style={{
                      marginLeft: "1%",
                      marginRight: "1%",
                      fontSize: "60%"
                    }}
                  >
                    Click to View Properties
                  </p>
                  <img src={kano} alt="img-ads" className="img-fluid" />
                  <p
                    style={{
                      marginLeft: "1%",
                      marginRight: "1%",
                      fontSize: "60%"
                    }}
                  >
                    Kano State Nigeria
                  </p>
                </a>
                <div className="property-content text-center">
                  <h2 className="title">Kano State Nigeria</h2>
                  <p>7,822 properties closed</p>
                  <div className="prop_count text-center">
                    <p>
                      0 properties for <span className="cont-label">Rent</span>
                    </p>
                    <p>
                      0 properties for{" "}
                      <span className="cont-label sales">Sale</span>
                    </p>
                  </div>
                  <a href="" className="btn primary">
                    View Properties
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="property-bg">
                <a href="" className="image-bg">
                  <p
                    style={{
                      marginLeft: "1%",
                      marginRight: "1%",
                      fontSize: "60%"
                    }}
                  >
                    Click to View Properties
                  </p>
                  <img src={katsina} alt="img-ads" className="img-fluid" />
                  <p
                    style={{
                      marginLeft: "1%",
                      marginRight: "1%",
                      fontSize: "60%"
                    }}
                  >
                    katsina State Nigeria
                  </p>
                </a>
                <div className="property-content text-center">
                  <h2 className="title">Katsina State Nigeria</h2>
                  <p>672 properties closed</p>
                  <div className="prop_count text-center">
                    <p>
                      0 properties for <span className="cont-label">Rent</span>
                    </p>
                    <p>
                      0 properties for{" "}
                      <span className="cont-label sales">Sale</span>
                    </p>
                  </div>
                  <a href="" className="btn primary">
                    View Properties
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="property-bg">
                <a href="" className="image-bg">
                  <p
                    style={{
                      marginLeft: "1%",
                      marginRight: "1%",
                      fontSize: "60%"
                    }}
                  >
                    Click to View Properties
                  </p>
                  <img src={kebbi} alt="img-ads" className="img-fluid" />
                  <p
                    style={{
                      marginLeft: "1%",
                      marginRight: "1%",
                      fontSize: "60%"
                    }}
                  >
                    Kebbi State Nigeria
                  </p>
                </a>
                <div className="property-content text-center">
                  <h2 className="title">Kebbi State Nigeria</h2>
                  <p>912 properties closed</p>
                  <div className="prop_count text-center">
                    <p>
                      0 properties for <span className="cont-label">Rent</span>
                    </p>
                    <p>
                      0 properties for{" "}
                      <span className="cont-label sales">Sale</span>
                    </p>
                  </div>
                  <a href="" className="btn primary">
                    View Properties
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="property-bg">
                <a href="" className="image-bg">
                  <p
                    style={{
                      marginLeft: "1%",
                      marginRight: "1%",
                      fontSize: "60%"
                    }}
                  >
                    Click to View Properties
                  </p>
                  <img src={kogi} alt="img-ads" className="img-fluid" />
                  <p
                    style={{
                      marginLeft: "1%",
                      marginRight: "1%",
                      fontSize: "60%"
                    }}
                  >
                    Kogi State Nigeria
                  </p>
                </a>
                <div className="property-content text-center">
                  <h2 className="title">Kogi State Nigeria</h2>
                  <p>5,602 properties closed</p>
                  <div className="prop_count text-center">
                    <p>
                      0 properties for <span className="cont-label">Rent</span>
                    </p>
                    <p>
                      0 properties for{" "}
                      <span className="cont-label sales">Sale</span>
                    </p>
                  </div>
                  <a href="" className="btn primary">
                    View Properties
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="property-bg">
                <a href="" className="image-bg">
                  <p
                    style={{
                      marginLeft: "1%",
                      marginRight: "1%",
                      fontSize: "60%"
                    }}
                  >
                    Click to View Properties
                  </p>
                  <img src={kwara} alt="img-ads" className="img-fluid" />
                  <p
                    style={{
                      marginLeft: "1%",
                      marginRight: "1%",
                      fontSize: "60%"
                    }}
                  >
                    Kwara State Nigeria
                  </p>
                </a>
                <div className="property-content text-center">
                  <h2 className="title">Kwara State Nigeria</h2>
                  <p>507 properties closed</p>
                  <div className="prop_count text-center">
                    <p>
                      0 properties for <span className="cont-label">Rent</span>
                    </p>
                    <p>
                      0 properties for{" "}
                      <span className="cont-label sales">Sale</span>
                    </p>
                  </div>
                  <a href="" className="btn primary">
                    View properties
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="property-bg">
                <a href="" className="image-bg">
                  <p
                    style={{
                      marginLeft: "1%",
                      marginRight: "1%",
                      fontSize: "60%"
                    }}
                  >
                    Click to View Properties
                  </p>
                  <img src={adamawa} alt="img-ads" className="img-fluid" />
                  <p
                    style={{
                      marginLeft: "1%",
                      marginRight: "1%",
                      fontSize: "60%"
                    }}
                  >
                    Adamawa State Nigeria
                  </p>
                </a>
                <div className="property-content text-center">
                  <h2 className="title">Adamawa State Nigeria</h2>
                  <p>102 properties closed</p>
                  <div className="prop_count text-center">
                    <p>
                      0 properties for <span className="cont-label">Rent</span>
                    </p>
                    <p>
                      0 properties for{" "}
                      <span className="cont-label sales">Sale</span>
                    </p>
                  </div>
                  <a href="" className="btn primary">
                    View properties
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="property-bg">
                <a href="" className="image-bg">
                  <p
                    style={{
                      marginLeft: "1%",
                      marginRight: "1%",
                      fontSize: "60%"
                    }}
                  >
                    Click to View Properties
                  </p>
                  <img src={niger} alt="img-ads" className="img-fluid" />
                  <p
                    style={{
                      marginLeft: "1%",
                      marginRight: "1%",
                      fontSize: "60%"
                    }}
                  >
                    Niger State Nigeria
                  </p>
                </a>
                <div className="property-content text-center">
                  <h2 className="title">Niger State Nigeria</h2>
                  <p>2,090 properties closed</p>
                  <div className="prop_count text-center">
                    <p>
                      0 properties for <span className="cont-label">Rent</span>
                    </p>
                    <p>
                      0 properties for{" "}
                      <span className="cont-label sales">Sale</span>
                    </p>
                  </div>
                  <a href="" className="btn primary">
                    View properties
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="property-bg">
                <a href="" className="image-bg">
                  <p
                    style={{
                      marginLeft: "1%",
                      marginRight: "1%",
                      fontSize: "60%"
                    }}
                  >
                    Click to View Properties
                  </p>
                  <img src={ogun} alt="img-ads" className="img-fluid" />
                  <p
                    style={{
                      marginLeft: "1%",
                      marginRight: "1%",
                      fontSize: "60%"
                    }}
                  >
                    Ogun State Nigeria
                  </p>
                </a>
                <div className="property-content text-center">
                  <h2 className="title">Ogun State Nigeria</h2>
                  <p>8,922 properties closed</p>
                  <div className="prop_count text-center">
                    <p>
                      0 properties for <span className="cont-label">Rent</span>
                    </p>
                    <p>
                      0 properties for{" "}
                      <span className="cont-label sales">Sale</span>
                    </p>
                  </div>
                  <a href="" className="btn primary">
                    View properties
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="property-bg">
                <a href="" className="image-bg">
                  <p
                    style={{
                      marginLeft: "1%",
                      marginRight: "1%",
                      fontSize: "60%"
                    }}
                  >
                    Click to View Properties
                  </p>
                  <img src={ondo} alt="img-ads" className="img-fluid" />
                  <p
                    style={{
                      marginLeft: "1%",
                      marginRight: "1%",
                      fontSize: "60%"
                    }}
                  >
                    Ondo State Nigeria
                  </p>
                </a>
                <div className="property-content text-center">
                  <h2 className="title">Ondo state Nigeria</h2>
                  <p>7,892 properties closed</p>
                  <div className="prop_count text-center">
                    <p>
                      0 properties for <span className="cont-label">Rent</span>
                    </p>
                    <p>
                      0 properties for{" "}
                      <span className="cont-label sales">Sale</span>
                    </p>
                  </div>
                  <a href="" className="btn primary">
                    View properties
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="property-bg">
                <a href="" className="image-bg">
                  <p
                    style={{
                      marginLeft: "1%",
                      marginRight: "1%",
                      fontSize: "60%"
                    }}
                  >
                    Click to View Properties
                  </p>
                  <img src={oshun} alt="img-ads" className="img-fluid" />
                  <p
                    style={{
                      marginLeft: "1%",
                      marginRight: "1%",
                      fontSize: "60%"
                    }}
                  >
                    Oshun State Nigeria
                  </p>
                </a>
                <div className="property-content text-center">
                  <h2 className="title">Oshun State Nigeria</h2>
                  <p>8,765 properties closed</p>
                  <div className="prop_count text-center">
                    <p>
                      0 properties for <span className="cont-label">Rent</span>
                    </p>
                    <p>
                      0 properties for{" "}
                      <span className="cont-label sales">Sale</span>
                    </p>
                  </div>
                  <a href="" className="btn primary">
                    View properties
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="property-bg">
                <a href="" className="image-bg">
                  <p
                    style={{
                      marginLeft: "1%",
                      marginRight: "1%",
                      fontSize: "60%"
                    }}
                  >
                    Click to View Properties
                  </p>
                  <img src={oyo} alt="img-ads" className="img-fluid" />
                  <p
                    style={{
                      marginLeft: "1%",
                      marginRight: "1%",
                      fontSize: "60%"
                    }}
                  >
                    Oyo State Nigeria
                  </p>
                </a>
                <div className="property-content text-center">
                  <h2 className="title">Oyo State Nigeria</h2>
                  <p>4,561 properties closed</p>
                  <div className="prop_count text-center">
                    <p>
                      0 properties for <span className="cont-label">Rent</span>
                    </p>
                    <p>
                      0 properties for{" "}
                      <span className="cont-label sales">Sale</span>
                    </p>
                  </div>
                  <a href="" className="btn primary">
                    View Properties
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="property-bg">
                <a href="" className="image-bg">
                  <p
                    style={{
                      marginLeft: "1%",
                      marginRight: "1%",
                      fontSize: "60%"
                    }}
                  >
                    Click to View Properties
                  </p>
                  <img src={platue} alt="img-ads" className="img-fluid" />
                  <p
                    style={{
                      marginLeft: "1%",
                      marginRight: "1%",
                      fontSize: "60%"
                    }}
                  >
                    Platue State Nigeria
                  </p>
                </a>
                <div className="property-content text-center">
                  <h2 className="title">Platue State Nigeria</h2>
                  <p>302 properties closed</p>
                  <div className="prop_count text-center">
                    <p>
                      0 properties for <span className="cont-label">Rent</span>
                    </p>
                    <p>
                      0 properties for{" "}
                      <span className="cont-label sales">Sale</span>
                    </p>
                  </div>
                  <a href="" className="btn primary">
                    View Properties
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="property-bg">
                <a href="" className="image-bg">
                  <p
                    style={{
                      marginLeft: "1%",
                      marginRight: "1%",
                      fontSize: "60%"
                    }}
                  >
                    Click to View Properties
                  </p>
                  <img src={sokoto} alt="img-ads" className="img-fluid" />
                  <p
                    style={{
                      marginLeft: "1%",
                      marginRight: "1%",
                      fontSize: "60%"
                    }}
                  >
                    Sokoto State Nigeria
                  </p>
                </a>
                <div className="property-content text-center">
                  <h2 className="title">Sokoto State Nigeria</h2>
                  <p>3,092 properties closed</p>
                  <div className="prop_count text-center">
                    <p>
                      0 properties for <span className="cont-label">Rent</span>
                    </p>
                    <p>
                      0 properties for{" "}
                      <span className="cont-label sales">Sale</span>
                    </p>
                  </div>
                  <a href="" className="btn primary">
                    View Properties
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="property-bg">
                <a href="" className="image-bg">
                  <p
                    style={{
                      marginLeft: "1%",
                      marginRight: "1%",
                      fontSize: "60%"
                    }}
                  >
                    Click to View Properties
                  </p>
                  <img src={taraba} alt="img-ads" className="img-fluid" />
                  <p
                    style={{
                      marginLeft: "1%",
                      marginRight: "1%",
                      fontSize: "60%"
                    }}
                  >
                    Taraba State Nigeria
                  </p>
                </a>
                <div className="property-content text-center">
                  <h2 className="title">Taraba State Nigeria</h2>
                  <p>89 properties closed</p>
                  <div className="prop_count text-center">
                    <p>
                      0 properties for <span className="cont-label">Rent</span>
                    </p>
                    <p>
                      0 properties for{" "}
                      <span className="cont-label sales">Sale</span>
                    </p>
                  </div>
                  <a href="" className="btn primary">
                    View Properties
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="property-bg">
                <a href="" className="image-bg">
                  <p
                    style={{
                      marginLeft: "1%",
                      marginRight: "1%",
                      fontSize: "60%"
                    }}
                  >
                    Click to View Properties
                  </p>
                  <img src={yobe} alt="img-ads" className="img-fluid" />
                  <p
                    style={{
                      marginLeft: "1%",
                      marginRight: "1%",
                      fontSize: "60%"
                    }}
                  >
                    Yobe State Nigeria
                  </p>
                </a>
                <div className="property-content text-center">
                  <h2 className="title">Yobe State Nigeria</h2>
                  <p>78 properties closed</p>
                  <div className="prop_count text-center">
                    <p>
                      0 properties for <span className="cont-label">Rent</span>
                    </p>
                    <p>
                      0 properties for{" "}
                      <span className="cont-label sales">Sale</span>
                    </p>
                  </div>
                  <a href="" className="btn primary">
                    View Properties
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="property-bg">
                <a href="" className="image-bg">
                  <p
                    style={{
                      marginLeft: "1%",
                      marginRight: "1%",
                      fontSize: "60%"
                    }}
                  >
                    Click to View Properties
                  </p>
                  <img src={zamfara} alt="img-ads" className="img-fluid" />
                  <p
                    style={{
                      marginLeft: "1%",
                      marginRight: "1%",
                      fontSize: "60%"
                    }}
                  >
                    Zamfara State Nigeria
                  </p>
                </a>
                <div className="property-content text-center">
                  <h2 className="title">Zamfara State Nigeria</h2>
                  <p>670 properties closed</p>
                  <div className="prop_count text-center">
                    <p>
                      0 properties for <span className="cont-label">Rent</span>
                    </p>
                    <p>
                      0 properties for{" "}
                      <span className="cont-label sales">Sale</span>
                    </p>
                  </div>
                  <a href="" className="btn primary">
                    View Properties
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

export default SearchMainPage;
