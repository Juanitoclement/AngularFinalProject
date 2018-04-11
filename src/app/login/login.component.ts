import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user.service';
import { RegisterComponent } from '../register/register.component';
import { SignIn } from '../SignIn';
import { Router } from '@angular/router';
import {MatDialog } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private dataService: UserService,
    private router: Router,
    public dialog: MatDialog,
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
  openDialog(): void {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(RegisterComponent, {
      height: '500px',
      width: '500px',

    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
    this.signing = new SignIn();
  }

}
