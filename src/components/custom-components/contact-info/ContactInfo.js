import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Phone, Envelope, ChatDots } from 'react-bootstrap-icons';
import "./ContactInfo.css"

function ContactInfo() {
  return (
    <Container fluid style={{ backgroundColor: '#22221a', color: '#F6F4E6' }}>
      <Row className="justify-content-center py-2">
        <Col md={4} className="text-center contact-item">
          <Phone color="aqua" size={30} />
          <div>
            <strong>(301) 276-7788</strong>
            <div>Give us a Call</div>
          </div>
        </Col>

        <Col md={4} className="text-center contact-item">
          <Envelope color="aqua" size={30} />
          <div>
            <strong>info@syntech.com</strong>
            <div>Send us a Message</div>
          </div>
        </Col>

        <Col md={4} className="text-center contact-item">
          <ChatDots color="aqua" size={30} />
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
