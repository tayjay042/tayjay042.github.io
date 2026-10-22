document.addEventListener('DOMContentLoaded', () => {
    localStorage.setItem("It's a secret to everybody.", "peepee poopoo")
})

const welcomeMessage = document.getElementById('welcomeMessage')
const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

document.addEventListener('DOMContentLoaded', () => {
    if (isMorning == true) {
        welcomeMessage.textContent = 'Good Morning, Welcome to my site!'
    } else if (isAfternoon == true) {
        welcomeMessage.textContent = 'Good Afternoon, Welcome to my site!'
    } else if (isEvening == true) {
        welcomeMessage.textContent = 'Good Evening weary traveler, Welcome to my site!'
    }
})

const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')
const prev = document.getElementById('prev')
const next = document.getElementById('next')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

prev.addEventListener('click', () => {
    currentImage--
    showImages()
})
next.addEventListener('click', () => {
    currentImage++
    showImages()
})

setInterval(() => {
    currentImage++
    showImages()
}, 1000)

showImages()

// const renderTodos = () => {
//     // Get the list from local storage
//     const todos = JSON.parse(localStorage.getItem('todo-list')) || []


//     // Save the list to local storage
//     localStorage.setItem('todo-list', JSON.stringify(todos))
//     // Create and add new list items to the DOM
//     const li = document.createElement('li')
//     li.textContent = todo.text
//     todoList.append(li)
// }

const addTodo = document.getElementById('addTodo')

addTodo.addEventListener('click', () => {
    console.log('test')
    // Add a new item to the list
    // todos.push({ text: input.value, completed: false })
    // renderTodos()
})


// Clear the li's before we recreate them
// todoList.innerHTML = ''

