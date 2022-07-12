import React, { useState, useEffect } from 'react'
import ConForm from './Components/ConForm'
import ContactMap from './Components/ContactMap'
import { Helmet } from "react-helmet";
import { API_BASE_URL, BASE_URL } from '../../config'

const Contact = () => {

    const page_slug = 'contact';

    const [pageDetail, setPageDetail] = useState([]);

    useEffect(() => {
        getPageDetail()
    });

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
                <link rel="canonical" href={`${BASE_URL}/contact/`} />
            </Helmet>

            {
                pageDetail.detail ?
                    <div className="d-flex flex-column justify-content-center ">
                        <ConForm {...pageDetail.detail} />
                        <ContactMap {...pageDetail.detail} />
                    </div>
                    : null
            }
        </>
    )
}

export default Contact
