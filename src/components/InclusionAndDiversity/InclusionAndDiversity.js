import React from 'react'
import Inclusion from './components/Incl/Inclusion';
import OurFaith from './components/OurFaith/OurFaith';
import Hover from './components/HoverInclusion/Hover';
import Duty from './components/FourCards/Duty';
import Newsletter from './components/LastComponentINC/Newsletter';
import Leadership from './components/LeaderShip/Leadership';
import Career from './components/CareerImage/Career';
import { Helmet } from "react-helmet";
import { BASE_URL } from '../../config'

const InclusionAndDiversity = () => {
    return (
        <div>
            <Helmet>
                <title>{`Diversity and Inclusion in Workplace: Benefits & Challenges-Achievers`}</title>
                <meta name="description" content={`Learn the benefits of diversity and inclusion and access tips on how to overcome challenges of implementing these practices.`} />
                <link rel="canonical" href={`${BASE_URL}/inclusion-and-diversity/`} />
            </Helmet>

            <Inclusion />
            <OurFaith />
            <Hover />
            <Duty />
            <Leadership />
            <Career />
            <Newsletter />
        </div>
    )
}

export default InclusionAndDiversity
