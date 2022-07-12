import React, { useEffect, useState } from 'react'
import Inclusion from './components/Incl/Inclusion';
import OurFaith from './components/OurFaith/OurFaith';
import Hover from './components/HoverInclusion/Hover';
import Duty from './components/FourCards/Duty';
import Newsletter from './components/LastComponentINC/Newsletter';
import Leadership from './components/LeaderShip/Leadership';
import Career from './components/CareerImage/Career';
import { Helmet } from "react-helmet";
import { API_BASE_URL, BASE_URL } from '../../config'

const InclusionAndDiversity = () => {

    const page_slug = 'inclusion-and-diversity';

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
                <link rel="canonical" href={`${BASE_URL}/inclusion-and-diversity/`} />
            </Helmet>

            {
                pageDetail.detail ?
                    <>
                        <Inclusion {...pageDetail.detail} />
                        <OurFaith {...pageDetail.detail} />
                        <Hover {...pageDetail.detail} />
                        <Duty {...pageDetail.detail} />
                        <Leadership {...pageDetail.detail} />
                        <Career {...pageDetail.detail} />
                        <Newsletter {...pageDetail.detail} />
                    </>
                    : null
            }
        </div>
    )
}

export default InclusionAndDiversity
