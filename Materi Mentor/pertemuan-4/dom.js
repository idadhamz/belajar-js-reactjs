
// const p = document.querySelector('p')
// p.textContent = 'note saya sudah selai'
// console.log(p)
// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'ini paragraf baru'
// document.querySelector('body').appendChild(newParagraph)
// live-server
// npm install -g live-server
// live-server
const todos = [
    {
        text: 'todo 1',
        completed: false,
    },
    {
        text: 'todo 2',
        completed: true,
    },
    {
        text: 'todo 3',
        completed: true,
    },
]
const incompleteTodos = todos.filter(function(todo) {
    return !todo.completed
})

const summary = document.createElement('h2');
summary.textContent = `todo yg belum selesai adalah ${incompleteTodos.length}`
document.querySelector('body').appendChild(summary)

const ps = document.querySelectorAll('p')
let html = ''
ps.forEach(function(p){
    // p.textContent = p.textContent + ' done !'
    console.log(p.innerText)
    html += p.innerHTML + '<br>';
})
// console.log(ps)
const notes = document.getElementById('notes')
notes.innerHTML = html
console.log(ps)
console.log(incompleteTodos)