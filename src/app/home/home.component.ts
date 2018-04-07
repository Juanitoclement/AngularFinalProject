import {Component, OnInit} from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  public data: string;


  constructor(
    private user: UserService,
  ) { }

  welcome() {
    if (this.user.token) {
      this.user.getUser().subscribe(resp => {
        this.data = resp['name'];
      });
    } else {
      this.data = ' Guest';
    }
  }

  ngOnInit() {
    this.welcome();
}
  }


