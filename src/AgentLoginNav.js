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
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { NavbarBrand } from "react-bootstrap";
import { Container } from "react-bootstrap";

function AgentLoginNav() {
  return (
    <div>
      <header style={{ alignContent: "rigth" }} className="primary">
        <Navbar bg="#F4511E" expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <img
                style={{ marginLeft: "10%" }}
                className="img-responsive  img-dis-sale"
                src={logo3}
                alt="logo"
              />
            </Navbar.Brand>
          </Container>

          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/agent/signup">Signup</Nav.Link>
                <Nav.Link href="/agent/login">Login</Nav.Link>
                <Nav.Link href="/">Home</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  );
}
export default AgentLoginNav;
