import React from 'react'

export const Activated = () => {

	const textTask = document.querySelector('.clickInput').value

	return (
		console.dir(textTask)
	)
}

export const WriteTask = () => {
	return (
		<div >
			<form>
				<input type='text' className='clickInput'></input>
				<button onClick={activated} >NEW TASK</button>
			</form>
		</div>
	)
}

