import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import styles from "./GetStartNow.module.css";

export default function GetStartNow() {
  return (
    <div>
      <Navbar className={styles.navTop} variant="dark">
        <div className={styles.textContainer}>
          <p>
            As an Odoo Partner, our knowledge, and best practices have helped
            industry leaders run their businesses smartly and efficiently.
            {" "}<Button variant="outline-info">CHECK OUR APPS</Button>
          </p>
        </div>
      </Navbar>
    </div>
  );
}

