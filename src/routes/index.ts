import express = require('express')
import { HTTP_API } from '../http';


export const api_routes = (app: express.Application) => {

    app.get('/', function (req, res) {
        res.render('index', { title: 'Hey', message: 'Hello there !' })
    })

    app.get('/health_check_get', (req, res) => HTTP_API.health_check_get(req, res));
    app.post('/health_check_post', (req, res) => HTTP_API.health_check_post(req, res));
}