import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BankingProject';
  disp:boolean=true;
  homeLoan()
  {

    console.log("Home Loan");
  }
}
