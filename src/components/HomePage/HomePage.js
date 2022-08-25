import React, { useEffect, useState } from "react";
import AOS from "aos";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { API_BASE_URL } from '../../config'
import axios from "axios";
import loadable from '@loadable/component'
const UpcomingEvent = loadable(() => import("../Navbar/UpcomingEvent/UpcomingEvent"));
const Services = loadable(() => import("./Components/Services"));
const EmotionalQuest = loadable(() => import("./Components/EmotionalQuest"));
const LatestInsights = loadable(() => import("./Components/LatestInsights"));
const NewBanner = loadable(() => import("./Components/NewBanner"));
const Banner2 = loadable(() => import("./Components/Banner2"));
const NewPortfolio = loadable(() => import("./Components/NewPortfolio"));
const CareToJoinUs = loadable(() => import("./Components/CareToJoinUs"));
const OurIniatives = loadable(() => import("./Components/OurIniatives"));

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
      </HelmetProvider>
    </>
  );
}

export default HomePage;
