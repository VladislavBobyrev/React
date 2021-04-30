import React from 'react'
import Activited from './Activited'

const WriteTask = () => {
	return (
		<div >
			<form>
				<input type='text' className='clickInput'></input>
				<button onClick={Activited} >NEW TASK</button>
			</form>
		</div>
	)
}

export default WriteTask