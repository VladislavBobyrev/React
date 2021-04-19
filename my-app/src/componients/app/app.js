import React from 'react'
import AppHeader from '../app-header/'
import SearchPanel from '../search-panel'
import PostStatysFilter from '../post-statys-filter'

const App = () => {
	return (
		<div>
			<AppHeader/>
			<div className='search-panel d-flex'>
				<SearchPanel/>
				<PostStatysFilter/>
			</div>
		</div>
	)
}

export default App