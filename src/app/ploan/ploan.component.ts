import { Component, OnInit } from '@angular/core';
import { getLocaleTimeFormat } from '@angular/common';
import { LoancalcService } from '../service files/loancalc.service';

@Component({
  selector: 'app-ploan',
  templateUrl: './ploan.component.html',
  styleUrls: ['./ploan.component.css']
})
export class PloanComponent implements OnInit {
  emi:number;
  constructor(private ls:LoancalcService) { }

  ngOnInit() {
  }
  get(p,r,t):void{
    
    console.log("Principal: "+p);
    console.log("Rate: "+r);
    console.log("Time: "+t);
    this.emi=this.ls.getEmi(p,r,t);
  }
}
