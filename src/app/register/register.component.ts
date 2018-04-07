import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user.service';
import { SignUp } from '../SignUp';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  online = false;

  constructor(
    private dataService: UserService,
    private router: Router,
  ) {}
  @Input() sighup: SignUp;

  submitRegister() {
    this.dataService.postRegister(this.sighup).subscribe(
      () => console.log('Registation is filled'),
      err => { console.error(err); alert('Registation Unsuccesful'); this.ngOnInit(); },
      () => { console.log('Email verification'); alert('Verify your email'); this.router.navigateByUrl('/login'); this.online = true; },
    );
  }

  ngOnInit() {
    this.sighup = new SignUp();
    this.sighup.name = '';
    this.sighup.password = '';
    this.sighup.email = '';
  }
}


