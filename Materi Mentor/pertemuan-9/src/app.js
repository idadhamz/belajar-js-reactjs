const express = require('express')
const path = require('path')
const app = express()
const hbs = require('hbs')

// __dirname
const publicDirectory = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const viewsPath2 = path.join(__dirname, '../templates/views2')
const partialsPath = path.join(__dirname, '../templates/partials')

// setup handlebars engine
app.set('view engine', 'hbs')
app.set('views', [viewsPath, viewsPath2])
hbs.registerPartials(partialsPath)

// set static directory
app.use(express.static(publicDirectory))

// app.get('', (req, res) => {
//   res.send('Hello Express')
// })

// app.get('/about', (req, res) => {
//   res.sendFile(`${publicDirectory}/about.html`)
// })

// app.get('/about', (req, res) => {
//   res.send({
//     name: 'Halaman About',
//     url: '/about'
//   })
// })

// app.get('/help', (req, res) => {
//   const dataUser = [
//     {
//       name: 'Randy Vianda Putra'
//     },
//     {
//       name: 'John Due'
//     }
//   ]
//   res.send(dataUser)
// })


app.get('', (req, res) => {
  res.render('index', {
    title: 'Hello App',
    name: 'Randy Vianda Putra'
  })
})

app.get('/help', (req, res) => {
  res.render('help/index', {
    title: 'Hello help App',
    name: 'Randy Vianda Putra'
  })
})

app.get('/test', (req, res) => {
  res.render('test', {
    title: 'Hello test App',
    name: 'Randy Vianda Putra'
  })
})


app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Randy Vianda Putra'
  })
})

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Randy Vianda Putra',
    errorMessage: 'Page not found'
  })
})


app.listen(3000, () => {
  console.log('Server is running')
})