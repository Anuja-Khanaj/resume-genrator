
export class Info{
  fname:string;
  lname:string;
  email:string;
  mob:number;
  linAcc:string;
  gitAcc: string;
  profile:string;
  job:string;
  public exp: { certificate: string, compName: string,compTitle:string }[];
  public skills: string[];
  location:string;
    constructor( 
         fname:string,
         lname:string,
         email:string,
         mob:number,
         linAcc:string,
         gitAcc: string,
         profile:string,
         job:string,
         exp: {
          compName:string;
          compTitle:string;
          certificate:string
        }[],
        skills: string[],
         location:string,
        
       
        ){
            this.fname = fname;
            this.lname = lname;
            this.email = email;
            this.mob =  mob;
            this.linAcc =  linAcc;
            this.gitAcc = gitAcc;
            this.profile = profile;
            this.job = job;
            this.location =  location;
            this.skills = skills;

    }
}