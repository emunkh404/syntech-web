import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./QuoteForm.css";

function QuoteForm() {
  return (
    <>
      <h2>Request a Quick Quote</h2>
      <div className="container mt-5 my-form">
        <Form style={{padding: "2rem"}}>
          <Row className="mb-3">
            <Form.Group as={Col} md="6">
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group as={Col} md="6">
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Subject" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control as="textarea" rows={3} placeholder="Your message" />
          </Form.Group>

          <Button variant="outline-info" type="submit">
            Get Started
          </Button>
        </Form>
      </div>
    </>
  );
}

export default QuoteForm;
