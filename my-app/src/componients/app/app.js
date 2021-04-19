import React from 'react'
import AppHeader from '../app-header/'
import SearchPanel from '../search-panel'
import PostStatysFilter from '../post-statys-filter'
import Postlist from '../post-list'
import PostAddForm from  '../post-add-from'

import './app.css'

const App = () => {
	return (
		<div>
			<AppHeader/>
			<div className='search-panel d-flex'>
				<SearchPanel/>
				<PostStatysFilter/>
			</div>
			<Postlist/>
			<PostAddForm/>
		</div>
	)
}

export default App