import './ServicesAskQuote.css'

export const ServicesAskQuote = (props) => {
    return (
        <div className="services-quote-section">
            <div className="container-lg">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="row services-quote-row" data-aos="flip-up" data-aos-delay="500">
                            <div className="col-lg-6">
                                <div className="services-quote-title">Let's Transform Your Digital Footprint For Your Business.</div>
                            </div>

                            <div className="col-lg-6">
                                <form action={props.action ? props.action : 'https://forms.zohopublic.com.au/corporality/form/SubscribeNewslettersCorporality/formperma/h58Lc8-XG8Ll4jwIvKkFCFA_uwUgipzSLFZVfC_3lZs/htmlRecords/submit'} name='form' method='POST' acceptCharset='UTF-8' encType='multipart/form-data' id='form'>
                                    <input type="hidden" name="zf_referrer_name" />
                                    <input type="hidden" name="zf_redirect_url" />
                                    <input type="hidden" name="zc_gad" />

                                    <div className="row">
                                        <div className="col-sm-6 form-group">
                                            <input fieldtype='9' type="text" className="form-control" maxLength="255" name="Email" checktype="c5" placeholder="Email Address" />
                                        </div>

                                        <div className="col-sm-6 form-group">
                                            <button className="quote-btn">Ask for Quote</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}