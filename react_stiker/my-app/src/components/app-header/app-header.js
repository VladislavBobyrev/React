import React from 'react'
import '../app-header/app-header.css'
import styled from 'styled-components'

// this is css in js style-componient fraemwork css
const Header = styled.div`
display: flex;
	align-items: flex-end;
	justify-content:space-between; 
	h1{
		font-size: 26px;
		color: ${props => props.colored ? 'red' : 'black'};
		:hover{
			color: blue;
		}
	}
	h2{
		text-align: right;
		font-size: 1.2rem;
		color: grey;
	}
`

const AppHeader = ({liked, allPosts}) => {
	//<Header colored>  this is css in js style-componient fraemwork css
	return (
		<Header colored> 
			<h1>Vladislav Bobyrev</h1>
			<h2>{allPosts} записей из низ понравилось {liked}</h2>
		</Header>
	)
}

export default AppHeader