import React, { useEffect, useState } from "react";
import Page1 from "./Components/Page1";
import Page2 from "./Components/Page2";
import Page3 from "./Components/Page3";
import Page4 from "./Components/Page4";
import Faqs from "./Components/Faqs";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { API_BASE_URL, BASE_URL } from '../../config'


function HomePage() {

  const page_slug = 'strategic-consultancy';

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
      <HelmetProvider>
        <div className="d-flex flex-column justify-content-center align-item-center">
          <Helmet>
            {pageDetail.meta_title && <title>{`${pageDetail.meta_title}`}</title>}
            {pageDetail.meta_description && <meta name="description" content={`${pageDetail.meta_description}`} />}
            {pageDetail.meta_keywords && <meta name="keywords" content={pageDetail.meta_keywords} />}
            <link rel="canonical" href={`${BASE_URL}/strategic-consultancy/`} />
          </Helmet>

          {
            pageDetail.detail ?
              <>
                <Page1 {...pageDetail.detail} />
                <Page2 {...pageDetail.detail} />
                <Page3 {...pageDetail.detail} />
                <Page4 {...pageDetail.detail} />
                <Faqs {...pageDetail.detail} />
              </>
              : null
          }
        </div>
      </HelmetProvider>
    </>
  );
}

export default HomePage;
