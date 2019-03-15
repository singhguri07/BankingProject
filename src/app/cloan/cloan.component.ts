import { Component, OnInit } from '@angular/core';
import { LoancalcService } from '../service files/loancalc.service';

@Component({
  selector: 'app-cloan',
  templateUrl: './cloan.component.html',
  styleUrls: ['./cloan.component.css']
})
export class CloanComponent implements OnInit {

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
