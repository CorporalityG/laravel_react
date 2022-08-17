import React, { useContext } from 'react'
import './About.css'
import OutsideClickHandler from 'react-outside-click-wrapper';
import { Link } from 'react-router-dom';
import { NavbarContext } from '../Context/NavbarContext';
import topHandler from "../../../CommonHandler/TopHandler"

const About = () => {
    const {setShowAbout, showAbout, setShowAbout2, setMenuId, isLargeScreen} = useContext(NavbarContext);

    const show1 = () => {
        setMenuId(1);
        setShowAbout2(true);
    }
    const show2 = () => {
        setMenuId(2);
        setShowAbout2(true);
    }
    const show3 = () => {
        setMenuId(3);
        setShowAbout2(true);
    }

    return (
        <OutsideClickHandler className="outside-handler" onOutsideClick={()=> setShowAbout(false)} >
        <div className={`about-container ${showAbout? "" : "hidden"}`} onMouseOver={() => {if(isLargeScreen)setShowAbout(true)}} onMouseLeave={() => {if(isLargeScreen)setShowAbout(false)}} >
            <div className="about-section-main about-section-left">
                <div className="about-section who-we-are">
                    <div className="about-section-head" onClick={() => { if(!isLargeScreen)show1()}}>
                        <h3 className="about-section-head-text">Who we are</h3>
                        <div className="line"></div>
                    </div>
                    <div className="section-list">
                        <Link to="/about-corporality" onClick={() => {setShowAbout(false);topHandler()}} className="section-list-items">
                            <h6>About Corporality</h6>
                            <div className="diamond-line"></div>
                        </Link>
                        <Link to="/work-with-clients" onClick={() => {setShowAbout(false);topHandler()}}  className="section-list-items">
                            <h6>How We Work with Clients</h6>
                            <div className="diamond-line"></div>
                        </Link>
                        <Link to="/inclusion-and-diversity" onClick={() => {setShowAbout(false);topHandler()}}  className="section-list-items">
                            <h6>Inclusion and Diversity</h6>
                            <div className="diamond-line"></div>
                        </Link>
                        <Link to="/partnership-programmes" onClick={() => {setShowAbout(false);topHandler()}} className="section-list-items">
                            <h6>Partnership Programmes</h6>
                            <div className="diamond-line"></div>
                        </Link>
                        <Link to="/sustainable-growth" onClick={() => {setShowAbout(false);topHandler()}}  className="section-list-items">
                            <h6>Sustainable Growth</h6>
                            <div className="diamond-line"></div>
                        </Link>
                    </div>
                </div>
                <div className="about-section how-were-organised">
                    <div className="about-section-head" onClick={() => { if(!isLargeScreen)show2() }}>
                        <h3 className="about-section-head-text">How we're organised</h3>
                        <div className="line"></div>
                    </div>
                    <div className="section-list">
                        <Link to="/interactive-blueprint" onClick={() => {setShowAbout(false);topHandler()}} className="section-list-items">
                            <h6>Interactive Blueprint</h6>
                            <div className="diamond-line"></div>
                        </Link>
                        <Link to="/strategy-and-consulting" onClick={() => {setShowAbout(false);topHandler()}} className="section-list-items">
                            <h6>Strategy & Consulting</h6>
                            <div className="diamond-line"></div>
                        </Link>
                    </div>
                </div>
                <div className="about-section our-framework">
                    <div className="about-section-head" onClick={() => { if(!isLargeScreen)show3()}}>
                        <h3 className="about-section-head-text">Our Framework</h3>
                        <div className="line"></div>
                    </div>
                    <div className="section-list">
                        <Link to="/why-corporality-effect" onClick={() => {setShowAbout(false); topHandler()}} className="section-list-items">
                            <h6>Why corporality Effect?</h6>
                            <div className="diamond-line"></div>
                        </Link>
                        <Link to="/what-is-corporality-effect" onClick={() => {setShowAbout(false); topHandler()}} className="section-list-items">
                            <h6>What is corporality effect?</h6>
                            <div className="diamond-line"></div>
                        </Link>
                        <Link to="/corporality-culturally-conditioned" onClick={() => {setShowAbout(false); topHandler()}} className="section-list-items">
                            <h6>Culturally Conditioned</h6>
                            <div className="diamond-line"></div>
                        </Link>
                        <Link to="/corporality-inbound-shiftings" onClick={() => {setShowAbout(false); topHandler()}} className="section-list-items">
                            <h6>Inbound Shifting</h6>
                            <div className="diamond-line"></div>
                        </Link>
                        <Link to="/corporality-striker" onClick={() => {setShowAbout(false); topHandler()}} className="section-list-items">
                            <h6>Corporality Striker</h6>
                            <div className="diamond-line"></div>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="about-section-main about-section-right">
                <div className="careers-img-menu">
                    <Link to="/careers" onClick={() => {setShowAbout(false); topHandler()}} >
                        <span className="careers-img"></span>
                        <div className="careers-title">Gather the true experience of agile. Join us for a highly fulfilling career</div>
                        <div className="careers-btn">Careers</div>
                    </Link>
                </div>
            </div>
        </div>
        </OutsideClickHandler>
    )
}

export default About
