import React from 'react';
import JobDetails from '../job-details/job-details'
import SkillsPage from '../skills-page/skills-page'
import AboutMe from '../about-me/about-me'
import JobDetailsJSON from '../assets/data/job-details.json'

import './site-content.scss';
import JobTimeline from '../job-timeline/job-timeline';

class SiteContent extends React.Component {
	constructor(props) {
		super(props);
		this.jobDetails = JobDetailsJSON;
	}
	render() {
		return (
			<div id="site--content" className="row">
				<div className="col p-0">
					<div className="row section p-5 about-me">
						<AboutMe></AboutMe>
					</div>
					<div className="row section p-5">
						<h1 className="content-header">Experience</h1>
						<h3 >“Wait a minute, Doc, are you telling me you built A time machine out of a DeLorean?”</h3>
						<hr></hr>
						<JobTimeline></JobTimeline>
					</div>
					<div className="row section my-skills p-5">
						<h1 className="content-header">Skills</h1>
						<h3 className="text-center">"Elementary, my dear Watson."</h3>
						<hr></hr>
						<SkillsPage></SkillsPage>
					</div>
					{/* Commented out for now... 
					<div className="section p-5">
						<h1 className="content-header">Experience</h1>
						<h3 className="text-center">What I learned in boating school is...</h3>
						<hr></hr>
						{this.jobDetails.map(job => (
							<div key={job.JobThumbnailKey}>
								<JobDetails jobDetails={job}></JobDetails>
							</div>
						))}
					</div> */}



				</div>
			</div>
		);
	}
}

export default SiteContent;