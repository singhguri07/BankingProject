import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'loan',
  templateUrl: './loancomponent.component.html',
  styleUrls: ['./loancomponent.component.css']
})
export class LoancomponentComponent implements OnInit {

    emi:number;
  constructor() { }

  ngOnInit() {
  }
  getEmi(pa,td,roi):void
  {
      this.emi=pa*roi*td;
  }
  abc(tl):void{
    console.log(tl)
  }
}
