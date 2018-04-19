import {Component, Input, OnInit} from '@angular/core';
import {Doggies} from '../doggies';
import {PetService} from '../services/pet.service';

@Component({
  selector: 'app-addpet',
  templateUrl: './addpet.component.html',
  styleUrls: ['./addpet.component.css']
})
export class AddpetComponent implements OnInit {
  currid: any;
  constructor(
    private pet: PetService ,
  ) { }

  @Input() doggiesForm: Doggies ;

  submitDoggie() {
    this.pet.addDoggie(this.doggiesForm).subscribe(
      () => console.log('doggiesForm is filled'),
      err => { console.error(err); alert('Add Doggie Unsuccesful'); },
      () => { console.log('Add Successful'); alert('Succesfully added doggie'); },
    );
  }
  profile() {
    this.pet.getLoginId().subscribe(resp => {
      this.currid = resp['id'];
      console.log(this.currid);
    });
  }
  ngOnInit() {
    this.doggiesForm = new Doggies();
    this.profile();
  }
}
