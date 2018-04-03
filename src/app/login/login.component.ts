import { Component, OnInit, Input } from '@angular/core';
import { DataService} from '../services/data.service';
import { SignIn} from '../SignIn';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }
  @Input() signing: SignIn;
  status: boolean;
  clear() {
    this.signing.email = '';
    this.signing.password = '';
  }
  submitLogin() {
    this.dataService.postSignIn(this.signing).subscribe(
      () => {
        console.log('Login Completed'); this.router.navigateByUrl('/home');
        },
        err => {
        console.error(err); alert('Login Unsuccesful');
        },
      () => {
        console.log('Login Succesful'); alert('Login Sucessful');
      }
    );
    this.status = true;
  }

  ngOnInit() {
    this.signing = new SignIn();
  }

}
