import {Component, Input, OnInit, Inject} from '@angular/core';
import {Doggies} from '../doggies';
import {ActivatedRoute} from '@angular/router';
import { MatDialogRef , MAT_DIALOG_DATA} from '@angular/material';
import { Router } from '@angular/router';
import {PetService} from '../services/pet.service';

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
    private pet: PetService,
    private route: ActivatedRoute,
    private router: Router,
    public dialogRef: MatDialogRef<EditpetComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { console.log('data', this.data['dogID']); }
  updateDoggie() {
    this.pet.updateDoggie(this.data['dogID'], this.doggiesForm).subscribe(
      () => console.log('doggiesForm is filled'),
      err => { console.error(err); alert('Update Doggie Unsuccesful'); },
      () => { console.log('Update Successful'); alert('Succesfully update doggie');
      this.router.navigateByUrl('/dogprofile/' + this.data['dogID'] ); location.reload();
      this.dialogRef.close(); },
    );
  }
  profile() {
    this.pet.getDoggie(this.data['dogID']).subscribe(resp => {
      this.doggiesForm.name = resp['name'];
      this.doggiesForm.gender = resp['gender'];
      this.doggiesForm.age = resp['age'];
      this.doggiesForm.breed = resp['breed'];
      this.doggiesForm.desc = resp['desc'];
      this.doggiesForm.displaypic = resp['displaypic'];
      this.doggiesForm.id = resp['owner_id'];
      console.log(this.doggiesForm.name);
    });
  }

  ngOnInit() {
    this.profile();
    this.doggiesForm = new Doggies();
  }

}
