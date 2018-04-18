import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import { ActivatedRoute } from '@angular/router';
import {Doggies} from '../doggies';
import {MatDialog} from '@angular/material';
import {EditpetComponent} from '../editpet/editpet.component';

@Component({
  selector: 'app-dogprofile',
  templateUrl: './dogprofile.component.html',
  styleUrls: ['./dogprofile.component.css']
})
export class DogprofileComponent implements OnInit {
  uid: any;
  dogID: any;
  dogName: any;
  dogGender: any;
  dogDisplay: any;
  dogBreed: any;
  dogAge: any;
  dogDesc: any;
  constructor
  (
    private user: UserService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
  ) { }
  @Input() doggie: Doggies;
  profile() {
    this.route.params.subscribe(params => this.uid = params['id'] );
    this.user.getDoggie(this.uid).subscribe(resp => {
      this.dogName = resp['name'];
      this.dogID = resp['id'];
      this.dogGender = resp['gender'];
      this.dogAge = resp['age'];
      this.dogBreed = resp['breed'];
      this.dogDesc = resp['desc'];
      this.dogDisplay = resp['displaypic'];
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
  ngOnInit() {
    this.profile();
  }

}
