import React from 'react';
import './skills-page.css';
import SkillsChart from './skills-chart/skills-chart';

class SkillsPage extends React.Component {
	render() {
		return (
			<div id="skills-page" className="row">
				<SkillsChart></SkillsChart>
			</div>
		);
	}
}

export default SkillsPage;