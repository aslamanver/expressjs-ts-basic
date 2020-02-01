import express = require('express')
import { HTTP_API } from '../http';

export const api_routes = (app: express.Application) => {

    app.get('/health_check_get', (req, res) => HTTP_API.health_check_get(req, res));
    app.post('/health_check_post', (req, res) => HTTP_API.health_check_post(req, res));
}