
import React from 'react'
import Task from './componients/Task'
import WriteTask from './componients/WriteTasc/WriteTasc'

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
				<WriteTask />
				{tasks.map(task => (
					<Task task={task} key={task.id}></Task>
				))}
			</div>
		)
	}
}

export default App
