import React from "react";
import FirstNew from "./Components/OurImpetus/FirstNew";
import Quote from "./Components/Quote/Quote";
import Leadership from "./Components/Leadership/Leadership";
import CommunitySupport from "./Components/CommunitySupport/CommunitySupport";
import ThreeBoxes from "./Components/ThreeBoxes/ThreeBoxes";
import FearlessCreativity from "./Components/FearlessCreativity/FearlessCreativity";
import WorkParallax from "./Components/MiddleParallax/WorkParallax";
import WorldMap from "./Components/WorldMap/WorldMap";
import Caretojoinus from "./Components/CaretojoinUs/Caretojoinus";
import { Helmet } from "react-helmet";
import { BASE_URL } from '../../config'

function AboutCorporality() {
  return (
    <>
      <Helmet>
        <title>{`The Best digital marketing firm in Sydney | Corporality`}</title>
        <meta name="description" content={`Grow your business globally with the experts that offers marketing services to let you promote business using SEO, PPC and SMM.`} />
        <link rel="canonical" href={`${BASE_URL}/about-corporality/`} />
      </Helmet>

      <FirstNew />
      <Quote />
      <ThreeBoxes />
      <FearlessCreativity />
      <WorkParallax />
      <WorldMap />
      <CommunitySupport />
      <Leadership />
      <Caretojoinus />
    </>
  );
}

export default AboutCorporality;
