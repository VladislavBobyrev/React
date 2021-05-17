import React from 'react'
import AppHeader from '../app-header/app-header'
import SearchPanel from '../search-panel/search-panel'
import PostStatusFilter from '../post-statys-filter/post-statys-filter'
import PostList from '../post-list/post-list'
import PostAddForm from '../post-add-form/post-add-form'

import './app.css'	
import '../app-header/app-header.css'	
import '../post-add-form/post-add-form.css'	
import '../post-list/post-list.css'	
import '../post-list-item/post-list-item.css'	
import '../post-statys-filter/post-statys-filter.css'	
import '../search-panel/search-panel.css'	

const App = () => {
	return (
		<div>
			<AppHeader />
			<div className='search-panel d-flex'>
				<SearchPanel />
				<PostStatusFilter/>
			</div>
			<PostList/>
			<PostAddForm/>
		</div>
	)
}
export default App