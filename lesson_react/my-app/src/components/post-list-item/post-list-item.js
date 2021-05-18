import React from 'react'
import PostList from '../post-list/post-list'
import '../post-list-item/post-list-item.css'	

const PostListItem = () => {
	return (
		<li className='app-list-item d-felx justify-constent-beetwin'>
			<span className='app-list-item-label'>
				Hello world
			</span>
			<div className='d-flex justify-constent-center align-items-center'>
				<button type='button' className='btn-star btn-sm'>
					<i className='fa fa-star'></i>
				</button>
			</div>
			<div className='d-flex justify-constent-center align-items-center'>
				<button type='button' className='btn-trash btn-sm'>
					<i className='fa fa-trash-o'></i>
				</button>
				<i className='fa fa-heart'></i>
			</div>
		</li>
	)
}

export default PostListItem