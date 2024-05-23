import React from 'react';
import './App.css';
import AdMarket from './home/AdMarket';
import Headers from './home/Headers';
import RightTabs from './home/RightTabs';
import Section from './home/Section';
import Footer from './home/Footer';

function AppAng() {
  return (
    <React.Fragment>
      <RightTabs />
      <AdMarket />
      <Headers />
      <Section />
      <Footer/>
    </React.Fragment>
  );
}

export default AppAng;
