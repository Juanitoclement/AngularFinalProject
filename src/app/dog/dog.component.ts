import {Component, Input, OnInit} from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../User';
import 'rxjs/add/operator/map';
import {ActivatedRoute} from '@angular/router';
import {Doggies} from '../doggies';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {

  public doggies: Doggies[];
  constructor(private user: UserService, private route: ActivatedRoute) { }

  doggieProfile() {
  }

  ngOnInit() {
  }
}
