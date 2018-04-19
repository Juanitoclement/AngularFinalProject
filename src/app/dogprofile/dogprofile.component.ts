import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Doggies} from '../doggies';
import {MatDialog} from '@angular/material';
import {EditpetComponent} from '../editpet/editpet.component';
import { Router } from '@angular/router';
import {User} from '../User';
import {PetService} from '../services/pet.service';

@Component({
  selector: 'app-dogprofile',
  templateUrl: './dogprofile.component.html',
  styleUrls: ['./dogprofile.component.css']
})
export class DogprofileComponent implements OnInit {
  edit: boolean;
  noDog: boolean;
  currDog: boolean;
  uid: any;
  dogID: any;
  dogID2: any;
  dogName: any;
  dogGender: any;
  dogDisplay: any;
  dogBreed: any;
  dogAge: any;
  dogDesc: any;
  owner: any;
  currid: any;
  public doggies: Doggies[];

  constructor
  (
    private user: PetService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
  ) { }
  @Input() doggie: Doggies; userForm: User;
  profile() {
    this.user.getLoginId().subscribe(resp => {
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
        this.user.getProfile(this.owner).subscribe((doggies: Doggies[]) => {
          this.doggies  = doggies['doggies'] ;
          console.log(this.doggies);
          if (this.doggies.length === 0 ) {
            this.noDog = true;
            console.log(this.noDog);
          } else {
            this.noDog = false;
          }
        });
        console.log(this.owner);
      } );
    });
  }
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
