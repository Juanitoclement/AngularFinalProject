import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private dataService: DataService) { }
  public registerForm: any = {};
  status: boolean;

  submitRegister() {
    this.dataService.postRegister(this.registerForm).subscribe(
      () => console.log('Registation is filled'),
      err => { console.error(err); alert('Registation Unsuccesful'); },
      () => { console.log('Email verification'); alert('Verify your email'); },
    );
    this.status = true;
  }

  ngOnInit() {

  }
}
