import "./App.css";
import "./images/home-pic1.jpg";
import "./images/select-dropdown.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "font-awesome/css/font-awesome.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 main">
            <span className="copy">© copyright 2021 PHI-SOFT. </span>
            <ul className="float-right socials">
              <li>
                <a href="" className="fa fa-facebook"></a>
              </li>
              <li>
                <a href="" className="fa fa-twitter"></a>
              </li>
              <li>
                <a href="" className="fa fa-youtube"></a>
              </li>
              <li>
                <a href="" className="fa fa-instagram"></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
