// const user = {
//     name: 'Dadi',
//     age: 19
// }

// const userJson = JSON.stringify(user);

// // set item
// localStorage.setItem('user', userJson);

// const getUser = localStorage.getItem('user')
// console.log(getUser)


// let todos = [
    // {
    //     text: 'Tidur',
    //     completed: false
    // },
    // {
    //     text: 'Makan',
    //     completed: true
    // },
    // {
    //     text: 'Coding',
    //     completed: true
    // },
    // {
    //     text: 'Repeat',
    //     completed: true
    // }
// ];

// let html = '';

// todos.forEach(function(todo){
//     html += todo.text+"<br>";
// })

// document.getElementById('hasilget').innerHTML = html;

let todos = getTodos();

const filter = {
    searchText : '',
    hideCompleted: false
}

// const todoJson = localStorage.getItem('todos')
// if ( todoJson !== null ){
//     todos = JSON.parse(todoJson)
// }

// const renderTodos = function(todos, filter){
//     const filterTodos = todos.filter(function(todo){
//         const searchText = todo.text.toLocaleLowerCase().includes(filter.searchText.toLocaleLowerCase())
//         console.log(searchText)
//         const hideCompleted = !filter.hideCompleted || !todo.completed
//         return searchText && hideCompleted
//     })

//     const incompletedTodos = filterTodos.filter(function(todo){
//         return !todo.completed
//     })
    
//     document.querySelector('#todos').innerHTML = ''
    
    
//     const summary = document.createElement('h2')
//     summary.textContent = `sisa todo ${incompletedTodos.length} lagi`
//     document.querySelector('#todos').appendChild(summary)
    
//     filterTodos.forEach(function(todo){
//         console.log(todo)
//         const p = document.createElement('p')
//         p.textContent = todo.text
//         document.querySelector('#todos').appendChild(p)
//     })
// }

renderTodos(todos, filter)

document.querySelector('#search-text').addEventListener('input', function(e){
    filter.searchText = e.target.value
    renderTodos(todos, filter)
})

document.querySelector('#hide-completed').addEventListener('change', function(e){
    filter.hideCompleted = e.target.checked
    renderTodos(todos, filter)
})

document.querySelector('#new-todo').addEventListener('submit', function(e){
    e.preventDefault()
    todos.push({
        text: e.target.elements.text.value,
        completed: false
    })
    // localStorage.setItem('todos', JSON.stringify(todos))
    saveTodos(todos)
    renderTodos(todos, filter)
    e.target.elements.text.value = ''
})

// remove local storage
// localStorage.removeItem('todos')

// kalo innetHTML kaya me replace HTML jadi harus ditampung di variabel baru
// kalo append bisa ditaruh di pengulangan