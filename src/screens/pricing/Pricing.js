import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import CustomNavbar from "../../components/generic-components/navbar/CustomNavbar";
import Footer from "../../components/generic-components/footer/CustomFooter";
import styles from "./Pricing.module.css";
import { Link } from "react-router-dom";

export default function Pricing() {
  const plans = [
    {
      duration: "1 Month",
      price: "$40.00",
      rate: "hour",
      description: "Odoo Consultants or Odoo Developers",
      advance: "30% payment in advance",
      hours: "160 hours / month",
      communication: "Communication via Email, Slack and Phone",
      report: "Weekly Report",
      link: "/order-now",
      highlight: false
    },
    {
      duration: "2 Months",
      price: "$35.00",
      rate: "hour",
      description: "Odoo Consultants or Odoo Developers",
      advance: "30% payment in advance",
      hours: "160 hours / month",
      communication: "Communication via Email, Slack and Phone",
      report: "Weekly Report",
      link: "/order-now",
      highlight: false
    },
    {
      duration: "3 Months",
      price: "$30.00",
      rate: "hour",
      description: "Odoo Consultants or Odoo Developers",
      advance: "30% payment in advance",
      hours: "160 hours / month",
      communication: "Communication via Email, Slack and Phone",
      report: "Weekly Report",
      link: "/order-now",
      highlight: true
    }
  ];

  return (
    <>
      <CustomNavbar />
      <Container className={styles.pricingContainer}>
        <h1 className={styles.heading}>Dedicated Resources</h1>
        <Row>
          {plans.map((plan, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className={`${styles.pricingCard} ${plan.highlight ? styles.highlightCard : ""}`}>
                <Card.Body>
                  <Card.Title className={styles.cardTitle}>{plan.duration}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    <span className={styles.price}>{plan.price}</span> / {plan.rate}
                  </Card.Subtitle>
                  <Card.Text>✮ {plan.description}</Card.Text>
                  <Card.Text>✮ {plan.advance}</Card.Text>
                  <Card.Text>✮ {plan.hours}</Card.Text>
                  <Card.Text>✮ {plan.communication}</Card.Text>
                  <Card.Text>✮ {plan.report}</Card.Text>
                  <Link to={plan.link} >
                    <Button variant="outline-info" >ORDER NOW</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className={styles.welcomeSection}>
          <h2>Welcome to Syntech – Your Trusted Odoo Consulting and Development Partner</h2>
          <p>
            At Syntech, we are proud to be an official Odoo Platinium Partner, delivering exceptional ERP solutions to businesses worldwide. With our dedicated resources and expertise, we offer tailored services to meet your unique business requirements. We understand that every client is different, which is why we provide three distinct options to choose from: Option 1 – “Accelerate,” Option 2 – “Optimize,” and Option 3 – “Transform.”
          </p>
          <h3>Option 1 – Accelerate</h3>
          <p>
            With our Accelerate option, you gain access to our team of highly skilled Odoo consultants and developers at an hourly rate of $40. This option is ideal for clients seeking rapid implementation or quick customization of their Odoo system. Our experts will work closely with you to expedite the process, delivering tangible results within a one-month timeframe. This option is perfect for clients who require a fast and efficient solution to meet immediate business needs.
          </p>
          <h3>Option 2 – Optimize</h3>
          <p>
            For clients requiring a more comprehensive Odoo implementation or customization, our Optimize option is the way to go. With an hourly rate of $35, you benefit from an extended engagement period of two months. This option allows our team to delve deeper into your business processes, thoroughly analyze your requirements, and optimize your Odoo system accordingly. We focus on fine-tuning your system, integrating custom features, and providing comprehensive training to ensure seamless operations and maximum efficiency.
          </p>
          <h3>Option 3 – Transform (Best Value)</h3>
          <p>
            Our Transform option is designed to deliver the utmost value to our clients. Priced at an attractive hourly rate of $30, this option allows for a three-month engagement period, enabling us to fully immerse ourselves in your project. By choosing this option, you benefit from a comprehensive partnership, where our dedicated resources work closely with your team to transform your business operations using Odoo. We provide in-depth analysis, implement tailored solutions, and offer extensive support to ensure a successful and transformative outcome.
          </p>
          <h4>Why Choose Option 3 – Transform?</h4>
          <p>
            Option 3 – Transform is our recommended choice for clients seeking a holistic Odoo consultancy and development experience. By opting for this option, you receive the best value for your investment, benefiting from our extensive experience and expertise over an extended period. Our team will be fully dedicated to understanding your business processes, implementing efficient solutions, and providing comprehensive support throughout the engagement. This option ensures a truly transformative journey, resulting in enhanced productivity, streamlined operations, and sustainable growth for your organization.
          </p>
          <p>
            At Syntech, we prioritize your success and aim to deliver exceptional results through our Odoo services. Whether you choose Option 1 – Accelerate, Option 2 – Optimize, or the recommended Option 3 – Transform, our team of dedicated professionals is committed to delivering excellence and ensuring your complete satisfaction.
          </p>
          <p>
            Contact us today to discuss your requirements and embark on a transformative journey with SynTech, your trusted Odoo consulting and development partner.
          </p>
        </div>
      </Container>
      <Footer />
    </>
  );
}
