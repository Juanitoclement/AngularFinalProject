import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignIn} from '../SignIn';

import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  token: any = {};
  userEmail: any = {};
  userPhone: any = {};
  userName: any = {};

  visible: boolean;
  constructor(private http: HttpClient) {
  }

  postSignIn(signing: SignIn) {
    let response: any = {};
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const url = 'http://localhost:8000/api/login';
    return this.http.post(url, signing).map(res => {
      console.log(res);

      response = res;
      localStorage.setItem('response', JSON.stringify(response));
      // this.token = JSON.parse(localStorage.getItem('response')).data.token;
      // this.userName = JSON.parse(localStorage.getItem('response')).data.user['0'].name;
      // this.userEmail = JSON.parse(localStorage.getItem('response')).data.user['0'].email;
      // this.userPhone = JSON.parse(localStorage.getItem('response')).data.user['0'].phone;
      // localStorage.setItem('userEmail', this.userEmail);
      // localStorage.setItem('userPhone', this.userPhone);
      // localStorage.setItem('userName', this.userName);
    });


  }
}
