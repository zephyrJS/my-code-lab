function App() {
	const { useState } = React
	const [ newTodo, setTodo ] = useState('')
	const [ todoList, setTodoList ] = useState([ 1, 2, 3 ])

	const renderInput = () => {
		const onChange = (e) => {
			setTodo(e.target.value)
		}
		const onKeyUp = (e) => {
			if (e.key === 'Enter') {
				setTodoList([ ...todoList, newTodo ])
				setTodo('')
			}
		}
		return React.createElement('input', { onChange, onKeyUp, value: newTodo, key: 'input' })
	}

	const renderTodoList = () => {
		const domList = todoList.map((todo, index) => React.createElement('li', { key: index }, todo))
		return React.createElement('ul', { key: 'domList' }, domList)
	}

	return React.createElement('div', null, [ renderInput(), renderTodoList() ])
}

ReactDOM.render(React.createElement(App, null), document.getElementById('root'))
