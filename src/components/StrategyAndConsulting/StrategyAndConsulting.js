import React from 'react'
import SACComp1 from './Components/SACComp1'
import SACComp2 from './Components/SACComp2'
import SACComp3 from './Components/SACComp3'
import SACComp5 from './Components/SACComp5'
import SACComp4 from './Components/SACComp4'
import SACComp6 from './Components/SACComp6'
import { Helmet } from "react-helmet";
import { BASE_URL } from '../../config'

const StrategyAndConsulting = () => {
    return (
        <div>
            <Helmet>
                <title>{`What is Organic Growth | How to derive Organic Growth`}</title>
                <meta name="description" content={`Organic growth is growth that a company can achieve by increasing output and enhancing sales, as opposed to inorganic growth from mergers or acquisitions.`} />
                <link rel="canonical" href={`${BASE_URL}/strategy-and-consulting/`} />
            </Helmet>

            <SACComp1 />
            <SACComp2 />
            <SACComp3 />
            <SACComp4 />
            <SACComp5 />
            <SACComp6 />
        </div>
    )
}

export default StrategyAndConsulting
