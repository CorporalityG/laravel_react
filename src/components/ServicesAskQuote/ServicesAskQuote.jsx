import React from 'react'
import './ServicesAskQuote.css'

export const ServicesAskQuote = () => {
    return (
        <div className="services-quote-section">
            <div className="container-lg">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="row services-quote-row" data-aos="flip-up" data-aos-delay="500">
                            <div className="col-lg-6">
                                <div className="services-quote-title">Let's transform your Digital footprint for your business.</div>
                            </div>

                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-lg-6 form-group">
                                        <input type={`email`} name="email" id="email" className="form-control" placeholder="Email Address" />
                                    </div>

                                    <div className="col-lg-6 form-group">
                                        <input type={`submit`} name="btnQuote" id="btnQuote" value={`Ask for Quote`} className="quote-btn" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}