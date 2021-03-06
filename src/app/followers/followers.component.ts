import {Component, Inject, OnInit} from '@angular/core';
import {User} from '../User';
import {PetService} from '../services/pet.service';
import {FollowingsComponent} from '../followings/followings.component';
import {MatDialogRef} from '@angular/material';
import {UserService} from '../services/user.service';
import {MAT_DIALOG_DATA } from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  public user: User[];
  constructor
  (
    private router: Router,
    private userService: UserService,
    private petService: PetService,
    public dialogRef: MatDialogRef<FollowingsComponent>,

    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  viewFollower() {
    this.userService.viewFollowers(this.data['userID']).subscribe( (user: User[]) => {
      this.user = user;
    });
  }
  reDirect(id: number) {
    console.log(id);
    this.router.navigateByUrl('/clementwashere', {skipLocationChange: true}).then( () =>
      this.router.navigateByUrl('/profile/' + id));
  }
  ngOnInit() {
    this.viewFollower();
  }

}
