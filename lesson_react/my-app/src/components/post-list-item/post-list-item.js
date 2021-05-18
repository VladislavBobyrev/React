import React, { Component } from 'react'

import '../post-list-item/post-list-item.css'

export default class PostListItem extends Component {
	constructor(props) {
		super(props)
		this.state = {
			important: false
		}
		this.onImportant = this.onImportant.bind(this)
	}

onImportant() {
	this.setState(({important}) => ({
		important: !important
	}))
}

	render() {
		// let 
		const { label} = this.props
		const { important = false } = this.state
		let classNames = 'app-list-item  d-felx justify-content-between'
		// if else
		important ? classNames += ' important' : console.log()
		// return
		return (
			<div className={classNames}>
				<span className='app-list-item-label'>
					{label}
				</span>
				<div className='d-flex justify-content-center align-items-center'>
					<button type='button'
						className='btn-star btn-sm'
						onClick='onImportant'>
						 <i className='fa fa-star'></i>
					</button>
					<button type='button'
						className='btn-trash btn-sm'>
						<i className='fa fa-trash-o'></i>
					</button>
					<i className='fa fa-heart'></i>
				</div>
			</div>
		)
	}
}
