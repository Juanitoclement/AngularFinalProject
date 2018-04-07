import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user.service';
import { SignIn } from '../SignIn';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private dataService: UserService,
    private router: Router
  ) {}
  @Input() signing: SignIn;

  clear() {
    this.signing.email = '';
    this.signing.password = '';
  }
  submitLogin() {
    this.dataService.postSignIn(this.signing).subscribe(
      () => {console.log('Login Completed'); },
      err => {console.error(err); alert('Login Unsuccesful') ; } ,
      () => {console.log('Login Succesful'); alert('Login Sucessful'); this.router.navigateByUrl('/home'); location.reload(); }
    );
  }

  ngOnInit() {
    this.signing = new SignIn();
  }

}
