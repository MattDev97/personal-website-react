import React from 'react';
import './job-details.css';
import AcumenLogo from '../assets/images/acumen-logo-blue-cmyk.jpg'

class JobDetails extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="job-details row mx-auto pt-5">
					<div class="job--thumbnail col-md-5">
						<img class="mx-auto" src={AcumenLogo} alt="" />
					</div>
					<div class="col-md-7">
						<h2>Acumen Solutions</h2>
						<h5><em>Technical Consultant I since May 2019</em></h5>
						<hr />
						<p>
							This is my first job out of college <br /><br />

							I have been a part of many diverse projects since my time at Acumen <br /><br />

							Ut faucibus pulvinar elementum integer.
							Vel pharetra vel turpis nunc eget lorem dolor.
							Facilisi nullam vehicula ipsum a arcu. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor.
							In tellus integer feugiat scelerisque. Arcu dui vivamus arcu felis bibendum ut tristique et.
							Nec ultrices dui sapien eget mi proin sed libero enim. Dapibus ultrices in iaculis nunc sed.
							Suspendisse sed nisi lacus sed viverra tellus in.
							Tortor posuere ac ut consequat semper viverra nam.
							Volutpat odio facilisis mauris sit amet massa vitae.<br /><br />

							Nulla porttitor massa id neque aliquam vestibulum.
							Non nisi est sit amet facilisis magna etiam tempor orci.
							Pretium nibh ipsum consequat nisl vel pretium.
							Sagittis vitae et leo duis ut diam quam nulla porttitor.
							Aliquet eget sit amet tellus cras adipiscing.
							Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare.
							Egestas egestas fringilla phasellus faucibus scelerisque eleifend.
							Felis imperdiet proin fermentum leo vel orci porta non pulvinar.
							Erat imperdiet sed euismod nisi. Nunc sed augue lacus viverra vitae congue eu consequat.
							Vitae elementum curabitur vitae nunc.
						</p>
					</div>
				</div>

			</React.Fragment>
		);
	}
}

export default JobDetails;