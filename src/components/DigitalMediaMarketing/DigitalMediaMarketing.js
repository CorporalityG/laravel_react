import React from "react";

import Banner from "./Components/Banner";
import Blueprint from "./Components/Blueprint";
import CardsChart from "./Components/CardsChart/CardsChart";
import Revamping from "./Components/Revamping";
import Process from "./Components/Process";
import MarketingAudit from "./Components/MarketingAudit";
import KeyObject from "./Components/KeyObject";
import BluePrintNew from "./Components/BluePrintNew";
import Faqs from "./Components/Faqs";

function DigitalMediaMarketing() {
  return (
    <>
      <Banner />
      <CardsChart />

      <Revamping />
      {/* <Blueprint /> */}
      <BluePrintNew />
      <Process />
      <MarketingAudit />
      <KeyObject />
      <Faqs />
    </>
  );
}

export default DigitalMediaMarketing;
