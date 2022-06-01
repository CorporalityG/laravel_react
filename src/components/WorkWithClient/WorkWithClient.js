import React from 'react'
import "./WorkWithClients.css"
import Combating from './components/Combating/Combating'
import Clients from './components/FirstComponent/Clients'
import Innovation from './components/Innovation/Innovation'
import Limitless from './components/Limitless/Limitless'
import Logos from './components/LogoCompany/Logos'
import LogoText from './components/LogoText/LogoText'
import NewsLetter from './components/NewsLetter/NewsLetter'
import TeamSpiritNew from './components/TeamSpiritNew/TeamSpirit'
import Ideation from './components/ThirdComponent/Ideation'
// import VideoClients from './components/VideoComponent/VideoClients'
import { BASE_URL } from '../../config'
import { Helmet } from "react-helmet";

const WorkWithClient = () => {
    return (
        <div>
            <Helmet>
                <title>{`Learn what strategy consulting is & what strategy consultants do`}</title>
                <meta name="description" content={`Strategy consulting is one of the most competitive destinations for graduates. Here is a guide to help you understand this prestigious sector.`} />
                <link rel="canonical" href={`${BASE_URL}/work-with-clients/`} />
            </Helmet>

            <Clients />
            {/* <VideoClients /> */}
            <Combating />
            <Ideation />
            <Limitless />
            <Innovation />
            <LogoText />
            <Logos />
            <TeamSpiritNew />
            <NewsLetter />
        </div>
    )
}

export default WorkWithClient
