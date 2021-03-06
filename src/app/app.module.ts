import { BrowserModule } from '@angular/platform-browser';
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
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ProfileComponent } from './profile/profile.component';

import {UserService} from './services/user.service';
import {PetService} from './services/pet.service';

import { FileDropModule } from 'ngx-file-drop';
import { AddpetComponent } from './addpet/addpet.component';
import { DogprofileComponent } from './dogprofile/dogprofile.component';
import { EditpetComponent } from './editpet/editpet.component';
import { AddpostComponent } from './addpost/addpost.component';
import { EdituserComponent } from './edituser/edituser.component';
import { ViewpostComponent } from './viewpost/viewpost.component';
import { FollowersComponent } from './followers/followers.component';
import { FollowingsComponent } from './followings/followings.component';
import { NotifComponent } from './notif/notif.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    NavigationBarComponent,
    ProfileComponent,
    AddpetComponent,
    DogprofileComponent,
    EditpetComponent,
    AddpostComponent,
    EdituserComponent,
    ViewpostComponent,
    FollowersComponent,
    FollowingsComponent,
    NotifComponent,
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
  entryComponents: [
    EditpetComponent, LoginComponent,
    RegisterComponent, EdituserComponent,
    AddpostComponent, ViewpostComponent,
    AddpetComponent, FollowersComponent,
    FollowingsComponent, NotifComponent],
  providers: [UserService, PetService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
