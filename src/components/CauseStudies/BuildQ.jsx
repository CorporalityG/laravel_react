import React from "react";
import './CaseStudy.css'
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../config';
import { useNavigate } from "react-router";

const BuildQ = () => {

	const navigate = useNavigate();
    const topHandle = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

	return (
		<div className="cause-studies-container">
			
			<div className="case-study-banner">
				<img src={BASE_URL + '/img/case-study-rec-1.png'} alt="case-study-rec-1" className="case-study-rec case-study-rec-1" />
				<img src={BASE_URL + '/img/case-study-rec-2.png'} alt="case-study-rec-2" className="case-study-rec case-study-rec-2" />
				<img src={BASE_URL + '/img/case-study-rec-3.png'} alt="case-study-rec-3" className="case-study-rec case-study-rec-3" />

				<div className="container">
					<div className="row">
						<div className="col-md-8">
							<div className="case-study-banner-content">
								<div className="heading">
									<h1>Revamped corporate and operating models increases BuildQ Group’s sales</h1>
									<div className="title-line"></div>
								</div>
								<div className="content">
									<p>BuildQ Group, a construction company in Sydney, is reinvented with the help of a comprehensive Digital Media Marketing strategy that tactically revived growth and strengthened customer communications.</p>
								</div>
							</div>
						</div>

						<div className="col-md-4">
							<div className="case-study-logo-main">
								<img src={BASE_URL + '/img/Build-Q-logo.png'} alt="Build-Q-logo" className="case-study-logo" />
								<img src={BASE_URL + '/img/Build-Q-icon.png'} alt="Build-Q-icon" className="case-study-icon" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BuildQ