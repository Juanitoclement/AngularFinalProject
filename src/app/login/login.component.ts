import { Component, OnInit, Input } from '@angular/core';
import { DataService} from '../services/data.service';
import { SignIn} from '../SignIn';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dataService: DataService) { }
  @Input() signing: SignIn;
  status: boolean;

  submitLogin() {
    this.dataService.postSignIn(this.signing).subscribe(
      () => console.log('Login Completed'),
      err => { console.error(err); alert('Login Unsuccesful'); },
      () => { console.log('Login Succesful'); alert('Login Sucessful'); }
    );
    this.status = true;
    // setTimeout(() => window.location.href = '', 3000);
  }

  ngOnInit() {
    this.signing = new SignIn();
  }

}
