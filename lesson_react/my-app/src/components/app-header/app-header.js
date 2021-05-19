import React from 'react'
import '../app-header/app-header.css'
import styled from 'styled-components'

// this is css in js style-componient fraemwork css
const Header = styled.div`
display: flex;
	align-items: flex-end;
	justify-content: space-beetwen; 
	h1{
		font-size: 26px;
		color: ${props => props.colored ? 'red' : 'black'};
		:hover{
			color: blue;
		}
	}
	h2{
		font-size: 1.2rem;
		color: grey;
	}
`

const AppHeader = () => {
	return (
		<Header colored>
			<h1>Vladislav Bobyrev</h1>
			<h2>5 записей из низ понравилось 0</h2>
		</Header>
	)
}

export default AppHeader