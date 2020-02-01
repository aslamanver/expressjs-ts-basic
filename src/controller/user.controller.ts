import { Controller } from "./controller.base"
import User, { IUser } from "../models/user.model";
import { UserDao } from "../models";

class UserController extends Controller {

    userDao: UserDao;

    constructor() {
        super()
        this.userDao = new UserDao()
    }

    getName() {
        return 'I am a user'
    }

    addUser() {
        return this.userDao.addUser('Test', 'test1@gmail.com')
    }

    users() {
        return this.userDao.selectUsers()
    }

}

export { UserController }