import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {MatDialog } from '@angular/material';
import { LoginComponent} from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],

})


export class NavigationBarComponent implements OnInit {

  loggedIn: boolean;
  loggedOut: boolean;

  constructor(
    private user: UserService,
    public dialog: MatDialog,
  ) {}
  public data: string;

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
  openDialogg(): void {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(RegisterComponent, {
      height: '500px',
      width: '500px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  welcome() {
    if (this.user.token) {
      this.user.getUser().subscribe(resp => {
        this.data = resp['name'];
      });
    } else {
      this.data = ' Guest';
    }
  }

  ngOnInit() {
    this.checkAuth();
    this.welcome();
  }

  checkAuth() {
    // const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (localStorage.getItem('token')) {
      this.loggedIn = true;
      this.loggedOut = true;
    } else {
      this.loggedIn = false;
      this.loggedOut = false;
    }
  }

  logout() {
    this.user.logout();
  }
}


