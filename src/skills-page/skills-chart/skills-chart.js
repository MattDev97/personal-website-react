import React from 'react';
import './skills-chart.scss';
import SkillsJSON from '../../assets/data/skills-page.json'

class SkillsChart extends React.Component {
	constructor(props) {
		super(props);
		console.log(SkillsJSON);
		this.languageSkills = SkillsJSON["language-skills"];
		this.frameworkSkills = SkillsJSON["framework-skills"];

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
			meterBar.push(<div key={i} className="meter-bar my-auto"></div>);
		}
		return meterBar;
	}

	render() {
		return (
			<div id="skills-chart" className="row  p-3">
				<div className="col-lg-6">
					<div className="row">
						<h2>Languages</h2>
					</div>
					<div className="skill-container d-flex row pr-5">

						{this.languageSkills.map(skill => (
							<React.Fragment key={skill.name}>
								<span className="col-6">
									{skill.name}
								</span>
								<div
									className="col-6 p-0 d-flex
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
							<React.Fragment key={skill.name}>
								<span className="col-6">
									{skill.name}
								</span>
								<div className="col-6 p-0 d-flex
											skill-meter 
											border-left 
											border-right" >
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