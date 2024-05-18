import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import styles from './Apps.module.css';
import CustomNavbar from '../../components/generic-components/navbar/CustomNavbar';
import CustomFooter from '../../components/generic-components/footer/CustomFooter';

const appImages = [
  { src: '/app_1.png', title: 'Services', description: 'Manage all your company services efficiently. This section allows you to track and maintain all service-related activities, ensuring smooth operations and customer satisfaction.' },
  { src: '/app_2.png', title: 'To-do', description: 'Keep track of your tasks and to-dos with ease. This tool helps you organize your daily, weekly, and monthly tasks, ensuring nothing falls through the cracks.' },
  { src: '/app_3.png', title: 'Calendar', description: 'View and manage your calendar events in one place. Schedule meetings, set reminders, and keep track of important dates effortlessly.' },
  { src: '/app_4.png', title: 'Sales', description: 'Monitor and manage sales activities. This module provides tools for tracking sales performance, managing leads, and closing deals effectively.' },
  { src: '/app_5.png', title: 'Invoices', description: 'Create and manage invoices seamlessly. Generate professional invoices, track payments, and ensure timely billing with our comprehensive invoicing tool.' },
  { src: '/app_6.png', title: 'Bills', description: 'Manage your bills and expenses. Keep track of your company’s bills, schedule payments, and maintain a record of all financial transactions.' },
  { src: '/app_7.png', title: 'Dashboards', description: 'View various dashboards and reports. Gain insights into your business performance with customizable dashboards that provide real-time data and analytics.' },
  { src: '/app_8.png', title: 'Project', description: 'Manage projects and tasks efficiently. This module helps you plan, execute, and monitor projects, ensuring timely completion and effective collaboration.' },
  { src: '/app_9.png', title: 'Project All', description: 'Get an overview of all projects. This section provides a comprehensive view of all ongoing projects, allowing you to manage resources and timelines effectively.' },
  { src: '/app_10.png', title: 'Purchases', description: 'Track and manage purchases. Maintain a record of all purchase orders, manage suppliers, and ensure timely procurement of goods and services.' },
  { src: '/app_11.png', title: 'Inventory', description: 'Manage inventory and stock levels. Keep track of your inventory, monitor stock levels, and avoid stockouts with our efficient inventory management system.' },
  { src: '/app_12.png', title: 'Employees', description: 'Manage employee information and tasks. This module helps you maintain employee records, track performance, and manage HR tasks effectively.' },
  { src: '/app_13.png', title: 'Meeting', description: 'Schedule and manage meetings. Organize meetings, send invites, and keep track of meeting minutes and follow-ups.' },
  { src: '/app_14.png', title: 'CRM', description: 'Manage customer relationships and interactions. This tool helps you track customer interactions, manage leads, and improve customer satisfaction.' },
];

const Apps = () => {
  const [key, setKey] = useState('Services');

  return (
    <>
      <CustomNavbar />
      <div className={styles.tabsContainer}>
        <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
          {appImages.map((image, index) => (
            <Tab eventKey={image.title} title={image.title} key={index}>
              <div className={styles.contentContainer}>
                <div className={styles.description}>
                  <h3>{image.title}</h3>
                  <p>{image.description}</p>
                </div>
                <div className={styles.imageContainer}>
                  <img
                    className={styles.image}
                    src={image.src}
                    alt={image.title}
                  />
                </div>
              </div>
            </Tab>
          ))}
        </Tabs>
      </div>
      <CustomFooter />
    </>
  );
};

export default Apps;
