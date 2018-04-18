import {Component, Input, OnInit, Inject} from '@angular/core';
import {Doggies} from '../doggies';
import {UserService} from '../services/user.service';
import {ActivatedRoute} from '@angular/router';
import { MatDialogRef , MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-editpet',
  templateUrl: './editpet.component.html',
  styleUrls: ['./editpet.component.css']
})
export class EditpetComponent implements OnInit {
  @Input() doggiesForm: Doggies ;
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
    public dialogRef: MatDialogRef<EditpetComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { console.log('data', this.data['dogID']); }
  updateDoggie() {
    this.user.updateDoggie(this.data['dogID'], this.doggiesForm).subscribe(
      () => console.log('doggiesForm is filled'),
      err => { console.error(err); alert('Update Doggie Unsuccesful'); },
      () => { console.log('Update Successful'); alert('Succesfully update doggie'); },
    );
  }
  profile() {
    this.user.getDoggie(this.data['dogID']).subscribe(resp => {
      this.doggiesForm.name = resp['name'];
      this.doggiesForm.gender = resp['gender'];
      this.doggiesForm.age = resp['age'];
      this.doggiesForm.breed = resp['breed'];
      this.doggiesForm.desc = resp['desc'];
      this.doggiesForm.displaypic = resp['displaypic'];
      console.log(this.doggiesForm.name);
    });
  }

  ngOnInit() {
    this.profile();
    this.doggiesForm = new Doggies();
  }

}
