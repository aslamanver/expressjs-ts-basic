import mongoose = require('mongoose')
import { LOGGER } from '../utils/logger'

class Database {

    conn: mongoose.Connection;

    constructor() {
        
        mongoose.set('useNewUrlParser', true);
        mongoose.set('useFindAndModify', false);
        mongoose.set('useCreateIndex', true);
    }

    connect() {

        mongoose.connect('mongodb://root:password@mongo:27017/admin', { useNewUrlParser: true, useUnifiedTopology: true })

        this.conn = mongoose.connection

        this.conn.on('error', () => {
            LOGGER.info('Database connection error.')
            console.error.bind(console, 'connection error:')
        })

        this.conn.once('open', () => {
            LOGGER.info('Database connected.')
        })
    }
}

export const db = new Database()

// Docker - Create MongoDB user and database to connect "mydb"
// use mydb
// db.createUser({ user: "user", pwd: "password", roles: [ { role: "readWrite", db: "mydb" } ], passwordDigestor : "server" })
// mongoose.connect('mongodb://user:password@mongo:27017/mydb')