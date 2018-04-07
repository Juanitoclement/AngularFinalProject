import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {MatDialog } from '@angular/material';
import { LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})

export class NavigationBarComponent implements OnInit {

  loggedIn: boolean;
  loggedOut: boolean;

  constructor(
    private user: UserService,
    public dialog: MatDialog,
  ) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '500px',

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  ngOnInit() {
    this.checkAuth();
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


