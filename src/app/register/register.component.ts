import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  online = false;
  constructor(
    private dataService: DataService,
    private router: Router,
  ) {}

  public registerForm: any = {};

  submitRegister() {
    this.dataService.postRegister(this.registerForm).subscribe(
      () => console.log('Registation is filled'),
      err => { console.error(err); alert('Registation Unsuccesful'); },
      () => { console.log('Email verification'); alert('Verify your email'); this.router.navigateByUrl('/login'); this.online = true; },
    );
  }

  ngOnInit() {
    this.registerForm = {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

}


