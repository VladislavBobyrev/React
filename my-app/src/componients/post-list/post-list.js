import React from 'react'

import './post-list.css'

import PostlistItem from '../post-list-item'
const Postlist = () => {
	return (
		<ul className='app-list list-group'>
			<PostlistItem/>
			<PostlistItem/>
			<PostlistItem/>
		</ul>
	)
}
export default Postlist