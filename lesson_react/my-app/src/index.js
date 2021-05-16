import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Btn = () => {
	const text = 'Log in'
	const res = () => {
		return 'Log in, please'
	}
	return <button>{res()}</button>
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
	return <input />
}
const App = () => {
	return (
		<div>
			<Header />
			<Inpu/>
			<Btn/>
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));


