import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
//import App from './componients/app/'

const WhoAmI = ({ name, link }) => {
	return (
		<>
			<h1> My name is {name}</h1>
			<a href={link}>My Profile</a>
		</>
	)
}
ReactDOM.render(<WhoAmI name='Vladislav' link='https://github.com/VladislavBobyrev' />, document.getElementById('root'))