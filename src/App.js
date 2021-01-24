import React from 'react';
import './App.scss';
import LandingPage from './landing-page/landing-page';
import SiteContent from './site-content/site-content';
import LoadingSpinner from './loading-spinner/loading-spinner';

import LandingPageBackground from './landing-page/landing-page-background/landing-page-background';

export class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  render() {
    return (
      <React.Fragment>
        {/* <LoadingSpinner isLoading={this.state.isLoading}></LoadingSpinner> */}
        <div className="background">
          <LandingPageBackground></LandingPageBackground>
        </div>
        <LandingPage></LandingPage>
        <div className="container">
          <SiteContent></SiteContent>
        </div>

      </React.Fragment >
    );
  }

}

export default App;
