import React from 'react';
import Header from './components/Header';
import SolaSystem from './components/SolarSystem';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolaSystem />
      </>
    );
  }
}

export default App;