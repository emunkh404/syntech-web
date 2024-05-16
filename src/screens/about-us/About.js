import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import "./About.css";
import Footer from "../../components/custom-components/footer/Footer";

function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div
        className="about-section"
        style={{ backgroundImage: 'url("/about-bg.png")' }}
      >
        <Navbar className="nav-top" variant="dark">
          <Container>
            <div className="nav-top-contact-text">
              <p className="nav-text">📞 Call Us: (301) 276-7788</p>
              <p className="nav-text">📲 Live Chat</p>
            </div>
          </Container>
        </Navbar>
        <Navbar
          variant="dark"
          className="nav-middle"
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
              <span className="nav-logo-text">SynTech</span>
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
        <Container>
          <Row
            className="justify-content-center align-items-center"
            style={{ minHeight: "100vh" }}
          >
            <Col md={8}>
              <div className="about-content">
                <h2>About Syntech LLC</h2>
                <p>
                  Syntech LLC is dedicated to transforming business operations
                  through innovative software solutions. Founded in FallsChurch,
                  Virginia, we specialize in CRM and ERP software that caters to
                  a diverse range of industries. With over a decade of
                  expertise, Syntech LLC has empowered numerous businesses to
                  streamline their processes and enhance efficiency.
                </p>
                <p>
                  Our commitment to excellence and customer satisfaction has
                  made us a leader in the industry, with a growing base of more
                  than 1000 active users. At Syntech LLC, we are not just about
                  software; we are about building lasting partnerships and
                  driving success for our clients.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default About;
