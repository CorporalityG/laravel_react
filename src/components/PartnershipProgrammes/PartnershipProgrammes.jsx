import React, { useEffect, useState } from 'react'
import PPComp1 from "./Components/PPComp1/PPComp1"
import PPComp2 from "./Components/PPComp2/PPComp2"
import PPComp3 from "./Components/PPComp3/PPComp3"
import PPComp4 from "./Components/PPComp4/PPComp4"
import { API_BASE_URL, BASE_URL } from '../../config'
import { Helmet } from "react-helmet";

export default function PartnershipProgrammes() {

    const page_slug = 'partnership-programmes';

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
                <link rel="canonical" href={`${BASE_URL}/partnership-programmes/`} />
            </Helmet>

            <div className="d-flex flex-column justify-content-center align-items-center">
                <PPComp1 {...pageDetail.detail} />
                <PPComp2 {...pageDetail.detail} />
                <PPComp3 {...pageDetail.detail} />
                <PPComp4 {...pageDetail.detail} />
            </div>
        </>
    )
}
