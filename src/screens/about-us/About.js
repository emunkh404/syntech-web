import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CustomNavbar from "../../components/generic-components/navbar/CustomNavbar"; // Import the CustomNavbar component
import Footer from "../../components/generic-components/footer/CustomFooter";
import styles from "./About.module.css";

function About() {
  return (
    <>
      <CustomNavbar /> {/* Use the CustomNavbar component */}
      <div
        className={styles.aboutSection}
        style={{ backgroundImage: 'url("/about-bg.png")' }}
      >
        <Container>
          <Row
            className="justify-content-center align-items-center"
            style={{ minHeight: "100vh" }}
          >
            <Col md={8}>
              <div className={styles.aboutContent}>
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
      <Footer /> {/* Use the Footer component */}
    </>
  );
}

export default About;
