import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css'

//import App from './components/app/app'

class WhoImI extends Component {
	constructor(props) {
		super(props)
		this.state = {
			years: 25, 
			UsName: 'Vladislav VDV'
		}
	}

	nextYears () {
		console.log(1)
		this.state.years++
	}

	render = () => {
		const { name, surename, link } = this.props
		return (
			<>
				<h1>My name is {this.state.UsName}, surename  is {surename} {this.state.years}</h1>
				<a href={link}>My profil</a>
			</>
		)
	}
}


const All = () => {
	return (
		<>
			<WhoImI name='Vladislav' surename='Bobyrev' link='google.com' />
			<WhoImI name='Mary' surename='Bobyreva' link='google.com' />
			<WhoImI name='Artem' surename='Bobyrev' link='google.com' />
		</>
	)
}

ReactDOM.render(<All />, document.getElementById('root'));


