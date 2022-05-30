import React from 'react'
import './Sitemap.css'
import MetaTags from 'react-meta-tags';
import { BASE_URL } from '../../config';
import { Link } from 'react-router-dom'

function Sitemap() {
    return (
        <>
            <MetaTags>
                <title>{`Sitemap | Corporality`}</title>
                <meta name="description" content={`Sitemap Corporality`} />
                <link rel="canonical" href={`${BASE_URL}/sitemap/`} />
            </MetaTags>

            <div className='sitemap-page'>
                <div className='container-lg'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <h1>Sitemap</h1>

                            <div className='sitemap-link-list'>
                                <ul>
                                    <li>
                                        <Link to={`/`}>Home</Link>
                                    </li>
                                    <li>
                                        <Link to={`/about-corporality/`}>About Corporality</Link>
                                    </li>
                                    <li>
                                        <Link to={`/work-with-clients/`}>How We Work with Clients</Link>
                                    </li>
                                    <li>
                                        <Link to={`/inclusion-and-diversity/`}>Inclusion and Diversity</Link>
                                    </li>
                                    <li>
                                        <Link to={`/partnership-programmes/`}>Partnership Programmes</Link>
                                    </li>
                                    <li>
                                        <Link to={`/sustainable-growth/`}>Sustainable Growth</Link>
                                    </li>
                                    <li>
                                        <Link to={`/interactive-blueprint/`}>Interactive Blueprint</Link>
                                    </li>
                                    <li>
                                        <Link to={`/strategy-and-consulting/`}>Strategy & Consulting</Link>
                                    </li>
                                    <li>
                                        <Link to={`/why-corporality-effect/`}>Why corporality Effect?</Link>
                                    </li>
                                    <li>
                                        <Link to={`/what-is-corporality-effect/`}>What is corporality effect?</Link>
                                    </li>
                                    <li>
                                        <Link to={`/corporality-culturally-conditioned/`}>Culturally Conditioned</Link>
                                    </li>
                                    <li>
                                        <Link to={`/corporality-inbound-shiftings/`}>Inbound Shifting</Link>
                                    </li>
                                    <li>
                                        <Link to={`/corporality-striker/`}>Corporality Striker</Link>
                                    </li>
                                    <li>
                                        <Link to={`/brand-positioning/`}>Brand Positioning</Link>
                                    </li>
                                    <li>
                                        <Link to={`/digital-media-marketing/`}>Digital Media Marketing</Link>
                                    </li>
                                    <li>
                                        <Link to={`/cxo-strategy/`}>Outsourced CXO</Link>
                                    </li>
                                    <li>
                                        <Link to={`/outsourced-cmo/`}>Outsourced CMO</Link>
                                    </li>
                                    <li>
                                        <Link to={`/corporate-strategy/`}>Outsourced COO</Link>
                                    </li>
                                    <li>
                                        <Link to={`/goto-market-strategy/`}>Go to Marketing Strategy</Link>
                                    </li>
                                    <li>
                                        <Link to={`/account-based-marketing/`}>Account Based Marketing</Link>
                                    </li>
                                    <li>
                                        <Link to={`/corporality-books/`}>Corporality - Books</Link>
                                    </li>
                                    <li>
                                        <Link to={`/blog/`}>Blogs</Link>
                                    </li>
                                    <li>
                                        <Link to={`/service-insights/`}>Service Insights</Link>
                                    </li>
                                    <li>
                                        <Link to={`/contact/`}>Contact</Link>
                                    </li>
                                    <li>
                                        <Link to={`/strategic-consultancy/`}>Strategic Consulting</Link>
                                    </li>
                                    <li>
                                        <Link to={`/our-team/`}>Our Team</Link>
                                    </li>
                                    <li>
                                        <Link to={`/careers/`}>Careers</Link>
                                    </li>
                                    <li>
                                        <Link to={`/privacy-policy/`}>Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link to={`/terms-and-conditions/`}>Terms and Conditions</Link>
                                    </li>
                                    <li>
                                        <Link to={`/sitemap/`}>Sitemap</Link>
                                    </li>
                                    <li>
                                        <Link to={`/marketing-model-approch/`}>Marketing Model Approach</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sitemap