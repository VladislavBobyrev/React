import React from 'react'
import '../app-header/app-header.css'	
import styled from 'styled-components'

const Header = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: space-beetwen; 
`

const AppHeader = () => {
	return (
		<Header>
			<h1>Vladislav Bobyrev</h1>
			<h2>5 записей из низ понравилось 0</h2>
		</Header>
	)
}

export default AppHeader