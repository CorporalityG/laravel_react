import React, { useContext } from 'react'
import OutsideClickHandler from 'react-outside-click-wrapper';
import { useNavigate } from 'react-router-dom';
import topHandler from '../../../CommonHandler/TopHandler';
import { NavbarContext } from '../Context/NavbarContext';
import "./Insights.css"


const Insights = () => {
    const navigate = useNavigate();
    const {setShowInsights, showInsights, isLargeScreen, setNavClicked} = useContext(NavbarContext);
    const closeOnLink = () => {
        setShowInsights(false);
        setNavClicked(false);
        topHandler();
    }
    return (
        <OutsideClickHandler className="outside-handler" onOutsideClick={() => setShowInsights(false)}>
            <div className={`insights-container ${showInsights? "" : "hidden"}`} onMouseOver={() => {if(isLargeScreen) setShowInsights(true)}} onMouseLeave={() => {if(isLargeScreen) setShowInsights(false)}}>
                <div className="insights-container-body">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="insights-container-body-section" onClick={() => {closeOnLink(); navigate("/corporality-books")}}>
                                <h6>Corporality - Books</h6>
                                <div className="diamond-line"></div>
                            </div>
                            
                            <div className="insights-container-body-section" onClick={() => {closeOnLink(); window.open("https://corporality.global/club", "_blank");}}>
                                <h6>Corporality - Club</h6>
                                <div className="diamond-line"></div>
                            </div>

                            
                            <div className="insights-container-body-section" onClick={() => {closeOnLink(); window.open("https://corporality.global/businessmagazine", "_blank");}}>
                                <h6>Corporality - Magazine</h6>
                                <div className="diamond-line"></div>
                            </div>

                            
                            <div className="insights-container-body-section" onClick={() => {closeOnLink(); window.open("http://corporality.global/talk/", "_blank");}}>
                                <h6>Corporality - Talk</h6>
                                <div className="diamond-line"></div>
                            </div>
                        </div>
                        
                        <div className="col-md-3">
                            <div className="insights-container-body-section" onClick={() => {closeOnLink();navigate("/blog")}}>
                                <h6>Blogs</h6>
                                <div className="diamond-line"></div>
                            </div>
                            <div className="insights-container-body-section" onClick={() => {closeOnLink();navigate("/service-insights")}}>
                                <h6>Service Insights</h6>
                                <div className="diamond-line"></div>
                            </div>
                            {/* <div className="insights-container-body-section" onClick={() => {closeOnLink();navigate("/article")}}>
                                <h6>Industrial Resources</h6>
                                <div className="diamond-line"></div>
                            </div> */}
                            {/* <div className="insights-container-body-section" onClick={() => {closeOnLink(); navigate("/research-papers")}}>
                                <h6>Research Papers</h6>
                                <div className="diamond-line"></div>
                            </div> */}
                        </div>

                        <div className="col-md-3">
                            {/* <div className="insights-container-body-section" onClick={() => {closeOnLink();navigate("/")}}>
                                <h6>Download Resources</h6>
                                <div className="diamond-line"></div>
                            </div> */}
                            <div className="insights-container-body-section" onClick={() => {closeOnLink();navigate("/")}}>
                                <h6>Video Library</h6>
                                <div className="diamond-line"></div>
                            </div>
                            <div className="insights-container-body-section" onClick={() => {closeOnLink();navigate("/")}}>
                                <h6>Podcast</h6>
                                <div className="diamond-line"></div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="insights-container-body-section" onClick={() => {closeOnLink();navigate("/ceo-insights")}}>
                                <h6>CEO Insights </h6>
                                <div className="diamond-line"></div>
                            </div>
                            <div className="insights-container-body-section" onClick={() => {closeOnLink();navigate("/cxo-insights")}}>
                                <h6>CXO Insights</h6>
                                <div className="diamond-line"></div>
                            </div>
                            <div className="insights-container-body-section" onClick={() => {closeOnLink();navigate("/cmo-insights")}}>
                                <h6>CMO Insights</h6>
                                <div className="diamond-line"></div>
                            </div>
                            <div className="insights-container-body-section" onClick={() => {closeOnLink();navigate("/coo-insights")}}>
                                <h6>COO Insights </h6>
                                <div className="diamond-line"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </OutsideClickHandler>
    )
}

export default Insights
