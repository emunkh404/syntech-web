import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import styles from "./GetStartNow.module.css";
import { Link } from "react-router-dom";

export default function GetStartNow() {
  return (
    <div>
      <Navbar className={styles.navTop} variant="dark">
        <div className={styles.textContainer}>
          <p className={styles.quoteText}>
            Our expertise and best practices have empowered industry leaders to
            operate their businesses smarter and more efficiently.
          </p>
          <div className={styles.buttonContainer}>
            <Link to="/our-apps">
              <Button variant="outline-info">Get Start Now</Button>
            </Link>
          </div>
        </div>
      </Navbar>
    </div>
  );
}
