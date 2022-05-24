import React from 'react'
import './CorporalityStrikers.css'
import { BASE_URL } from '../../config'

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

        </div>
    )
}

export default CorporalityStrikers