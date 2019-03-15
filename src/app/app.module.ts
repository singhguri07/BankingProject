import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoancomponentComponent } from './loancomponent/loancomponent.component';
import { NewsComponent } from './news/news.component';
import { ServicesComponent } from './services/services.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AccountsComponent } from './accounts/accounts.component';
import { CardsComponent } from './cards/cards.component';
import { HloanComponent } from './hloan/hloan.component';
import { CloanComponent } from './cloan/cloan.component';
import { PloanComponent } from './ploan/ploan.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { SloginComponent } from './slogin/slogin.component';
import { ServicesignupService } from './service files/servicesignup.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoancomponentComponent,
    NewsComponent,
    ServicesComponent,
    ContactusComponent,
    AccountsComponent,
    CardsComponent,
    HloanComponent,
    CloanComponent,
    PloanComponent,
    LoginComponent,
    SignupComponent,
    SloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [ServicesignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
