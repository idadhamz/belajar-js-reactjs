// get todos
const getTodos = function(){
    const todosJson = localStorage.getItem('todos')
    const todos = (todosJson !== null)
        ? JSON.parse(todosJson)
        : []

    return todos;
}

// save todos
const saveTodos = function(todos){
    localStorage.setItem('todos', JSON.stringify(todos))
}

// render todos
const renderTodos = function(todos, filter){
    const filterTodos = todos.filter(function(todo){
        const searchText = todo.text.toLocaleLowerCase().includes(filter.searchText.toLocaleLowerCase())
        console.log(searchText)
        const hideCompleted = !filter.hideCompleted || !todo.completed
        
        return searchText && hideCompleted
    })

    const incompletedTodos = filterTodos.filter(function(todo){
        return !todo.completed
    })
    
    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todos').appendChild(summaryTodo(incompletedTodos))
    
    filterTodos.forEach(function(todo){
        console.log(todo)
        // const p = document.createElement('p')
        // p.textContent = todo.text
        document.querySelector('#todos').appendChild(generateTodo(todo))
    })
}

// generate todo to DOM
const generateTodo = function(todo){
    const p = document.createElement('p')
    p.textContent = todo.text

    return p;
}

// summary code
const summaryTodo = function(incompletedTodos){
    const summary = document.createElement('h2')
    summary.textContent = `Sisa todo ${incompletedTodos.length} lagi`

    return summary;
}