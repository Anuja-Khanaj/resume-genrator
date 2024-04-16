export class User{

    constructor(name:string,gender:string, subType:string, status:string){
        this.gender = gender;
        this.name = name;
        this.subType= subType;
        this.status = status;
    }


    name:string;
    gender:string;
    subType:string;
    status:string;
}