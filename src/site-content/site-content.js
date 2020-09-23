import React from 'react';
import JobDetails from '../job-details/job-details'
import SkillsPage from '../skills-page/skills-page'
import AboutMe from '../about-me/about-me'
import JobDetailsJSON from '../job-details/data/job-details.json'

import './site-content.css';

class SiteContent extends React.Component {
	constructor(props) {
		super(props);
		this.jobDetails = JobDetailsJSON;
	}
	render() {
		return (
			<div id="site--content" className="row">
				<div className="col p-0">
					<div className="light-section p-5 about-me">
						<h1 className="content-header">About Me</h1>
						<AboutMe></AboutMe>
					</div>
					<div className="section p-5">
						<h1 className="content-header">My Skills</h1>
						<SkillsPage></SkillsPage>
					</div>
					<div className="section p-5">
						<h1 className="content-header">My Journey</h1>
						{this.jobDetails.map(job => (
							<React.Fragment>
								<JobDetails jobDetails={job}></JobDetails>
							</React.Fragment>
						))}
					</div>


				</div>
			</div>
		);
	}
}

export default SiteContent;