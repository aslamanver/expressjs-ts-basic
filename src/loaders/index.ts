import express = require('express')
import { set_middleware } from '../middleware'
import { db } from '../database'
import { set_routes } from '../routes'
import { error_handler } from '../error/error.handler'

// SRC directory
const SRC_DIR = __dirname + '/../'

// Express App
const app = express()

// Body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Static files
app.use(express.static(SRC_DIR + 'public'))

// Pug template engine
app.set('view engine', 'pug')
app.set('views', SRC_DIR + 'views')

db.connect()

// Setting up middlewares
set_middleware(app)

// API routes
set_routes(app)

// Error handler
error_handler(app)

export const eapp = () => {
    return app
}