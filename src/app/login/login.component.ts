import {Component, OnInit, Input, Inject} from '@angular/core';
import { UserService } from '../services/user.service';
import { SignIn } from '../SignIn';
import { Router } from '@angular/router';
import {MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private dataService: UserService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  @Input() signing: SignIn;

  clear() {
    this.signing = new SignIn();
  }
  submitLogin() {
    this.dataService.postSignIn(this.signing).subscribe(
      () => {console.log('Login Completed'); },
      err => {console.error(err); alert('Login Unsuccesful') ; } ,
      () => {console.log('Login Succesful');
      alert('Login Sucessful'); this.router.navigateByUrl(this.data['page'] + this.data['now']); location.reload(); }
    );
  }
  ngOnInit() {
    this.signing = new SignIn();
  }

}
