// cek ls

// live-server

// prepend = diatasnya
// append, appendChild = dibawahnya

const p = document.querySelector('p')
p.textContent = 'paragraph 1'
console.log(p)

const newP = document.createElement('p')
newP.textContent = 'paragraph 2'
document.querySelector('body').appendChild(newP)

const todos = [
    {
        text: 'todo 1',
        completed: false
    },
    {
        text: 'todo 2',
        completed: false
    },
    {
        text: 'todo 3',
        completed: true
    }
]

const imcompleteTodos = todos.filter(function(todo){
    return !todo.completed
})

const summary = document.createElement('h2');
summary.textContent = `todo yang belum selesai ${imcompleteTodos.length}`;
document.querySelector('body').appendChild(summary);

const ps = document.querySelectorAll('p')
let html = ''
ps.forEach(function(p){
    // p.textContent = `${imcompleteTodos.length}`
    console.log(p.innerText)
    html += p.innerHTML + '<br>'
})

const notes = document.getElementById('notes')
notes.innerHTML = html
console.log(ps)
console.log(imcompleteTodos)

