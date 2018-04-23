import { Component, OnInit } from '@angular/core';
import {Notifications} from '../notifications';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {UserService} from '../services/user.service';
import {PetService} from '../services/pet.service';
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
  date1: any;
  now: any;
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
    this.user.readNotif().subscribe(res => {
      console.log('read');
    });
    this.user.getNotification().subscribe( (notifications: Notifications[]) => {
       for (i; i < notifications.length; i++) {
         this.notifications[i] = notifications[i];

           this.date1 = new Date(notifications[i]['created_at']);
           this.now = new Date();
           const diff = (this.now - this.date1) / 1000;
           if (diff < 60) {
             notifications[i]['created_at'] = Math.floor(diff) + 's ago';
           }
           if (diff > 60 && diff <= 5040) {
             notifications[i]['created_at'] = Math.floor(diff / 60) + ' min ago';
           }
           if (diff >  5040 && diff < 86400) {
             notifications[i]['created_at'] = Math.floor(diff / 60 / 60) + ' hrs ago';
           }
           if (diff > 86400 && diff < 604800) {
             notifications[i]['created_at'] = Math.floor(diff / 60 / 60 / 24) + ' days ago';
           }
           if (diff > 604800 && ( diff / 60 / 60 / 24 / 7 ) < 5) {
             notifications[i]['created_at'] = Math.floor(diff / 60 / 60 / 24 / 7) + ' weeks ago';
           }
           if ((diff / 60 / 60 / 24 / 7 ) >= 5) {
             notifications[i]['created_at'] = this.date1.getDate() + '/' +  (1 + this.date1.getMonth()) + '/' + this.date1.getFullYear();
           }
         if (notifications[i]['read_at'] != null) {
             this.notifications[i]['bool'] = true;
         }
         if (notifications[i]['read_at'] == null) {
             this.notifications[i]['bool'] = false;
         }
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
         console.log(this.notifications[i]);
       }
    });
  }
  clearAll() {
    this.user.clearAll().subscribe( re => {
      console.log(re);
      alert('Notifications cleared. ');
    });
    this.dialog.closeAll();
  }
  readNotifications(id) {
    this.user.readNotification(id).subscribe(re => {
      console.log(re);
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
      this.notifications[i]['pic'] = re['displaypic'];
      this.notifications[i]['hasPic'] = true;
    });
  }
  redirect3(id: number, ownerID) { // post liked
    this.user.getUser().subscribe(res => {
      this.currid = res['name'];
    }) ;
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
      this.router.navigateByUrl('/profile/' + id ));
    this.dialog.closeAll();
  }
  ngOnInit() {
    this.getNotification();
    this.notifications = [];
    this.type = [];
    this.pics = [];
  }

}
