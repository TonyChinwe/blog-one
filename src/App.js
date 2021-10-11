import "./App.css";
import "./images/home-pic1.jpg";
import "./images/select-dropdown.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import Tilt from "react-vanilla-tilt";
import pic1 from "./images/tony.jpg";
import AdminLogin from "./AdminLogin";
import AdminSignup from "./AdminSignup";
import AgentDashboard from "./AgentDashboard";
import AgentListingPage from "./AgentListingPage";
import AgentLogin from "./AgentLogin";
import AgentProfileInfo from "./AgentProfileInfo";
import AgentSignup from "./AgentSignup";
import EditAgentProfile from "./EditAgentProfile";
import EditProperty from "./EditProperty";
import EditPropertyPictures from "./EditPropertyPictures";
import ManageAgent from "./ManageAgent";
import ManageAgentPlan from "./ManageAgentPlan";
import OnePropertyPage from "./OnePropertyPage";
import PostProperty from "./PostProperty";
import SearchMainPage from "./SearchMainPage";
import SetPropertyMainPicture from "./SetPropertyMainPicture";
import UploadId from "./UploadId";
import UploadProfilePicture from "./UploadProfilePicture";
import UploadPropertyImage from "./UploadPropertyImage";
import UserLogin from "./UserLogin";
import UserSignup from "./UserSignup";
import ListingPage from "./ListingPage";
import AddToPropertyImage from "./AddToPropertyImage";
import Nav from "./Nav";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import UserDashboard from "./UserDashboard";

const spanStyles = {
  color: "#fff",
  borderColor: "#00f"
};

function App() {
  const [loginUser, setLoginUser] = useState(false);
  const [loginAgent, setLoginAgent] = useState(false);
  const [loginAdmin, setLoginAdmin] = useState(false);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/admin/login" component={AdminLogin} />
          <Route path="/admin/signup" component={AdminSignup} />
          <Route path="/admin/manage-agent" component={ManageAgent} />
          <Route path="/admin/manage-agent-plan" component={ManageAgentPlan} />

          <Route path="/agent/dashboard" component={AgentDashboard} />
          <Route path="/agent/listing" component={AgentListingPage} />
          <Route path="/agent/login" component={AgentLogin} />
          <Route path="/agent/signup" component={AgentSignup} />
          <Route path="/agent/profile-info" component={AgentProfileInfo} />
          <Route path="/agent/edit-profile" component={EditAgentProfile} />
          <Route path="/agent/edit-property" component={EditProperty} />
          <Route
            path="/agent/edit-property-pictures"
            component={EditPropertyPictures}
          />
          <Route path="/agent/post-property" component={PostProperty} />
          <Route
            path="/agent/add-image/property"
            component={AddToPropertyImage}
          />

          <Route
            path="/agent/upload-property-image"
            component={UploadPropertyImage}
          />

          <Route
            path="/agent/set-property-main-picture"
            component={SetPropertyMainPicture}
          />
          <Route path="/agent/upload-id" component={UploadId} />
          <Route
            path="/agent/upload-profile-picture"
            component={UploadProfilePicture}
          />

          <Route path="/user/one-property-image" component={OnePropertyPage} />
          <Route path="/user/search-main" component={SearchMainPage} />
          <Route path="/user/login" component={UserLogin} />
          <Route path="/user/signup" component={UserSignup} />
          <Route path="/user/listings" component={ListingPage} />
          <Route path="/user/search" component={UserDashboard} />

          <Route path="/" exact component={SearchMainPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <section className="agent_bg">
      <div className="container">
        <div className="row">
          <form className="offset-lg-2 col-lg-8 offset-md-0 col-md-12 offset-sm-0 col-sm-12 col-xs-12">
            <h1 className="title">Properties in Nigeria for Sale and Rent</h1>
            <div className="search-bg">
              <input
                className="form-control"
                aria-label="Select Vendor Category"
                placeholder="Search by Location or Country Name"
              />
              <select name="" className="selectpicker">
                <option value="Type">Type</option>
                <option value="Type">bungalo</option>
                <option value="Type">self-contain asdfghjk asdfghj</option>
                <option value="Type">Type</option>
                <option value="Type">Type</option>
                <option value="Type">Type</option>
              </select>
              <button type="button" className="btn primary">
                <span className="fa fa-search"></span>
              </button>{" "}
            </div>
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
              Properties for Rent and Sale
              <span className="hr"></span>
            </h1>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div className="property-bg">
              <a href="" className="image-bg">
                <img
                  src="images/agent-logos/img-1.jpg"
                  alt="img-ads"
                  className="img-fluid"
                />
              </a>
              <div className="property-content text-center">
                <h2 className="title">Affordable Global Reality</h2>
                <p>12 properties closed</p>
                <div className="prop_count text-center">
                  <p>
                    10 properties for <span className="cont-label">Rent</span>
                  </p>
                  <p>
                    10 properties for{" "}
                    <span className="cont-label sales">Sale</span>
                  </p>
                </div>
                <a href="" className="btn primary">
                  View Contact
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div className="property-bg">
              <a href="" className="image-bg">
                <img
                  src="images/agent-logos/img-1.jpg"
                  alt="img-ads"
                  className="img-fluid"
                />
              </a>
              <div className="property-content text-center">
                <h2 className="title">Affordable Global Reality</h2>
                <p>12 properties closed</p>
                <div className="prop_count text-center">
                  <p>
                    10 properties for <span className="cont-label">Rent</span>
                  </p>
                  <p>
                    10 properties for{" "}
                    <span className="cont-label sales">Sale</span>
                  </p>
                </div>
                <a href="" className="btn primary">
                  View Contact
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div className="property-bg">
              <a href="" className="image-bg">
                <img
                  src="images/agent-logos/img-1.jpg"
                  alt="img-ads"
                  className="img-fluid"
                />
              </a>
              <div className="property-content text-center">
                <h2 className="title">Affordable Global Reality</h2>
                <p>12 properties closed</p>
                <div className="prop_count text-center">
                  <p>
                    10 properties for <span className="cont-label">Rent</span>
                  </p>
                  <p>
                    10 properties for{" "}
                    <span className="cont-label sales">Sale</span>
                  </p>
                </div>
                <a href="" className="btn primary">
                  View Contact
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div className="property-bg">
              <a href="" className="image-bg">
                <img
                  src="images/agent-logos/img-1.jpg"
                  alt="img-ads"
                  className="img-fluid"
                />
              </a>
              <div className="property-content text-center">
                <h2 className="title">Affordable Global Reality</h2>
                <p>12 properties closed</p>
                <div className="prop_count text-center">
                  <p>
                    10 properties for <span className="cont-label">Rent</span>
                  </p>
                  <p>
                    10 properties for{" "}
                    <span className="cont-label sales">Sale</span>
                  </p>
                </div>
                <a href="" className="btn primary">
                  View Contact
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div className="property-bg">
              <a href="" className="image-bg">
                <img
                  src="images/agent-logos/img-1.jpg"
                  alt="img-ads"
                  className="img-fluid"
                />
              </a>
              <div className="property-content text-center">
                <h2 className="title">Affordable Global Reality</h2>
                <p>12 properties closed</p>
                <div className="prop_count text-center">
                  <p>
                    10 properties for <span className="cont-label">Rent</span>
                  </p>
                  <p>
                    10 properties for{" "}
                    <span className="cont-label sales">Sale</span>
                  </p>
                </div>
                <a href="" className="btn primary">
                  View Contact
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div className="property-bg">
              <a href="" className="image-bg">
                <img
                  src="images/agent-logos/img-1.jpg"
                  alt="img-ads"
                  className="img-fluid"
                />
              </a>
              <div className="property-content text-center">
                <h2 className="title">Affordable Global Reality</h2>
                <p>12 properties closed</p>
                <div className="prop_count text-center">
                  <p>
                    10 properties for <span className="cont-label">Rent</span>
                  </p>
                  <p>
                    10 properties for{" "}
                    <span className="cont-label sales">Sale</span>
                  </p>
                </div>
                <a href="" className="btn primary">
                  View Contact
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div className="property-bg">
              <a href="" className="image-bg">
                <img
                  src="images/agent-logos/img-1.jpg"
                  alt="img-ads"
                  className="img-fluid"
                />
              </a>
              <div className="property-content text-center">
                <h2 className="title">Affordable Global Reality</h2>
                <p>12 properties closed</p>
                <div className="prop_count text-center">
                  <p>
                    10 properties for <span className="cont-label">Rent</span>
                  </p>
                  <p>
                    10 properties for{" "}
                    <span className="cont-label sales">Sale</span>
                  </p>
                </div>
                <a href="" className="btn primary">
                  View Contact
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div className="property-bg">
              <a href="" className="image-bg">
                <img
                  src="images/agent-logos/img-1.jpg"
                  alt="img-ads"
                  className="img-fluid"
                />
              </a>
              <div className="property-content text-center">
                <h2 className="title">Affordable Global Reality</h2>
                <p>12 properties closed</p>
                <div className="prop_count text-center">
                  <p>
                    10 properties for <span class="cont-label">Rent</span>
                  </p>
                  <p>
                    10 properties for{" "}
                    <span className="cont-label sales">Sale</span>
                  </p>
                </div>
                <a href="" className="btn primary">
                  View Contact
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div className="property-bg">
              <a href="" className="image-bg">
                <img
                  src="images/agent-logos/img-1.jpg"
                  alt="img-ads"
                  className="img-fluid"
                />
              </a>
              <div className="property-content text-center">
                <h2 className="title">Affordable Global Reality</h2>
                <p>12 properties closed</p>
                <div className="prop_count text-center">
                  <p>
                    10 properties for <span className="cont-label">Rent</span>
                  </p>
                  <p>
                    10 properties for{" "}
                    <span className="cont-label sales">Sale</span>
                  </p>
                </div>
                <a href="" className="btn primary">
                  View Contact
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div className="property-bg">
              <a href="" className="image-bg">
                <img
                  src="images/agent-logos/img-1.jpg"
                  alt="img-ads"
                  className="img-fluid"
                />
              </a>
              <div className="property-content text-center">
                <h2 className="title">Affordable Global Reality</h2>
                <p>12 properties closed</p>
                <div className="prop_count text-center">
                  <p>
                    10 properties for <span className="cont-label">Rent</span>
                  </p>
                  <p>
                    10 properties for{" "}
                    <span className="cont-label sales">Sale</span>
                  </p>
                </div>
                <a href="" className="btn primary">
                  View Contact
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div className="property-bg">
              <a href="" className="image-bg">
                <img
                  src="images/agent-logos/img-1.jpg"
                  alt="img-ads"
                  className="img-fluid"
                />
              </a>
              <div className="property-content text-center">
                <h2 className="title">Affordable Global Reality</h2>
                <p>12 properties closed</p>
                <div className="prop_count text-center">
                  <p>
                    10 properties for <span className="cont-label">Rent</span>
                  </p>
                  <p>
                    10 properties for{" "}
                    <span className="cont-label sales">Sale</span>
                  </p>
                </div>
                <a href="" className="btn primary">
                  View Contact
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div className="property-bg">
              <a href="" className="image-bg">
                <img
                  src="images/agent-logos/img-1.jpg"
                  alt="img-ads"
                  className="img-fluid"
                />
              </a>
              <div className="property-content text-center">
                <h2 className="title">Affordable Global Reality</h2>
                <p>12 properties closed</p>
                <div className="prop_count text-center">
                  <p>
                    10 properties for <span className="cont-label">Rent</span>
                  </p>
                  <p>
                    10 properties for{" "}
                    <span className="cont-label sales">Sale</span>
                  </p>
                </div>
                <a href="" className="btn primary">
                  View Contact
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 pager">
            <nav aria-label="Page navigation ">
              <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                  <a className="page-link" href="#" tabindex="-1"></a>
                </li>
                <li className="page-item active">
                  <span className="page-link">1</span>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <span className="hidden-numb">...</span>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#"></a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default App;
