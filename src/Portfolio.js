import React from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';

const Portfolio = () =>(
	<BrowserRouter>
		<div>
			<h2>Portfolio</h2>
			<p>This is my portfolio.</p>
			 <nav className="main-nav">
				 <ul>
				  	<li><Link to='/portfolio/professional'>Professional</Link></li>
				  	<li><Link to='/portfolio/smaller'>Smaller</Link></li>
				    <li><Link to='/portfolio/inprogress'>In Progress</Link></li>
				 </ul>
				 <Route
				    	path="/portfolio/:section"
				    	component={Section}/>
    		</nav>
		</div>
	</BrowserRouter>
)

const Section = ({ match }) => (
  <div>
    <h3>{match.params.section}</h3>
  </div>
)
export default Portfolio;
