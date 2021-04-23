import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
//import App from './componients/app/'

class WhoAmI extends Component { // props onli  for reading, no chenge
	constructor(props) {
		super(props)
		this.state = {
			years: 25,
			natianaly: uk
		}
		this.nextYear = this.nextYear.bind(this)
	}
	nextYear() {
		console.log(1)
		//this.state.years++  do not mutate state directory
		this.setState({ state => ({
			years: ++state.years
			})
		})
}
render() {
	const { name, link } = this.props
	const { years } = this.state
	return (
		<>
			<button onClick={this.nextYear}>++</button>
			<h1> My name is {name}, years - {years} </h1>
			<a href={link}>My Profile</a>
		</>
	)
}
}

ReactDOM.render(<WhoAmI name='Vladislav' link='https://github.com/VladislavBobyrev' />, document.getElementById('root'))