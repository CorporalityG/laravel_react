import React, { useEffect, useState } from 'react'
import "./WorkWithClients.css"
import Combating from './components/Combating/Combating'
import Clients from './components/FirstComponent/Clients'
import Innovation from './components/Innovation/Innovation'
import Limitless from './components/Limitless/Limitless'
import Logos from './components/LogoCompany/Logos'
import LogoText from './components/LogoText/LogoText'
import NewsLetter from './components/NewsLetter/NewsLetter'
import TeamSpiritNew from './components/TeamSpiritNew/TeamSpirit'
import Ideation from './components/ThirdComponent/Ideation'
import { API_BASE_URL, BASE_URL } from '../../config'
import { Helmet } from "react-helmet";

const WorkWithClient = () => {

    const page_slug = 'work-with-clients';

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
                <link rel="canonical" href={`${BASE_URL}/work-with-clients/`} />
            </Helmet>

            <Clients {...pageDetail.detail} />
            <Combating {...pageDetail.detail} />
            <Ideation {...pageDetail.detail} />
            <Limitless {...pageDetail.detail} />
            <Innovation {...pageDetail.detail} />
            <LogoText {...pageDetail.detail} />
            <Logos {...pageDetail.detail} />
            <TeamSpiritNew {...pageDetail.detail} />
            <NewsLetter {...pageDetail.detail} />
        </div>
    )
}

export default WorkWithClient
