import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Btn = () => {
	const text = 'Log in'
	const loggid = true

	const res = () => {
		return 'Log in, please'
	}
	return <button>{loggid ? 'null' : text}</button>
}

const header = (
	<div>
		<h2>hello </h2>
		<input />
		<button />
	</div>
)

const Header = () => {
	return <h1>hello</h1>
}
const Inpu = () => {
	const holder = 'Enter here'
	const styleField = {
		width: '1000px',
		border: '1px solid blue',
		background: 'red',
	}
	return <input
		type='text'
		placeholder={holder} 
		style={styleField}
		/>
}
const App = () => {
	return (
		<div>
			<Header />
			<Inpu />
			<Btn />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));


