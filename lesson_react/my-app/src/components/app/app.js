import React from 'react'
import AppHeader from '../app-header/app-header'
import SearchPanel from '../search-panel/search-panel'
import PostStatusFilter from '../post-statys-filter/post-statys-filter'
import PostList from '../post-list/post-list'

const App = () => {
	return (
		<div>
			<AppHeader />
			<div className='search-panel d-flex'>
				<SearchPanel />
				<PostStatusFilter/>
			</div>
			<PostList/>
		</div>
	)
}
export default App