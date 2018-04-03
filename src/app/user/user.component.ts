import {Component, Input, OnInit} from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private dataService: DataService) { }

  @Input() userName: any = {};
  userEmail: any = {};
  ngOnInit() {
    this.userName = localStorage.getItem('userName');
    this.userEmail = localStorage.getItem('userEmail');
  }
}
