import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { AuthGuard } from '../auth.guard';
import { HomeComponent } from '../home/home.component';
import { ProfileComponent } from '../profile/profile.component';
import {AddpetComponent} from '../addpet/addpet.component';
import {DogprofileComponent} from '../dogprofile/dogprofile.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'addPet', component: AddpetComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'dogprofile/:id', component: DogprofileComponent },
  // :id buat kasih tau kl itu variable
  { path: '**', redirectTo: '' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class RouteRoutingModule {

}
