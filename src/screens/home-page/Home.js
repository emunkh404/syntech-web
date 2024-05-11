import React from "react";
import NavigationBar from "../../components/custom-components/navigation/NavigationBar";
import Cards from "../../components/custom-components/cards/Cards";
import GetStartNow from "../../components/custom-components/get-start-now/GetStartNow";
import TabColumns from "../../components/tab-columns/TabColumns";

export default function Home() {
  return (
    <div>
      <NavigationBar />
      <h1>Your Business Automation Solutions !!!</h1>
      <div style={{ width: "80%", margin: "0 auto", textAlign: "center" }}>
        <Cards />
      </div>
      <div style={{marginBottom: "4rem"}}>
        <GetStartNow />
      </div>
      <div style={{ width: "80%", margin: "0 auto", textAlign: "center", marginBottom: "4rem" }}>
        <TabColumns/>
      </div>
    </div>
  );
}
