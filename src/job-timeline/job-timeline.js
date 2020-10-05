import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import TimelineJSON from '../assets/data/timeline.json';
import './job-timeline.scss';

class JobTimeline extends Component {

	constructor(props) {
		super(props);
		this.constructTimelineMapByYear();
	}

	constructTimelineMapByYear() {
		let timeline = TimelineJSON;
		let map = {};
		timeline.forEach(event => {
			let today = new Date();
			let year = '';
			if (event.EndDate && event.EndDate !== 'Present') {
				console.log('End Date' + event.EndDate);
				let endDate = new Date(event.EndDate);
				year = endDate.toLocaleDateString().split("/")[2];
			} else {
				year = today.getFullYear().toString();
			}
			if (year in map) { map[year] = [...map[year], event]; console.log(year) }
			else { map[year] = [event]; console.log(year) };
		})
		this.timelineMap = map;
		console.dir(this.timelineMap);
		this.years = Object.keys(map).slice().sort((a, b) => new Date(b) - new Date(a));
		this.years.forEach(year => {
			this.timelineMap[year] = this.timelineMap[year].slice().sort((a, b) => new Date(b.EndDate) - new Date(a.EndDate));
			console.dir(this.timelineMap[year]);
		})
	}

	sortByDate(timelineList) {
		return timelineList.slice().sort((a, b) => new Date(b.StartDate) > new Date(a.StartDate))
	}

	render() {
		return (
			<div className="container-fluid pt-3">
				<div className="row example-centered">
					<div className="m-auto col-md-10 col-xs-offset-1 col-sm-offset-2">
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
												<span className="timeline-startdate">From {event.StartDate}</span>
												<span className="timeline-enddate">To {event.EndDate}</span>
											</div>
											<div className="timeline-marker"></div>
											<div className="timeline-content">
												<h3 className="timeline-title">{event.Title}</h3>
												<h5 className="timeline-subtitle">{event.Subtitle}</h5>
												<div className="timeline-tags my-1">
													{event.Tags.map(tag => (
														<div className="timeline-tag m-1 px-3">
															{tag}
														</div>
													))}
												</div>
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