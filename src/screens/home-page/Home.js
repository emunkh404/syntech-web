import React from "react";
import NavigationBar from "../../components/custom-components/navigation/NavigationBar";
import Cards from "../../components/custom-components/cards/Cards";
import GetStartNow from "../../components/custom-components/get-start-now/GetStartNow";
import TabColumns from "../../components/tab-columns/TabColumns";
import Featured from "../../components/custom-components/featured/Featured";
import Image from "react-bootstrap/Image";
import QuoteForm from "../../components/custom-components/quote-form/QuoteForm";
import Subscribe from "../../components/custom-components/subscribe/Subscribe";
import ContactInfo from "../../components/custom-components/contact-info/ContactInfo";
import styles from  "./Home.module.css";
import Footer from "../../components/custom-components/footer/Footer";

export default function Home() {
  return (
    <div>
      <div className={styles.relativeContainer}>
        <Image alt="Featured banner" src="/special.png" className={styles.bannerImage} />
        <NavigationBar />
      </div>
      <h1 className={styles.homeH1}> Your Business Automation Solutions !!!</h1>
      <section className={styles.contentSection}>
        <Cards />
      </section>
      <section className={`${styles.contentSection} ${styles.longBanner}`}>
        <GetStartNow />
      </section>
      <section className={styles.contentSection}>
        <TabColumns />
      </section>
      <section className={`${styles.contentSection} ${styles.longBanner}`}>
        <Featured />
      </section>
      <section className={styles.contentSection}>
        <QuoteForm/>
      </section>
      <Subscribe/>
      <ContactInfo/>
      <Footer/>
    </div>
  );
}
