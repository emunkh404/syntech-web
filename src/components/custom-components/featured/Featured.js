import React from "react";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import { PeopleFill, ClipboardData, CalculatorFill } from 'react-bootstrap-icons'; // Import specific icons
import "./Featured.css";

export default function Featured() {
  return (
    <div className="featured-container">
      <Image
        alt="Featured banner"
        src="/feature.png"
        className="featured-image"
      />
       <div className="featured-cards">
        <Card className="featured-card">
          <Card.Body className="card-body">
            <PeopleFill size={50} className="icon" /> {/* Icon for CRM */}
            <Card.Title>CRM</Card.Title>
            <Card.Text>
              Manage customer relationships efficiently.
            </Card.Text>
            <Nav.Link href="#crm">READ MORE</Nav.Link>
          </Card.Body>
        </Card>
        <Card className="featured-card">
          <Card.Body className="card-body">
            <ClipboardData size={50} className="icon" /> {/* Icon for Project */}
            <Card.Title>Project</Card.Title>
            <Card.Text>
              Streamline your project management processes.
            </Card.Text>
            <Nav.Link href="#project">READ MORE</Nav.Link>
          </Card.Body>
        </Card>
        <Card className="featured-card">
          <Card.Body className="card-body">
            <CalculatorFill size={50} className="icon" /> {/* Icon for Accounting */}
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
