import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {Response} from '@angular/http/src/static_response';
import { User } from 'src/User';
import { ServicesignupService } from '../service files/servicesignup.service';


@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form;
  
  constructor(private dbservice:ServicesignupService) { }

  ngOnInit() {
    this.form=new FormGroup(
      {
        firstname:new FormControl("",Validators.compose(
        [
          Validators.required
        ]
        )),
        lastname:new FormControl("",Validators.required),
        mobilenumber:new FormControl("",),
        DOB:new FormControl("",),
        address:new FormControl("",),
        aadhar:new FormControl("",),
        userid:new FormControl("",),
        pass:new FormControl("",),
        cpass:new FormControl("",),
        balance:new FormControl("",)
      }
    );
  }
  onSubmit(myform)
  {
    console.log(myform);
    console.log(myform.firstname);
    let user=new User(myform.firstname,myform.lastname,myform.mobilenumber,myform.DOB,
      myform.address,myform.aadhar,myform.userid,myform.pass,myform.balance);

    this.dbservice.postUser(user)
    .subscribe(
    (response:any)=>console.log("onsubmit posted successfully")
    )


  }

}
