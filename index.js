//Requirements 
const express = require('express')
const myLogger = require('./middlewares/logger')


//Init express
const app = express()


//Pug Template Engine
app.set('view engine', 'pug');
app.set('views', './public/views')


//Files serving
app.use(express.static('public'))


//Logger
app.use(myLogger)


//Routes Handlers

app.get('/', (req, res) => {
    //res.writeHead(200, { "Content-Type": "text/html" })
    res.render('home')
})

app.get('/services', (req, res) => {
    //res.writeHead(200, { "Content-Type": "text/html" })
    res.render('services')
})

app.get('/contact', (req, res) => {
    //res.writeHead(200, { "Content-Type": "text/html" })
    res.render('contact')
})


//Listen on port
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server Started On Port ${PORT}`))

