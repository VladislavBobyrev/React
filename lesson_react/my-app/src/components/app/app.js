// зависимости
import React, { Component } from 'react'
import AppHeader from '../app-header/app-header'
import SearchPanel from '../search-panel/search-panel'
import PostStatusFilter from '../post-statys-filter/post-statys-filter'
import PostList from '../post-list/post-list'
import PostAddForm from '../post-add-form/post-add-form'
//style css
import './app.css'
// класс
export default class App extends Component {
	constructor(props) {
		super(props)
		// стэйт  на ПРЯМУЮ СТЭЙТ ИЗМЕНЯТЬ НЕЛЬЗЯ
		this.state = {
			data: [
				{ label: 'going to learn react', important: false, like: true, id: 1 },
				{ label: 'learn English', important: false, like: false, id: 2 },
				{ label: 'Going to run 3km', important: true, like: false, id: 3 },
			],

			term: '',

			filter: 'all',
		}
		// биндим для того чтобы привязать контекст вызова 
		this.deliteItem = this.deliteItem.bind(this)
		this.addItem = this.addItem.bind(this)
		this.onToggleImportant = this.onToggleImportant.bind(this)
		this.onToggleLiked = this.onToggleLiked.bind(this)
		this.onUpdateSerch = this.onUpdateSerch.bind(this)
		this.onFilterSelect = this.onFilterSelect.bind(this)

		this.maxId = 4
	}
	// метод
	deliteItem(id) {
		this.setState(({ data }) => {
			const index = data.findIndex(elem => elem.id === id)

			const before = data.slice(0, index) // получаем первую половину массива до того id который нужен
			const after = data.slice(index + 1) // вторая половина до конца 
			const newArray = [...before, ...after] // соединяем в новый массив потому что нельзя менять сушествующий стэйт

			return {
				data: newArray // в дату записываем новый массив
			}
		})
	}

	// метод
	addItem(body) {
		const newItem = {
			label: body,
			important: false,
			id: this.maxId++,
		}
		this.setState(({ data }) => {
			const newArr = [...data, newItem]
			return {
				data: newArr
			}
		})
	}

	// функция
	onToggleImportant(id) {
		this.setState(({ data }) => {
			const index = data.findIndex(elem => elem.id === id)

			const old = data[index]
			const newItem = { ...old, important: !old.important }
			const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

			return {
				data: newArr
			}
		})
	}

	onToggleLiked(id) {
		this.setState(({ data }) => {
			const index = data.findIndex(elem => elem.id === id)

			const old = data[index]
			const newItem = { ...old, like: !old.like }
			const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

			return {
				data: newArr
			}
		})
	}

	SearchPost(items, term) {
		if (term.length === 0) {
			return items
		}

		return items.filter((item) => {
			return item.label.indexOf(term) > -1
		})
	}

	filterPosts(items, filter) {
		if(filter === 'like') {
			return items.filter(item => item.like)
		} else {
			return items
		}
	}

	onUpdateSerch(term) {
		return this.setState({term})
	}

	onFilterSelect(filter) {
			this.setState({filter})
	}
	// метод
	render() {
		const { data, term, filter } = this.state
		const liked = data.filter(item => item.like).length
		const allPosts = data.length

		const visiblePosts = this.filterPosts(this.SearchPost(data, term), filter)

		return (
			<div className='app'>
				<AppHeader
					liked={liked}
					allPosts={allPosts}
				/>
				<div className='search-panel d-flex'>
					<SearchPanel 
					onUpdateSerch={this.onUpdateSerch}/>
					<PostStatusFilter 
					filter={filter}
					onFilterSelect={this.onFilterSelect}
					/>
				</div>
				<PostList
					posts={visiblePosts}
					onDelete={this.deliteItem}
					onToggleImportant={this.onToggleImportant}
					onToggleLiked={this.onToggleLiked}
				/>
				<PostAddForm
					onAdd={this.addItem} />
			</div>
		)
	}
}
