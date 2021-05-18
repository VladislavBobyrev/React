import React from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css'

//import App from './components/app/app'

function WhoImI (props) {
	//<React.Fragment> = <>
	return (		
		<>
 			<h1>My name is {props.name}, surename  is {props.surename}</h1>
			<a href={props.link}>My profil</a>
		</>
	)
}

ReactDOM.render(<WhoImI name='Vladislav' surename='Bobyrev' link='google.com'/>, document.getElementById('root'));


