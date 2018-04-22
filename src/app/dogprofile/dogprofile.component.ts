import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Doggies} from '../doggies';
import {MatDialog} from '@angular/material';
import {EditpetComponent} from '../editpet/editpet.component';
import { Router } from '@angular/router';
import {User} from '../User';
import {PetService} from '../services/pet.service';
import {AddpostComponent} from '../addpost/addpost.component';
import {ViewpostComponent} from '../viewpost/viewpost.component';
import {Post} from '../post';

@Component({
  selector: 'app-dogprofile',
  templateUrl: './dogprofile.component.html',
  styleUrls: ['./dogprofile.component.css']
})
export class DogprofileComponent implements OnInit {
  edit: boolean;
  noDog: boolean;
  noPost: boolean;
  uid: any;
  dogID: any;
  dogName: any;
  dogGender: any;
  dogDisplay: any;
  dogBreed: any;
  dogAge: any;
  dogDesc: any;
  owner: any;
  currid: any;
  now: any;
  date1: any;
  public doggies: Doggies[];
  public post: Post[];

  constructor
  (
    private pet: PetService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
  ) { }
  @Input() doggie: Doggies; userForm: User;
  profile() {
    if (localStorage.getItem('token') !== null) {
      this.pet.getLoginId().subscribe(resp => {
        this.currid = resp['id'];
      });
    }
      this.route.params.subscribe(params => this.uid = params['id']);
      this.pet.getDoggie(this.uid).subscribe(resp => {
        this.dogName = resp['name'];
        this.dogID = resp['id'];
        this.dogGender = resp['gender'];
        this.dogAge = resp['age'];
        this.dogBreed = resp['breed'];
        this.dogDesc = resp['desc'];
        this.dogDisplay = resp['displaypic'];
        this.owner = resp['owner_id'];
        this.pet.getProfile(this.owner).subscribe(res => {
          this.userForm.name = res['name'];
          if (this.owner !== this.currid) {
            this.edit = false;
          } else {
            this.edit = true;
          }
          this.pet.getProfile(this.owner).subscribe((doggies: Doggies[]) => {
            this.doggies = doggies['doggies'];
            if (this.doggies.length === 0) {
              this.noDog = true;
            } else {
              this.noDog = false;
            }
          });
        });
      });

  }
  viewAllPost() {
    console.log(this.uid);
    this.route.params.subscribe(params => this.uid = params['id'] );
    this.pet.viewAllPosts(this.uid).subscribe( (post: Post[]) => {
      console.log(post);
      this.post = post;
      if (this.post.length === 0 ) {
        this.noPost = true;
      } else {
        this.noPost = false;
      }
    });
  }
  openDialog(): void {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open( EditpetComponent, {
      data: {
        dogID: this.uid
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openDialog2(): void {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open( AddpostComponent, {
      data: {
        dogID: this.uid
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openDialog3(id: number) {
    console.log(id);
    this.dialog.closeAll();
    const dialogRef = this.dialog.open( ViewpostComponent, {
      data: {
        postID: id,
        dogID: this.uid,
        dogName: this.dogName,
        ownerName: this.userForm.name,
        ownerID: this.owner,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  deleteDog() {
    this.pet.deleteDoggie(this.uid).subscribe(
      () => console.log('Deleting'),
      err => { console.error(err); alert('Delete Doggie Unsuccesful'); },
      () => { console.log('Update Successful'); alert('Succesfully delete doggie');
        this.router.navigateByUrl('/clementwashere', {skipLocationChange: true}).then( () =>
          this.router.navigateByUrl('/profile/' + this.currid));
      },
    );
  }
  ngOnInit() {
    this.userForm = new User;
    this.profile();
    this.viewAllPost();
  }

}
