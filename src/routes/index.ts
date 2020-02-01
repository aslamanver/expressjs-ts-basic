import express = require('express')
import { static_routes } from './static.route';
import { api_routes } from './api.route';

export const set_routes = (app: express.Application) => {

    // API routes
    api_routes(app);

    // Routes for HTML Files
    static_routes(app)
    
}