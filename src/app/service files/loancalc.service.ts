import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoancalcService {
  
  constructor() { }

  getEmi(p,r,t){
      r=r/(12*100);
      let x=Math.pow(1+r,t);
      let y=(p*r*x)/(x-1)
      
      console.log(y);
      return y;
  }

}
