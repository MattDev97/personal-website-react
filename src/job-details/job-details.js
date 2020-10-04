import React from 'react';
import './job-details.scss';
import AcumenLogo from '../assets/images/acumen-logo-blue-cmyk.jpg'
import XngageLogo from '../assets/images/xngage-logo-2.png'

const images = require.context('../assets/images', true);

class JobDetails extends React.Component {
	constructor(props) {
		super(props);

		this.initializeDetails();
	}

	initializeDetails() {
		if (this.props.jobDetails) {
			this.job = this.props.jobDetails;

			this.imgSrc = images(`./${this.job.JobThumbnailKey}`);
		}
	}
	render() {
		let job = this.props.jobDetails
		return (
			<div className="wrapper">
				<div className="job-details row mx-auto pt-5">
					<div className="job--thumbnail col-md-3">
						<img className="mx-auto" src={this.imgSrc} alt="" />
					</div>
					<div className="content col-md-9">
						<h2 className="m-0">{job.JobName}</h2>
						<h5><b>{job.JobPosition}</b> since {job.StartDate}</h5>
						<hr />
						{job.Sections.map(section => (
							<div key={section.Header}>
								<h3>{section.Header}</h3>

								{section.Paragraphs.map(paragraph => (
									<div key={paragraph}>
										<p>{paragraph}</p>
									</div>
								))}
							</div>
						))}
					</div>
				</div>

			</div>

		);
	}
}

export default JobDetails;