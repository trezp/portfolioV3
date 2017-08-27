import React from 'react';
import Nav from './Nav';

class Home extends React.Component {
  render(){
	return (
	  <div className="home">
			<header>
				<h1>Treasure Porth</h1>
				<h3>Full Stack <span>JavaScript</span> Developer</h3>
				<Nav/>
			</header>
	  </div>
    )
  }
}

export default Home;
