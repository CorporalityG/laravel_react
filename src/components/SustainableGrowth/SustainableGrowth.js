import React from 'react'
import CaseStudy from './components/CaseStudies/CaseStudy'
import DigitalSg from './components/DigitalSg/Digital'
import Global from './components/GlobalAIms/Global'
import MultiDimensional from './components/MultiDimensional/MultiDimension'
import OrganisingPrinciple from './components/Organising/OrganisingPrinciple'
import { Helmet } from "react-helmet";
import { BASE_URL } from '../../config'

const SustainableGrowth = () => {
    return (
        <div>
            <Helmet>
                <title>{`Understanding the Sustainable Growth Rate (SGR)`}</title>
                <meta name="description" content={`The sustainable growth rate (SGR) is the maximum rate of growth that a company can sustain without raising additional equity or taking on new debt.`} />
                <link rel="canonical" href={`${BASE_URL}/sustainable-growth/`} />
            </Helmet>

            <OrganisingPrinciple />
            <DigitalSg />
            <MultiDimensional />
            <Global />
            <CaseStudy />
        </div>
    )
}

export default SustainableGrowth
