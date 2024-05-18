import React from 'react';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './TabColumns.module.css';
import dataTabs from "../../../data/dataTabs"


function TabColumns() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey={dataTabs[0].title}>
      <Row className={styles.tabRow}>
        <Col sm={12}>
          <Nav variant="tabs" className={`flex-row ${styles.customNav}`}>
            {dataTabs.map((tab, index) => (
              <Nav.Item key={index}>
                <Nav.Link eventKey={tab.title} className={styles.customNavLink}>
                  {tab.title}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Col>
      </Row>
      <Row>
        <Col sm={12} className={styles.contentCol}>
          <Tab.Content>
            {dataTabs.map((tab, index) => (
              <Tab.Pane eventKey={tab.title} key={index}>
                <div className={styles.contentContainer}>
                  <div className={styles.description}>
                    <h3>{tab.title}</h3>
                    <p>{tab.description}</p>
                    <div className={styles.badgeContainer}>
                      <Link to="/contact-us" className={styles.link}>
                        <div className={styles.animatedBadge}>
                          Try for ONE month <strong className={styles.strongText}>Free</strong>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className={styles.imageContainer}>
                    <img
                      className={styles.image}
                      src={tab.src}
                      alt={tab.title}
                    />
                  </div>
                </div>
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default TabColumns;
