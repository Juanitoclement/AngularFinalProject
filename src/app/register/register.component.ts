import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user.service';
import { SignUp } from '../SignUp';
import { Router } from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {MatDialog} from '@angular/material';

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
    public dialog: MatDialog,
  ) {}
  @Input() sighup: SignUp;

  submitRegister() {
    this.dataService.postRegister(this.sighup).subscribe(
      () => console.log('Registation is filled'),
      err => { console.error(err); alert('Registation Unsuccesful'); this.ngOnInit(); },
      () => { console.log('Email verification'); alert('Verify your email'); this.router.navigateByUrl('/home');
      this.online = true; this.dialog.closeAll(); },
    );
  }
  openDialog(): void {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(LoginComponent, {
      height: '500px',
      width: '500px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
    this.sighup = new SignUp();
    this.sighup.name = '';
    this.sighup.username = '';
    this.sighup.password = '';
    this.sighup.email = '';
  }
}


