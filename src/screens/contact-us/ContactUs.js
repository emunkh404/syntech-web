import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CustomNavbar from "../../components/generic-components/navbar/CustomNavbar";
import CustomFooter from "../../components/generic-components/footer/CustomFooter";
import QuoteForm from "../../components/generic-components/quote-form/QuoteForm";
import Subscribe from "../../components/generic-components/subscribe/Subscribe";
import ContactInfo from "../../components/generic-components/contact-info/ContactInfo";
import styles from "./ContactUs.module.css";

function ContactUs() {
  return (
    <>
      <CustomNavbar />
      <Row
        className="justify-content-center align-items-center"
        style={{ margin: "20px 0" }}
      >
        <Col md={12}>
          <div className={styles.mapContainer}>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019395356173!2d-122.41941508468145!3d37.77492927975971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064df4a9d61%3A0x5e35b1e27d5a7a6e!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1633309214380!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </Col>
      </Row>
      <div className={styles.contactSection}>
        <Container>
          <Row
            className="justify-content-center align-items-center"
            style={{ minHeight: "60vh" }}
          >
            <Col md={8}>
              <QuoteForm />
            </Col>
          </Row>

          <Row
            className="justify-content-center align-items-center"
            style={{ margin: "20px 0" }}
          >
            <Col md={8}></Col>
          </Row>
          <Row
            className="justify-content-center align-items-center"
            style={{ margin: "20px 0" }}
          ></Row>
        </Container>
      </div>
      <Subscribe />
      <ContactInfo />
      <CustomFooter />
    </>
  );
}

export default ContactUs;
