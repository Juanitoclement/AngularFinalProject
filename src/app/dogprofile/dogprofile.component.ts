import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import { ActivatedRoute } from '@angular/router';
import {Doggies} from '../doggies';
import {MatDialog} from '@angular/material';
import {EditpetComponent} from '../editpet/editpet.component';
import { Router } from '@angular/router';
import {User} from '../User';

@Component({
  selector: 'app-dogprofile',
  templateUrl: './dogprofile.component.html',
  styleUrls: ['./dogprofile.component.css']
})
export class DogprofileComponent implements OnInit {
  edit: boolean;
  uid: any;
  dogID: any;
  dogName: any;
  dogGender: any;
  dogDisplay: any;
  dogBreed: any;
  dogAge: any;
  dogDesc: any;
  owner: any;
  currid: any;
  ownerName: any;
  constructor
  (
    private user: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
  ) { }
  @Input() doggie: Doggies; userForm: User;
  profile() {
    this.user.getLoginInId().subscribe(resp => {
      this.currid = resp['id'];
    });
    console.log(this.currid);
    this.route.params.subscribe(params => this.uid = params['id'] );
    this.user.getDoggie(this.uid).subscribe(resp => {
      this.dogName = resp['name'];
      this.dogID = resp['id'];
      this.dogGender = resp['gender'];
      this.dogAge = resp['age'];
      this.dogBreed = resp['breed'];
      this.dogDesc = resp['desc'];
      this.dogDisplay = resp['displaypic'];
      this.owner  = resp['owner_id'];
      console.log(this.owner);
      this.user.getProfile(this.owner).subscribe(res => {
        this.userForm.name = res['name'];
        console.log(this.currid);
        if (this.owner !== this.currid) {
          console.log(this.currid);
          console.log('View Mode');
          this.edit = false;
        }  else { this.edit = true; }
      } );
    //  get user
    });
  }
  // profile() {
  //   this.user.getLoginInId().subscribe(resp => {
  //     this.currid = resp['id'];
  //   });
  //   this.route.params.subscribe(params => this.uid = params['id'] );
  //   this.user.getProfile(this.uid).subscribe(resp => {
  //     this.updateForm.name = resp['name'] ;
  //     this.updateForm.bio = resp['bio'];
  //     this.updateForm.email = resp['email'];
  //     this.tarid = resp['id'];
  //     this.display = resp['displaypic'];
  //     if (this.tarid !== this.currid) {
  //       console.log(this.currid);
  //       console.log('View Mode');
  //       this.edit = false;
  //     }  else { this.edit = true; }
  //   });
  // }
  openDialog(): void {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open( EditpetComponent, {
      data: {
        dogID: this.uid
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  deleteDog() {
    this.user.deleteDoggie(this.uid).subscribe(
      () => console.log('Deleting'),
      err => { console.error(err); alert('Delete Doggie Unsuccesful'); },
      () => { console.log('Update Successful'); alert('Succesfully delete doggie'); },
    );
  }
  ngOnInit() {
    this.profile();
    this.userForm = new User;
  }

}
