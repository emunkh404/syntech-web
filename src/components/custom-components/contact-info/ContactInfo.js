import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Phone, Envelope, ChatDots } from 'react-bootstrap-icons';
import styles from "./ContactInfo.module.css";

function ContactInfo() {
  return (
    <Container fluid className={styles.contactContainer}>
      <Row className="justify-content-center py-2">
        <Col md={4} className={styles.contactItem}>
          <Phone size={30} className={styles.contactIcon} />
          <div>
            <strong>(301) 276-7788</strong>
            <div>Give us a Call</div>
          </div>
        </Col>

        <Col md={4} className={styles.contactItem}>
          <Envelope size={30} className={styles.contactIcon} />
          <div>
            <strong>info@syntech.com</strong>
            <div>Send us a Message</div>
          </div>
        </Col>

        <Col md={4} className={styles.contactItem}>
          <ChatDots size={30} className={styles.contactIcon} />
          <div>
            <strong>Live Chat</strong>
            <div>Get all the information</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactInfo;
