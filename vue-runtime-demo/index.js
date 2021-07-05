Vue.component('TodoList', {
	props: {
		todoList: Array
	},
	render(h) {
		const domList = this.todoList.map((item) => h('li', item))
		return h('ul', domList)
	}
})

const renderInput = (h, ctx) => {
	return h('input', {
		domProps: {
			value: ctx.newTodo
		},
		on: {
			input: (e) => {
				ctx.newTodo = e.target.value
			},
			keyup: (e) => {
				if (e.key === 'Enter') {
					ctx.todoList.push(ctx.newTodo)
					ctx.newTodo = ''
				}
			}
		}
	})
}

const renderTodoList = (h, ctx) => {
	return h('TodoList', { props: { todoList: ctx.todoList } })
}

new Vue({
	el: '#app',
	data() {
		return {
			todoList: [ 1, 2, 3 ],
			newTodo: ''
		}
	},
	render(h) {
		const NewTodoInput = renderInput(h, this)
		const TodoList = renderTodoList(h, this)
		return h('div', [ NewTodoInput, TodoList ])
	}
})
