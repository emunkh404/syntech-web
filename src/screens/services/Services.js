import React, { useEffect, useState } from "react";
import { Container, Tab, Tabs, Image } from "react-bootstrap";
import { Code, GraphUp, ShieldLock, People } from "react-bootstrap-icons";
import CustomNavbar from "../../components/generic-components/navbar/CustomNavbar";
import Footer from "../../components/generic-components/footer/CustomFooter";
import styles from "./Services.module.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Services() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const serviceKey = params.get("service");

  const [activeKey, setActiveKey] = useState(serviceKey || "ecommerce");

  useEffect(() => {
    if (serviceKey) {
      setActiveKey(serviceKey);
    }
  }, [serviceKey]);

  const services = [
    {
      key: "ecommerce",
      title: "eCommerce",
      description: "Our eCommerce solutions provide a user-friendly interface suitable for retail businesses of any size. With robust features like product management, order tracking, and customer engagement tools, you can streamline your online sales process and enhance the shopping experience for your customers. Our platform supports various payment gateways and shipping methods, ensuring a seamless transaction process.",
      image: "/service_ecommerce.png",
      icon: <Code size={30} />
    },
    {
      key: "sales",
      title: "Sales",
      description: "Efficiently send detailed and attractive quotations to potential customers, including product descriptions and images. Our Sales module allows you to track leads, manage opportunities, and close deals faster. With integrated CRM functionalities, you can gain insights into customer behavior, optimize sales strategies, and improve overall customer satisfaction.",
      image: "/service_sales.png",
      icon: <GraphUp size={30} />
    },
    {
      key: "crm",
      title: "CRM",
      description: "Our CRM system offers an intuitive interface tailored for sales teams, providing a comprehensive dashboard for better insight into sales activities. Track customer interactions, manage contacts, and nurture leads effectively. The CRM helps you understand customer needs, build stronger relationships, and boost sales performance through targeted marketing campaigns and personalized communication.",
      image: "/service_crm.png",
      icon: <People size={30} />
    },
    {
      key: "accounting",
      title: "Accounting",
      description: "Easily generate professional invoices with advanced features like payment terms, multiple taxes, and discounts. Our Accounting module simplifies financial management by automating bookkeeping tasks, generating financial reports, and ensuring compliance with accounting standards. Gain real-time visibility into your financial health and make informed decisions to drive business growth.",
      image: "/service_accounting.png",
      icon: <ShieldLock size={30} />
    },
    {
      key: "project",
      title: "Project",
      description: "Our Project Management tool offers a streamlined interface for contemporary project management, providing all necessary information at your fingertips. Plan, execute, and monitor projects efficiently with features like task assignments, milestones, and time tracking. Collaborate seamlessly with team members, track progress, and ensure projects are delivered on time and within budget.",
      image: "/service_project.png",
      icon: <GraphUp size={30} />
    },
    {
      key: "inventory",
      title: "Inventory",
      description: "Odoo's double-entry inventory management ensures complete traceability from supplier to customer. Manage stock levels, track inventory movements, and reduce stockouts with real-time updates. Our Inventory module supports multiple warehouses and locations, offering comprehensive reporting and analytics to optimize your supply chain and improve operational efficiency.",
      image: "/service_inventory.png",
      icon: <Code size={30} />
    },
  ];

  return (
    <>
      <CustomNavbar />
      <Container className={styles.servicesContainer}>
        <Tabs activeKey={activeKey} onSelect={(k) => setActiveKey(k)} id="services-tabs" className={styles.verticalTabs}>
          {services.map((service) => (
            <Tab eventKey={service.key} title={service.title} key={service.key}>
              <div className={styles.serviceContent}>
                <div className={styles.serviceText}>
                  <h3>{service.icon} {service.title}</h3>
                  <p>{service.description}</p>
                  <Link to="/contact-us" className={styles.connectLink}>Connect us</Link>
                </div>
                <Image src={service.image} fluid className={styles.serviceImage} />
              </div>
            </Tab>
          ))}
        </Tabs>
      </Container>
      <Footer />
    </>
  );
}
