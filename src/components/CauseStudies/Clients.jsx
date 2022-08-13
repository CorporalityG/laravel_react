import React, { useState, useEffect } from 'react'
import './Clients.css'
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../config'
import ClientItem from './ClientItem';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function Clients() {

    const page_slug = 'clients';

    const [pageDetail, setPageDetail] = useState([]);
    const [clientsData, setClientsData] = useState([]);

    useEffect(() => {
        getPageDetail()
        getClientsData()
    }, []);

    async function getPageDetail() {
        let result = await fetch(`${API_BASE_URL}/page-detail/${page_slug}`);
        result = await result.json();
        setPageDetail(result);
    }

    async function getClientsData() {
        let result = await fetch(`${API_BASE_URL}/clients`);
        result = await result.json();
        setClientsData(result);
    }

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    {pageDetail.meta_title && <title>{`${pageDetail.meta_title}`}</title>}
                    {pageDetail.meta_description && <meta name="description" content={`${pageDetail.meta_description}`} />}
                    {pageDetail.meta_keywords && <meta name="keywords" content={pageDetail.meta_keywords} />}
                    <link rel="canonical" href={`${BASE_URL}/clients/`} />
                </Helmet>

                {
                    pageDetail.detail ?
                        <div className="clients-banner-container">
                            <img src={BASE_URL + '/img/clients-rec-1.png'} alt="clients-rec-1" className="clients-rec clients-rec-1" />
                            <img src={BASE_URL + '/img/clients-rec-2.png'} alt="clients-rec-2" className="clients-rec clients-rec-2" />
                            <img src={BASE_URL + '/img/clients-rec-3.png'} alt="clients-rec-3" className="clients-rec clients-rec-3" />
                            <img src={BASE_URL + '/img/clients-rec-4.png'} alt="clients-rec-4" className="clients-rec clients-rec-4" />

                            <div className="container">
                                <div className="row">
                                    <div className="col-md-8">
                                        <div className="clients-banner-content">
                                            <h1>{`${pageDetail.detail.banner_title}`}</h1>
                                            <p>{`${pageDetail.detail.banner_description}`}</p>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="clients-banner-img">
                                            <img src={`${API_IMG_URL}pages/${pageDetail.detail.banner_image}`} alt={`${pageDetail.detail.banner_title}`} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : null
                }

                <div className="clients-list-container">
                    <img src={BASE_URL + '/img/clients-list-bg-vector.png'} alt="clients-list-bg-vector" className="clients-list-bg-vector" />

                    <div className="container">
                        <div className="row clients-filter-row">
                            <div className="col-sm-4">
                                <div className="filter-title">Filter by:</div>
                            </div>
                            <div className="col-sm-8">
                                <div className="filter-dropdown-main">
                                    <div className="filter-dropdown">
                                        <button className="filter-btn filter-btn-toggle" type="button" id="industriesDropdownMenu" aria-expanded="false">Industries</button>
                                    </div>

                                    <div className="filter-dropdown">
                                        <button className="filter-btn filter-btn-toggle" type="button" id="servicesDropdownMenu" aria-expanded="false">Services</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {
                            clientsData && clientsData.length > 0 ?
                                <div className="row clients-list-row">
                                    {
                                        clientsData.map((item) =>
                                            <ClientItem
                                                key={`${item.id}`}
                                                thumbnail={`${API_IMG_URL}clients/${item.image}`}
                                                title={`${item.client_name}`}
                                                slug={`${item.slug}`}
                                            />
                                        )
                                    }
                                </div>
                                : null
                        }
                    </div>
                </div>
            </HelmetProvider>
        </>
    )
}

export default Clients


