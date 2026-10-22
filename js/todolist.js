
// Get the list from local storage
const todos = JSON.parse(localStorage.getItem('todo-list')) || []

// Create and add new list items to the DOM
// const li = document.createElement('li')
// li.textContent = todo.text
// todoList.append(li)

const newTodo = document.getElementById('new-todo')

const renderTodos = () => {

}

const addTodo = document.getElementById('addTodo')

addTodo.addEventListener('click', () => {
  // Add a new item to the list
    todos.push({ text: newTodo.value, completed: false })
    // Save the list to local storage
    localStorage.setItem('todo-list', JSON.stringify(todos))
})
// // Clear the li's before we recreate them
// todoList.innerHTML = ''