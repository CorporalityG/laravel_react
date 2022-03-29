import React from 'react'
import { BASE_URL } from '../../../config';

function WhyOutsource() {
    return (
        <div className="cxo-why-outsource-section">
            <div className="container">
                <div className="row cxo-wo-title-row">
                    <div className="col-md-12">
                        <h2>Why outsource a CEO or CXO?</h2>
                    </div>
                </div>
            </div>

            <div className="cxo-wo-boxes-section">
                <div className="cxo-wo-box">
                    <div className="row">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-5">
                            <div className="cxo-wo-content">
                                <h3>Rapid, dedicated senior leadership is required for key functions.</h3>
                                <p>In every manner, you are your company's actual leader and unquestionably an expert in executing your company's key tasks as the CEO. You can't, however, be focused in every facet of business development as you work on larger priorities. An outsourced CXO concentrating on one or more of your key business areas can quickly and effectively streamline processes without disrupting the company's internal leadership processes.</p>

                                <h3>Hiring C-level executives takes time</h3>
                                <p>You've decided to engage a new executive to assist you in moving the business ahead. However, a huge shift in your industry is taking place right now, a large new project has just begun, or you're concerned about being able to onboard the new hire quickly enough. You need a C-level player who's eager to jump right in. Well, hiring an outsourced CEO or CXO may be the best option.</p>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="cxo-wo-img">
                                <img src={BASE_URL + '/img/CxoStrategy/rapid-dedicated.png'} alt="Rapid, dedicated senior leadership" className="cxo-wo-img-inner" />
                                <img src={BASE_URL + '/img/CxoStrategy/rapid-dedicated-dots.png'} alt="Rapid, dedicated senior leadership Dots" className="cxo-wo-img-dots" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cxo-wo-box">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="cxo-wo-img">
                                <img src={BASE_URL + '/img/CxoStrategy/senior-level.png'} alt="A Senior-Level Executive" className="cxo-wo-img-inner" />
                                <img src={BASE_URL + '/img/CxoStrategy/senior-level-dots.png'} alt="A Senior-Level Executive Dots" className="cxo-wo-img-dots" />
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="cxo-wo-content">
                                <h3>A Senior-Level Executive is required temporarily</h3>
                                <p>An outsourced CEO (Chief Executive Officer) or CXO (Chief Experience Officer) can function as an active leader while also coaching and advising you on the improvements that need to be done before bringing on a permanent appointee. The outsourced CEO is in charge of getting the task done, but he or she functions as a contractual resource rather than an employee, which eliminates tension and provides you both a more objective business relationship to plan for the future.</p>

                                <h3>Your business is at risk and needs some decisive direction</h3>
                                <p>An outsourced CEO can bring vitality and a fresh perspective back to your firm. You can hand over the reins to someone who can keep the lights on and find new directions that are in line with your vision. If you wish to return later, the outsourced CEO or CXO is always available to assist you. She or he can also assist you in making a smooth transition if you decide to step down for the long term.</p>
                            </div>
                        </div>
                        <div className="col-lg-1"></div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row cxo-wo-content-row">
                    <div className="col-md-12">
                        <p>Collaborating with an outsourced CEO or CXO can be extremely beneficial to your company whether you need on-demand knowledge, part-time leadership, transition support, or a crisis intervention. Reach out to us for a solution today.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyOutsource