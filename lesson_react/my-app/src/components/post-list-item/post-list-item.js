import React, { Component } from 'react'

import '../post-list-item/post-list-item.css'

export default class PostListItem extends Component {
	constructor(props) {
		super(props)
		this.state = {
			important: false,
			like: false,
		}
		this.onImportant = this.onImportant.bind(this)
		this.onLike = this.onLike.bind(this)
	}

	onImportant() {
		this.setState(({ important }) => ({
			important: !important
		}))
	}
	onLike() {
		this.setState(({ like }) => ({
			like: !like
		}))
	}

	render() {
		// let 
		const { label } = this.props
		const { important, like } = this.state
		let classNames = 'app-list-item  d-felx justify-content-between'
		// if else
		important ? classNames += ' important' : console.log()
		like ? classNames += ' like' : console.log()
		// return
		return (
			<div className={classNames}>
				<span 
				className='app-list-item-label'
				onClick={this.onLike}>
					{label}
				</span>
				<div className='d-flex justify-content-center align-items-center'>
					<button type='button'
						className='btn-star btn-sm'
						onClick={this.onImportant}>
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
