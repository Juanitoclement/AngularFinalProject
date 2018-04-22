import {Component, OnInit, Input, Inject} from '@angular/core';
import { UserService } from '../services/user.service';
import { SignIn } from '../SignIn';
import { Router } from '@angular/router';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';

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
    this.signing.email = '';
    this.signing.password = '';
  }
  submitLogin() {
    this.dataService.postSignIn(this.signing).subscribe(
      () => {console.log('Login Completed'); },
      err => {console.error(err); alert('Login Unsuccesful') ; } ,
      () => {console.log('Login Succesful');
      alert('Login Sucessful'); this.router.navigateByUrl(this.data['page'] + this.data['now']); location.reload(); }
    );
  }
  // openDialog(): void {
  //   this.dialog.closeAll();
  //   const dialogRef = this.dialog.open(RegisterComponent, {
  //     height: '500px',
  //     width: '500px',
  //
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });
  // }

  ngOnInit() {
    this.signing = new SignIn();
  }

}
