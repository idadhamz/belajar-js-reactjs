const express = require('express')
const path = require('path')
const app = express()
const hbs = require('hbs')

// __dirname
const publicDirectory = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../src/templates')
// const viewsPath2 = path.join(__dirname, '../src/templates2')
const partialsPath = path.join(__dirname, '../src/templates/partials')

// setup handlebars engine
app.set('view engine', 'hbs')
app.set('views', viewsPath)
// app.set('views', [viewsPath, viewsPath2])
hbs.registerPartials(partialsPath)

// set static directory
app.use(express.static(publicDirectory))

// app.get('', (req, res) => {
//   res.send('Hello Express')
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
        title: 'Index App',
        name: 'Dadi Ilham'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About App',
        name: 'Tentang Dadi'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: 'Halaman 404',
        ErrorMessage: 'Page Not Found',
        name: 'Web Dadi'
    })
})


app.listen(3000, () => {
  console.log('Server is running')
})