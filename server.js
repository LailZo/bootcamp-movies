const express = require('express')
const path = require('path')
const api = require('./server/routes/api')


const app = express()

app.use('/', api)
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(express.static(path.join(__dirname, 'dist')))


const port = 8080

app.listen(port, () => console.log('Listening'))