import React from 'react';
import JobDetails from '../job-details/job-details'
import './site-content.css';

class SiteContent extends React.Component {
	render() {
		return (
			<div id="site--content" className="row p-3">
				<div className="col">
					<h1 id="site--content--header">My Journey</h1>
					<JobDetails></JobDetails>
				</div>
			</div>
		);
	}
}

export default SiteContent;