import express = require('express')
import { LOGGER } from '../utils/logger'

export const error_handler = (app: express.Application) => {

    app.use((err: any, req: any, res: any, next: any) => {
        LOGGER.error(err.message)
        res.status(400).json({
            'error': err.message || 400
        })
    })
}