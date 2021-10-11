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

function AgentNav() {
  const logout = () => {
    localStorage.removeItem("login");
    localStorage.removeItem("jwt");
    localStorage.removeItem("type");
    localStorage.removeItem("agentId");
    localStorage.removeItem("agentname");
    localStorage.removeItem("agent");
  };

  return (
    <div>
      <header className="primary">
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
                <Nav.Link href="/agent/dashboard">Dashboard</Nav.Link>

                <Navbar.Brand>
                  <Nav.Link href="/agent/listing">View Property</Nav.Link>
                </Navbar.Brand>
                <Navbar.Brand>
                  {" "}
                  <Nav.Link href="/agent/post-property">Post Property</Nav.Link>
                </Navbar.Brand>
                <Navbar.Brand>
                  {" "}
                  <Nav.Link href="/agent/profile-info">View Profile</Nav.Link>
                </Navbar.Brand>
                <Navbar.Brand>
                  <Nav.Link href="/agent/upload-profile-picture">
                    Edit Profile Picture
                  </Nav.Link>
                </Navbar.Brand>

                <Nav.Link onClick={logout} href="/agent/login">
                  Logout
                </Nav.Link>
                <Nav.Link href="/">Home</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  );
}
export default AgentNav;
