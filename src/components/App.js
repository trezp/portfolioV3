import React from 'react';
import {
 BrowserRouter as Router,
 Route,
 Switch
} from 'react-router-dom';


import Home from './Home';
import PortfolioContainer from './PortfolioContainer';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Route path="/(.+)" render={(() => 
            <Nav/>
          )}/> */}
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/portfolio" component={PortfolioContainer}/>
          </Switch>
        </div>
      </Router>
    )  
  }
}

const NoMatch = ({ location }) => (
  <div>
    <PortfolioContainer/>
    <h3>Oops, sorry! Nothing for <code>{location.pathname}</code> was found.</h3>
  </div>
)


export default App;


