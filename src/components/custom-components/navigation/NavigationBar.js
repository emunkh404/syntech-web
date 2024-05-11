import { useState } from "react";
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
      <Navbar bg="dark" variant="dark" className="nav-middle" expand="lg">
        <Container className="justify-content-center">
          <Navbar.Brand href="#home">
            <Image
              alt="SynTech-icon"
              src="/syntechicon.jpg"
              height={40}
              roundedCircle
            />
            <span className="nav-logo-text">SynTech</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" onClick={() => setExpanded(!expanded)} />
          <Navbar.Collapse id="navbar-nav" className="justify-content-end" expanded={expanded}>
            <Nav className="ml-auto">
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#our-apps">Our apps</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="#about-Us">About Us</Nav.Link>
              <Nav.Link href="#contact-us">Contact Us</Nav.Link>
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
