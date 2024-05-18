import { useState } from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import styles from "./nav.module.css";

export default function NavigationBar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <Navbar className={styles.navTop} variant="dark" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <Container>
          <div className={styles.navTopContactText}>
            <p className={styles.navText}>📞 Call Us: (301) 276-7788</p>
            <p className={styles.navText}>📲 Live Chat</p>
          </div>
        </Container>
      </Navbar>
      <Navbar variant="dark" className={styles.navMiddle} expand="lg">
        <Container className="justify-content-center">
          <Navbar.Brand as={NavLink} to="/">
            <Image
              alt="SynTech-icon"
              src="/syntechicon.png"
              height={40}
              roundedCircle
            />
            <span className={styles.navLogoText}>SynTech</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" onClick={() => setExpanded(!expanded)} />
          <Navbar.Collapse id="navbar-nav" className="justify-content-end" expanded={expanded}>
            <Nav className="ml-auto nav-link">
              <NavLink to="/services" className={`nav-link ${styles.navLink}`}>Services</NavLink>
              <NavLink to="/our-apps" className={`nav-link ${styles.navLink}`}>Our apps</NavLink>
              <NavLink to="/pricing" className={`nav-link ${styles.navLink}`}>Pricing</NavLink>
              <NavLink to="/about-us" className={`nav-link ${styles.navLink}`}>About Us</NavLink>
              <NavLink to="/contact-us" className={`nav-link ${styles.navLink}`}>Contact Us</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar className={styles.navBottom} variant="dark" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <Container>
          <div className={styles.navBottom} style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            <h1>
              Free Demo Applications for ONE Month{" "}
              <NavLink to="/contact-us">
                <Button variant="outline-info">Request Demo</Button>
              </NavLink>
            </h1>
            <h3>How we do it</h3>
            <ul className={styles.navBottomList}>
              <li>🔹Consultation</li>
              <li>🔹Module Selection</li>
              <li>🔹Implementation</li>
              <li>🔹Training & Support</li>
            </ul>
            <div className={styles.navContact}>
              <h4>Contact Us: (301) 276-7788</h4>
              <div className={styles.navButtons}>
                <NavLink to="/contact-us">
                  <Button variant="outline-success">SCHEDULE A DEMO</Button>
                </NavLink>
                <NavLink to="/our-apps">
                  <Button variant="outline-info">CHECK OUR APPS</Button>
                </NavLink>
              </div>
            </div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}
