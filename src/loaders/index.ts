import express = require('express')
import bodyParser = require('body-parser')

import { set_middleware } from '../middleware'
import { api_routes } from '../routes'
import { db } from '../database'

const app = express()

// Body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'pug')
app.set('views', __dirname + '/../views')

db.connect()

// Setting up middlewares
set_middleware(app)

// API routes
api_routes(app)

export const eapp = () => {
    return app
}