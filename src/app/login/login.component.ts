import { Component, OnInit } from '@angular/core';
import { ServicesignupService } from '../service files/servicesignup.service';
import { User } from 'src/User';
import {Response} from '@angular/http/src/static_response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User={"fname":"","lname":"","mob":1,"dob":"","address":"","anum":1,"id":1,"pwd":"","balance":0};
  errormsg:string="";
  disp:boolean=false;
  disp1:boolean=true;
  constructor(private dbservice:ServicesignupService) { }

  ngOnInit() {
  }
  login(us,pwd)
  {
    this.dbservice.getUser(us).subscribe(
      (response:Response)=>
      {
        {
        this.user=response.json()
        if(us==this.user.id&&pwd==this.user.pwd)
        {
            this.disp=true;
            this.disp1=false;
            console.log("Success User Login"+this.disp);
        }
        else {
          this.errormsg="Incorrect id/password";
          
        console.log("Incorrect id/password"+this.disp);
        }
        }
        (error)=>
        {   
            console.log("Incorrect id");
            this.errormsg="Record with id "+us+" doesn't exists";
        }
      }
    )
  }
}
