import React, { useEffect } from 'react';
import { useNavigate } from "react-router";
import "./GTMComp1.css";
import Aos from 'aos';
import 'aos/dist/aos.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./animate.css";
import fb from "../images/socials/fb.png";
import ig from "../images/socials/ig.png";
import lnkd from "../images/socials/lnkd.png";
import yt from "../images/socials/yt.png";
import pin from "../images/socials/pin.png";
import twt from "../images/socials/twt.png";
import V3 from "./videos/V3.mp4";

function Page1() {

	const navigate = useNavigate();

	useEffect(() => {
		Aos.init();
	});
	// const transitionStyle = { transitionProperty: "all", transitionDuration: "0.1s", transitionTimingFunction: "ease", transitionDelay: "0s" };
	return (
		<div className="gtm-page1">
			<div className="container mx-auto">
				<video autoPlay muted loop className="myVideo">
					<source src={V3} type="video/mp4" />
				</video>
				<div className="row">
					<div className="col-lg-5 col-8 ms-lg-0 ms-auto me-auto d-flex flex-column justify-content-center">
						<div className="mb-1">
							<div
								 data-aos="fade-right"
								 data-aos-duration="2000"
								 className="aos-init aos-animate"
							>
								<h1 className="heading animate two">
									<span>Aim</span>  
									&nbsp;
									<span>For</span>
									&nbsp;
									<span>Global</span>
									&nbsp;
									<span>Growth</span>
								</h1>
							</div>
						</div>
						<div data-aos="fade-down" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-delay="1000" className="desc mt-2 mb-2 text aos-init aos-animate">
							<p className="gainCompetitive"><b>Planning for expansion and growth in new markets we got you covered.</b><br />
							Corporality’s early insights through market research and strategy planning enables your team to have the confidence to take a big bet on your initiatives and dominate the new market.</p>
						</div>
						<div
							className="aos-init aos-animate"
							data-aos="fade-right"
							data-aos-duration="2000"
							data-aos-delay="3000"
						>
							<button
								type="submit"
								className="philosophySubmitButton d-flex align-items-center justify-content-center mt-2 px-3 py-2"
								onClick={() => window.open("https://zohoadmin-corporality.zohobookings.com.au/#/customer/discoverycall", "_blank")}
							>
								Schedule a time
							</button>
						</div>
					</div>
					<div className="sideSocials d-flex flex-lg-column flex-row">
						<a
							href="https://www.facebook.com/CorporalityG/"
							className="socialIcon d-flex align-items-center justify-content-center ms-0 me-1"
						>
							<img src={fb} alt="facebook" width="30%" />
						</a>
						<a
							href="https://twitter.com/corporalityg/"
							className="socialIcon d-flex align-items-center justify-content-center mx-lg-0 mx-md-2 mx-1"
						>
							<img src={twt} alt="twitter" width="50%" />
						</a>
						<a
							href="https://www.instagram.com/corporalityg/"
							className="socialIcon d-flex align-items-center justify-content-center mx-lg-0 mx-md-2 mx-1"
						>
							<img src={ig} alt="instagram" width="50%" />
						</a>
						<a
							href="https://www.linkedin.com/company/corporality/"
							className="socialIcon d-flex align-items-center justify-content-center mx-lg-0 mx-md-2 mx-1"
						>
							<img src={lnkd} alt="linkedin" width="50%" />
						</a>
						<a
							href="https://in.pinterest.com/CorporalityG/"
							className="socialIcon d-flex align-items-center justify-content-center mx-lg-0 mx-md-2 mx-1"
						>
							<img src={pin} alt="pinterest" width="50%" />
						</a>
						<a
							href="https://www.youtube.com/channel/UC4EISt8kHI4zzpmbIBMIBbg/"
							className="socialIcon d-flex align-items-center justify-content-center mx-lg-0 mx-md-2 mx-1"
						>
							<img src={yt} alt="youtube" width="50%" />
						</a>
					</div>
					{/* <div className="col-lg-6 col-0 container2">
                        <div className="marketing"></div>
                        <div className="blueSquare">
                        </div>
                    </div> */}
				</div>
			</div>
			<div className="blueFadingSquare"></div>
			<div className="pinkFadingSquare"></div>
		</div>
	);
}

export default Page1;
