import React from "react";

import AllCardsNew from "./Components/AllCardsNew/AllCardsNew";

import ClientApproach from "./Components/Client_Aproach/ClientApproach";
import CorporateFirst from "./Components/CorporateBulb/CorporateFirst";
import Objectives from "./Components/Objectives";
import Parallax from "./Components/ParallaxSlide";
import UnderstandingDifficulty from "./Components/UnderstandingDifficulty/UnderstandingDifficulty";
import Faqs from "./Components/Faqs";
import { ServicesAskQuote } from "../ServicesAskQuote/ServicesAskQuote";

function CorporateStrategy() {
  return (
    <>
      <CorporateFirst />
      <AllCardsNew />
      <UnderstandingDifficulty />
      <ClientApproach />
      <Parallax />
      <Objectives />
      <Faqs />
      <ServicesAskQuote />
    </>
  );
}

export default CorporateStrategy;
