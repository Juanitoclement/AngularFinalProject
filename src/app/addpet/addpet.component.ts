import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {Doggies} from '../doggies';

@Component({
  selector: 'app-addpet',
  templateUrl: './addpet.component.html',
  styleUrls: ['./addpet.component.css']
})
export class AddpetComponent implements OnInit {
  currid: any;
  constructor(
    private user: UserService,
  ) { }

  @Input() doggiesForm: Doggies ;

  submitDoggie() {
    this.user.addDoggie(this.doggiesForm).subscribe(
      () => console.log('doggiesForm is filled'),
      err => { console.error(err); alert('Add Doggie Unsuccesful'); },
      () => { console.log('Add Successful'); alert('Succesfully added doggie');  },
    );
  }
  profile() {
    this.user.getLoginInId().subscribe(resp => {
      this.currid = resp['id'];
      console.log(this.currid);
    });
  }
  ngOnInit() {
    this.doggiesForm = new Doggies();
    this.profile();
  }
}
