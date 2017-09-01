import React, { Component } from 'react';


//App Components
import Routes from './components/Routes';

class App extends Component {
  render() {
    return (
      <div className="top-level-container">
        <Routes/>
      </div>
    );
  }
}


export default App;
