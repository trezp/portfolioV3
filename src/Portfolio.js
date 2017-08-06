import React from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import PropTypes from 'prop-types';


function SelectOption(props){
	const sectionOptions = ['professional', 'smaller', 'inprogress', 'other']

	return (
		<nav className="main-nav">
			<ul>
		 	{sectionOptions.map(function(option){
			 		return (
			 			<li 
			 				style={option===props.selectedOption ? {color: 'blue'} : null}
			 				key={option}
			 				onClick={props.onSelect.bind(null, option)}>
			 				{option}
			 			</li>
			 		)
		 		})}
			</ul>
		</nav>
	)
}

SelectOption.propTypes = {
	selectedOption: PropTypes.string.isRequired,
	onSelect: PropTypes.func.isRequired
}

class Portfolio extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			selectedOption : "professional"
		};
		this.updateSection = this.updateSection.bind(this);
	}

	updateSection(option){
		this.setState(function(){
			return {
				selectedOption: option
			}
		});
	}
	render(){
		
		return (
 			<BrowserRouter>
				<div>
					<h2>Portfolio</h2>
					<p>This is my portfolio.</p>
					<SelectOption
						selectedOption={this.state.selectedOption}
						onSelect={this.updateSection}/>
				</div>
			</BrowserRouter>
		)
		
	}
}

export default Portfolio;
