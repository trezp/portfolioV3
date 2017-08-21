import React from 'react';
import { BrowserRouter as Router }  from 'react-router-dom';
import PropTypes from 'prop-types';
import ProjectList from './ProjectList';
import api from '../utils/api.js';
import '../styles/css/project-grid.css'
import Loading from "./Loading"


function SelectOption(props){
	const sectionOptions = ['All', 'JavaScript', 'Java', 'Python', 'other']

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

function ProjectGrid(props){
	return (

		<ul className="repos-grid">
			{props.repos.map(function(repo, index){
				return (
					<li className="repos-container" key={repo.name}>
						<div>#{index + 1}</div>
						<ul>
							<li>
								<img
									src={repo.owner.avatar_url}
									alt={'Avatar for ' + repo.owner.login}/>
							</li>
							<li><a href={repo.html_url}>{repo.name}</a></li>
							<li>@{repo.owner.login}</li>
							<li>{repo.stargazers_count} stars</li>
						</ul>
					</li>
				)
			})};
		</ul>
	)
}

ProjectGrid.propTypes = {
	repos: PropTypes.array.isRequired
}
SelectOption.propTypes = {
	selectedOption: PropTypes.string.isRequired,
	onSelect: PropTypes.func.isRequired
}

class Portfolio extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			selectedOption : "All",
			repos: null
		};
		this.updateSection = this.updateSection.bind(this);
	}
	componentDidMount(){
		this.updateSection(this.state.selectedOption)
	}
	updateSection(option){
		this.setState(function(){
			return {
				selectedOption: option,
				repos: null
			}
		});

		api.fetchPopularRepos(option)
			.then(function(repos){
				this.setState(function(){
					return {
						repos: repos
					}
				})
		}.bind(this));
	}
	render(){

		return (
 			<Router>
				<div>
					<h2>Portfolio</h2>
					<p>This is my portfolio.</p>
					<SelectOption
						selectedOption={this.state.selectedOption}
						onSelect={this.updateSection}/>
						{!this.state.repos ? <Loading text="Please Wait" /> :
							<ProjectGrid repos={this.state.repos}/>
						}
					<ProjectList/>
				</div>
			</Router>
		)

	}
}

export default Portfolio;
