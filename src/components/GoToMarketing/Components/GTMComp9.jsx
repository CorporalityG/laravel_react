import React, { createRef, useEffect } from 'react'
import "./GTMComp9.css"
import ca from "./images/comp-9/customer-analysis.png"
import deals from "./images/comp-9/deals.png"
import market from "./images/comp-9/mark-res.png"
import prod from "./images/comp-9/prod-search.png"
import pros from "./images/comp-9/pros.png"
import sol from "./images/comp-9/sol.png"
import usp from "./images/comp-9/usp.png"

const GTMComp9 = () => {
    const containerRef = createRef();
    const headRef = createRef();
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                var textWrapper = document.querySelector('.gtm-comp9-head h1');
                textWrapper.classList.add('two');
            }
            else {
                var textWrapper = document.querySelector('.gtm-comp9-head h1');
                if(textWrapper){
                    textWrapper.classList.remove('two');
                }
            }
        })
    })

    

    useEffect(()=>{
        observer.observe(document.querySelector('.gtm-comp9-head'));
    },[])
    return (
        <div className="gtm-comp9">
            <div className="gtm-comp9-wrapper">
                <ul className="gtm-comp9-wrapper-bubbles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>

            <div ref={containerRef} className="gtm-comp9-head">
                <h1 ref={headRef} data-aos="fade-down" data-aos-duration="2000" data-aos-easing="ease-in-out" className="animate">
                    <span>Winning</span>&nbsp;
                    <span>Pre</span>&nbsp;
                    <span>Sales</span>&nbsp;
                    <span>Process</span>&nbsp;
                    <span>That</span>&nbsp;
                    <span>Impact</span>&nbsp;
                    <span>Your</span>&nbsp;
                    <span>Product</span>&nbsp;
                    <span>Sales</span>&nbsp;
                </h1>
                {/* <h2>
                    Winning Pre Sales Processes that impact your Product sales
                </h2> */}
                <p data-aos="fade-down" data-aos-duration="2000" data-aos-easing="ease-in-out">
                    Boost your bottom line with a strong sales pipeline as you 
                    allocate the right resources at the right places, 
                    at the right time. Pre-sales is critical to the 
                    success of every opportunity that comes your way. 
                </p>
            </div>
            <div className="gtm-comp9-body">
                <div>
                    <div className="gtm-comp9-body-vector">
                        <div className="gtm-comp9-body-vector-img">
                            <img src={prod} alt="Product Research" />
                        </div>
                        <h3>Product Research</h3>
                    </div>
                    <div className="gtm-comp9-body-vector">
                        <div className="gtm-comp9-body-vector-img">
                            <img src={market} alt="Market Research" />
                        </div>
                        <h3>Market Research</h3>
                    </div>
                    <div className="gtm-comp9-body-vector">
                        <div className="gtm-comp9-body-vector-img">
                            <img src={ca} alt="Customer Analysis" />
                        </div>
                        <h3>Customer Analysis</h3>
                    </div>
                    <div className="gtm-comp9-body-vector">
                        <div className="gtm-comp9-body-vector-img">
                            <img src={pros} alt="Prospecting" />
                        </div>
                        <h3>Prospecting</h3>
                    </div>
                </div>
                <div>
                    <div className="gtm-comp9-body-vector">
                        <div className="gtm-comp9-body-vector-img">
                            <img src={sol} alt="Solutions to customer pain points" />
                        </div>
                        <h3>Solutions to customer pain points</h3>
                    </div>
                    <div className="gtm-comp9-body-vector">
                        <div className="gtm-comp9-body-vector-img">
                            <img src={usp} alt="Drafting a USP" />
                        </div>
                        <h3>Drafting a USP</h3>
                    </div>
                    <div className="gtm-comp9-body-vector">
                        <div className="gtm-comp9-body-vector-img">
                            <img src={deals} alt="Qualifying deals" />
                        </div>
                        <h3>Qualifying deals and crafting proposals</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default GTMComp9
