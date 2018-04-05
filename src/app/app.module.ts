import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ControlContainer, FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouteRoutingModule} from './route/route-routing.module';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

import {DataService} from './services/data.service';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    RegisterComponent,
    NavigationBarComponent,
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
