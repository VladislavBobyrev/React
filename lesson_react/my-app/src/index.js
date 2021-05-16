import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

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
			<Inpu />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));


