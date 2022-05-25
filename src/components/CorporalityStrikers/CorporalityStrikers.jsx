import React from 'react'
import './CorporalityStrikers.css'
import { BASE_URL } from '../../config'
import { CorporalityStrikerItem } from './CorporalityStrikerItem'
import NewPortfolio from '../HomePage/Components/NewPortfolio'
import { GetInvolved } from '../ServiceInsights/GetInvolved'

function CorporalityStrikers() {
    return (
        <div className='corporality-striker'>

            <div className='corporality-striker-banner-section'>
                <img src={`${BASE_URL}/img/CorporalityStrikers/banner-vector.png`} alt="Vector" className='cs-banner-vector' />
                <div className='cs-banner-bg-white'></div>

                <div className='container-lg'>
                    <div className='row cs-banner-row'>
                        <div className='col-lg-7'>
                            <div className='cs-banner-content'>
                                <h1>Corporality Strikers</h1>
                                <p>It is a management method to create and used by Corporality to accelerate the rate of overall company growth. Businesses focused on Human to Human (not just B2B or B2C) can get the option to achieve their goals faster than their competitors.</p>
                            </div>
                        </div>

                        <div className='col-lg-5'>
                            <div className='cs-banner-image'>
                                <img src={`${BASE_URL}/img/CorporalityStrikers/Corporality-Strikers-banner.png`} alt="Corporality Strikers" className='cs-banner-img' />

                                <img src={`${BASE_URL}/img/CorporalityStrikers/banner-circle-yellow.png`} alt="circle-yellow" className='cs-banner-circle-yellow' />
                                <img src={`${BASE_URL}/img/CorporalityStrikers/banner-circle-purple.png`} alt="circle-purple" className='cs-banner-circle-purple' />
                                <img src={`${BASE_URL}/img/CorporalityStrikers/banner-dots.png`} alt="dots" className='cs-banner-dots' />
                                <img src={`${BASE_URL}/img/CorporalityStrikers/banner-ellipse.png`} alt="ellipse" className='cs-banner-ellipse' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='corporality-striker-list-section'>
                <div className='container-fluid px-0'>
                    <CorporalityStrikerItem
                        thumbnail={`${BASE_URL}/img/CorporalityStrikers/Corporality-Strikers-1.png`}
                        title={`Corporality Strikers I: Strategy Building with a Predatory Marketing Approach`}
                        slug={``}
                        description={`<p>A detailed intelligent plan makes half the battle – but execution is the other half that guarantees your win. One of the most common problems for brands and organisations is that their audiences and customers have wildly differing experiences from the online platforms to company representatives. The objective should be clear – deliver one experience across all channels. Corporality calls this the “Multi-channel,” or “Omni Effect,” a unified journey that transcends platforms. Customers see your message in one neat packaging.</p>`}
                    />

                    <CorporalityStrikerItem
                        thumbnail={`${BASE_URL}/img/CorporalityStrikers/Corporality-Strikers-2.png`}
                        title={`Corporality Strikers II: Execution that Achieves the Multi-channel Effect`}
                        slug={``}
                        description={`<p>A detailed intelligent plan makes half the battle – but execution is the other half that guarantees your win. One of the most common problems for brands and organisations is that their audiences and customers have wildly differing experiences from the online platforms to company representatives. The objective should be clear – deliver one experience across all channels. Corporality calls this the “Multi-channel,” or “Omni Effect,” a unified journey that transcends platforms. Customers see your message in one neat packaging.</p>`}
                    />

                    <CorporalityStrikerItem
                        thumbnail={`${BASE_URL}/img/CorporalityStrikers/Corporality-Strikers-3.png`}
                        title={`Corporality Strikers III: Outcome Expected with Omni Effect`}
                        slug={``}
                        description={`<p>So you have succeeded in creating an execution that achieves the multi-channel or Omni Effect. What could be the possible outcome, or the optimal results you should get? It is precisely for this moment that you should see how Inbound marketing can transform your business. Of course, even great outcomes can still be further improved. This Corporality Striker will show you how you can optimise your content from the outcomes you have built.</p>`}
                    />

                    <CorporalityStrikerItem
                        thumbnail={`${BASE_URL}/img/CorporalityStrikers/Corporality-Strikers-4.png`}
                        title={`Corporality Strikers IV: MARCOM Strength to Achieve Strategic Strength`}
                        slug={``}
                        description={`<p>Marketing Communications is often overlooked by business leaders yet it is also a crucial component of any business strategy. How do you communicate with media outlets and other businesses that can partner with you or give you mutual benefits? Gaining good Marcom strength is a key to establishing one’s position in their category.</p>`}
                    />

                    <CorporalityStrikerItem
                        thumbnail={`${BASE_URL}/img/CorporalityStrikers/Corporality-Strikers-5.png`}
                        title={`Corporality Striker V: Embrace the Past, Evolve with the Future`}
                        slug={``}
                        description={`<p>Content has advanced with the improvement of internet technology. Are you up to date with the latest media, output channels, and even the market? You have probably tried many ways and failed. Maybe it’s time to stop and rethink.</p>`}
                    />

                    <CorporalityStrikerItem
                        thumbnail={`${BASE_URL}/img/CorporalityStrikers/Corporality-Strikers-6.png`}
                        title={`Corporality Striker VI: The Era of Evangelists and AI-based Business Enhancement`}
                        slug={``}
                        description={`<p>Business efficiency is all about two things: The Right People and the Right Tools. In a few years, the world will transition into the post-digital age, where digitisation will be the norm instead of a differentiator.</p>`}
                    />
                </div>
            </div>

            <NewPortfolio />

            <GetInvolved />

        </div>
    )
}

export default CorporalityStrikers