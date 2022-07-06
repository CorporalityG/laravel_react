import React, { useEffect } from 'react'
import '../LogoText/LogoTest.css'
import aos from 'aos'

const LogoText = (pageDetail) => {

    useEffect(() => {
        aos.init({ duration: 3000 });

    }, [])

    return (
        <div>
            <div data-aos="fade-down" className="container text-in-container-icons">
                <div className="row">
                    <p className="Partner-program-1-text">{`${pageDetail.partner_title}`}</p>
                </div>
                <div className="row">
                    <p className="Partner-program-2-text">{`${pageDetail.partner_description}`}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LogoText
