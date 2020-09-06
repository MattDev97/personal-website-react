import React from 'react';
import './landing-page.css';
import LandingPageBackgroundBlur15fps from '../assets/video/LandingPageBackgroundBlur15fps.mp4';
import { FaLinkedin, FaInstagram } from "react-icons/fa";

function setupTypewriter(t) {
	var HTML = t.innerHTML;

	t.innerHTML = "";

	var cursorPosition = 0,
		tag = "",
		writingTag = false,
		tagOpen = false,
		typeSpeed = 100,
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
			duration: 1000
		})

		setTimeout(() => {
			typewriter.type();
		},
			700)
	}

	render() {
		return (
			<div id="landing--container">
				<video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
					<source src={LandingPageBackgroundBlur15fps} type="video/mp4" />
				</video>
				<div id="header-content" className="col mx-auto my-auto">
					<h1 className="mx-auto py-2">Hello World</h1>
					<h2 className="mx-auto py-2">It's Matt!</h2>
				</div>
				<div id="social-buttons">
					<FaLinkedin onClick={goToLinkedInPage} />
					<FaInstagram onClick={goToInstagram} />
				</div>
			</div>
		);
	}
}

export default LandingPage;