import React from 'react';
import './job-details.css';
import AcumenLogo from '../assets/images/acumen-logo-blue-cmyk.jpg'


class JobDetails extends React.Component {
	constructor(props) {
		super(props);

		this.initializeDetails();
	}

	initializeDetails() {
		if (this.props.job) {
			this.job = this.props.jobDetails;
		}
	}
	render() {
		if (this.props.jobDetails) {
			let job = this.props.jobDetails
			return (
				<React.Fragment>
					<div className="job-details row mx-auto pt-5">
						<div className="job--thumbnail col-md-5">
							<img className="mx-auto" src={AcumenLogo} alt="" />
						</div>
						<div className="col-md-7">
							<h2>{job.JobName}</h2>
							<h5><em>{job.JobPosition} since {job.StartDate}</em></h5>
							<hr />
							{job.Sections.map(section => (
								<React.Fragment>
									<h3>{section.Header}</h3>

									{section.Paragraphs.map(paragraph => (
										<React.Fragment>
											<p>{paragraph}</p>
										</React.Fragment>
									))}
								</React.Fragment>
							))}
						</div>
					</div>
				</React.Fragment>
			);
		}
		return null
	}
}

export default JobDetails;