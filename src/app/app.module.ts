import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouteRoutingModule} from './route/route-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatDialogModule} from '@angular/material';
import { MatFormFieldModule, MatInputModule} from '@angular/material';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ProfileComponent } from './profile/profile.component';

import {UserService} from './services/user.service';

import { FileDropModule } from 'ngx-file-drop';
import { AddpetComponent } from './addpet/addpet.component';
import { DogprofileComponent } from './dogprofile/dogprofile.component';
import { EditpetComponent } from './editpet/editpet.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    RegisterComponent,
    NavigationBarComponent,
    ProfileComponent,
    AddpetComponent,
    DogprofileComponent,
    EditpetComponent,
  ],
  imports: [
    BrowserModule,
    RouteRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FileDropModule,
  ],
  entryComponents: [EditpetComponent],
  providers: [UserService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
