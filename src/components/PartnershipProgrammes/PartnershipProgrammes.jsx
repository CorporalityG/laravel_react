import PPComp1 from "./Components/PPComp1/PPComp1"
import PPComp2 from "./Components/PPComp2/PPComp2"
import PPComp3 from "./Components/PPComp3/PPComp3"
import PPComp4 from "./Components/PPComp4/PPComp4"
import { BASE_URL } from '../../config'
import { Helmet } from "react-helmet";

export default function PartnershipProgrammes() {
    return (
        <>
            <Helmet>
                <title>{`Learn what strategy consulting is & what strategy consultants do`}</title>
                <meta name="description" content={`Strategy consulting is one of the most competitive destinations for graduates. Here is a guide to help you understand this prestigious sector.`} />
                <link rel="canonical" href={`${BASE_URL}/partnership-programmes/`} />
            </Helmet>

            <div className="d-flex flex-column justify-content-center align-items-center">
                <PPComp1 />
                <PPComp2 />
                <PPComp3 />
                <PPComp4 />
            </div>
        </>
    )
}
