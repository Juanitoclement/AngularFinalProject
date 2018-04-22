import {Component, OnInit} from '@angular/core';
import { UserService } from '../services/user.service';
import {Post} from '../post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {

  public post: Post[];
  constructor(
    private user: UserService,
  ) { }
  postYouMightLike () {
    if ( localStorage.getItem('token')) {
      this.user.postYouMightLike().subscribe((post: Post[]) => {
        this.post = post;
        console.log(post);
      });
    }
  }

  ngOnInit() {
    this.postYouMightLike();
}
  }


