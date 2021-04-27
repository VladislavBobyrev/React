import React from 'react'

const Task = ({ task, ...props }) => {

	const ActivBtn = () => {
	return	<div className='btn'>{task.done ? <p>✔️</p> : <p>❌</p>}</div>
	}
	return (
		<div className='task'>
			<p>{task.title}</p>
			<ActivBtn></ActivBtn>
		</div>
	)
}

export default Task