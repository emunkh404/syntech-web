import { useState } from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import "./nav.css";

export default function NavigationBar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <Navbar className="nav-top" variant="dark" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <Container>
          <div className="nav-top-contact-text">
            <p className="nav-text">📞 Call Us: (301) 276-7788</p>
            <p className="nav-text">📲 Live Chat</p>
          </div>
        </Container>
      </Navbar>
      <Navbar  variant="dark" className="nav-middle" expand="lg">
        <Container className="justify-content-center">
          <Navbar.Brand as={NavLink} to="/">
            <Image
              alt="SynTech-icon"
              src="/syntechicon.png"
              height={40}
              roundedCircle
            />
            <span className="nav-logo-text">SynTech</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" onClick={() => setExpanded(!expanded)} />
          <Navbar.Collapse id="navbar-nav" className="justify-content-end" expanded={expanded}>
            <Nav className="ml-auto">
            <NavLink to="/services" className="nav-link">Services</NavLink>
              <NavLink to="/our-apps" className="nav-link">Our apps</NavLink>
              <NavLink to="/pricing" className="nav-link">Pricing</NavLink>
              <NavLink to="/about-us" className="nav-link">About Us</NavLink> {/* Update this line */}
              <NavLink to="/contact-us" className="nav-link">Contact Us</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar className="nav-bottom" variant="dark" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <Container>
          <div className="nav-bottom" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            <h1>
              Free Demo Applications for ONE Month{" "}
              <Button variant="outline-info">Read More</Button>
            </h1>

            <h3>How we do it</h3>
            <ul className="nav-bottom-list">
              <li>🔹Consultation</li>
              <li>🔹Module Selection</li>
              <li>🔹Implementation</li>
              <li>🔹Training & Support</li>
            </ul>
            <div className="nav-contact">
              <h4>Contact Us: (301) 276-7788</h4>
              <div className="nav-buttons">
                <Button variant="outline-success">SCHEDULE A DEMO</Button>
                <Button variant="outline-info">CHECK OUR APPS</Button>
              </div>
            </div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}
