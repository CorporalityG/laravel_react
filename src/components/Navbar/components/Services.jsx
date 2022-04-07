import React, { useContext } from 'react'
import './Services.css'
import servicesImage from '../assets/services-img-menu.png'
import OutsideClickHandler from 'react-outside-click-wrapper';
import { Link } from 'react-router-dom';
import { NavbarContext } from '../Context/NavbarContext';
import topHandler from '../../../CommonHandler/TopHandler';

const Services = () => {
    const {setShowServices, showServices, isLargeScreen, setNavClicked} = useContext(NavbarContext);
    const closeOnLink = () => {
        setShowServices(false);
        setNavClicked(false);
        topHandler();
    }
    return (
        <OutsideClickHandler className="outside-handler" onOutsideClick={() => setShowServices(false)}>
        <div className={`services-container ${showServices? "" : "hidden"}`} onMouseOver={() => {if(isLargeScreen)setShowServices(true)}} onMouseLeave={() => {if(isLargeScreen)setShowServices(false)}}>
            <div className="services-section-main services-section-left">
                <div className="services-section-inner signature-product">
                    <div className="services-section-head">
                        <h3 className="services-section-head-text">Signature Services</h3>
                        <div className="line"></div>
                    </div>
                    <div className="services-section">
                        <Link to="/brand-positioning" onClick={closeOnLink} className="services-section-items">
                            <h6>Brand Positioning</h6>
                            <div className="diamond-line"></div>
                        </Link>

                        <Link to="/digital-media-marketing" onClick={closeOnLink} className="services-section-items">
                            <h6>Digital Media Marketing</h6>
                            <div className="diamond-line"></div>
                        </Link>
                    </div>
                </div>

                <div className="services-section-inner premium-product">
                    <div className="services-section-head">
                        <h3 className="services-section-head-text">Consultancy Services</h3>
                        <div className="line"></div>
                    </div>
                    <div className="services-section">
                        <Link to="/cxo-strategy" onClick={closeOnLink} className="services-section-items">
                            <h6>Outsourced CXO</h6>
                            <div className="diamond-line"></div>
                        </Link>

                        <Link to="/" onClick={closeOnLink} className="services-section-items">
                            <h6>Outsourced CMO</h6>
                            <div className="diamond-line"></div>
                        </Link>

                        <Link to="/corporate-strategy" onClick={closeOnLink} className="services-section-items">
                            <h6>Outsourced COO (Current Corporate strategy)</h6>
                            <div className="diamond-line"></div>
                        </Link>
                    </div>
                </div>

                <div className="services-section-inner premium-product">
                    <div className="services-section-head">
                        <h3 className="services-section-head-text">Premium Services</h3>
                        <div className="line"></div>
                    </div>
                    <div className="services-section">
                        <Link to="/goto-market-strategy" onClick={closeOnLink} className="services-section-items">
                            <h6>Go to Marketing Strategy</h6>
                            <div className="diamond-line"></div>
                        </Link>

                        <Link to="/account-based-marketing" onClick={closeOnLink} className="services-section-items">
                            <h6>Account Based Marketing</h6>
                            <div className="diamond-line"></div>
                        </Link>

                        <Link to="/interactive-blueprint" onClick={closeOnLink} className="services-section-items">
                            <h6>Interactive Blueprint</h6>
                            <div className="diamond-line"></div>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="services-section-main services-section-right">
                <div className="services-img-menu">
                    <Link to="/strategic-consultancy" onClick={closeOnLink}>
                        <img src={servicesImage} alt="strategic-consultancy" className="services-img" />
                        <div className="services-img-title">Hire us for more real-world insights and observations on measurable boosters of business growth</div>
                        <div className="services-img-btn">Strategic Consultancy</div>
                    </Link>
                </div>
            </div>
        </div>
        </OutsideClickHandler>
    )
}

export default Services
