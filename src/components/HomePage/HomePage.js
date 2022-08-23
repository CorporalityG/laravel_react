import React, { useEffect, useState, Suspense } from "react";
import AOS from "aos";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { API_BASE_URL } from '../../config'
import axios from "axios";
const UpcomingEvent = React.lazy(() => import("../Navbar/UpcomingEvent/UpcomingEvent"));
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
      duration: 2000
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
                <UpcomingEvent {...pageDetail.detail} />
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
