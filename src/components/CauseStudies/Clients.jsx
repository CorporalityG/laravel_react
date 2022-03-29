import React from 'react'
import './Clients.css'
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../config';
import { useNavigate } from "react-router";
import ClientItem from './ClientItem';



function Clients() {
  return (
    <>
	
        <div className="clients-banner-container">
            <img src={BASE_URL + '/img/clients-rec-1.png'} alt="clients-rec-1" className="clients-rec clients-rec-1" />
            <img src={BASE_URL + '/img/clients-rec-2.png'} alt="clients-rec-2" className="clients-rec clients-rec-2" />
            <img src={BASE_URL + '/img/clients-rec-3.png'} alt="clients-rec-3" className="clients-rec clients-rec-3" />
            <img src={BASE_URL + '/img/clients-rec-4.png'} alt="clients-rec-4" className="clients-rec clients-rec-4" />

            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="clients-banner-content">
                            <h1>Client Results</h1>
                            <p>With our digital media marketing services, our brand positioning services, and our other comprehensive business growth services, our clients experienced growth in our customer sales, established a unique brand style and image, and differentiated themselves from their competition. 
</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="clients-banner-img">
                            <img src={BASE_URL + '/img/clients-banner.png'} alt="clients-banner" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

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

                <div className="row clients-list-row">
                    <ClientItem 
                        thumbnail={BASE_URL + '/img/BuildQ-Clients.png'}
                        title={'BuildQ Group'}
                        slug={'build-q'}
                    />

                    <ClientItem 
                        thumbnail={BASE_URL + '/img/Divine-Intercession-Clients.png'}
                        title={'Divine Intercession'}
                        slug={'divine-intercession'}
                    />

                    <ClientItem 
                        thumbnail={BASE_URL + '/img/Fastgrow-Clients.png'}
                        title={'Fastgrow Finance'}
                        slug={'fastgrow-finance'}
                    />

                    <ClientItem 
                        thumbnail={BASE_URL + '/img/TechConsultants-Clients.png'}
                        title={'Tech Consultants'}
                        slug={'tech-consultants'}
                    />

                    <ClientItem 
                        thumbnail={BASE_URL + '/img/SK-Insurance-Clients.png'}
                        title={'SK Insurance'}
                        slug={'sk-insurance'}
                    />

                    <ClientItem 
                        thumbnail={BASE_URL + '/img/Klek-Services-Clients.png'}
                        title={'Klek Services'}
                        slug={'klek-services'}
                    />

                    <ClientItem 
                        thumbnail={BASE_URL + '/img/Liqmet-Clients.png'}
                        title={'Liqmet'}
                        slug={'liqmet'}
                    />

                    <ClientItem 
                        thumbnail={BASE_URL + '/img/Meyar-West-Clients.png'}
                        title={'Meyer West'}
                        slug={'meyer-west'}
                    />

                    <ClientItem 
                        thumbnail={BASE_URL + '/img/X-Designs-Clients.png'}
                        title={'X Designs'}
                        slug={'x-designs'}
                    />

                    <ClientItem 
                        thumbnail={BASE_URL + '/img/Lumoral-Clients.png'}
                        title={'Lumoral'}
                        slug={'lumoral'}
                    />
                </div>
            </div>
        </div>
    </>
  )
}

export default Clients


