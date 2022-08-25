import React, { useMemo, useState } from 'react';
import './Navbar.css';
import logo from './assets/logo.png';
import { useMediaQuery } from 'react-responsive';
import OutsideClickHandler from 'react-outside-click-wrapper';
import { NavbarContext } from './Context/NavbarContext';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import loadable from '@loadable/component'

const About = loadable(() => import('./components/About'));
const Services = loadable(() => import('./components/Services'));
const About2 = loadable(() => import('./components/About2'));
const Insights = loadable(() => import('./components/Insights'));
const topHandler = loadable(() => import('../../CommonHandler/TopHandler'));
const SayHelloContact = loadable(() => import('./components/SayHelloContact'));
const Industries = loadable(() => import('./components/Industries'));

const Navbar = () => {
    const isLargeScreen = useMediaQuery({ query: '(min-width: 1200px)' })
    const [showAbout, setShowAbout] = useState(false)
    const [showServices, setShowServices] = useState(false);
    const [showIndustries, setShowIndustries] = useState(false);
    const [showInsights, setShowInsights] = useState(false)
    const [navClicked, setNavClicked] = useState(false);
    const [showAbout2, setShowAbout2] = useState(false);
    const [showSayHelloContact, setShowSayHelloContact] = useState(false);
    const [menuId, setMenuId] = useState(1);
    const navigate = useNavigate();
    const location = useLocation();

    const providerValue = useMemo(() =>
        ({ isLargeScreen, showAbout, setShowAbout, showAbout2, setShowAbout2, showServices, setShowServices, showIndustries, setShowIndustries, showInsights, setShowInsights, navClicked, setNavClicked, menuId, setMenuId, showSayHelloContact, setShowSayHelloContact })
        , [isLargeScreen, showAbout, setShowAbout, showAbout2, setShowAbout2, showServices, setShowServices, showIndustries, setShowIndustries, showInsights, setShowInsights, navClicked, setNavClicked, menuId, setMenuId, showSayHelloContact, setShowSayHelloContact])

    return (
        <>
            <NavbarContext.Provider value={providerValue}>
                <OutsideClickHandler onOutsideClick={() => setNavClicked(false)}>
                    <div className={`navbar-wrapper ${location.pathname === '/' && 'home-navbar-wrapper'}`}>
                        <div className="nav-icon" onClick={() => setNavClicked(!navClicked)} >
                            <span className={`nav-icon-line ${navClicked ? "nav-icon-clicked" : ""}`}></span>
                            <span className={`nav-icon-line ${navClicked ? "nav-icon-clicked" : ""}`}></span>
                            <span className={`nav-icon-line ${navClicked ? "nav-icon-clicked" : ""}`}></span>
                        </div>
                        <div className="container">
                            <div className="navbar-container">
                                <Link to="/" onClick={() => setNavClicked(false)}>
                                    <img src={logo} className="corporality-logo" alt="logo" />
                                </Link>
                                <About2 />
                                <div className={`nav-items ${navClicked ? "nav-items-hidden" : ""}`} >
                                    <div className={`nav-item about ${(showAbout && isLargeScreen) ? "nav-item-hover" : ""}`} onClick={() => { setShowAbout(!showAbout) }} onMouseOver={() => { if (isLargeScreen) setShowAbout(true) }} onMouseLeave={() => { if (isLargeScreen) setShowAbout(false) }} >
                                        <div className="about-a" >ABOUT</div>
                                    </div>
                                    <About />
                                    <div className={`nav-item services ${(showServices && isLargeScreen) ? "nav-item-hover" : ""}`} onClick={() => { setShowServices(!showServices) }} onMouseOver={() => { if (isLargeScreen) setShowServices(true) }} onMouseLeave={() => { if (isLargeScreen) setShowServices(false) }}>
                                        <div className="services-a">SERVICES</div>
                                    </div>
                                    <Services />
                                    <div className={`nav-item insights ${(showInsights && isLargeScreen) ? "nav-item-hover" : ""}`} onClick={() => setShowInsights(!showInsights)} onMouseOver={() => { if (isLargeScreen) setShowInsights(true) }} onMouseLeave={() => { if (isLargeScreen) setShowInsights(false) }}>
                                        <div className="insights-a">INSIGHTS</div>
                                    </div>
                                    <Insights />
                                    <div className={`nav-item industries ${(showIndustries && isLargeScreen) ? "nav-item-hover" : ""}`} onClick={() => { console.log("set industries"); setShowIndustries(!showIndustries) }} onMouseOver={() => { if (isLargeScreen) setShowIndustries(true) }} onMouseLeave={() => { if (isLargeScreen) setShowIndustries(false) }}>
                                        <div className="industries-a">INDUSTRIES</div>
                                    </div>
                                    <Industries />
                                    <div className="nav-item contact" onClick={() => { navigate("/contact"); topHandler() }}>
                                        <div className="contact-a">CONTACT</div>
                                    </div>

                                    <div className={`nav-item contact-no ${(showSayHelloContact && isLargeScreen) ? "nav-item-hover" : ""}`} onClick={() => { console.log("set industries"); setShowSayHelloContact(!showSayHelloContact) }} onMouseOver={() => { if (isLargeScreen) setShowSayHelloContact(true) }} onMouseLeave={() => { if (isLargeScreen) setShowSayHelloContact(false) }}>
                                        <div className="contact-no-a">Say Hello</div>
                                    </div>
                                    <SayHelloContact />
                                </div>
                            </div>
                        </div>
                    </div>
                </OutsideClickHandler>
            </NavbarContext.Provider>
        </>
    )
}

export default Navbar;