import express = require('express')
import { LOGGER } from '../utils/logger';
import { HTTPBase } from './http.base'
import { UserController } from '../controller';

class API extends HTTPBase {

    private userController: UserController;

    constructor() {
        super();
        LOGGER.info('API => constructor')

        this.userController = new UserController()
    }

    health_check_get(req: express.Request, res: express.Response) {

        // To add user
        // this.userController.addUser().then(() => {
        //     res.json({ 'success': 'true' })
        // }).catch(() => {
        //     res.json({ 'success': 'false' })
        // })

        // To retrive users
        // return this.userController.users().then(val => {
        //     res.json(val)
        // }).catch(error => {
        //     res.json({ 'success': 'false' })
        // })

        return res.json({ 'code': 'success', 'name': this.userController.getName() })
    }

    health_check_post(req: express.Request, res: express.Response) {
        return res.json({ 'code': 'success' })
    }


}

export const HTTP_API = new API();