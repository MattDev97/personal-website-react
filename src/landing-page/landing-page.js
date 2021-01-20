import React from 'react';
import './landing-page.scss';
import LandingPageMountains from '../assets/images/LandingPageMountains.jpg';
import FlatFace from '../assets/svgs/FlatFaceDesignFinal.svg';
import { FaLinkedin, FaInstagram } from "react-icons/fa";

function setupTypewriter(t) {
	var HTML = t.innerHTML;

	t.innerHTML = "";

	var cursorPosition = 0,
		tag = "",
		writingTag = false,
		tagOpen = false,
		typeSpeed = 25,
		tempTypeSpeed = 0;

	var type = function () {

		if (writingTag === true) {
			tag += HTML[cursorPosition];
		}

		if (HTML[cursorPosition] === "<") {
			tempTypeSpeed = 0;
			if (tagOpen) {
				tagOpen = false;
				writingTag = true;
			} else {
				tag = "";
				tagOpen = true;
				writingTag = true;
				tag += HTML[cursorPosition];
			}
		}
		if (!writingTag && tagOpen) {
			tag.innerHTML += HTML[cursorPosition];
		}
		if (!writingTag && !tagOpen) {
			if (HTML[cursorPosition] === " ") {
				tempTypeSpeed = 0;
			}
			else {
				tempTypeSpeed = (Math.random() * typeSpeed) + 50;
			}
			t.innerHTML += HTML[cursorPosition];
		}
		if (writingTag === true && HTML[cursorPosition] === ">") {
			tempTypeSpeed = (Math.random() * typeSpeed) + 50;
			writingTag = false;
			if (tagOpen) {
				var newSpan = document.createElement("span");
				t.appendChild(newSpan);
				newSpan.innerHTML = tag;
				tag = newSpan.firstChild;
			}
		}

		cursorPosition += 1;
		if (cursorPosition < HTML.length - 1) {
			setTimeout(type, tempTypeSpeed);
		}

	};

	return {
		type: type
	};
}

function goToLinkedInPage(e) {
	window.open('https://www.linkedin.com/in/matthew-muenzberg-225311162/', '_blank');
}

function goToInstagram(e) {
	window.open('https://www.instagram.com/mattpiano52/?hl=en', '_blank');
}


class LandingPage extends React.Component {
	constructor(props) {
		super(props);
		this.handleLoad = this.handleLoad.bind(this);
	}

	componentDidMount() {
		window.addEventListener('load', this.handleLoad);
	}

	componentWillUnmount() {
		window.removeEventListener('load', this.handleLoad)
	}

	handleLoad() {
		const headerContent = document.getElementById('header-content');
		const typewriter = setupTypewriter(headerContent);

		headerContent.animate([
			//keyframes
			{ height: '0%' },
			{ height: '5rem' }
		], {
			//timing
			easing: "cubic-bezier(0.7, -0.8, 0.5, 1.7)",
			duration: 1000,
			delay: 600
		})

		setTimeout(() => {
			typewriter.type();
		},
			1500)
	}

	render() {
		return (
			<div id="landing--container">
				<div id="header-content" className="col">
					<h1>Hey There!</h1>
					<h2 className="mx-0">I'm Matt, welcome to my website!</h2>
				</div>
				<img src={FlatFace} alt="My Face" />

				<div id="social-buttons">
					<div onClick={goToLinkedInPage} >
						<FaLinkedin />
					</div>
					<div onClick={goToInstagram} >
						<FaInstagram />
					</div>
				</div>
			</div>
		);
	}
}

export default LandingPage;