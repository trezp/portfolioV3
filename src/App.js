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
import apiKey from './config.js';
import Photos from './Photos'

const Search = (props) => (
  <form>
    <input type="text" name="search"></input>
    <button type="submit">Search!</button>
  </form>
)

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Best of Flickr Photo Gallery</h1>
        <BrowserRouter>
          <div>
            <Nav/>
            <Switch>
              <Route exact path="/" component={Cats}/>
              <Route path="/cats" component={Cats}/>
              <Route path="/flowers" component={Flowers}/>
              <Route path="/rainbows" component={Rainbows}/>
              <Route path="/:query"
                     render={({match})=> (<Photos photo={match.params.query}
                     api_key={apiKey}/>)}/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
