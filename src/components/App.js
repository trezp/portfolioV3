import React from 'react';
import {
 BrowserRouter as Router,
 Route,
 Switch
} from 'react-router-dom';

import Nav from './Nav';
import Home from './Home';
import About from './About';
import PortfolioContainer from './PortfolioContainer';
import Resume from './Resume';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/(.+)" render={(() => 
            <Nav/>
          )}/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route exact path="/portfolio" component={PortfolioContainer}/>
            <Route path="/resume" component={Resume}/>
            <Route component={NoMatch}/>
          </Switch>
        </div>
      </Router>
    )  
  }
}

const NoMatch = ({ location }) => (
  <div>
    <h3>Oops, sorry! Nothing for <code>{location.pathname}</code> was found.</h3>
  </div>
)

export default App;


