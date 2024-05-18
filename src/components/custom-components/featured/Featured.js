import React from "react";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import { PeopleFill, ClipboardData, CalculatorFill } from 'react-bootstrap-icons'; // Import specific icons
import styles from "./Featured.module.css";

export default function Featured() {
  return (
    <div className={styles.featuredContainer}>
      <Image
        alt="Featured banner"
        src="/feature.png"
        className={styles.featuredImage}
      />
      <div className={styles.featuredCards}>
        <Card className={styles.featuredCard}>
          <Card.Body className={styles.cardBody}>
            <PeopleFill size={50} className={styles.icon} /> 
            <Card.Title>CRM</Card.Title>
            <Card.Text>
              Manage customer relationships efficiently.
            </Card.Text>
            <Nav.Link href="#crm">READ MORE</Nav.Link>
          </Card.Body>
        </Card>
        <Card className={styles.featuredCard}>
          <Card.Body className={styles.cardBody}>
            <ClipboardData size={50} className={styles.icon} /> 
            <Card.Title>Project</Card.Title>
            <Card.Text>
              Streamline your project management processes.
            </Card.Text>
            <Nav.Link href="#project">READ MORE</Nav.Link>
          </Card.Body>
        </Card>
        <Card className={styles.featuredCard}>
          <Card.Body className={styles.cardBody}>
            <CalculatorFill size={50} className={styles.icon} /> 
            <Card.Title>Accounting</Card.Title>
            <Card.Text>
              Simplify financial tasks and reporting.
            </Card.Text>
            <Nav.Link href="#accounting">READ MORE</Nav.Link>
          </Card.Body>
        </Card>      
      </div>
    </div>
  );
}
