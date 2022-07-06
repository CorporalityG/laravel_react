import React, { useEffect, useState } from "react";
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
import { API_BASE_URL, BASE_URL } from '../../config'

function AboutCorporality() {

  const page_slug = 'about-corporality';

  const [pageDetail, setPageDetail] = useState([]);

  useEffect(() => {
    getPageDetail()
  }, []);

  async function getPageDetail() {
    let result = await fetch(`${API_BASE_URL}/page-detail/${page_slug}`);
    result = await result.json();
    setPageDetail(result);
  }

  return (
    <>
      <Helmet>
        {pageDetail.meta_title && <title>{`${pageDetail.meta_title}`}</title>}
        {pageDetail.meta_description && <meta name="description" content={`${pageDetail.meta_description}`} />}
        {pageDetail.meta_keywords && <meta name="keywords" content={pageDetail.meta_keywords} />}
        <link rel="canonical" href={`${BASE_URL}/about-corporality/`} />
      </Helmet>

      <FirstNew {...pageDetail.detail} />
      <Quote {...pageDetail.detail} />
      <ThreeBoxes {...pageDetail.detail} />
      <FearlessCreativity {...pageDetail.detail} />
      <WorkParallax {...pageDetail.detail} />
      <WorldMap {...pageDetail.detail} />
      <CommunitySupport {...pageDetail.detail} />
      <Leadership {...pageDetail.detail} />
      <Caretojoinus {...pageDetail.detail} />
    </>
  );
}

export default AboutCorporality;
