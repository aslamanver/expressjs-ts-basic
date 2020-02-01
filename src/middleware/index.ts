import express = require('express')
import { LOGGER, LogColors } from '../utils/logger'

export const set_middleware = (app: express.Application) => {

    app.use(function (req, res, next) {

        let query = {};
        let body = {};

        if (Object.keys(req.query).length != 0) {
            query = req.query
        }

        if (req.body != null) {
            body = req.body
        }

        LOGGER.info('')
        LOGGER.info(`Middleware checkpoint`)
        LOGGER.info(`URL: ${req.originalUrl}`)
        LOGGER.info(`Query: ${JSON.stringify(query)}`)
        LOGGER.info(`Body: ${JSON.stringify(body)}`)

        next()
    })

}