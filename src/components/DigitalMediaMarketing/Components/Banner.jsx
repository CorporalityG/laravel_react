import React from 'react'
import './Banner.css'
import { useNavigate } from "react-router";

export default function Banner() {

	const navigate = useNavigate();

	return (
		<>
			<div className="DDMBanner d-lg-flex  justify-content-between">
				
				<div className="DDMBannerText">
					{/* <h1>Effective Digital Media
						Marketing Strategy for Small and Large Business</h1>
					<p>Head to toe strategy focused Digital Media Marketing</p> */}
					<h1 className="heading animate two">
									<span>BUILDING A </span>
									&nbsp;
									<span>DIGITAL </span>
									&nbsp;
									<span>FOOTPRINT </span>
									&nbsp;
									<span>FOR YOUR </span>
									&nbsp;
									<span>BUSINESS</span>
								
									
								</h1>
					<p data-aos="fade-right" data-aos-delay="400"><b>We got you covered for Digital Media Marketing through our Packaged solutions.</b><br/>
					Corporality is a globally trusted Digital Media Marketing firm. We have partnered with clients all over the world to solve the complex challenges of consistency in creating your digital presence.</p>
				
				<div className="DDMBannerDiscoveryButton" data-aos="fade-right" data-aos-delay="800">
					<button onClick={() => window.open("https://zohoadmin-corporality.zohobookings.com.au/#/customer/discoverycall", "_blank")}>Schedule a time</button>
				</div>
				<div className="DDMBannerSocialIcons">
					<a href='https://www.facebook.com/CorporalityG'>
						<img src='./img/CxoStrategy/img/differentiate/facebook.png' />
					</a>
					<a href='https://twitter.com/corporalityg'>
						<img src='./img/CxoStrategy/img/differentiate/twitter.png' />
					</a>
					<a href='https://www.instagram.com/corporalityg/'>
						<img src='./img/CxoStrategy/img/differentiate/instagram.png' />
					</a>
					<a href='https://www.linkedin.com/company/corporality/'>
						<img src='./img/CxoStrategy/img/differentiate/linkedin.png' />
					</a>
					<a href='https://in.pinterest.com/CorporalityG/'>
						<img src='./img/CxoStrategy/img/differentiate/pinterest.png' />
					</a>
					<a href='https://www.youtube.com/channel/UC4EISt8kHI4zzpmbIBMIBbg'>
						<img src='./img/CxoStrategy/img/differentiate/youtube.png' />
					</a>
				</div>
				</div>
				<div className="DDMBannerImage d-flex justify-content-end ">
					<img src="./img/DigitalMediaMarketing/img/Banner/DDMBannerImage.png" />
				</div>
				<div className="DDMBannerRectangleBlue">
					<img src="./img/DigitalMediaMarketing/img/Banner/RectangleBlue.png" />
				</div>
				<div className="DDMBannerRectangleYellow">
					<img src="./img/DigitalMediaMarketing/img/Banner/RectangleYellow.png" />
				</div>

			</div>
		</>
	);
}