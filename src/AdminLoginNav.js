import "./App.css";
import "./images/home-pic1.jpg";
import "./images/select-dropdown.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";

import logo3 from "./images/logo3.png";
import { Link } from "react-router-dom";

function AdminLoginNav() {
  return (
    <div>
      <header className="primary">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <a className=" spining-logo navbar-brand " href="#">
              <img
                className="img-responsive  img-dis-sale "
                src={logo3}
                alt="logo"
              />
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <Link to="/admin/signup">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Admin Signup<span className="sr-only">(current)</span>
                    </a>
                  </li>
                </Link>

                <Link to="/admin/login">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Admin Login<span className="sr-only"></span>
                    </a>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
export default AdminLoginNav;
