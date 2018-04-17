import {Component, Input, OnInit} from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../User';
import 'rxjs/add/operator/map';
import {ActivatedRoute} from '@angular/router';
import {Doggies} from '../doggies';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  online: boolean;
  view: boolean;
  edit: boolean;
  uid: any;
  tarid: any;
  currid: any;
  uname: any;
  uemail: any;
  ubio: any;
  uusername: any;
  display: any;
  selectedFile: File = null;

  public doggies: Doggies[];
  constructor(private user: UserService, private route: ActivatedRoute) {
  }
  @Input() updateForm: User;

  profile() {
    this.user.getLoginInId().subscribe(resp => {
      this.currid = resp['id'];
      console.log(this.currid);
      console.log(this.uid);
    });
    this.route.params.subscribe(params => this.uid = params['id'] );
    this.user.getProfile(this.uid).subscribe(resp => {
        this.uemail = resp['email'],
        this.uname = resp['name'],
        this.tarid = resp['id'] ,
        this.ubio = resp['bio'],
        this.uusername = resp['username'],
        this.display = resp['displaypic'];
      if (this.tarid !== this.currid) {
        console.log('View Mode');
        this.edit = false;
      }  else { this.edit = true; }
    });
  }
  doggieProfile() {
    this.route.params.subscribe(params => this.uid = params['id'] );
    this.user.getProfile(this.uid).subscribe((doggies: Doggies[]) => {
      this.doggies  = doggies['doggies'] ;

      console.log(this.doggies );
    });
  }
  submitUpdate() {
    this.user.postUpdate(this.updateForm).subscribe(
      () => console.log('Updateform is filled'),
      err => { console.error(err); alert('Update Unsuccesful'); this.ngOnInit(); },
      () => { console.log('Update Successful'); alert('Update Succesful'); },
    );
  }
  onFileUpload(files: FileList) {
    this.updateForm.displaypic = files.item(0);
    console.log(this.updateForm.displaypic);
  }
  onClick() {
    this.online = true;
  }
  offClick() {
    this.online = false;
  }
  ngOnInit() {
    this.doggieProfile();
    this.profile();
    this.updateForm = new User();
    this.updateForm.name = '';
    this.updateForm.bio = '';
  }

}
