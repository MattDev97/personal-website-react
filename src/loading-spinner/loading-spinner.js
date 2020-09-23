import React from 'react';
import './loading-spinner.css';
import { css } from "@emotion/core";
import BarLoader from "react-spinners/BarLoader";

const override = css`
    display: flex;
    margin: 50vh auto;
`;

class LoadingSpinner extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: this.props.isLoading,
			finishedLoading: false
		};

		this.leftSideRef = React.createRef();
		this.rightSideRef = React.createRef();
	}

	componentDidUpdate() {
		if (this.props.isLoading === false && !this.state.finishedLoading) {
			setTimeout(() => {
				this.setState({
					loading: false,
					finishedLoading: true
				})
				this.animateSlide();
			}, 400)

		}
	}

	animateSlide() {
		this.leftSideRef.current.classList.add('l-animate');
		this.rightSideRef.current.classList.add('r-animate');
	}
	render() {
		return (
			<div id="loading--spinner">
				<div class="side left" ref={this.leftSideRef}>

				</div>
				<div class="side right" ref={this.rightSideRef}>

				</div>
				<BarLoader
					css={override}
					size={10}
					color={"#fddb3a"}
					loading={this.state.loading}
				/>
			</div>
		);
	}
}

export default LoadingSpinner;