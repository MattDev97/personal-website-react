import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import TimelineJSON from '../assets/data/timeline.json';
import './job-timeline.scss';

class JobTimeline extends Component {

	constructor(props) {
		super(props);
		this.timelineDetails = TimelineJSON;

		this.constructTimelineMapByYear();
	}

	constructTimelineMapByYear() {
		let timeline = TimelineJSON;
		let map = {};
		timeline.forEach(event => {
			let startDate = new Date(event.StartDate);
			let [s_month, s_date, s_year] = startDate.toLocaleDateString().split("/");

			if (s_year in map) map[s_year] = [...map[s_year], event];
			else map[s_year] = [event];

			console.dir(map);
			this.timelineMap = map;
			this.years = Object.keys(map);
		})
	}

	render() {
		return (
			<div className="container-fluid pt-3">
				<div className="row example-centered">
					<div className="m-auto col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
						<ul className="timeline timeline-centered">
							{this.years.map(year => (
								<React.Fragment>
									<li className="timeline-item period" key={year}>
										<div className="timeline-info"></div>
										<div className="timeline-marker"></div>
										<div className="timeline-content">
											<h2 className="timeline-title">{year}</h2>
										</div>
									</li>
									{this.timelineMap[year].map(event => (
										<li className="timeline-item">
											<div className="timeline-info">
												<span>{event.StartDate}</span>
											</div>
											<div className="timeline-marker"></div>
											<div className="timeline-content">
												<h3 className="timeline-title">{event.Title}</h3>
												{event.Description.map(paragraph => (
													<p>{paragraph}</p>
												))}

											</div>
										</li>
									))}
								</React.Fragment>

							))}
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

export default JobTimeline