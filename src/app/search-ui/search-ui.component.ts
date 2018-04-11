import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import instantsearch from 'instantsearch.js/dist-es5-module/src/lib/main';


@Component({
  selector: 'app-search-ui',
  templateUrl: './search-ui.component.html',
  styleUrls: ['./search-ui.component.css']
})
export class SearchUiComponent implements OnInit {

  search:any;
  constructor(private router: Router) {}

  ngOnInit() {
    const options = environment.algolia;
    this.search = instantsearch(options);

    this.search.addWidget(
      instantsearch.widgets.searchBox({
          container:'#search-box',
          autofocus:false,
          placeholder:'Search for users',
          poweredBy :true
      })
    );

    this.search.addWidget(
      instantsearch.widgets.hits({
          container:'#hits',
          templates:{
            empty: 'No results',
            item:`<img src=http://localhost/auth2/storage/app/public/images/{{displaypic}} width="70px">
                  <strong>{{{_highlightResult.username.value}}}</strong>
                  <font size='1'>{{{followers}}} followers</font>
                  `
          },
          escapeHits:true
      })
    );

    this.search.addWidget(
      instantsearch.widgets.stats({
          container:'#stats'
          }
      )
    );

    this.search.addWidget(
      instantsearch.widgets.analytics({
          pushFunction: (query,state,results) => {
            console.log(query)
            console.log(state)
            console.log(results)
          }
        })
    );

    this.search.start();
  }

}
