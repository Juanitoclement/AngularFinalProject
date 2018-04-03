import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';

import {DataService} from './services/data.service';

import {RouteRoutingModule} from './route/route-routing.module';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouteRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
