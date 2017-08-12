//Todo


import React, { Component } from 'react';

//App Components
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Treasure Porth</h1>
        <Router>
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
        </Router>
      </div>
    );
  }
}

export default App;
