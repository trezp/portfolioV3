
import React from 'react';
import {
 BrowserRouter as Router,
 Route,
 Switch,
 NavLink
} from 'react-router-dom';


import Home from './Home'
import About from './About'
import Portfolio from './Portfolio';
import Resume from './Resume';
import Battle from './Battle';
import Results from './Results';

const Nav = ()=> (
  <Router>
    <div className="main-container">
      <nav>
        <ul className="main-nav">
        	<li><NavLink exact to='/' activeClassName="selected" className="btn-primary">Home</NavLink></li>
        	<li><NavLink to='/about' activeClassName="selected" className="btn-primary">About</NavLink></li>
          <li><NavLink to='/portfolio' activeClassName="selected" className="btn-primary">Portfolio</NavLink></li>
          <li><NavLink to='/resume' activeClassName="selected" className="btn-primary">Resume</NavLink></li>
        </ul>
      </nav>
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/resume" component={Resume}/>
          <Route exact path="/battle" component={Battle}/>
          <Route path="/battle/results" component={Results}/>
          <Route component={NoMatch}/>
        </Switch>
      </div>
    </div>
    </Router>
)

const NoMatch = ({ location }) => (
  <div>
    <h3>Oops, sorry! Nothing for <code>{location.pathname}</code> was found.</h3>
  </div>
)

export default Nav;
