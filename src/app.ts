// src/app.ts
import express = require('express')
import mongoose = require('mongoose')

// Create MongoDB user and database to connect "mydb"
// use mydb
// db.createUser({ user: "user", pwd: "password", roles: [ { role: "readWrite", db: "mydb" } ], passwordDigestor : "server" })
// mongoose.connect('mongodb://user:password@mongo:27017/mydb')s
mongoose.connect('mongodb://root:password@mongo:27017/admin')

// Create a new express application instance
const app: express.Application = express()

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))

db.once('open', function () {
  console.log('Database connected.')
})

// Initiating
app.set('view engine', 'pug')

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there !' })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})