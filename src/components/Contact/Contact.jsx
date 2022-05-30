import React from 'react'
import ConForm from './Components/ConForm'
import ContactMap from './Components/ContactMap'
import MetaTags from 'react-meta-tags';
import { BASE_URL } from '../../config'

const Contact = () => {
    return (
        <>
            <MetaTags>
                <title>{`Contact Corporality Global | Best Brand Strategist & Consultancy in Sydney | Corporality`}</title>
                <meta name="description" content={`Let's bring you to success with our quality marketing and brand strategy. Get in touch with customer-centric and top marketing and brand consultants in Sydney today.`} />
                <link rel="canonical" href={`${BASE_URL}/contact/`} />
            </MetaTags>

            <div className="d-flex flex-column justify-content-center ">
                <ConForm />
                <ContactMap />
            </div>
        </>
    )
}

export default Contact
