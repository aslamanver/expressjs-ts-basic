import express = require('express')

export const static_routes = (app: express.Application) => {

    app.get('/', function (req, res) {
        res.render('index', { title: 'Hey', message: 'Hello world !' })
        // throw new Error('BROKEN')
    })
}