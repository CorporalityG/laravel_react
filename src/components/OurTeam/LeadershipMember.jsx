import { BASE_URL } from '../../config';
import { Link } from 'react-router-dom';

export const LeadershipMember = (props) => {
    return (
        <div className="col-md-6 ot-l-member-col" data-aos="flip-left">
            <div className="ot-l-member">
                <div className="l-member-img">
                    {props.thumbnail && <img src={props.thumbnail} alt={props.name} className="l-member-avtar" />}

                    <img src={`${BASE_URL}/img/OurTeam/leadership-rec-1.png`} alt="leadership-rec-1" className="l-member-rec-1" />
                    <img src={`${BASE_URL}/img/OurTeam/leadership-rec-2.png`} alt="leadership-rec-1" className="l-member-rec-2" />
                </div>
                <div className="l-member-name">{props.name}</div>
                <div className="l-member-designation">{props.designation}</div>
                <div className="l-member-bio" dangerouslySetInnerHTML={{ __html: props.biography }}></div>
                <div className="l-member-social">
                    <Link to={`/${props.facebook}`}>
                        <img src={`${BASE_URL}/img/OurTeam/facebook-icon.png`} alt="Facebook" />
                    </Link>
                    <Link to={`/${props.linkedin}`}>
                        <img src={`${BASE_URL}/img/OurTeam/linkedin-icon.png`} alt="LinkedIn" />
                    </Link>
                    <Link to={`/${props.website}`}>
                        <img src={`${BASE_URL}/img/OurTeam/website-icon.png`} alt="Website" />
                    </Link>
                </div>
            </div>
        </div>
    )
}