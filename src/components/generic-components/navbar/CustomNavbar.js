import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import styles from "./Navbar.module.css";

function CustomNavbar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Navbar className={styles.navTop} variant="dark">
        <Container>
          <div className={styles.navTopContactText}>
            <p className={styles.navText}> 📞 Call Us: (301) 276-7788</p>
            <p className={styles.navText}> 📲 Live Chat</p>
          </div>
        </Container>
      </Navbar>
      <Navbar
        variant="dark"
        className={styles.navMiddle}
        expand="lg"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
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
          <Navbar.Toggle
            aria-controls="navbar-nav"
            onClick={() => setExpanded(!expanded)}
          />
          <Navbar.Collapse
            id="navbar-nav"
            className="justify-content-end"
            expanded={expanded}
          >
            <Nav className="ml-auto">
              <NavLink to="/services" className="nav-link">
                Services
              </NavLink>
              <NavLink to="/our-apps" className="nav-link">
                Our apps
              </NavLink>
              <NavLink to="/pricing" className="nav-link">
                Pricing
              </NavLink>
              <NavLink to="/about-us" className="nav-link">
                About Us
              </NavLink>
              <NavLink to="/contact-us" className="nav-link">
                Contact Us
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default CustomNavbar;
