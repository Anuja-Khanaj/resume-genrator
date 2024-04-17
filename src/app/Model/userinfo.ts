export class UserInfo{
   name:string
    username:string;
    phoneNo:string;
   student:string;
   prevResume:string;
   media:string;
   country:string;
   confirmPass:string;
    
    constructor( 
        name:string,
        username:string,
        phoneNO :string,
        student :string,
        country :string,
        media :string,
        prevResume :string,
    ){
        this.name = name;
       this.phoneNo = phoneNO;
       this.student = student;
       this.country = country;
       this.media = media;
       this.prevResume = prevResume
        this.username = username;
    }
}



