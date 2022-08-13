import React, { useEffect, useState, Suspense } from "react";
/* import Services from "./Components/Services";
import EmotionalQuest from "./Components/EmotionalQuest";
import LatestInsights from "./Components/LatestInsights";
import NewBanner from "./Components/NewBanner";
import Banner2 from "./Components/Banner2";
import NewPortfolio from "./Components/NewPortfolio";
import CareToJoinUs from "./Components/CareToJoinUs";
import OurIniatives from "./Components/OurIniatives"; */
import AOS from "aos";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { API_BASE_URL } from '../../config'
import axios from "axios";
const Services = React.lazy(() => import("./Components/Services"));
const EmotionalQuest = React.lazy(() => import("./Components/EmotionalQuest"));
const LatestInsights = React.lazy(() => import("./Components/LatestInsights"));
const NewBanner = React.lazy(() => import("./Components/NewBanner"));
const Banner2 = React.lazy(() => import("./Components/Banner2"));
const NewPortfolio = React.lazy(() => import("./Components/NewPortfolio"));
const CareToJoinUs = React.lazy(() => import("./Components/CareToJoinUs"));
const OurIniatives = React.lazy(() => import("./Components/OurIniatives"));

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

  const getPageDetail = () => {
    axios.get(`${API_BASE_URL}/page-detail/${page_slug}`)
      .then(response => {
        setPageDetail(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <>
      <HelmetProvider>
        <Helmet>
          {pageDetail.meta_title && <title>{`${pageDetail.meta_title}`}</title>}
          {pageDetail.meta_description && <meta name="description" content={`${pageDetail.meta_description}`} />}
          {pageDetail.meta_keywords && <meta name="keywords" content={pageDetail.meta_keywords} />}
        </Helmet>

        <Suspense fallback={``}>
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
        </Suspense>
      </HelmetProvider>
    </>
  );
}

export default HomePage;
