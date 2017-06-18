import React, { Component } from 'react';

//App Components
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import Nav from './Nav';
import Cats from './Cats';
import Flowers from './Flowers';
import Rainbows from './Rainbows';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Welcome to Pick N Flick!</h1>
        <BrowserRouter>
          <div>
            <Nav/>
            <Switch>
              <Route exact path="/" component={Cats}/>
              <Route path="/cats" component={Cats}/>
              <Route path="/flowers" component={Flowers}/>
              <Route path="/rainbows" component={Rainbows}/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
