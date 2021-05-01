
import React from 'react'
import Task from './componients/Task'


class App extends React.Component {
	constructor() {
		super()

		this.state = {
			tasks: [
				{ title: 'Create todo-react app', done: false },
				{ title: 'Make video about it', done: true },
				{ title: 'Create simple project JS', done: false }
			]
		}
	}

	render() {
		const { tasks } = this.state

		return (
			<div className='App'>
				<h1 className='top'>Activ tasks: {tasks.length}</h1>
				<form>
					<input type='text' className='clickInput'></input>
					<button  onClick={() => {
						let val = document.querySelector('.clickInput').value
						return(
							tasks.unshift(val)
						)
					}} >NEW TASK</button>
				</form>
				{tasks.map(task => (
					<Task task={task} key={task.id}></Task>
				))}
			</div>
		)
	}
}

export default App
