import React from 'react';
import './App.css';
import LandingPage from './landing-page/landing-page';
import SiteContent from './site-content/site-content';

function App() {
  return (
    <React.Fragment>
      <LandingPage></LandingPage>
      <div className="container-fluid">
        <SiteContent></SiteContent>
      </div>
    </React.Fragment>
  );
}

export default App;
