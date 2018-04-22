import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {PetService} from '../services/pet.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Post} from '../post';
import {User} from '../User';
import {Comment} from '../comment';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-viewpost',
  templateUrl: './viewpost.component.html',
  styleUrls: ['./viewpost.component.css']
})
export class ViewpostComponent implements OnInit {
  noPost: boolean;
  isLiked: boolean;
  edit: boolean;
  edit2: boolean;
  edit3: boolean;
  edit4: boolean;
  isClose: boolean;
  currid: any;
  like: any;
  countLike: any;
  date1: any;
  now: any;
  dogID: any;
  dogName: any;
  ownerName: any;
  ownerID: any;
  postID: any;

  public post: Post[];
  public comment: Comment[];
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
    this.postID = this.data['postID'];
    this.dogID = this.data['dogID'];
    this.dogName = this.data['dogName'];
    this.ownerName = this.data['ownerName'];
    this.ownerID = this.data['ownerID'];
    if (localStorage.getItem('token') !== null) {
      this.edit3 = true;
      this.pet.getLoginId().subscribe(resp => {
        this.currid = resp['id'];
        if (this.data['ownerID'] !== this.currid) {
          this.edit = false;
        } else {
          this.edit = true;
        }
      });
    } else {
      this.edit3 = false;
    }
    this.pet.viewPost(this.data['postID']).subscribe((post: Post[]) => {
      this.post = post;
      let i;
      // var start = Date.now();
      for (i = 0; i < post.length; i++) {
        this.date1 = new Date(post[i]['created_at']);
        this.now = new Date();
        const diff = (this.now - this.date1) / 1000;
        if (diff < 60) {
          post[i]['created_at'] = Math.floor(diff) + 's ago';
        }
        if (diff > 60 && diff <= 5040) {
          post[i]['created_at'] = Math.floor(diff / 60) + ' min ago';
        }
        if (diff >  5040 && diff < 86400) {
          post[i]['created_at'] = Math.floor(diff / 60 / 60) + ' hrs ago';
        }
        if (diff > 86400 && diff < 604800) {
          post[i]['created_at'] = Math.floor(diff / 60 / 60 / 24) + ' days ago';
        }
        if (diff > 604800 && ( diff / 60 / 60 / 24 / 7 ) < 5) {
          post[i]['created_at'] = Math.floor(diff / 60 / 60 / 24 / 7) + ' weeks ago';
        }
        if ((diff / 60 / 60 / 24 / 7 ) >= 5) {
          post[i]['created_at'] = this.date1.getDate() + '/' +  (1 + this.date1.getMonth()) + '/' + this.date1.getFullYear();
        }
      }
      if (this.post.length === 0) {
        this.noPost = true;
      } else {
        this.noPost = false;
      }
    });
  }
  deletePost(id: number) {
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
    if (localStorage.getItem('token') !== null) {
      this.pet.updatePost(id, this.postForm).subscribe(
        () => console.log('Updating'),
        err => {
          alert('Update Post Unsuccesful');
        },
        () => {
          alert('Succesfully update post');
        },
      );
    }
    this.edit2 = false;
    this.profile();
  }
  doEdit() {
      this.edit2 = true;
  }
  likePost(id: number) {
    if (localStorage.getItem('token') !== null) {
      this.pet.likePost(id).subscribe(res => {
        this.isPostLiked();
      });
    } else {
      this.loginFirst();
    }
  }
  unlikePost(id: number) {
    if (localStorage.getItem('token') !== null) {
      this.pet.unlikePost(id).subscribe(res => {
        this.isPostLiked();
      });
    } else {
      this.loginFirst();
    }
  }
  isPostLiked() {
    if (localStorage.getItem('token') !== null) {
      this.pet.isPostLiked(this.data['postID']).subscribe(res => {
        this.like = res['is_post_liked'];
        if (this.like === 'yes') {
          this.isLiked = true;
        } else {
          this.isLiked = false;
        }
      });
      this.pet.commentCount(this.data['postID']).subscribe();
      this.pet.likeCount(this.data['postID']).subscribe( res => {
        this.countLike = res['likes'];
      });
    }
  }
  getComment(id: number) {
    this.pet.getComment(id).subscribe( (comment: Comment[]) => {
      this.comment = comment;
      let i;
      // var start = Date.now();
      for (i = 0; i < comment.length; i++) {
        this.date1 = new Date(comment[i]['created_at']);
        this.now = new Date();
        const diff = (this.now - this.date1) / 1000;
        if (diff < 60) {
          comment[i]['created_at'] = Math.floor(diff) + 's ago';
        }
        if (diff > 60 && diff <= 5040) {
          comment[i]['created_at'] = Math.floor(diff / 60) + ' min ago';
        }
        if (diff >  5040 && diff < 86400) {
          comment[i]['created_at'] = Math.floor(diff / 60 / 60) + ' hrs ago';
        }
        if (diff > 86400 && diff < 604800) {
          comment[i]['created_at'] = Math.floor(diff / 60 / 60 / 24) + ' days ago';
        }
        if (diff > 604800 && ( diff / 60 / 60 / 24 / 7 ) < 5) {
          comment[i]['created_at'] = Math.floor(diff / 60 / 60 / 24 / 7) + ' weeks ago';
        }
        if ((diff / 60 / 60 / 24 / 7 ) >= 5) {
          comment[i]['created_at'] = this.date1.getDate() + '/' +  (1 + this.date1.getMonth()) + '/' + this.date1.getFullYear();
        }
      }
      this.edit4 = true;
      this.isClose = true;
    });
  }
  hide() {
    this.isClose = false;
    this.edit4 = false  ;
  }
  loginFirst(): void {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open( LoginComponent, {
      data: {
        now: this.data['dogID'],
        page: '/dogprofile/'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  commentPost(id: number) {
    this.pet.commentPost(id, this.postForm).subscribe();
    this.getComment(id);
  }
  deleteComment(id: number) {
    this.pet.deleteComment(id).subscribe();
    this.edit4 = false;
  }
  close() {
    this.router.navigateByUrl('/clementwashere', {skipLocationChange: true}).then( () =>
      this.router.navigateByUrl('/profile/' + this.data['ownerID']));
    this.dialog.closeAll();
  }
  ngOnInit() {
    this.isPostLiked();
    this.profile();
    this.postForm = new Post();

  }
}
