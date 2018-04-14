import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

import 'rxjs/add/operator/map';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  data: any;
  id: any;
  constructor(private user: UserService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.id = params['id'] );
  }
  ngOnInit() {
      this.user.getProfile(this.id).subscribe(resp => {
      this.data = resp;
    });
  }

}


