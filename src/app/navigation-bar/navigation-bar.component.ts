import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {MatDialog } from '@angular/material';
import { LoginComponent} from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { environment } from '../../environments/environment';
import instantsearch from 'instantsearch.js/dist-es5-module/src/lib/main';
import {Router} from '@angular/router';
import {PetService} from '../services/pet.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],

})


export class NavigationBarComponent implements OnInit {
  search: any;
  loggedIn: boolean;
  loggedOut: boolean;
  id: number;

  constructor(
    private user: UserService,
    private pet: PetService,
    public dialog: MatDialog,
  ) {}
  public data: string;

  openDialog(): void {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(LoginComponent, {
      height: '500px',
      width: '500px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openDialogg(): void {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(RegisterComponent, {
      height: '500px',
      width: '500px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  welcome() {
    if (this.user.token) {
      this.user.getUser().subscribe(resp => {
        this.data = resp['name'];
        this.pet.getLoginId().subscribe(res => {
          this.id = res['id'];
        });
      });
    } else {
      this.data = 'Guest';
    }
  }
  checkAuth() {
    // const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (localStorage.getItem('token')) {
      this.loggedIn = true;
      this.loggedOut = true;
    } else {
      this.loggedIn = false;
      this.loggedOut = false;
    }
  }

  logout() {
    this.user.logout();
  }
  search1() {
    const options = environment.algolia;
    this.search = instantsearch(options);
    this.search.addWidget(
      instantsearch.widgets.searchBox({
        container: '#search-box',
        autofocus: false,
        placeholder: 'Search for users',
        poweredBy : false
      })
    );
    this.search.start();
  }
  search2() {
    this.search.addWidget(
      instantsearch.widgets.hits({
        container: '#hits',
        templates: {
          empty: 'No results',
          item: `<div class="hit">
                      <div class="hit-image"><a href="/profile/{{{objectID}}}"><img src=http://localhost/gg/storage/app/public/images/{{displaypic}} width="70px" height="70px"></a></div>
                      <div class="hit-content">
                        <div class="hitcontentitems"><strong>{{{_highlightResult.username.value}}}</strong> </div>
                        <div class="hitcontentitems"><font size='1'>{{{followers}}} followers</font> </div>
                        <div class="hitcontentitems">
                          <div class='doggies'><img class="dog_img" src=http://localhost/gg/storage/app/public/images/dog_icon.png width="30px" height="30px"></div>
                          <div class='doggies'><font size='2'> {{#dog}} <a href="/dogprofile/{{{dog-id}}}" class="dogbutton dogs" style="text-decoration: none;"> {{{dog-id}}} {{{dogname}}}</a> {{/dog}}</font></div>
                        </div>
                      </div>
                  </div>
                  `,
        },
        // ganti css buat item di styles.css
        // href="/profile/{{{objectID}}}"

        escapeHits: true
      })
    );
  }
  search3() {
    this.search.addWidget(
      instantsearch.widgets.stats({
          container: '#stats'
        }
      )
    );
  }
  search4() {
    this.search.addWidget(
      instantsearch.widgets.analytics({
        pushFunction: (query, state, results) => {
          console.log(query);
          console.log(state);
          console.log(results);
        }
      })
    );
  }

  ngOnInit() {
    this.welcome();
    this.checkAuth();
    this.search1();
    this.search2();
  }

}
