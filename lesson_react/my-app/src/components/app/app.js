import React, { Component } from 'react'
import AppHeader from '../app-header/app-header'
import SearchPanel from '../search-panel/search-panel'
import PostStatusFilter from '../post-statys-filter/post-statys-filter'
import PostList from '../post-list/post-list'
import PostAddForm from '../post-add-form/post-add-form'

import './app.css'

export default class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: [
				{ label: 'going to learn react', important: false, id: 'lsjdf' },
				{ label: 'learn English', important: false, id: 'kljsdlfj' },
				{ label: 'Going to run 3km', important: true, id: 'bxcvm' },
			]
		}
	}

	render() {
		return (
			<div className='app'>
				<AppHeader />
				<div className='search-panel d-flex'>
					<SearchPanel />
					<PostStatusFilter />
				</div>
				<PostList
					posts={this.state.data}
					onDelete={(id => console.log(id))}
				/>
				<PostAddForm />
			</div>
		)
	}
}
