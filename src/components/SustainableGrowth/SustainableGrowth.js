import React, { useEffect, useState } from 'react'
import CaseStudy from './components/CaseStudies/CaseStudy'
import DigitalSg from './components/DigitalSg/Digital'
import Global from './components/GlobalAIms/Global'
import MultiDimensional from './components/MultiDimensional/MultiDimension'
import OrganisingPrinciple from './components/Organising/OrganisingPrinciple'
import { Helmet } from "react-helmet";
import { API_BASE_URL, BASE_URL } from '../../config'

const SustainableGrowth = () => {

    const page_slug = 'sustainable-growth';

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
        <div>
            <Helmet>
                {pageDetail.meta_title && <title>{`${pageDetail.meta_title}`}</title>}
                {pageDetail.meta_description && <meta name="description" content={`${pageDetail.meta_description}`} />}
                {pageDetail.meta_keywords && <meta name="keywords" content={pageDetail.meta_keywords} />}
                <link rel="canonical" href={`${BASE_URL}/sustainable-growth/`} />
            </Helmet>

            {
                pageDetail.detail ?
                    <>
                        <OrganisingPrinciple {...pageDetail.detail} />
                        <DigitalSg {...pageDetail.detail} />
                        <MultiDimensional {...pageDetail.detail} />
                        <Global {...pageDetail.detail} />
                        <CaseStudy {...pageDetail.detail} />
                    </>
                    : null
            }
        </div>
    )
}

export default SustainableGrowth
