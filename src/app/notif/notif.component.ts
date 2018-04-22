import { Component, OnInit } from '@angular/core';
import {Notifications} from '../notifications';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {UserService} from '../services/user.service';
import {PetService} from '../services/pet.service';
import {EditpetComponent} from '../editpet/editpet.component';
import {ViewpostComponent} from '../viewpost/viewpost.component';

@Component({
  selector: 'app-notif',
  templateUrl: './notif.component.html',
  styleUrls: ['./notif.component.css']
})
export class NotifComponent implements OnInit {
  id: number;
  num: any;
  pic: any;
  currid: any;
  public notifications: any[];
  public pics: any[];
  public type: any[];

  constructor
  (
    private dialog: MatDialog,
    private user: UserService,
    private pet: PetService,
    private router: Router,
  ) { }
  getNotification() {
    let i = 0;
    this.user.getNotification().subscribe( (notifications: Notifications[]) => {
      console.log(notifications);
       for (i; i < notifications.length; i++) {
         this.notifications[i] = notifications[i];
         console.log(this.notifications[i]);
         if (this.notifications[i]['type'] === 'App\\Notifications\\PostLiked') {
           console.log('hello');
           this.subscribe1(i);
         } else if (this.notifications[i]['type'] === 'App\\Notifications\\PostCommented') {
           this.subscribe1(i);
         } else if (this.notifications[i]['type'] === 'App\\Notifications\\UserFollowed') {
           this.subscribe2(i);
         } else {
           this.pics[i] = 'empty';
           this.notifications[i]['hasPic'] = false;
         }
       }
      console.log(this.notifications);
    });
  }
  subscribe1(i) {
    this.pet.viewPost(this.notifications[i]['data']['post']).subscribe( re => {
      this.notifications[i]['pic'] = re[0]['pic'];
      this.notifications[i]['hasPic'] = true;
    } );
  }
  subscribe2(i) {
    this.pet.getProfile(this.notifications[i]['data']['follower_id']).subscribe( re => {
      console.log(re);
      this.notifications[i]['pic'] = re['displaypic'];
      this.notifications[i]['hasPic'] = true;
    });
  }
  redirect3(id: number, ownerID) { // post liked
    this.user.getUser().subscribe(res => {
      this.currid = res['name'];
    }) ;
    console.log(ownerID);
    this.pet.getDogID(id).subscribe( res => {
      this.num = res;
      this.pet.getDoggie(this.num).subscribe( resp => {
      this.dialog.closeAll();
      this.dialog.open(ViewpostComponent, {
        data: {
          postID: id,
          ownerID: ownerID,
          dogID: res,
          dogName: resp['name'],
          ownerName: this.currid,
        }
      });
      });
    });
  }
  redirect1(id: number ) {
    this.router.navigateByUrl('/clementwashere', {skipLocationChange: true}).then( () =>
      this.router.navigateByUrl('/profile/' + id);
    this.dialog.closeAll();
  }
  ngOnInit() {
    this.getNotification();
    this.notifications = [];
    this.type = [];
    this.pics = [];
  }

}
