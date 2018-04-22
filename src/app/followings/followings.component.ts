import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {UserService} from '../services/user.service';
import {PetService} from '../services/pet.service';
import {User } from '../User';
import {Router} from '@angular/router';

@Component({
  selector: 'app-followings',
  templateUrl: './followings.component.html',
  styleUrls: ['./followings.component.css']
})
export class FollowingsComponent implements OnInit {
  public user: User[];
  constructor
  (
    private router: Router,
    private userService: UserService,
    private petService: PetService,
    public dialogRef: MatDialogRef<FollowingsComponent>,

    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {  }

  viewFollowings() {
    this.userService.viewFollowings(this.data['userID']).subscribe( (user: User[]) => {
      this.user = user;
    });
  }
  reDirect(id: number) {
    console.log(id);
    this.router.navigateByUrl('/clementwashere', {skipLocationChange: true}).then( () =>
      this.router.navigateByUrl('/profile/' + id));
  }

  ngOnInit() {
    this.viewFollowings();
  }
}
