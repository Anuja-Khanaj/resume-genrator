
export class Info {
  fname: string;
  lname: string;
  email: string;
  mob: number;
  linAcc: string;
  gitAcc: string;
  profile: string;
  job: string;
  public exp: { certificate: string, compName: string, compTitle: string }[];
  public education: { sclName: string, degree: string, startYear: string, endYear: string }[];
  public training: { courseName: string, courseUni: string }[];
  public skills: string[];
  location: string;
  constructor(
    fname: string,
    lname: string,
    email: string,
    mob: number,
    linAcc: string,
    gitAcc: string,
    profile: string,
    job: string,
    exp: {
      compName: string;
      compTitle: string;
      certificate: string
    }[],
    education:
      {
        sclName: string,
        degree: string,
        startYear: string,
        endYear: string
      },
    training:
     {
      courseName: string,
      courseUni: string 
    },
    skills: string[],
    location: string,


  ) {
    this.fname = fname;
    this.lname = lname;
    this.email = email;
    this.mob = mob;
    this.linAcc = linAcc;
    this.gitAcc = gitAcc;
    this.profile = profile;
    this.job = job;
    this.location = location;
    this.skills = skills;
  }
}