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
import "./Home.css"; // Assuming you have created a Home.css
import Footer from "../../components/custom-components/footer/Footer";

export default function Home() {
  return (
    <div>
      <div className="relative-container">
        <Image alt="Featured banner" src="/special.png" className="banner-image" />
        <NavigationBar />
      </div>
      <h1>Your Business Automation Solutions !!!</h1>
      <section className="content-section">
        <Cards />
      </section>
      <section className="content-section long-banner">
        <GetStartNow />
      </section>
      <section className="content-section">
        <TabColumns />
      </section>
      <section className="content-section long-banner">
        <Featured />
      </section>
      <section className="content-section">
        <QuoteForm/>
      </section>
      <Subscribe/>
      <ContactInfo/>
      <Footer/>
    </div>
  );
}
