import React from 'react';
import JobDetails from '../job-details/job-details'
import SkillsPage from '../skills-page/skills-page'
import JobDetailsJSON from '../job-details/data/job-details.json'

import './site-content.css';

class SiteContent extends React.Component {
	constructor(props) {
		super(props);
		this.jobDetails = JobDetailsJSON;
	}
	render() {
		return (
			<div id="site--content" className="row p-3">
				<div className="col">
					<h1 className="content-header">My Skills</h1>
					<SkillsPage></SkillsPage>
					<h1 className="content-header">My Journey</h1>
					{this.jobDetails.map(job => (
						<React.Fragment>
							<JobDetails jobDetails={job}></JobDetails>
						</React.Fragment>
					))}
				</div>
			</div>
		);
	}
}

export default SiteContent;