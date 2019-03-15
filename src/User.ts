
export class User
{
    fname:string;
    lname:string;
    mob:number;
    dob:string;
    address:string;
    anum:number;
    id:number;
    pwd:string;
    balance:number;
    constructor(fname,lname,mob,dob,address,anum,id,pwd,balance)
    {
            this.balance=balance; 
            this.fname=fname;
            this.lname=lname;
            this.mob=mob;
            this.dob=dob;
            this.address=address;
            this.anum=anum;
            this.id=id;
            this.pwd=pwd;
    }
}