import { Component, OnInit } from '@angular/core';
import {Notifications} from '../notifications';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {UserService} from '../services/user.service';
import {PetService} from '../services/pet.service';

@Component({
  selector: 'app-notif',
  templateUrl: './notif.component.html',
  styleUrls: ['./notif.component.css']
})
export class NotifComponent implements OnInit {
  search: any;
  loggedIn: boolean;
  loggedOut: boolean;
  id: number;
  public notifications: Notifications[];
  constructor
  (
    private user: UserService,
    private pet: PetService,
    private router: Router,
    public dialog: MatDialog,
  ) { }
  getNotification() {
    this.user.getNotification().subscribe((notifications: Notifications[]) => {
      this.notifications = notifications;
      console.log(this.notifications);
    });
  }
  ngOnInit() {
    this.getNotification();
  }

}
