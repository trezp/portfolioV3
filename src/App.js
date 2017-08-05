//Todo


import React, { Component } from 'react';

//App Components
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import Nav from './Nav';
import Home from './Home'
import About from './About'
import Portfolio from './Portfolio';
import Resume from './Resume';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Treasure Porth</h1>
        <BrowserRouter>
          <div>
            <Nav/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/portfolio" component={Portfolio}/>
              <Route path="/resume" component={Resume}/>
            </Switch>
            <Footer/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
