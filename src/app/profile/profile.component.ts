import {Component, Input, OnInit} from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../User';
import 'rxjs/add/operator/map';
import {ActivatedRoute} from '@angular/router';
import {SignUp} from '../SignUp';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  online: boolean;
  id: any;
  name: any;
  email: any;
  username: any;
  created: any;
  updated: any;
  display: any;
  constructor(private user: UserService, private route: ActivatedRoute) {
  }
  @Input() updateForm: User;
  profile() {
    this.route.params.subscribe(params => this.id = params['id'] );
    this.user.getProfile(this.id).subscribe(resp => {
        this.email = resp['email'],
        this.name = resp['name'],
        this.username = resp['username'],
        this.created = resp['created_at'],
        this.updated = resp['updated_at'],
        this.display = resp['displaypic'];
    });
  }
  submitUpdate() {
    this.user.postUpdate(this.updateForm).subscribe(
      () => console.log('Updateform is filled'),
      err => { console.error(err); alert('Update Unsuccesful'); },
      () => { console.log('Update Successful'); alert('Update Succesful'); },
    );
  }
  onClick() {
    this.online = true;
  }
  offClick() {
    this.online = false;
  }
  ngOnInit() {
<<<<<<< HEAD
      this.user.getProfile(this.id).subscribe(resp => {
      this.data = resp;
      console.log(this.data);
    });
=======
    this.profile();
    this.updateForm = new User();
>>>>>>> dbe3ab435b28e6baf51e60f8b96ed0e48076b1da
  }

}
