import React, { useEffect, useState } from 'react'
import SACComp1 from './Components/SACComp1'
import SACComp2 from './Components/SACComp2'
import SACComp3 from './Components/SACComp3'
import SACComp5 from './Components/SACComp5'
import SACComp4 from './Components/SACComp4'
import SACComp6 from './Components/SACComp6'
import { Helmet } from "react-helmet";
import { API_BASE_URL, BASE_URL } from '../../config'

const StrategyAndConsulting = () => {

    const page_slug = 'strategy-and-consulting';

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
                <link rel="canonical" href={`${BASE_URL}/strategy-and-consulting/`} />
            </Helmet>

            {
                pageDetail.detail ?
                    <>
                        <SACComp1 {...pageDetail.detail} />
                        <SACComp2 {...pageDetail.detail} />
                        <SACComp3 {...pageDetail.detail} />
                        <SACComp4 {...pageDetail.detail} />
                        <SACComp5 {...pageDetail.detail} />
                        <SACComp6 {...pageDetail.detail} />
                    </>
                    : null
            }
        </div>
    )
}

export default StrategyAndConsulting
