import {Component, Input, OnInit} from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../User';
import 'rxjs/add/operator/map';
import {ActivatedRoute, Router} from '@angular/router';
import { Doggies } from '../doggies';
import {MatDialog} from '@angular/material';
import {AddpetComponent} from '../addpet/addpet.component';
import {PetService} from '../services/pet.service';
import { EdituserComponent } from '../edituser/edituser.component';
import {FollowersComponent} from '../followers/followers.component';
import {FollowingsComponent} from '../followings/followings.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  online: boolean;
  online2: boolean;
  isFollowed: boolean;
  noDog: boolean;
  edit: boolean;
  fol: any;
  uid: any;
  tarid: any;
  currid: any;
  display: any;
  public doggies: Doggies[];

  constructor(
    private user: UserService,
    private pet: PetService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
  ) { }
  @Input() updateForm: User;


  profile() {
    if ( localStorage.getItem('token') !== null) {
      this.pet.getLoginId().subscribe(resp => {
        this.currid = resp['id'];
      });
    }
    this.route.params.subscribe(params => this.uid = params['id']);
    this.pet.getProfile(this.uid).subscribe(resp => {
      this.updateForm.name = resp['name'];
      this.updateForm.username = resp['username'];
      this.updateForm.bio = resp['bio'];
      this.updateForm.email = resp['email'];
      this.tarid = resp['id'];
      console.log(this.tarid);
      this.display = resp['displaypic'];
      if (this.tarid !== this.currid) {
        this.edit = false;
      } else {
        this.edit = true;
      }
    });
  }
  checkk() {
    if ( localStorage.getItem('token') !== null) {
      this.isFollowed = false;
      this.route.params.subscribe(params => this.uid = params['id']);
      this.user.checkFollow(this.uid).subscribe(response => {
        this.fol = response['is_followed'];
        if (this.fol === 'true') {
          this.isFollowed = true;
        } else {
          this.isFollowed = false;
        }
      });
    }
  }
  doggieProfile() {
    this.route.params.subscribe(params => this.uid = params['id'] );
    this.pet.getProfile(this.uid).subscribe((doggies: Doggies[]) => {
      this.doggies  = doggies['doggies'] ;
      console.log(doggies['doggies']);
      if (this.doggies.length === 0 ) {
        this.noDog = true;
      } else {
        this.noDog = false;
      }
    });
  }

  following() {
    this.route.params.subscribe(params => this.uid = params['id']);
    this.user.following(this.uid).subscribe( res => {
      this.updateForm.followings = res;
      }
    );
  }
  follower() {
    this.route.params.subscribe(params => this.uid = params['id']);
    this.user.follower(this.uid).subscribe( res => {
        this.updateForm.followers = res;
      }
    );
  }
  doFollow() {
    if (localStorage.getItem('token') !== null) {
      this.user.goFollow(this.tarid, this.updateForm).subscribe(res => {
        this.router.navigateByUrl('/clementwashere', {skipLocationChange: true}).then(() =>
          this.router.navigateByUrl('/profile/' + this.tarid));
      });
    } else {
      this.loginFirst();
    }
  }
  doUnfollow() {
    if (localStorage.getItem('token') !== null) {
      this.user.goUnfollow(this.tarid, this.updateForm).subscribe(res => {
        this.router.navigateByUrl('/clementwashere', {skipLocationChange: true}).then(() =>
          this.router.navigateByUrl('/profile/' + this.tarid));
      });
    } else {
      this.loginFirst();
    }
  }
  addPet() {
    this.online2 = true;
    this.online = false;
  }
  loginFirst(): void {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(LoginComponent, {
      height: '500px',
      width: '500x',
      data: {
        now: this.uid,
        page: '/profile/'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openDialog(): void {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(AddpetComponent, {
      height: '600px',
      width: '800x',
      data: {
        userID: this.uid
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openDialog2(): void {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(EdituserComponent, {
      height: '500px',
      width: '900px',
      data: {
        userID: this.uid
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openDialog3(): void {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(FollowersComponent, {
      height: '500px',
      width: '500px',
      data: {
        userID: this.uid
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openDialog4(): void {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(FollowingsComponent, {
      height: '500px',
      width: '500px',
      data: {
        userID: this.uid
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  ngOnInit() {
    this.checkk();
    this.follower();
    this.following();
    this.doggieProfile();
    this.profile();
    this.updateForm = new User();
  }
}
