import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import styles from "./Cards.module.css"; // Make sure to include this
import { Link } from "react-router-dom";

export default function Cards() {
  const services = [
    { key: "ecommerce", title: "eCommerce", image: "/ecommerce.png", description: "A user-friendly interface suitable for retail businesses of any size." },
    { key: "sales", title: "Sales", image: "/sales.png", description: "Efficiently send detailed and attractive quotations to potential customers, including product descriptions and images." },
    { key: "crm", title: "CRM", image: "/crm.png", description: "Intuitive interface tailored for sales teams, offering a comprehensive dashboard for better insight into sales activities." },
    { key: "accounting", title: "Accounting", image: "/accounting.png", description: "Easily generate professional invoices with advanced features like payment terms, multiple taxes, and discounts." },
    { key: "project", title: "Project", image: "/project.png", description: "Streamlined interface for contemporary project management, providing all necessary information at your fingertips." },
    { key: "inventory", title: "Inventory", image: "/inventory.png", description: "Odoo's double-entry inventory management ensures complete traceability from supplier to customer." }
  ];

  return (
    <div className={styles.cardContainer}>
      {services.map(service => (
        <Card className={styles.card} key={service.key}>
          <Card.Img variant="top" src={service.image} />
          <Card.Body>
            <Card.Title>{service.title}</Card.Title>
            <Card.Text>{service.description}</Card.Text>
          </Card.Body>
          <Card.Footer className={styles.cardFooter}>
            <Link to={`/services?service=${service.key}`}>
              <Button variant="info">View</Button>
            </Link>
          </Card.Footer>
        </Card>
      ))}
    </div>
  );
}
