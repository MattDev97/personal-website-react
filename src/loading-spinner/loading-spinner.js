import React from 'react';
import './loading-spinner.scss';
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
		this.spinnerContainerRef = React.createRef();
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

	deleteLoadingSpinner() {
		let loadingContainer = document.querySelector('#loading--spinner');
		if (loadingContainer) {
			loadingContainer.style.display = "none";
		}
	}
	render() {
		return (
			<div id="loading--spinner" ref={this.spinnerContainerRef}>
				<div className="side left" onAnimationEnd={this.deleteLoadingSpinner} ref={this.leftSideRef}>

				</div>
				<div className="side right" ref={this.rightSideRef}>

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