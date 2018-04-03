import {Component, Input, OnInit} from '@angular/core';
import { DataService } from '../services/data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public data: string;
  constructor(private dataService: DataService, private router: Router) { }
  gooLogin() {
        this.router.navigateByUrl('/login');
  }
  gooLogout() {
  }

  ngOnInit() {
    this.dataService.getUser().subscribe(resp => {
      this.data = resp['name'];
    });
  }
}
