import express = require('express')
import { set_middleware } from '../middleware'
import { db } from '../database'
import { set_routes } from '../routes'
import { error_handler } from '../error/error.handler'

const app = express()

// Body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Pug template engine
app.set('view engine', 'pug')
app.set('views', __dirname + '/../views')

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