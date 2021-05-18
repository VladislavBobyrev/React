import React from 'react'
import '../post-statys-filter/post-status-filter.css'	

const PostStatusFilter = () => {
	return(
		<div className='btn-group'>
			<button type='button' className='btn btn-info'>ВСЕ</button>
			<button type='button' className='btn btn-secondary'>Понравившиеся</button>
		</div>
	)
}
export default PostStatusFilter