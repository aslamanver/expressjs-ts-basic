import User, { IUser } from "../models/user.model"

export class UserDao {

    selectUsers() {
        return new Promise<any>((resolve, reject) => {
            User.find({}, (error, data) => {
                resolve(data)
            });
        })
    }

    addUser(_name: string, _email: string) {
        const user: IUser = new User({
            name: _name,
            email: _email
        });
        return user.save()
    }
}