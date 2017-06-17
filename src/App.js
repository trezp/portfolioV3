import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

//App Components
import PhotosContainer from './PhotosContainer'

class App extends Component {
  render() {
    return (
      <PhotosContainer/>
    );
  }
}

export default App;
