import "./App.css";
import "./images/home-pic1.jpg";
import "./images/select-dropdown.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import Tilt from "react-vanilla-tilt";
import pic1 from "./images/tony.jpg";
import pic2 from "./images/tonypic2.jpg";
import logo2 from "./images/logo2.png";
import logo3 from "./images/logo3.png";
import { Link } from "react-router-dom";

function Nav() {
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
                <Link to="/">
                  <li class="nav-item">
                    <a className="nav-link" href="farm.html">
                      Home<span className="sr-only">(current)</span>
                    </a>
                  </li>
                </Link>

                <Link to="/java">
                  <li class="nav-item">
                    <a className="nav-link" href="farm.html">
                      Java<span className="sr-only"></span>
                    </a>
                  </li>
                </Link>

                <Link to="/golang">
                  <li className="nav-item">
                    <a className="nav-link" href="heavy-equipment.html">
                      Golang <span className="sr-only"></span>
                    </a>
                  </li>
                </Link>

                <Link to="/python">
                  <li className="nav-item">
                    <a className="nav-link" href="cars.html">
                      Python
                    </a>
                  </li>
                </Link>

                <Link to="/javascript">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Javascript
                    </a>
                  </li>
                </Link>

                <Link to="/block-chain">
                  <li className="nav-item ">
                    <a className="nav-link" href="building.html">
                      Block chain
                    </a>
                  </li>
                </Link>

                <Link to="/microservice">
                  <li className="nav-item ">
                    <a className="nav-link" href="building.html">
                      Microservices
                    </a>
                  </li>
                </Link>
                <Link to="/oauth">
                  <li className="nav-item ">
                    <a className="nav-link" href="building.html">
                      Aouth2
                    </a>
                  </li>
                </Link>

                <Link to="/doc">
                  <li className="nav-item ">
                    <a className="nav-link" href="building.html">
                      My Projects Documentations
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
export default Nav;
