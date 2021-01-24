import React from 'react';
import './landing-page.scss';
import LandingPageMountains from '../assets/images/LandingPageMountains.jpg';
import FlatFace from '../assets/svgs/FlatFaceDesignFinal.svg';
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { useSpring, animated, interpolate } from 'react-spring';
import { Spring } from "react-spring/renderprops";
import LandingPageBackground from './landing-page-background/landing-page-background';

function goToLinkedInPage(e) {
	window.open('https://www.linkedin.com/in/matthew-muenzberg-225311162/', '_blank');
}

function goToInstagram(e) {
	window.open('https://www.instagram.com/mattpiano52/?hl=en', '_blank');
}

class LandingPage extends React.Component {

	render() {
		return (
			<React.Fragment>
				<LandingPageBackground></LandingPageBackground>
				<div id="landing--container">

					<div id="header-content" className="col">
						<h1>Hey There!</h1>
						<h2 className="mx-0">I'm Matt, welcome to my website!</h2>
					</div>
					{/* <Spring delay={300} from={{ opacity: 0 }} to={{ opacity: 1 }}>
					{({ opacity }) => (
						<h1 style={{ opacity }}>TESTING</h1>
					)}
				</Spring> */}

					<img class="flat-face" src={FlatFace} alt="My Face" />

					<div id="social-buttons">
						<div onClick={goToLinkedInPage} >
							<FaLinkedin />
						</div>
						<div onClick={goToInstagram} >
							<FaInstagram />
						</div>
					</div>
				</div>
			</React.Fragment>

		);
	}
}

export default LandingPage;