import React from 'react';
import JobDetails from '../job-details/job-details'
import SkillsPage from '../skills-page/skills-page'
import './site-content.css';

class SiteContent extends React.Component {
	render() {
		return (
			<div id="site--content" className="row p-3">
				<div className="col">
					<h1 className="content-header">My Skills</h1>
					<SkillsPage></SkillsPage>
					<h1 className="content-header">My Journey</h1>
					<JobDetails></JobDetails>
				</div>
			</div>
		);
	}
}

export default SiteContent;