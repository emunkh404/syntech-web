import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Apps.module.css';
import CustomNavbar from '../../components/generic-components/navbar/CustomNavbar';
import CustomFooter from '../../components/generic-components/footer/CustomFooter';
import appImages from "../../data/appImages"

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
