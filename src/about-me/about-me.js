import React from 'react';
import './about-me.scss';
import PersonalPhoto from '../assets/images/Matthew_Muenzberg.jpg'


class AboutMe extends React.Component {

	render() {
		return (
			<React.Fragment>
				<div id="about-me" className="row pt-5">
					<div className="col-lg-3 text-center align-self-center">
						<img src={PersonalPhoto}></img>
					</div>
					<div className="col-lg-9 text-center p-2 align-self-center">
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