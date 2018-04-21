import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {PetService} from '../services/pet.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Post} from '../post';
import {User} from '../User';
import {EditpetComponent} from '../editpet/editpet.component';

@Component({
  selector: 'app-viewpost',
  templateUrl: './viewpost.component.html',
  styleUrls: ['./viewpost.component.css']
})
export class ViewpostComponent implements OnInit {
  noPost: boolean;
  isLiked: boolean;
  edit: boolean;
  currid: any;
  uid: any;
  like: any;
  comment: any;
  countLike: any;
  dogID: any;
  dogName: any;
  owner: any;
  public post: Post[];
  constructor
  (
    private pet: PetService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<ViewpostComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
  @Input() postForm: Post; userForm: User;
  profile() {
    this.pet.getLoginId().subscribe(resp => {
      this.currid = resp['id'];
    });
    console.log(this.data['postID']);
    this.pet.viewPost(this.data['postID']).subscribe((post: Post[]) => {
      this.post = post;
      console.log(this.post);
      this.post = post;
      if (this.post.length === 0) {
        this.noPost = true;
      } else {
        this.noPost = false;
      }
    });
    console.log(this.data['postID']);
    this.pet.likeCount(this.data['postID']).subscribe( res => {
      this.countLike = res['likes'];
    });
    this.pet.isPostLiked(this.data['postID']).subscribe( res => {
      this.like = res['is_post_liked'];
      if (this.like === 'yes') {
        this.isLiked = true;
      } else {
        this.isLiked = false;
      }
    });
  }
  deletePost(id: number) {
    console.log(id);
    this.pet.deletePost(id).subscribe(
      () => console.log('Deleting'),
      err => { console.error(err); alert('Delete Post Unsuccesful'); },
      () => { console.log('Update Successful'); alert('Succesfully delete post');
      this.router.navigateByUrl('/clementwashere', {skipLocationChange: true}).then( () =>
      this.router.navigateByUrl('/dogprofile/' + this.data['dogID']));
      this.dialog.closeAll();
      },
    );
  }
  editPost(id: number) {
    this.edit = true;
    console.log(id);
    this.pet.updatePost(id, this.postForm).subscribe(
      () => console.log('Updating'),
      err => { console.error(err); alert('Update Post Unsuccesful'); },
      () => { console.log('Update Successful'); alert('Succesfully update post'); },
    );
  }
  likePost(id: number) {
    this.pet.likePost(id).subscribe( res => {
    });
  }
  unlikePost(id: number) {
    this.pet.unlikePost(id).subscribe( res => {
    });
  }
  commentPost(id: number) {
    console.log(this.postForm);
    this.pet.commentPost(id, this.postForm).subscribe();
  }
  deleteComment(id: number) {
    this.pet.deleteComment(id).subscribe();
  }
  ngOnInit() {
    this.profile();
    this.postForm = new Post();
  }
}
