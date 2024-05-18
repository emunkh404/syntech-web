import React from "react";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import styles from "./Featured.module.css";
import services from "../../../data/services"

export default function Featured() {
 

  return (
    <div className={styles.featuredContainer}>
      <Image
        alt="Featured banner"
        src="/feature.png"
        className={styles.featuredImage}
      />
      <div className={styles.featuredCards}>
        {services.map((service) => (
          <Card key={service.key} className={styles.featuredCard}>
            <Card.Body className={styles.cardBody}>
              {service.icon}
              <Card.Title>{service.title}</Card.Title>
              <Card.Text>{service.description}</Card.Text>
              <Nav.Link as={Link} to={`/services?service=${service.key}`} className={styles.readMoreLink}>
                READ MORE
              </Nav.Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}
