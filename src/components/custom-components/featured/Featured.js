import React from "react";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
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
          <Card.Body>
            <Card.Title>Special 1</Card.Title>
            <Card.Img src="/syntechicon.jpg"/>
            <Card.Text>
              Some quick example text to build on the card title
            </Card.Text>
            <Nav.Link>READ MORE</Nav.Link>
          </Card.Body>
        </Card>
        <Card className="featured-card">
          <Card.Body>
            <Card.Title>Special 2</Card.Title>
            <Card.Img src="/syntechicon.jpg"/>
            <Card.Text>
              Some quick example text to build on the card title
            </Card.Text>
            <Nav.Link>READ MORE</Nav.Link>
          </Card.Body>
        </Card>
        <Card className="featured-card">
          <Card.Body>
            <Card.Title>Special 3</Card.Title>
            <Card.Img src="/syntechicon.jpg"/>
            <Card.Text>
              Some quick example text to build on the card title
            </Card.Text>
            <Nav.Link>READ MORE</Nav.Link>
          </Card.Body>
        </Card>      
      </div>
    </div>
  );
}
