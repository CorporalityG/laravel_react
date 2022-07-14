import React, { useContext } from 'react'
import "./Industries.css"
import OutsideClickHandler from 'react-outside-click-wrapper';
import { Link } from 'react-router-dom';
import { NavbarContext } from '../Context/NavbarContext';
import topHandler from '../../../CommonHandler/TopHandler';


const Industries = () => {
    const { showIndustries, setShowIndustries, isLargeScreen, setNavClicked } = useContext(NavbarContext);
    const closeOnLink = () => {
        setShowIndustries(false);
        setNavClicked(false);
        topHandler();
    }
    return (
        <OutsideClickHandler className="outside-handler" onOutsideClick={() => setShowIndustries(false)}>
            <div className={`industries-container ${showIndustries ? "" : "hidden"}`} onMouseOver={() => { if (isLargeScreen) setShowIndustries(true) }} onMouseLeave={() => { if (isLargeScreen) setShowIndustries(false) }}>
                <div className="industries-section">
                    <Link to="/medtech" onClick={closeOnLink} className="industries-item">
                        <h6 className="industries-item-content">Medtech / Health Care</h6>
                        <div className="diamond-line"></div>
                    </Link>
                    <Link to="/fintech" onClick={closeOnLink} className="industries-item">
                        <h6 className="industries-item-content">Fintech / Finance</h6>
                        <div className="diamond-line"></div>
                    </Link>
                    <Link to="/nanotech" onClick={closeOnLink} className="industries-item">
                        <h6 className="industries-item-content">Nanotech</h6>
                        <div className="diamond-line"></div>
                    </Link>
                    <Link to="/biotech" onClick={closeOnLink} className="industries-item">
                        <h6 className="industries-item-content">Biotech / Bio chemical / Chemical Engineering</h6>
                        <div className="diamond-line"></div>
                    </Link>
                </div>
                <div className="industries-section">
                    <Link to="/high-tech" onClick={closeOnLink} className="industries-item">
                        <h6 className="industries-item-content">High Tech</h6>
                        <div className="diamond-line"></div>
                    </Link>
                    <Link to="/insurtech" onClick={closeOnLink} className="industries-item">
                        <h6 className="industries-item-content">Insurtech</h6>
                        <div className="diamond-line"></div>
                    </Link>
                    <Link to="/agriculture" onClick={closeOnLink} className="industries-item">
                        <h6 className="industries-item-content">Agrotech / Agriculture</h6>
                        <div className="diamond-line"></div>
                    </Link>
                    <Link to="/information-technology" onClick={closeOnLink} className="industries-item">
                        <h6 className="industries-item-content">Information Technology</h6>
                        <div className="diamond-line"></div>
                    </Link>
                </div>
                <div className="industries-section">
                    <Link to="/edtech" onClick={closeOnLink} className="industries-item">
                        <h6 className="industries-item-content">Edtech</h6>
                        <div className="diamond-line"></div>
                    </Link>
                    <Link to="/metal" onClick={closeOnLink} className="industries-item">
                        <h6 className="industries-item-content">Metal Industry</h6>
                        <div className="diamond-line"></div>
                    </Link>
                    <Link to="/construction" onClick={closeOnLink} className="industries-item">
                        <h6 className="industries-item-content">Construction</h6>
                        <div className="diamond-line"></div>
                    </Link>
                    <Link to="/manufacturing" onClick={closeOnLink} className="industries-item">
                        <h6 className="industries-item-content">Manufacturing</h6>
                        <div className="diamond-line"></div>
                    </Link>
                </div>
                <div className="industries-section">
                    <Link to="/geospatial" onClick={closeOnLink} className="industries-item">
                        <h6 className="industries-item-content">Geospatial</h6>
                        <div className="diamond-line"></div>
                    </Link>
                    <Link to="/allied" onClick={closeOnLink} className="industries-item">
                        <h6 className="industries-item-content">Allied Industries </h6>
                        <div className="diamond-line"></div>
                    </Link>
                    <Link to="/utilities-and-energy" onClick={closeOnLink} className="industries-item">
                        <h6 className="industries-item-content">Utilities and Energy - Solar energy / Renewable</h6>
                        <div className="diamond-line"></div>
                    </Link>
                    <Link to="/age-care-and-retirement" onClick={closeOnLink} className="industries-item">
                        <h6 className="industries-item-content">Age Care And Retirement</h6>
                        <div className="diamond-line"></div>
                    </Link>
                </div>

            </div>
        </OutsideClickHandler>
    )
}

export default Industries
