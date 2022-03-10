import React from "react";
import './CauseStudies.css'
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../config';
import { useNavigate } from "react-router";

const FastgrowFinance = () => {

	const navigate = useNavigate();
    const topHandle = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

	return (
		<div className="cause-studies-container">
			<div className="row">
				<div className="col-md-6 cause-studies-left">
					<img src={BASE_URL + '/img/yellow-line.png'} alt="yellow-line" className="yellow-line" />
					
					<div className="cause-studies-left-one" style={{backgroundImage: "url("+BASE_URL+"/img/cause-studies-bg.png)"}}>
						<img src={BASE_URL + '/img/Fastgrow-Finance.png'} alt="Fastgrow-Finance" className="cause-studies-main-img" />
						<img src={BASE_URL + '/img/white-vector.png'} alt="white-vector" className="white-vector" />
					</div>

					<div className="cause-studies-left-two">
						<div className="cause-studies-icon-main">
							<img src={BASE_URL + '/img/Fastgrow-Finance-icon.png'} alt="Fastgrow Finance Icon" className="cause-studies-icon" />
						</div>

						<div className="cause-studies-boxes">
							<div className="cause-studies-box">
								<h2 className="title">Outcomes</h2>
								<div className="description">
									<p>Fastgrow was able to instantly stand out from the crowd with our brand positioning strategy. With clear positioning the company was able to efficiently and effectively communicate with its target audience by breaking through the noise. While providing easy purchase decisions the company was able to trigger an emotional response by pulling the right levers in the shortest amount of time. </p>
								</div>
							</div>

							<div className="cause-studies-line"></div>
						</div>

						<div className="related-cause-studies-main">
							<div className="related-cause-studies-inner">
								<div className="related-title">Related Cause Studies</div>
								<div className="related-list">
									<ul>
										<li onClick={() => { navigate("/divine-intercession"); topHandle(); }}>Divine Intercession</li>
										<li onClick={() => { navigate("/build-q"); topHandle(); }}>Build Q</li>
										{/*<li onClick={() => { navigate("/liqmet"); topHandle(); }}>Liqmet</li>*/}
										<li onClick={() => { navigate("/klek-services"); topHandle(); }}>Klek Services</li>
										<li onClick={() => { navigate("/sk-insurance"); topHandle(); }}>SK Insurance</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="col-md-6 cause-studies-right">
					<div className="cause-studies-logo">
						<img src={BASE_URL + '/img/Fastgrow-Finance-logo.png'} alt="Fastgrow-Finance-logo" className="cause-studies-logo-img" />
					</div>

					<div className="cause-studies-content-container">
						<div className="cause-studies-main-content">
							<div className="heading">
								<h1 className="title">Case Study for Fastgrow Finance</h1>
								<div className="title-line"></div>
							</div>

							<div className="content">
								<p>Corporality helps Fastgrow Finance break new ground. We created a unique brand positioning that would extend the company’s reach into the market</p>
							</div>
						</div>

						<div className="cause-studies-line"></div>

						<div className="glimpses-main">
							<h2 className="title">At a glance</h2>
							<div className="glimpses-boxes">
								<div className="glimpses-box">
									<div className="box-title">10</div>
									<div className="box-subtitle">point increase in revenue</div>
								</div>

								<div className="glimpses-box">
									<div className="box-title">100%</div>
									<div className="box-subtitle">increase in visibility</div>
								</div>
							</div>
						</div>

						<div className="cause-studies-line"></div>

						<div className="cause-studies-content-boxes">
							<div className="content-box">
								<img src={BASE_URL + '/img/chart-icon.png'} alt="chart-icon" className="middle-icon chart-icon" />
								<h2 className="title">Introduction</h2>
								<div className="description">
									<p>To preserve category leadership, Fastgrow Finance needed to revamp its brand positioning. Crystallization workshops and focus groups were held to develop a new brand template that focused on distinguish  ing emotional and pleasure benefits while also basing some of the values in the context that modern customers seek. Recommendations also suggested possible brand extension regions in order to maximize category dominance.</p>
									<p>The company wanted to stand out from the crowd while also underlining its particular positioning. It also required a strategy that would not only bring their brand to life, but would also appeal to their target demographic.</p>
								</div>
							</div>

							<div className="cause-studies-line"></div>

							<div className="content-box">
								<img src={BASE_URL + '/img/setting-icon.png'} alt="setting-icon" className="middle-icon setting-icon" />
								<h2 className="title">Our Approach</h2>
								<div className="description">
									<p>While there are several positioning strategies, not all of them complement a financial services firm. Technology was our best friend as we began planning to use it more effectively to start gaining traction in a competitive market. Having defined the business imperatives, we understood the company’s business goals and formulated a positioning with a clear destination in mind. With our comprehensive brand research, we also identified the strengths that weren’t visualised before. The brand strategy that evolved was scalable and meant to adjust to changing market scenarios. It was strengthened in a way that competitors entering the fray could not disrupt the positioning. Besides, we also targeted a particular function within the organisation to provide role-focused specialised strategies so that buyers could perceive that the company and its stakeholders were actually tuned in to their needs. </p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FastgrowFinance