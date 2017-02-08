import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import counter from './reducers'

const store=createStore(counter)
const rootEl=document.getElementById('root')

const render=()=>ReactDom.render(
	<Counter
		value={store.getState()}
		onIncrement={()=>store.dispath({type:'INCREMENT'})}
		onDecrement={()=>store.dispath({type:'DECREMENT'})}
	/>,
	rootEl
)

render()
store.subscribe(render)



