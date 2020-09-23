import React from 'react';
import './about-me.css';
import PersonalPhoto from '../assets/images/Matthew_Muenzberg.jpg'
import Proverbs from './data/proverbs.json'


class AboutMe extends React.Component {

	initializeDetails() {
		//this.state.proverb = this.selectRandomProverb();
	}

	render() {
		return (
			<React.Fragment>
				<div id="about-me" class="row pt-5">
					<div id="proverb" class="col-lg-5 text-center p-2 align-self-center">
						<p className="row proverb-text text-center m-auto">
							Genius is one percent inspiration and ninety-nine percent perspiration.
						</p>
						<p className="row proverb-author m-auto">
							- Thomas Edison
						</p>
					</div>
					<div class="col-lg-2 text-center align-self-center">
						<img src={PersonalPhoto}></img>
					</div>
					<div class="col-lg-5 text-center p-2 align-self-center">
						<p>
							At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
						</p>
					</div>
				</div>
			</React.Fragment>
		);
	}

}

export default AboutMe;