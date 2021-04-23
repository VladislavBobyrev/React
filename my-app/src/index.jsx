import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
//import App from './componients/app/'

class WhoAmI extends Component {
	constructor(props){
		super(props)
	}
	render(){
		const { name, link } = this.props
		return (
			<>
				<h1> My name is {name}</h1>
				<a href={link}>My Profile</a>
			</>
		)
	}
}

const WhoAmI = ({ name, link }) => {

}
ReactDOM.render(<WhoAmI name='Vladislav' link='https://github.com/VladislavBobyrev' />, document.getElementById('root'))