import React from 'react'
import { Button } from 'reactstrap'
import '../post-statys-filter/post-status-filter.css'

const PostStatusFilter = () => {
	return (
		<div className='btn-group'>
			<Button outline color='info'>ВСЕ</Button>
			<Button y color='info'>ВСЕ</Button>
			<button type='button' className='btn btn-secondary'>Понравившиеся</button>
		</div>
	)
}
export default PostStatusFilter