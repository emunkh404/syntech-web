import React from 'react';
import { Col, Nav, Row, Tab} from 'react-bootstrap';
import styles from './TabColumns.module.css';

const dataTabs = [
  {
    src: '/app_1.png',
    title: 'Services',
    description: `Manage all your company services efficiently. This section allows you to track and maintain all service-related activities, ensuring smooth operations and customer satisfaction.
    You can categorize services, monitor performance metrics, and generate reports to keep stakeholders informed. Utilize automated workflows to streamline service requests and reduce manual intervention.`,
  },
  {
    src: '/app_4.png',
    title: 'Sales',
    description: `Monitor and manage sales activities. This module provides tools for tracking sales performance, managing leads, and closing deals effectively.
    With real-time analytics, sales forecasting, and customer relationship management features, you can enhance your sales strategy and improve conversion rates. Integration with other systems ensures data consistency and accuracy.`,
  },
  {
    src: '/app_7.png',
    title: 'Dashboards',
    description: `View various dashboards and reports. Gain insights into your business performance with customizable dashboards that provide real-time data and analytics.
    Create interactive visualizations, track key performance indicators (KPIs), and share reports with team members to foster data-driven decision-making. Customize your dashboards to focus on metrics that matter most to your business.`,
  },
  {
    src: '/app_9.png',
    title: 'Project All',
    description: `Get an overview of all projects. This section provides a comprehensive view of all ongoing projects, allowing you to manage resources and timelines effectively.
    Track project progress, assign tasks, and collaborate with team members to ensure timely completion. Use Gantt charts and timelines to visualize project milestones and dependencies. Efficiently allocate resources and manage budgets to stay on track.`,
  },
];

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
                      <div className={styles.animatedBadge}>
                        Try for ONE month <stong className={styles.strongText}>Free</stong>
                      </div>
                     
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
