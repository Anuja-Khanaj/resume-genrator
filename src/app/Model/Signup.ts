export class Signup{
        name:string
        username:string;
        password:string;
        student:string;
        prevResume:string;
        media:string;
        country:string;
        confirmPass:string;
        
        constructor( name:string,
            username:string,
            password:string,
            student:string,
            prevResume:string,
            media:string,
            country:string,
            confirmPass:string){
            this.confirmPass = confirmPass;
            this.student = student;
            this.country = country;
            this.media = media;
            this.prevResume = prevResume
            this.username = username;
            this.password = password;
        }
    }
