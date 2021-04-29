import React from 'react'

const activated = () => {
	return (
		console.dir('press button')
	)
}

const WriteTask = () => {
	return (
		<div >
			<form>
				<input type='text'></input>
				<button onClick='activated()'>NEW TASK</button>
			</form>
		</div>
	)
}


export default WriteTask