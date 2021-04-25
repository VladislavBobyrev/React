
import React from 'react'
import reactDom from 'react-dom'

class App extends React.Component {
	constructor() {
		super()

		this.state = {
			tasks: [
				{id: 0, titlel: 'Create todo-react app', done: false}
				{id: 1, titlel: 'Make video about it', done: true}
				{id: 2, titlel: 'Create simple project JS', done: false}
			]
		}
	}
	render() {
		const { tasks } = this.state
		return(
			<div className='App'>
				<h1 className='top'>Activ tasks: {tasks.length}</h1>
			</div>
		)
	}
}

export default App
