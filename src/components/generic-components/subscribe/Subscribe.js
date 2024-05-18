import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import styles from './Subscribe.module.css'; // Import the CSS module

export default function Subscribe() {
  return (
    <Navbar className={`nav-top ${styles.subscribeNavbar}`} variant="dark">
      <div className={styles.subscribeContainer}>
        <p className={styles.subscribeText}>Subscribe! Stay Informed</p>
        <InputGroup className={styles.subscribeInputGroup}>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            aria-label="Enter your email"
            aria-describedby="button-addon2"
          />
          <Button variant="outline-light" id="button-addon2">
            Subscribe
          </Button>
        </InputGroup>
      </div>
    </Navbar>
  );
}
