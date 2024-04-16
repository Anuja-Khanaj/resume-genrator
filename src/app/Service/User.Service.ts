import { User } from "./../Models/User";

export class UserService{
    users:User[] = [
        new User('Mery jane', 'female', 'monthly','active'),
        new User('Mothi jane', 'male', 'yearly','active'),
        new User('anu jane', 'female', 'monthly','active')
    ];

    getAllUsers(){
        return this.users;
    }

    CreateUser(name:string,gender:string, subType:string, status:string){
        let user = new User(name,gender,subType,status);
        this.users.push(user);
    }
}

