// declare primary
const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();

// REGIS DIR
const publicDir = path.join(__dirname, '../public');
const viewDir = path.join(__dirname, '../views');
const incDir = path.join(__dirname, '../views/partials');

// SET DIR
app.set('view engine', 'hbs');
app.set('views', viewDir);
app.use(express.static(publicDir));
hbs.registerPartials(incDir);

// ROUTing
app.get('/', (req, res) => {
	res.render('index', {
		name: 'Farid Evan Ramadhan',
		desc: 'Static Web With SemanticUI Tamplate'
	});
});

// app.get('/', (req, res) => {
// 	res.render('about');
// });

app.get('*', (req, res) => {
	res.send('Page Not Found');
});

// listening port
app.listen(3000, () => {
	console.log('Server is running');
});
