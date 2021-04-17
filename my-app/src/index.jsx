import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


//const elements 
//const elem = <h2>Hello World</h2>
//const elem = React.createElement('h2', null, 'Hello World !!!')
//const elem = (
//	<div>
//		<h2> Hello World !!!</h2>
//		<input type='text' placeholder='Type here'/>		
//	</div>
//)

// functions
const Headers = () => {											//название переменной с заглавной 
	return <h2>HELLO FUNCTION HEADER</h2>
}
const Inp = () => {
    const hold = 'I,m holding Tesla'
	return <input 
                    type='text' 
                    placeholder={hold}
                    autoComplete = ""
                    className = 'first'
    />
}
const Btn = () => {
    const styleField = {
        width: '300px',
        height: '300px',
        background: 'black',
         color: 'white',
    }
    //const text = 'Sign  up'
    const res = () => {
        return 'Login'
    }
	//return <button>{3 + 4}</button>
	return <button
        style = {styleField}
    >{res()}</button>
}

const App = () => {		                                        //componient
return (
	<div>
		<Headers/>
		<Inp/>
		<Btn/>
	</div>	
	)	
}

ReactDOM.render(<App/>, document.getElementById('root'));
