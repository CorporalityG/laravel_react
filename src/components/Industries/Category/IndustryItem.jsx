import { BASE_URL } from '../../../config';
import { Link } from 'react-router-dom';

function truncate(text, size) {
    return text?.length > size ? text.substr(0, size - 1) + '...' : text;
}

function dateFormat(date) {
    var dateObj = new Date(date).toDateString();
    var date1 = dateObj.split(" ");
    return date1[1] + ' ' + date1[2] + ', ' + date1[3];
}

function IndustryItem(props) {
    return (
        <div className="in-item shadow" data-aos="fade-up" data-aos-duration="2000">
            <div data-aos="fade-up" data-aos-duration="2000">
                {props.thumbnail && <img src={props.thumbnail} className="in-img" alt={props.title} />}
            </div>
            <div className="in-content" data-aos="fade-up" data-aos-duration="2000">
                <div className="in-title" data-aos="fade-up" data-aos-duration="2100">{props.title}</div>
                <div data-aos="fade-up" data-aos-duration="2200">
                    <p>
                        {
                            props.description != null ?
                            <span dangerouslySetInnerHTML={{ __html: truncate(props.description.replace(/<(.|\n)*?>/g, ''), 300) }}></span>
                            : null
                        }
                        <Link to={`/${props.slug}`} className="in-read-more">Read more</Link>
                    </p>
                </div>
                <div className="in-date-comment-main" data-aos="fade-up" data-aos-duration="2300">
                    <div className="in-date-comment">
                        <img src={`${BASE_URL}/img/industries/date-icon.png`} alt="Date" />
                        <span>{dateFormat(props.date)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IndustryItem;