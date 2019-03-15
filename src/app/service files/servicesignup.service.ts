import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/rx';
import { User } from 'src/User';

@Injectable({
  providedIn: 'root'
})
export class ServicesignupService {

  url:string="http://localhost:3000/users/";
  constructor(private http:Http) { }

  postUser(user:User)
  {
    return this.http.post(this.url,user)
    .map((response:any)=>
      response);
  }
  
  getUser(id)
  {
    return this.http.get(this.url+id)
    .map((response:any)=>
    response)
  }

}
