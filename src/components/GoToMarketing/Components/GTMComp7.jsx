import React, { useEffect } from 'react'
import "./GTMComp7.css"
import img1 from "./images/comp7-2.png"
import { Link, useNavigate } from 'react-router-dom'

const GTMComp7 = () => {
    const navigate = useNavigate();

    const observer1 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                var textWrapper = document.querySelector('.comp7-left h2');
                textWrapper.classList.add('two');
            }
            else {
                var textWrapper = document.querySelector('.comp7-left h2');
                textWrapper.classList.remove('two');
            }
        })
    })
    useEffect(() => {
        observer1.observe(document.querySelector(".comp7-left"));
    })
    return (
        <div className="gtm-comp7-container">
            <div data-aos="fade-right" data-aos-duration="2000" className="comp7-left">
                {/* <h2>Improved Marketing Mix</h2> */}
                <h2 className='animate'><span>Improved</span>&nbsp;<span>Marketing</span>&nbsp;<span>Mix</span></h2>
                <p>Corporality's innovative digital marketing <b><span onClick={() => navigate("/digital-media-marketing")}></span> audit strategies help create visually evident changes in your current processes</b> to bring about a fresh and impactful perspective to further augment the presence of your brand. </p>
                <div onClick={() => navigate("/digital-media-marketing")}>
                    Explore
                </div>
            </div>
            <div data-aos="fade-left" data-aos-duration="2000" className="comp7-right">
                <div>
                    <div className="moving-blue-bar"></div>
                    <div className="gtm-comp7-img-wrapper">
                        <img src={img1} alt="Improved Marketing" />
                    </div>
                    <div className="random-comp7-div"></div>
                </div>
            </div>
        </div>
    )
}

export default GTMComp7
