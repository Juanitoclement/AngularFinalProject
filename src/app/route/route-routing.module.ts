import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { HomeComponent } from '../home/home.component';
import { ProfileComponent } from '../profile/profile.component';
import {AddpetComponent} from '../addpet/addpet.component';
import {DogprofileComponent} from '../dogprofile/dogprofile.component';
import {ViewpostComponent} from '../viewpost/viewpost.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'addPet', component: AddpetComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'dogprofile/:id', component: DogprofileComponent },
  { path: 'dogprofile/post/:id', component: ViewpostComponent },
  { path: '**', redirectTo: '' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class RouteRoutingModule {

}
