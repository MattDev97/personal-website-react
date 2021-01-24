import React from 'react';
import './App.scss';
import LandingPage from './landing-page/landing-page';
import SiteContent from './site-content/site-content';
import LoadingSpinner from './loading-spinner/loading-spinner';

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
        <LandingPage></LandingPage>
        <div className="background">
          <div className="container">
            <SiteContent></SiteContent>
          </div>
        </div>

      </React.Fragment >
    );
  }

}

export default App;
