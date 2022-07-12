import React, { useEffect, useState } from "react";
import Services from "./Components/Services";
import EmotionalQuest from "./Components/EmotionalQuest";
import LatestInsights from "./Components/LatestInsights";
import NewBanner from "./Components/NewBanner.jsx";
import Banner2 from "./Components/Banner2.jsx";
import NewPortfolio from "./Components/NewPortfolio";
import CareToJoinUs from "./Components/CareToJoinUs";
import OurIniatives from "./Components/OurIniatives.jsx";
import AOS from "aos";
import { Helmet } from "react-helmet";
import { API_BASE_URL } from '../../config'

function HomePage() {

  const page_slug = 'home';

  const [pageDetail, setPageDetail] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 1500,
      disable: "mobile",
    });

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
      </Helmet>

      {
        pageDetail.detail ?
          <>
            <NewBanner {...pageDetail.detail} />
            <Banner2 {...pageDetail.detail} />
            <NewPortfolio />
            <Services {...pageDetail.detail} />
            <EmotionalQuest {...pageDetail.detail} />
            <LatestInsights {...pageDetail.detail} />
            <OurIniatives {...pageDetail.detail} />
            <CareToJoinUs {...pageDetail.detail} />
          </>
          : null
      }
    </>
  );
}

export default HomePage;
