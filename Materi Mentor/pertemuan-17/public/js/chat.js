const socket = io()

// init form
const $messageForm = document.querySelector('#message-form')
const $messageFormInput = document.querySelector('input')
const $messageFormButton = document.querySelector('button')

const $messages = document.querySelector('#messages')
// template
const messageTemplate = document.querySelector('#message-template').innerHTML
const sidebarTemplate = document.querySelector('#sidebar-template').innerHTML

const {username, group} = Qs.parse(location.search, {ignoreQueryPrefix: true})
console.log(username, group)
// socket.on('countUpdated', (count) => {
//   console.log('count updated ', count)
// })

// document.querySelector('#increment').addEventListener('click', () => {
//   console.log('clicked')
//   socket.emit('increment')
// })

socket.on('message', message => {
    const html = Mustache.render(messageTemplate, {
        username: message.username,
        message: message.text,
        createdAt: moment(message.createdAt).format('h:mm a'),
    })
    $messages.insertAdjacentHTML('beforeend', html)
})

// user group list
socket.on('groupList', ({group, users}) => {
    console.log(users)
    const html = Mustache.render(sidebarTemplate, {
        group,
        users
    })
    document.querySelector('#sidebar').innerHTML = html
})

// send data ke socket
$messageForm.addEventListener('submit', e => {
    e.preventDefault()

    $messageFormButton.setAttribute('disabled', 'disabled')

    const message = e.target.elements.message.value

    socket.emit('sendMessage', message, error => {
        $messageFormButton.removeAttribute('disabled')
        $messageFormInput.value = ''
        $messageFormInput.focus()
        if (error) {
            return console.log(error)
        }
        console.log('message terkirim')
    })
})

socket.emit('join', {username, group}, (error) => {
  if (error) {
    alert(error)
    location.href = '/'
  }
})
