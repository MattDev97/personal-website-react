import React from 'react';
import './skills-chart.css';

class SkillsChart extends React.Component {
	constructor(props) {
		super(props);

		this.languageSkills = [
			{
				name: 'Javascript',
				proficiency: 5
			},
			{
				name: 'HTML',
				proficiency: 5
			},
			{
				name: 'CSS3',
				proficiency: 5
			},
			{
				name: 'C#',
				proficiency: 3
			},
			{
				name: 'SQL',
				proficiency: 3
			},
			{
				name: 'C',
				proficiency: 2
			},
			{
				name: 'Python',
				proficiency: 4
			},
		];

		this.frameworkSkills = [
			{
				name: 'LWC',
				proficiency: 4
			},
			{
				name: 'Angular 2+',
				proficiency: 5
			},
			{
				name: '.NET',
				proficiency: 2,
			},
			{
				name: 'Ionic',
				proficiency: 4,
			},
			{
				name: 'AWS',
				proficiency: 3,
			}
		];

		this.sortSkills();
	}

	sortSkills() {
		this.languageSkills.sort((a, b) => this.sortDescending(a.proficiency, b.proficiency));
		this.frameworkSkills.sort((a, b) => this.sortDescending(a.proficiency, b.proficiency));
	}

	sortDescending(a, b) {
		if (a > b) {
			return -1;
		} else if (a < b) {
			return 1;
		}

		return 0;
	}

	renderSkillMeter(length) {
		let meterBar = [];
		for (let i = 0; i < length; i++) {
			meterBar.push(<div className="meter-bar my-auto"></div>);
		}
		return meterBar;
	}

	render() {
		return (
			<div id="skills-chart" className="row">
				<div className="col-lg-6">
					<div class="row">
						<h2>Languages</h2>
					</div>
					<div className="skill-container d-flex row">

						{this.languageSkills.map(skill => (
							<React.Fragment>
								<span className="col-6">
									{skill.name}
								</span>
								<div className="col-6 p-0 d-flex
												skill-meter 
												border-left 
												border-right">
									{this.renderSkillMeter(skill.proficiency)}
								</div>
							</React.Fragment>
						))}

					</div>
				</div>
				<div className="col-lg-6">
					<div className="row">
						<h2>Frameworks</h2>
					</div>
					<div className="skill-container d-flex row pr-5">
						{this.frameworkSkills.map(skill => (
							<React.Fragment>
								<span className="col-6">
									{skill.name}
								</span>
								<div className="col-6 p-0 d-flex
											skill-meter 
											border-left 
											border-right">
									{this.renderSkillMeter(skill.proficiency)}
								</div>
							</React.Fragment>
						))}
					</div>
				</div>
			</div>
		);
	}
}

export default SkillsChart;