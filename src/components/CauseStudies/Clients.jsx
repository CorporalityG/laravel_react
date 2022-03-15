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
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae egestas elementum porttitor tortor, sit massa urna lectus nulla. Dictum in elit justo proin sed maecenas urna viverra consectetur. Massa integer vulputate nam ultrices.</p>
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
                    <div className="col-md-4">
                        <div className="filter-title">Filter by:</div>
                    </div>
                    <div className="col-md-8">
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
                        thumbnail={BASE_URL + '/img/Divine-Intercession-Client.png'}
                        title={'Divine Intercession'}
                        subtitle={'Human to Human solutions'}
                        slug={'divine-intercession'}
                    />

                    <ClientItem 
                        thumbnail={BASE_URL + '/img/BuildQ-Client.png'}
                        title={'BuildQ Group'}
                        subtitle={'Building a perfect digital framework'}
                        slug={'build-q'}
                    />

                    <ClientItem 
                        thumbnail={BASE_URL + '/img/Fastgrow-Client.png'}
                        title={'Fastgrow'}
                        subtitle={'Identifying the intended maturity'}
                        slug={'fastgrow-finance'}
                    />

                    <ClientItem 
                        thumbnail={BASE_URL + '/img/TechConsultants-Client.png'}
                        title={'Tech Consultants'}
                        subtitle={'Out of the ordinary'}
                        slug={'tech-consultants'}
                    />

                    <ClientItem 
                        thumbnail={BASE_URL + '/img/SK-Insurance-Client.png'}
                        title={'SK Insurance'}
                        subtitle={'Visionary growth strategies'}
                        slug={'sk-insurance'}
                    />

                    <ClientItem 
                        thumbnail={BASE_URL + '/img/Klek-Services-Client.png'}
                        title={'Klek Services'}
                        subtitle={'Identifying the intended maturity'}
                        slug={'klek-services'}
                    />

                    <ClientItem 
                        thumbnail={BASE_URL + '/img/Liqmet-Client.png'}
                        title={'Liqmet'}
                        subtitle={'Out of the ordinary'}
                        slug={'liqmet'}
                    />
                </div>
            </div>
        </div>
    </>
  )
}

export default Clients