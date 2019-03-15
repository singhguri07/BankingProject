import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { ServicesComponent } from './services/services.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoancomponentComponent } from './loancomponent/loancomponent.component';
import { AccountsComponent } from './accounts/accounts.component';
import { CardsComponent } from './cards/cards.component';
import { CloanComponent } from './cloan/cloan.component';
import { HloanComponent } from './hloan/hloan.component';
import { PloanComponent } from './ploan/ploan.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path:'services/loan/hloan',
    component:HloanComponent
  },
  {
    path:"login/signup",
    component:SignupComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'services/loan/cloan',
    component:CloanComponent
  },
  {
      path:'services/loan/ploan',
      component:PloanComponent
  },
  {
    path:'services/loan',
    component:LoancomponentComponent
  },
  {
    path:'services/cards',
    component:CardsComponent
  },
  {
    path:'services/accounts',
    component:AccountsComponent
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'news',
    component:NewsComponent
  },
  {
    path:'services',
    component:ServicesComponent
  },
  {
    path:'contactus',
    component:ContactusComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
