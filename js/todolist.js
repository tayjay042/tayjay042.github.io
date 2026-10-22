const renderTodos = () => {
    // Get the list from local storage
    const todos = JSON.parse(localStorage.getItem('todo-list')) || []


    // Save the list to local storage
    localStorage.setItem('todo-list', JSON.stringify(todos))
    // Create and add new list items to the DOM
    const li = document.createElement('li')
    li.textContent = todo.text
    todoList.append(li)
}

const addTodo = document.getElementById('addTodo')

addTodo.addEventListener('click', () => {
    console.log('test')

    // Add a new item to the list
    todos.push({ text: input.value, completed: false })
    renderTodos()
})

// Clear the li's before we recreate them
todoList.innerHTML = ''