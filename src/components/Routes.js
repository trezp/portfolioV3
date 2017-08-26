
import React from 'react';
import {
 BrowserRouter as Router,
 Route,
 Switch
} from 'react-router-dom';

import Home from './Home'
import About from './About'
import Portfolio from './Portfolio';
import Resume from './Resume';
import Battle from './Battle';
import Results from './Results';

const Routes = ()=> (
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/portfolio" component={Portfolio}/>
      <Route path="/resume" component={Resume}/>
      <Route exact path="/battle" component={Battle}/>
      <Route path="/battle/results" component={Results}/>
      <Route component={NoMatch}/>
    </Switch>
  </Router>
)

const NoMatch = ({ location }) => (
  <div>
    <h3>Oops, sorry! Nothing for <code>{location.pathname}</code> was found.</h3>
  </div>
)

export default Routes;
