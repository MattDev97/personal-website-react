import React from 'react';
import './about-me.scss';
import PersonalPhoto from '../assets/images/Matthew_Muenzberg.jpg'


class AboutMe extends React.Component {

	render() {
		return (
			<React.Fragment>
				<div id="about-me" className="row pt-5">
					<div className="col-lg-3 text-center align-self-center">
						<img src={PersonalPhoto}></img>
					</div>
					<div className="col-lg-9 text-center p-2 align-self-center">
						<p>
							Hi!  Thanks for checking out my interactive resume.  As you can see, this website is still VERY much a work in progress.
						</p>
						<p>
							So just in case you somehow randombly stumble upon this beaut:  Salutations
						</p>
					</div>
				</div>
			</React.Fragment>
		);
	}

}

export default AboutMe;