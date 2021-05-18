import React from 'react'
import PostListItem from '../post-list-item/post-list-item'

import '../post-list/post-list.css'

const PostList = ({ posts }) => {
	const elem = posts.map(item => {

		const { id, ...itemProps } = item

		return (
			<li key={id} className='list-group-item'>
				{/*PostListItem label={item.label} important={item.important} />*/ // так как из пропса приходит 
					//лэйбл и импортант мы можем не прописывать через айтем  а можем променить спред оператор
					// тк он разворачивает обьект и записывает его как ключ значение а у нас и сервера ключ значение
				}
				<PostListItem {...itemProps} />
			</li>
		)
	})
	return (
		<div>
			<ul className='app-list list-group'>
				{elem}
			</ul>
		</div>
	)
}

export default PostList