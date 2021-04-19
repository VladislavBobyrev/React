import React from 'react'

const PostlistItem = () => {
	return (
		<li className='app-list-item d-flex justify-content-beetwen'>
			<span className='app-list-item-label'>
			hello world
			</span>
			<div className='d-flex justify-content-beetwen align-items-center'>
				<button className='btn-star btn-sm'>
					<i className='fa fa-star'></i>
				</button>
				<button className='btn-trash btn-sm'>
					<i className='fa fa-trash-0'></i>
				</button>
				<i className='fa-trash-hart'></i>
			</div>
		</li>
	)
}
export default PostlistItem