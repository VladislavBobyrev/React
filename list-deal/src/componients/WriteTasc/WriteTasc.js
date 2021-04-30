import React from 'react'
 
export const Activated = () => {

	const textTask = document.querySelector('.clickInput').value

	return (
		this.state.push(textTask)
	)
}

const WriteTask = () => {
	return (
		<div >
			<form>
				<input type='text' className='clickInput'></input>
				<button onClick={Activated} >NEW TASK</button>
			</form>
		</div>
	)
}

export default WriteTask