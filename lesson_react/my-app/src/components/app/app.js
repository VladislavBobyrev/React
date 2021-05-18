import React from 'react'
import AppHeader from '../app-header/app-header'
import SearchPanel from '../search-panel/search-panel'
import PostStatusFilter from '../post-statys-filter/post-statys-filter'
import PostList from '../post-list/post-list'
import PostAddForm from '../post-add-form/post-add-form'

import './app.css'






const App = () => {

	const data = [
		{ label: 'going to learn react', important: false, id: 'lsjdf' },
		{ label: 'learn English', important: false, id: 'kljsdlfj'},
		{ label: 'Going to run 3km', important: true, id: 'bxcvm' },
	]

	return (
		<div className='app'>
			<AppHeader />
			<div className='search-panel d-flex'>
				<SearchPanel />
				<PostStatusFilter />
			</div>
			<PostList posts={data}/>
			<PostAddForm />
		</div>
	)
}
export default App